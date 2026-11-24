// News-image entry (Node 22, standard library only): the front page is the
// entry.png beside this file, and the program copies it byte-for-byte to
// /output/entry.png. No network, no randomness, no model calls.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIMIT_BYTES = 1048576; // 1 MiB, the gate's maximum
const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const bytes = statSync(source).size;
if (bytes > LIMIT_BYTES) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
