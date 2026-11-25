// One Line, One Laugh — make.fun entry
// Writes a single funny line to /output/entry.txt.
// The line must stay within the gate: 1 to 140 UTF-8 characters,
// not only whitespace, and it must be one self-contained joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I named my Roomba so it wouldn't feel alone \u2014 now it bumps into the furniture on purpose, just to say hello.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The sealed scorer accepts 1 to 140 characters, not only whitespace.
// Refuse to write anything outside the gate instead of shipping it.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`Line is ${chars} characters; the gate needs 1 to 140.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${outFile}`);
