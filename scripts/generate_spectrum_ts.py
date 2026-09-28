"""Generate src/data/spectrumAudioProducts.ts from scripts/spectrum_manifest.json
plus the downloaded images in public/images/<folder>/<slug>.<ext>.
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = json.loads((ROOT / "scripts" / "spectrum_manifest.json").read_text())
IMAGES_ROOT = ROOT / "public" / "images"
OUT_TS = ROOT / "src" / "data" / "spectrumAudioProducts.ts"


def ts_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ")
    return f"'{escaped}'"


def find_image(folder: str, slug: str) -> str | None:
    matches = sorted(IMAGES_ROOT.joinpath(folder).glob(f"{slug}.*"))
    if not matches:
        return None
    return f"/images/{folder}/{matches[0].name}"


def build_entry(m: dict) -> str:
    name = m["name"].strip()
    category = m["category"]
    image = find_image(m["folder"], m["slug"])
    images_ts = ts_string(image) if image else ""
    description = f"{name} is a {category.lower()} product for audio applications."
    price = m.get("price")
    price_line = f"    price: {price},\n" if price else ""

    lines = [
        "  {",
        f"    id: {ts_string(m['slug'])},",
        f"    name: {ts_string(name)},",
        f"    category: {ts_string(category)},",
        f"    shortDescription: {ts_string(description)},",
        f"    description: {ts_string(description)},",
        f"    images: [{images_ts}],",
        f"    features: [{ts_string(category + ' product for professional and general audio applications')}],",
        f"    specifications: [{{ label: 'Category', value: {ts_string(category)} }}],",
        price_line.rstrip("\n") if price_line else None,
        "    featured: false,",
        "    relatedProducts: [],",
        "  },",
    ]
    return "\n".join(line for line in lines if line is not None)


def main():
    entries = [build_entry(m) for m in MANIFEST]
    header = (
        "// Auto-generated from spectrumaudio.co.ke/shop via scripts/build_spectrum_manifest.py\n"
        "// + scripts/generate_spectrum_ts.py. Do not hand-edit generated entries.\n"
        "import type { Product } from './products';\n\n"
        "export const spectrumAudioProducts: Product[] = [\n"
    )
    footer = "\n];\n"
    OUT_TS.write_text(header + "\n".join(entries) + footer)
    print(f"Wrote {len(entries)} products to {OUT_TS}")


if __name__ == "__main__":
    main()
