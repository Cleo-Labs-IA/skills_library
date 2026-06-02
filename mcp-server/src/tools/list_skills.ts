/**
 * `list_skills` tool — return the registered skills, optionally filtered by
 * vertical (e.g. `cosmetics`) or by a free-text query that matches the
 * `name` or `description` substring.
 *
 * The tool is intentionally cheap: it does not load any extra data beyond
 * what the registry already holds in memory.
 */

import { z } from 'zod';

import type { SkillRegistry } from '../skills/registry.js';

/** Zod raw shape consumed by the MCP SDK `registerTool` API. */
export const listSkillsInputShape = {
  vertical: z
    .string()
    .min(1)
    .optional()
    .describe(
      'Filter to skills in a single vertical (e.g. "cosmetics", "food", "textile"). Omit to list all.',
    ),
  query: z
    .string()
    .min(1)
    .optional()
    .describe(
      'Free-text substring filter against the skill name and description (case-insensitive).',
    ),
  limit: z
    .number()
    .int()
    .positive()
    .max(100)
    .optional()
    .describe('Maximum number of skills to return (default: all matches).'),
};

export interface ListSkillsArgs {
  readonly vertical?: string;
  readonly query?: string;
  readonly limit?: number;
}

/**
 * Run the `list_skills` tool against a registry.
 *
 * @returns A compact JSON-friendly payload suitable for the MCP
 *   `tools/call` response.
 */
export function runListSkills(
  registry: SkillRegistry,
  args: ListSkillsArgs,
): {
  count: number;
  total: number;
  skills: Array<{ name: string; description: string; vertical: string }>;
} {
  const filtered = registry.list({
    vertical: args.vertical,
    query: args.query,
  });
  const sliced = args.limit ? filtered.slice(0, args.limit) : filtered;
  return {
    count: sliced.length,
    total: registry.size,
    skills: sliced.map((s) => ({
      name: s.name,
      description: s.description,
      vertical: s.vertical,
    })),
  };
}
