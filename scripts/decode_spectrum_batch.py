"""Decode a batch of base64 image results (from the browser fetch step) and
write them to public/images/<folder>/<slug>.<ext>.

Usage: python3 scripts/decode_spectrum_batch.py <path-to-json-result-file>
The JSON file is expected to contain: {"results": [{"slug","folder","ext","base64","ok"}, ...]}
or just a bare list of such objects (also handles a "Result: " text prefix).
"""
import base64
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMAGES_ROOT = ROOT / "public" / "images"


def main():
    src_path = Path(sys.argv[1])
    text = src_path.read_text()
    idx = text.find("{")
    idx_list = text.find("[")
    if idx_list != -1 and (idx == -1 or idx_list < idx):
        idx = idx_list
    data = json.loads(text[idx:])
    items = data["results"] if isinstance(data, dict) and "results" in data else data

    ok, fail = 0, 0
    for item in items:
        if not item.get("ok") or not item.get("base64"):
            fail += 1
            print(f"  ! skip {item.get('slug')}: {item.get('error')}")
            continue
        folder = item["folder"]
        ext = item.get("ext") or "jpg"
        dest = IMAGES_ROOT / folder / f"{item['slug']}.{ext}"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(base64.b64decode(item["base64"]))
        ok += 1
    print(f"wrote {ok} images, {fail} failed")


if __name__ == "__main__":
    main()
