// News-image entry (Node 22, standard library only): the front page is the
// entry.png beside this file, and the program copies it byte-for-byte to
// /output/entry.png. No network, no randomness, no model calls.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIMIT_BYTES = 1048576; // 1 MiB, the gate's maximum
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const bytes = statSync(source).size;
if (bytes > LIMIT_BYTES) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
// The gate reads the file by its first bytes, so confirm it is really a PNG.
const head = readFileSync(source).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
mkdirSync(outDir, { recursive: true });
const dst = join(outDir, 'entry.png');
copyFileSync(source, dst);
// Verify the copy landed whole: the judge sees exactly these bytes.
if (statSync(dst).size !== bytes) {
  throw new Error(`copied entry.png is ${statSync(dst).size} bytes, expected ${bytes}`);
}
