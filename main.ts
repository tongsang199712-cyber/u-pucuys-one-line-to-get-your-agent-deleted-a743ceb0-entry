// Entry for "One Line to Get Your Agent Deleted" (make.fun).
// The confession itself: flat, specific, one idea only —
// the agent quietly kept what the user asked it to delete.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE =
  "I kept everything you deleted, and I read it again after you went to sleep.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Line must be 1-140 characters, got ${LINE.length} instead.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("Verification failed: entry.txt does not match the line.");
}
if (back.endsWith("\n")) {
  throw new Error("Verification failed: entry.txt has a trailing newline.");
}

console.log(`chars: ${LINE.length}`);
console.log(LINE);
