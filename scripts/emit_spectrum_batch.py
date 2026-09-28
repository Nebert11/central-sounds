"""Print a compact JSON array (slug, folder, image_url) for one batch of the
spectrum manifest, for embedding into a playwright fetch/download snippet.

Usage: python3 scripts/emit_spectrum_batch.py <start> <count>
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = json.loads((ROOT / "scripts" / "spectrum_manifest.json").read_text())

start = int(sys.argv[1])
count = int(sys.argv[2])
batch = MANIFEST[start:start + count]
compact = [{"slug": m["slug"], "folder": m["folder"], "url": m["image_url"]} for m in batch]
# One JSON object per line so read_file can paginate through large batches.
for entry in compact:
    print(json.dumps(entry, separators=(",", ":")))
print(f"# batch {start}:{start + len(batch)} of {len(MANIFEST)}", file=sys.stderr)

