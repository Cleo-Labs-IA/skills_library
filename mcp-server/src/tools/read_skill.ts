/**
 * `read_skill` tool — return the full SKILL.md content for a single
 * registered skill. This is the canonical way for LLM clients to pull
 * skill content on demand.
 */

import { z } from 'zod';

import type { SkillRegistry } from '../skills/registry.js';

export const readSkillInputShape = {
  name: z
    .string()
    .min(1)
    .describe(
      'Exact skill name, e.g. "cosmetics-compliance" or "product-compliance".',
    ),
};

export interface ReadSkillArgs {
  readonly name: string;
}

export function runReadSkill(
  registry: SkillRegistry,
  args: ReadSkillArgs,
): { name: string; description: string; content: string } {
  const skill = registry.get(args.name);
  if (!skill) {
    const known = registry
      .all()
      .slice(0, 5)
      .map((s) => s.name)
      .join(', ');
    throw new Error(
      `Unknown skill "${args.name}". Use list_skills to discover available skills. Examples: ${known}`,
    );
  }
  return {
    name: skill.name,
    description: skill.description,
    content: skill.content,
  };
}
