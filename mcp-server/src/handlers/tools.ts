/**
 * Register the three top-level MCP tools backed by the skill registry:
 * `list_skills`, `find_skill`, and `read_skill`.
 *
 * Each tool returns a structured JSON payload in addition to a human-
 * readable text representation, so it works with both MCP clients that
 * understand `structuredContent` and older clients that only parse the
 * `content[].text` array.
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import type { SkillRegistry } from '../skills/registry.js';
import { findSkillInputShape, runFindSkill } from '../tools/find_skill.js';
import { listSkillsInputShape, runListSkills } from '../tools/list_skills.js';
import { readSkillInputShape, runReadSkill } from '../tools/read_skill.js';

export function registerSkillTools(
  server: McpServer,
  registry: SkillRegistry,
): void {
  server.registerTool(
    'list_skills',
    {
      title: 'List compliance skills',
      description:
        'List the available product compliance skills. Optionally filter by `vertical` (e.g. "cosmetics", "food") or a free-text `query` over name and description.',
      inputSchema: listSkillsInputShape,
    },
    async (args) => {
      const result = runListSkills(registry, args);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    'find_skill',
    {
      title: 'Find the right skill for a question',
      description:
        'Given a natural-language question or task, return the top compliance skills most likely to help. Use this before pulling skill content with `read_skill`.',
      inputSchema: findSkillInputShape,
    },
    async (args) => {
      const result = runFindSkill(registry, args);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        structuredContent: result,
      };
    },
  );

  server.registerTool(
    'read_skill',
    {
      title: 'Read a skill by name',
      description:
        'Return the full SKILL.md content (frontmatter + Markdown body) for a single skill identified by its exact name.',
      inputSchema: readSkillInputShape,
    },
    async (args) => {
      const result = runReadSkill(registry, args);
      return {
        content: [{ type: 'text', text: result.content }],
        structuredContent: {
          name: result.name,
          description: result.description,
        },
      };
    },
  );
}
