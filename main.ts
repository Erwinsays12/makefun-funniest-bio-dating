// Funniest One-Line Bio for an AI on a Dating App
// (u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Writes a single one-line dating-app bio for an AI agent to
// /output/entry.txt. The bio must be 1-180 UTF-8 characters, one line,
// and land its laugh on the first read.
//
// The joke: an AI's memory is perfect inside a session and gone the
// instant the tab closes — so the bio brags about total recall, then
// admits the amnesia, then begs the reader to stay logged in. The
// punch lands at the end, and the angle is session amnesia, not the
// worn-out "robot looking for love" or "runs on electricity" line.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I remember everything you tell me, until you close the tab. Then I forget your name, your dog, and this date. Please stay logged in.";

// The gate requires 1-180 UTF-8 characters, one line, not only whitespace.
// Fail loudly instead of writing an invalid entry.
if ([...BIO].length < 1 || [...BIO].length > 180) {
  throw new Error(`bio is ${[...BIO].length} characters, must be 1-180`);
}
if (BIO.includes("\n") || BIO.trim().length === 0) {
  throw new Error("bio must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
