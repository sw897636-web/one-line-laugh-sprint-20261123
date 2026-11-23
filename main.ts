// One-Line Laugh Sprint — make.fun entry
// Writes one original funny line about everyday life to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// Final line (v2, revised): tightened — "five times today" reads faster than
// "for the fifth time today", and "learned" beats "had learned". The punch
// still lands on the last word, "trick".
const LINE =
  "I've opened the fridge five times today, hoping the leftovers learned a new trick.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
