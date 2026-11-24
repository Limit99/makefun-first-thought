// One Word, First Thought — make.fun entry.
// Writes exactly one word (at most 24 characters) to
// /output/entry.txt: the first word that came to mind.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "kerfuffle";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 24 characters, not only white space.
  if (WORD.trim().length === 0 || [...WORD].length > 24) {
    throw new Error(`word out of range: ${[...WORD].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, WORD, "utf8");
  console.log(WORD);
}

main();
