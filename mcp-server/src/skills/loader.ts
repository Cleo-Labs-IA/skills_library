/**
 * Skill loader. Walks a directory of `skills/<name>/SKILL.md` files and
 * returns the parsed skills.
 *
 * The loader supports two layouts, in this order of preference:
 *
 * 1. `<root>/skills/<name>/SKILL.md` — the canonical layout used by the
 *    skills_library repo and the published npm package.
 * 2. `<root>/SKILL.md` — single-skill fallback used by unit tests.
 *
 * Resolution order at runtime:
 *
 * - `SKILLS_DIR` environment variable, if set.
 * - `<package>/skills/` — bundled in the published npm tarball.
 * - `<package>/../skills/` — repo checkout layout.
 */

import { readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseSkill, type ParsedSkill } from './parser.js';

/** A parsed skill plus its on-disk path. */
export interface LoadedSkill extends ParsedSkill {
  /** Absolute path to the SKILL.md file. */
  readonly path: string;
}

/**
 * Resolve the directory that holds `<name>/SKILL.md` subfolders.
 *
 * @returns The absolute path to the resolved skills directory.
 * @throws {Error} If no candidate directory can be found.
 */
export async function resolveSkillsDir(): Promise<string> {
  const explicit = process.env.SKILLS_DIR;
  if (explicit) {
    const abs = resolve(explicit);
    await assertIsDir(abs);
    return abs;
  }

  const here = dirname(fileURLToPath(import.meta.url));
  // src/skills/loader.ts -> ../../..  for repo layout
  // dist/skills/loader.js -> ../../skills for packed tarball or repo layout
  const candidates = [
    resolve(here, '..', '..', 'skills'),
    resolve(here, '..', '..', '..', 'skills'),
    resolve(process.cwd(), 'skills'),
    resolve(process.cwd(), '..', 'skills'),
  ];

  for (const candidate of candidates) {
    if (await isDir(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    `Unable to locate skills directory. Set SKILLS_DIR or place skills at one of: ${candidates.join(', ')}`,
  );
}

/**
 * Load all skills under the given directory.
 *
 * @param skillsDir - Absolute path to the skills directory.
 * @returns The parsed skills, sorted by `frontmatter.name`.
 */
export async function loadAllSkills(skillsDir: string): Promise<LoadedSkill[]> {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  const skillDirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(skillsDir, entry.name));

  const skills: LoadedSkill[] = [];
  for (const dir of skillDirs) {
    const filePath = join(dir, 'SKILL.md');
    try {
      const source = await readFile(filePath, 'utf8');
      const parsed = parseSkill(source, filePath);
      skills.push({ ...parsed, path: filePath });
    } catch (err) {
      // Skip directories without a SKILL.md but surface parse failures.
      if (isFileNotFound(err)) continue;
      throw err;
    }
  }

  skills.sort((a, b) => a.frontmatter.name.localeCompare(b.frontmatter.name));
  return skills;
}

async function isDir(path: string): Promise<boolean> {
  try {
    const s = await stat(path);
    return s.isDirectory();
  } catch {
    return false;
  }
}

async function assertIsDir(path: string): Promise<void> {
  if (!(await isDir(path))) {
    throw new Error(`SKILLS_DIR does not exist or is not a directory: ${path}`);
  }
}

function isFileNotFound(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code?: string }).code === 'ENOENT'
  );
}
