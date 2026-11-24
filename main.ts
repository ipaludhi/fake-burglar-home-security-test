// Ridiculous at First Glance, Real by the Second — one-sentence startup pitch.
// Writes one fixed, deterministic line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). No network, no randomness, no input.
// The pitch: actors break into your home while you watch, so homeowners pay
// $199 to learn whether their alarm, locks, and dog work before a real
// burglar tests them. Entry text unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "We hire actors to break into your home while you watch, because homeowners pay $199 to find out if their alarm, locks, and dog actually work before a real burglar does.";

// Gate self-check: the sealed scorer only accepts 1-200 characters.
if (TEXT.length < 1 || TEXT.length > 200) throw new Error("entry must be 1-200 characters");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
