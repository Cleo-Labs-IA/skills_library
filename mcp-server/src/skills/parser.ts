/**
 * SKILL.md parser. Splits YAML frontmatter from Markdown body and validates
 * the required fields (`name`, `description`).
 *
 * The parser is intentionally tolerant: it accepts both LF and CRLF line
 * endings, trims surrounding whitespace, and treats a missing leading
 * frontmatter delimiter as an error rather than silently returning an empty
 * skill.
 */

import { parse as parseYaml } from 'yaml';

/** Raw shape of the YAML frontmatter inside a SKILL.md. */
export interface SkillFrontmatter {
  /** Stable identifier used as the resource/tool/prompt key. */
  readonly name: string;
  /** Short, instruction-style description (used by clients to surface the skill). */
  readonly description: string;
  /** Optional free-form metadata that authors may attach. */
  readonly [key: string]: unknown;
}

/** Parsed SKILL.md file. */
export interface ParsedSkill {
  readonly frontmatter: SkillFrontmatter;
  /** The Markdown body, with frontmatter removed. */
  readonly body: string;
  /** The full SKILL.md content (frontmatter + body), preserved verbatim. */
  readonly raw: string;
}

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

/**
 * Parse a SKILL.md file into structured frontmatter and Markdown body.
 *
 * @param source - The full SKILL.md file content.
 * @param sourcePath - Optional path used in error messages.
 * @throws {Error} If the frontmatter delimiters are missing or required
 *   fields (`name`, `description`) are absent.
 */
export function parseSkill(source: string, sourcePath?: string): ParsedSkill {
  const match = source.match(FRONTMATTER_PATTERN);
  if (!match) {
    throw new Error(
      `Missing YAML frontmatter delimiters in ${sourcePath ?? 'SKILL.md'}`,
    );
  }

  const [, yamlBlock, body] = match;
  const data: unknown = parseYaml(yamlBlock);

  if (typeof data !== 'object' || data === null) {
    throw new Error(`Frontmatter in ${sourcePath ?? 'SKILL.md'} is not an object`);
  }

  const record = data as Record<string, unknown>;
  if (typeof record.name !== 'string' || record.name.trim() === '') {
    throw new Error(`Frontmatter "name" is required in ${sourcePath ?? 'SKILL.md'}`);
  }
  if (typeof record.description !== 'string' || record.description.trim() === '') {
    throw new Error(
      `Frontmatter "description" is required in ${sourcePath ?? 'SKILL.md'}`,
    );
  }

  return {
    frontmatter: record as SkillFrontmatter,
    body: body.trimEnd(),
    raw: source,
  };
}
