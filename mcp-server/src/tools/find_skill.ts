/**
 * `find_skill` tool — semantic-ish search that maps a natural-language
 * question to the top-N most relevant skills.
 *
 * Implementation uses the deterministic keyword scorer in the registry. We
 * intentionally avoid embeddings here so the server stays dependency-free
 * and works offline.
 */

import { z } from 'zod';

import type { SkillRegistry } from '../skills/registry.js';

export const findSkillInputShape = {
  question: z
    .string()
    .min(3)
    .describe(
      'A natural-language question or task, e.g. "Can I sell my sunscreen in the EU?" or "How do I label a children\'s toy?".',
    ),
  limit: z
    .number()
    .int()
    .positive()
    .max(10)
    .optional()
    .describe('Number of top matches to return (default 3).'),
};

export interface FindSkillArgs {
  readonly question: string;
  readonly limit?: number;
}

export function runFindSkill(
  registry: SkillRegistry,
  args: FindSkillArgs,
): {
  question: string;
  matches: Array<{ name: string; description: string; score: number }>;
} {
  const results = registry.search(args.question, args.limit ?? 3);
  return {
    question: args.question,
    matches: results.map((r) => ({
      name: r.skill.name,
      description: r.skill.description,
      score: r.score,
    })),
  };
}
