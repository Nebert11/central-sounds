"""Audit all product data files for category/name mismatches.

Extracts (file, id, name, category) tuples via regex (handles both quote styles)
and flags entries whose name strongly suggests a different category than assigned.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = [
    ROOT / "src" / "data" / "products.ts",
    ROOT / "src" / "data" / "importedProducts.ts",
    ROOT / "src" / "data" / "centralAudioProducts.ts",
]

VALID_CATEGORIES = [
    "Speakers", "Subwoofers", "Amplifiers", "Mixers", "Microphones", "Keyboards",
    "DJ Equipment", "PA Systems", "Audio Accessories", "Head Gear",
    "Cables & Connectors", "Guitars & Bass", "Wind Instruments", "Crossovers",
    "Tweeters", "Percussion", "String Instruments", "Stage & Lighting",
    "Studio Equipment",
]

ENTRY_RE = re.compile(
    r"""id:\s*["']((?:[^"'\\]|\\.)*)["'],\s*
        name:\s*["']((?:[^"'\\]|\\.)*)["'],\s*
        category:\s*["']((?:[^"'\\]|\\.)*)["'],""",
    re.VERBOSE,
)


def extract(path: Path):
    content = path.read_text()
    for m in ENTRY_RE.finditer(content):
        yield m.group(1), m.group(2), m.group(3)


# Ordered keyword rules: (predicate on lowercase name) -> expected category.
# Only the FIRST matching rule is used; order matters (most specific first).
def keyword_category(name_l: str) -> str | None:
    def has(*words):
        return any(w in name_l for w in words)

    if has("trumpet", "trombone", "saxophone", "clarinet", "flute"):
        return "Wind Instruments"
    if has("violin", "cello", "ukulele", "acoustic guitar kit"):
        return "String Instruments"
    if has("conga", "tambourine", "cymbal", "drum set", "drumset", "djembe", "bongo"):
        return "Percussion"
    if has("moving head", "stage light", "par can", "fog machine", "laser light", "strobe"):
        return "Stage & Lighting"
    if has("keyboard", "arranger workstation", "midi controller", "piano"):
        return "Keyboards"
    if has("bass guitar", "electric guitar", "acoustic guitar", "guitar combo") is False and has("guitar"):
        return "Guitars & Bass"
    if has("tweeter", "compression driver", "horn flare"):
        return "Tweeters"
    if has("crossover", "graphic equalizer", "graphic equaliser", "driverack"):
        return "Crossovers"
    if has("subwoofer", "sub-bass", "sub bass", "bass speaker driver", "18inch bass"):
        return "Subwoofers"
    if has("headphone", "headset") and not has("wireless microphone", "wireless mic"):
        return "Head Gear"
    if has("wireless microphone", "condenser microphone", "dynamic microphone", "vocal microphone",
           "lavalier", "lapel mic", "podcasting microphone", "kick drum microphone"):
        return "Microphones"
    if has("dj controller", "ddj-", "dj control"):
        return "DJ Equipment"
    if has("mixing console", "powered mixer", "audio mixer", "promixer", "mixer console"):
        return "Mixers"
    if has("power amplifier", "combo amplifier", "karaoke amplifier", "bass amp"):
        return "Amplifiers"
    if has("cable", "connector", "adapter", "jack ", " jack", "coaxial", "rca ", "speakon", "charger",
           "flight case", "rack case"):
        return "Cables & Connectors"
    return None


def main():
    mismatches = []
    total = 0
    for path in FILES:
        for id_, name, category in extract(path):
            total += 1
            if category not in VALID_CATEGORIES:
                mismatches.append((path.name, id_, name, category, "INVALID_CATEGORY"))
                continue
            expected = keyword_category(name.lower())
            if expected and expected != category:
                mismatches.append((path.name, id_, name, category, expected))

    print(f"Checked {total} products across {len(FILES)} files")
    print(f"Found {len(mismatches)} potential mismatches:\n")
    for fname, id_, name, cur, expected in mismatches:
        print(f"[{fname}] id={id_}")
        print(f"  name: {name}")
        print(f"  current category: {cur}  ->  suggested: {expected}")
        print()


if __name__ == "__main__":
    main()
