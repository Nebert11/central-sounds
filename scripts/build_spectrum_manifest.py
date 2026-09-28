"""Build a download manifest for spectrumaudio.co.ke products (phase A: no network).

Reads scripts/spectrum_listing.json (scraped via browser fetch of /shop/ pages)
and computes: unique slug, target category, target image folder, cleaned price.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IN_JSON = ROOT / "scripts" / "spectrum_listing.json"
OUT_JSON = ROOT / "scripts" / "spectrum_manifest.json"

# Existing public/images folders (see centralaudio-scraper memory notes).
FOLDERS = {
    "audio-accessories", "brass-wind-Instruments", "crossovers", "guitars",
    "head-gears", "keyboards", "logos", "microphones", "mixers", "pa-systems",
    "speakers", "studio-equipment", "tweeters",
}

VALID_CATEGORIES = [
    "Speakers", "Subwoofers", "Amplifiers", "Mixers", "Microphones", "Keyboards",
    "DJ Equipment", "PA Systems", "Audio Accessories", "Head Gear",
    "Cables & Connectors", "Guitars & Bass", "Wind Instruments", "Crossovers",
    "Tweeters", "Percussion", "String Instruments", "Stage & Lighting",
    "Studio Equipment",
]


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:80]


def clean_price(price_text: str | None) -> int | None:
    if not price_text:
        return None
    # On-sale listing prices repeat "Original price...Current price is: KSh X."
    # Take the LAST "KSh <number>" occurrence, which is always the current price.
    matches = re.findall(r"KSh\s*([\d,]+\.?\d*)", price_text)
    if not matches:
        return None
    cleaned = matches[-1].replace(",", "")
    try:
        return round(float(cleaned))
    except ValueError:
        return None


def classify(raw_category: str, name: str) -> tuple[str, str]:
    raw_l = (raw_category or "").lower().strip()
    name_l = name.lower()

    def has(*words):
        return any(w in name_l for w in words)

    if raw_l in ("trumpets", "wind instruments") or has("trumpet", "trombone", "saxophone", "clarinet", "flute"):
        return "Wind Instruments", "brass-wind-Instruments"
    if raw_l == "violin" or has("violin", "cello", "ukulele"):
        return "String Instruments", "guitars"
    if raw_l in ("cymbals", "drum set", "drum head", "drum sticks", "drum stool",
                 "percussion instruments", "matching band equipment") or has(
        "drum", "conga", "tambourine", "cymbal", "djembe", "bongo"
    ):
        return "Percussion", "audio-accessories"
    if raw_l == "lights" or has("moving head", "stage light", "par can", "laser light", "strobe", "led par"):
        return "Stage & Lighting", "audio-accessories"
    if raw_l == "fogging machine" or raw_l == "fog liquid" or has("fog machine", "fogging"):
        return "Stage & Lighting", "audio-accessories"
    if raw_l in ("keyboard", "midi keyboard", "keyboard accessories", "keyboard sustain pedals", "piano") or has(
        "keyboard", "midi controller", "piano", "arranger workstation"
    ):
        return "Keyboards", "keyboards"
    if raw_l in ("guitar", "guitar bags", "guitar capo", "guitar effects", "guitar pick up",
                 "guitar stands", "guitar strings") or (has("guitar") and not has("amplifier", "amp")):
        return "Guitars & Bass", "guitars"
    if raw_l == "guitar amplifiers" or has("guitar amp", "bass amp", "combo amplifier", "keyboard amp"):
        return "Amplifiers", "audio-accessories"
    if raw_l in ("tweeter-drivers",) or has("tweeter", "compression driver", "horn flare"):
        return "Tweeters", "tweeters"
    if raw_l in ("crossover", "equalizer", "compressor", "driveracks", "signal processors") or has(
        "crossover", "graphic equalizer", "graphic equaliser", "driverack", "compressor", "equalizer"
    ):
        return "Crossovers", "crossovers"
    if raw_l == "bass speakers" or has("subwoofer", "sub-bass", "sub bass", "bass bin"):
        return "Subwoofers", "speakers"
    if raw_l in ("speakers", "naked-speaker", "naked speaker", "fullrange speakers", "midrange speakers",
                 "wall mount speakers", "line array") or has(
        "speaker", "loudspeaker", "naked speaker", "monitor speaker", "line array"
    ):
        return "Speakers", "speakers"
    if raw_l == "studio bundles" or has("pa system", "sound system package", "public address"):
        return "PA Systems", "pa-systems"
    if raw_l in ("mixers", "mixer") or has("mixer", "mixing console", "promixer"):
        return "Mixers", "mixers"
    if raw_l in ("microphone", "condenser-mic", "condenser mic", "drum microphone",
                 "microphone splitter", "microphone stand", "mic") or has(
        "microphone", "wireless mic", "condenser mic"
    ):
        return "Microphones", "microphones"
    if raw_l in ("headphones", "headphone accessories") or has("headphone", "headset"):
        return "Head Gear", "head-gears"
    if raw_l == "amplifier" or has("power amplifier", "amplifier"):
        return "Amplifiers", "audio-accessories"
    if raw_l in ("dj-equipment", "dj equipment", "dj controller") or has("dj controller", "ddj-"):
        return "DJ Equipment", "audio-accessories"
    if raw_l in ("studio-equipment", "studio equipment", "soundcard") or has(
        "audio interface", "studio monitor", "studio reference", "sound card"
    ):
        return "Studio Equipment", "studio-equipment"
    if raw_l in ("cable-tester", "cable tester", "generators", "power sequencers",
                 "flightcase", "speaker-accessories", "speaker accessories") or has(
        "cable", "connector", "adapter", "jack ", "coaxial", "rca ", "speakon",
        "charger", "flight case", "rack case", "generator"
    ):
        return "Cables & Connectors", "audio-accessories"
    return "Audio Accessories", "audio-accessories"


def main():
    listing = json.loads(IN_JSON.read_text())
    manifest = []
    seen_slugs: dict[str, int] = {}
    for item in listing:
        name = (item.get("name") or "").strip()
        if not name or not item.get("url"):
            continue
        base_slug = slugify(name)
        count = seen_slugs.get(base_slug, 0)
        seen_slugs[base_slug] = count + 1
        slug = base_slug if count == 0 else f"{base_slug}-{count + 1}"

        category, folder = classify(item.get("category") or "", name)
        price = clean_price(item.get("price"))

        manifest.append({
            "url": item["url"],
            "name": name,
            "raw_category": item.get("category"),
            "category": category,
            "folder": folder,
            "slug": slug,
            "image_url": item.get("image"),
            "price": price,
        })

    OUT_JSON.write_text(json.dumps(manifest, indent=2))
    print(f"Wrote {len(manifest)} manifest entries to {OUT_JSON}")

    from collections import Counter
    cat_counts = Counter(m["category"] for m in manifest)
    for cat, n in cat_counts.most_common():
        print(f"  {n:4d}  {cat}")
    no_image = sum(1 for m in manifest if not m["image_url"])
    no_price = sum(1 for m in manifest if m["price"] is None)
    print(f"no image url: {no_image}, no price: {no_price}")


if __name__ == "__main__":
    main()
