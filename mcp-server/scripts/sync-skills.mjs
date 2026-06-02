#!/usr/bin/env node
/**
 * Copies the parent `../skills/` directory into `./skills/` so the npm
 * package is self-contained. Runs automatically before `npm publish` via
 * the `prepack` script.
 */

import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, '..');
const repoRoot = resolve(pkgRoot, '..');
const srcSkills = join(repoRoot, 'skills');
const dstSkills = join(pkgRoot, 'skills');

async function main() {
  try {
    const s = await stat(srcSkills);
    if (!s.isDirectory()) throw new Error(`${srcSkills} is not a directory`);
  } catch (err) {
    console.error(`[sync-skills] source not found: ${srcSkills}`);
    throw err;
  }
  await rm(dstSkills, { recursive: true, force: true });
  await mkdir(dstSkills, { recursive: true });
  await cp(srcSkills, dstSkills, { recursive: true });
  console.error(`[sync-skills] copied ${srcSkills} -> ${dstSkills}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
