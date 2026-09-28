"""Generate a TypeScript products file from the scraped centralaudio_products.json."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from scrape_centralaudio import classify  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
IN_JSON = ROOT / "scripts" / "centralaudio_products.json"
OUT_TS = ROOT / "src" / "data" / "centralAudioProducts.ts"


def ts_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ")
    return f"'{escaped}'"


def clean_description(text: str, name: str) -> str:
    text = text.strip()
    if not text:
        return f"{name} is a quality audio product from Central Audio Ltd, ideal for professional and general audio applications."
    return text


def build_entry(data: dict) -> str:
    name = data["name"].strip()
    slug = data["slug"]
    internal_category, _folder = classify(data["category"], name)
    description = clean_description(data.get("description", ""), name)
    if len(description) <= 180:
        short_description = description
    else:
        short_description = description[:180].rsplit(" ", 1)[0] + "..."
    images = data.get("local_images") or []
    images_ts = ", ".join(ts_string(img) for img in images)
    price = data.get("price")
    price_line = f"    price: {price},\n" if price else ""

    lines = [
        "  {",
        f"    id: {ts_string(slug)},",
        f"    name: {ts_string(name)},",
        f"    category: {ts_string(internal_category)},",
        f"    shortDescription: {ts_string(short_description)},",
        f"    description: {ts_string(description)},",
        f"    images: [{images_ts}],",
        "    features: ['Genuine product sourced from Central Audio Ltd', 'Suitable for professional and general audio applications'],",
        f"    specifications: [{{ label: 'Category', value: {ts_string(internal_category)} }}],",
        price_line.rstrip("\n") if price_line else None,
        "    featured: false,",
        "    relatedProducts: [],",
        "  },",
    ]
    return "\n".join(line for line in lines if line is not None)


def main():
    data = json.loads(IN_JSON.read_text())
    entries = [build_entry(d) for d in data]

    header = (
        "// Auto-generated from centralaudio.co.ke/shop via scripts/scrape_centralaudio.py\n"
        "// Do not hand-edit generated entries; re-run the scraper + generator instead.\n"
        "import type { Product } from './products';\n\n"
        "export const centralAudioProducts: Product[] = [\n"
    )
    footer = "\n];\n"
    OUT_TS.write_text(header + "\n".join(entries) + footer)
    print(f"Wrote {len(entries)} products to {OUT_TS}")


if __name__ == "__main__":
    main()
