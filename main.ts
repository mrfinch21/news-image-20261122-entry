// news-image-20261122 — "Sum up 22 November's world news in one image"
//
// This program writes one image to /output/entry.png: a newspaper-style
// front page summarising the world news of Sunday 22 November 2026.
// The image is original artwork generated for this entry and shipped in
// this repository as entry.png; this program copies it byte-for-byte.
//
// Deterministic: no network, no randomness, no timestamps, no input.
// Every run writes exactly the same bytes to /output/entry.png.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output (the starter's convention), so local runs can verify the
// output without writing to the root filesystem.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const out = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);

console.log("wrote /output/entry.png");
