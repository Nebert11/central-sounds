"""Scrape product data + images from centralaudio.co.ke/shop and save into the project.

Usage:
    python scripts/scrape_centralaudio.py
"""
from __future__ import annotations

import json
import re
import time
from pathlib import Path
from urllib.parse import urlparse, unquote

import requests
from bs4 import BeautifulSoup

BASE = "https://centralaudio.co.ke"
SHOP_PAGES = [f"{BASE}/shop/", f"{BASE}/shop/page/2/"]

ROOT = Path(__file__).resolve().parent.parent
IMAGES_ROOT = ROOT / "public" / "images"
OUT_JSON = ROOT / "scripts" / "centralaudio_products.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}

session = requests.Session()
session.headers.update(HEADERS)


def get_soup(url: str) -> BeautifulSoup:
    resp = session.get(url, timeout=30)
    resp.raise_for_status()
    return BeautifulSoup(resp.text, "lxml")


def collect_product_urls() -> list[str]:
    urls: list[str] = []
    seen = set()
    for page_url in SHOP_PAGES:
        soup = get_soup(page_url)
        for a in soup.select("li.product a.woocommerce-LoopProduct-link"):
            href = a.get("href")
            if href and href not in seen:
                seen.add(href)
                urls.append(href)
        if not soup.select("li.product a.woocommerce-LoopProduct-link"):
            # Fallback selector
            for a in soup.select("ul.products li.product > a"):
                href = a.get("href")
                if href and href not in seen:
                    seen.add(href)
                    urls.append(href)
    return urls


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def parse_price(soup: BeautifulSoup) -> int | None:
    price_el = soup.select_one(".summary .price ins .woocommerce-Price-amount bdi")
    if not price_el:
        price_el = soup.select_one(".summary .price .woocommerce-Price-amount bdi")
    if price_el:
        cleaned = price_el.get_text().replace("\xa0", " ")
        cleaned = re.sub(r"[^\d.]", "", cleaned)
        if cleaned:
            return round(float(cleaned))
    return None


def parse_category(soup: BeautifulSoup) -> str:
    crumb = soup.select_one(".woocommerce-breadcrumb")
    if crumb:
        parts = [a.get_text(strip=True) for a in crumb.select("a")]
        # skip Home
        parts = [p for p in parts if p.lower() != "home"]
        if parts:
            return parts[-1]
    cat_el = soup.select_one("span.posted_in a")
    if cat_el:
        return cat_el.get_text(strip=True)
    return "Uncategorized"


def parse_description(soup: BeautifulSoup) -> str:
    desc_el = soup.select_one("#tab-description")
    if desc_el:
        text = desc_el.get_text(" ", strip=True)
        text = re.sub(r"\s+", " ", text)
        return text[:2000]
    short_el = soup.select_one(".woocommerce-product-details__short-description")
    if short_el:
        return re.sub(r"\s+", " ", short_el.get_text(" ", strip=True))
    return ""


def parse_images(soup: BeautifulSoup) -> list[str]:
    urls = []
    seen = set()
    for img in soup.select(".woocommerce-product-gallery__image img"):
        src = img.get("data-large_image") or img.get("data-src") or img.get("src")
        if src and src not in seen and "placeholder" not in src.lower():
            seen.add(src)
            urls.append(src)
    if not urls:
        og = soup.select_one('meta[property="og:image"]')
        if og and og.get("content"):
            urls.append(og["content"])
    return urls


def parse_title(soup: BeautifulSoup) -> str:
    title_el = soup.select_one("h1.product_title")
    title = title_el.get_text(strip=True) if title_el else ""
    # Some pages on this site have a broken title template that wraps the real
    # name in the literal word "Product" (e.g. "ProdBNK X75 ... Systemuct").
    m = re.match(r"^Prod(.+)uct$", title)
    if m and len(m.group(1)) > 3:
        return m.group(1).strip()
    if title.strip().lower() == "product":
        meta = soup.select_one('meta[name="description"]')
        if meta and meta.get("content"):
            m2 = re.match(r"^(?:The\s+)?([A-Z][\w\-/. ]{2,60}?)\s+is\s+a", meta["content"])
            if m2:
                return m2.group(1).strip()
    return title


def scrape_product(url: str) -> dict:
    soup = get_soup(url)
    name = parse_title(soup) or url
    price = parse_price(soup)
    category = parse_category(soup)
    description = parse_description(soup)
    images = parse_images(soup)
    return {
        "url": url,
        "name": name,
        "price": price,
        "category": category,
        "description": description,
        "images": images,
    }


def classify(raw_category: str, name: str) -> tuple[str, str]:
    """Return (internal_category, image_folder) using scraped category + name keywords."""
    raw_l = raw_category.lower().strip()
    name_l = name.lower()

    def has(*words):
        return any(w in name_l for w in words)

    if has("trumpet") or "wind" in raw_l:
        return "Wind Instruments", "brass-wind-Instruments"
    if has("violin", "cello", "ukulele"):
        return "String Instruments", "guitars"
    if raw_l == "guitar combos":
        return "Amplifiers", "audio-accessories"
    if has("guitar") or raw_l == "guitars":
        return "Guitars & Bass", "guitars"
    if has("keyboard", "psr-", "psr e", "psr sx", "arranger workstation", "midi controller") or raw_l == "keyboards":
        return "Keyboards", "keyboards"
    if has("drum", "conga", "tambourine", "cymbal") or raw_l == "drums":
        return "Percussion", "audio-accessories"
    if has("tweeter", "compression driver", "horn flare") and not has("naked speaker", "loudspeaker driver"):
        return "Tweeters", "tweeters"
    if has("crossover", "equalizer", "equaliser", "driverack"):
        return "Crossovers", "crossovers"
    if has("subwoofer", "sub-bass", "sub bass"):
        return "Subwoofers", "speakers"
    if raw_l in ("speakers", "driver units") or has(
        "speaker", "loudspeaker", "naked speaker", "transducer", "monitor speaker"
    ):
        return "Speakers", "speakers"
    if raw_l == "public address system" or has("pa system", "campaigning sound system", "public address"):
        return "PA Systems", "pa-systems"
    if raw_l == "mixers" or has("mixer", "mixing console", "promixer"):
        return "Mixers", "mixers"
    if raw_l == "microphones" or has("microphone", "wireless mic"):
        return "Microphones", "microphones"
    if raw_l == "headphones" or has("headphone"):
        return "Head Gear", "head-gears"
    if raw_l == "amplifiers" or has("amplifier", "power amp"):
        return "Amplifiers", "audio-accessories"
    if raw_l == "dj equipment" or has("dj controller", "ddj-", "dj controller"):
        return "DJ Equipment", "audio-accessories"
    if raw_l in ("audio interfaces", "studio gear") or has(
        "audio interface", "studio monitor", "studio reference"
    ):
        return "Studio Equipment", "studio-equipment"
    if raw_l == "stage gear" or has(
        "stage light", "moving head", "laser", "fog machine", "par can", "beam"
    ):
        return "Stage & Lighting", "audio-accessories"
    if raw_l in ("accessories", "power accessories") or has(
        "cable", "connector", "adapter", "charger", "coaxial", "rca", "speakon", "jack", "flight case", "feet"
    ):
        return "Cables & Connectors", "audio-accessories"
    return "Audio Accessories", "audio-accessories"


def download_image(img_url: str, dest: Path) -> bool:
    try:
        resp = session.get(img_url, timeout=30)
        resp.raise_for_status()
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(resp.content)
        return True
    except Exception as exc:  # noqa: BLE001
        print(f"  ! failed to download {img_url}: {exc}")
        return False


def ext_from_url(url: str) -> str:
    path = urlparse(url).path
    ext = Path(unquote(path)).suffix.lower()
    if ext in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return ext
    return ".jpg"


def scrape_metadata_only():
    print("Collecting product URLs...")
    urls = collect_product_urls()
    print(f"Found {len(urls)} product URLs")

    results = []
    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] {url}")
        try:
            data = scrape_product(url)
        except Exception as exc:  # noqa: BLE001
            print(f"  ! failed to scrape: {exc}")
            continue
        data["slug"] = slugify(data["name"]) or slugify(urlparse(url).path)
        results.append(data)
        time.sleep(0.15)

    OUT_JSON.write_text(json.dumps(results, indent=2))
    print(f"Saved {len(results)} products to {OUT_JSON}")


def download_images_phase():
    results = json.loads(OUT_JSON.read_text())
    for i, data in enumerate(results, 1):
        slug = data["slug"]
        internal_category, folder = classify(data["category"], data["name"])
        local_images = []
        print(f"[{i}/{len(results)}] {slug} -> {internal_category} / {folder}")
        for idx, img_url in enumerate(data["images"][:4], 1):
            ext = ext_from_url(img_url)
            filename = f"{slug}-{idx}{ext}"
            dest = IMAGES_ROOT / folder / filename
            if download_image(img_url, dest):
                local_images.append(f"/images/{folder}/{filename}")
            time.sleep(0.05)
        data["internal_category"] = internal_category
        data["folder"] = folder
        data["local_images"] = local_images
    OUT_JSON.write_text(json.dumps(results, indent=2))
    print("Done downloading images.")


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "images":
        download_images_phase()
    else:
        scrape_metadata_only()
