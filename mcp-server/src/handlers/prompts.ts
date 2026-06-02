/**
 * Register one MCP prompt per skill. Each prompt is parameterized by a
 * single optional `user_query` argument and returns a two-message
 * conversation: the skill content as a system message + the user query.
 *
 * This lets MCP-aware clients (Claude Desktop, Cursor, etc.) inject a
 * skill into the model context with a single slash command.
 */

import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import type { RegistryEntry, SkillRegistry } from '../skills/registry.js';

const PROMPT_ARGS_SHAPE = {
  user_query: z
    .string()
    .optional()
    .describe(
      'Optional user question to append after the skill content. If omitted, the skill is loaded standalone.',
    ),
};

export function registerSkillPrompts(
  server: McpServer,
  registry: SkillRegistry,
): void {
  for (const skill of registry.all()) {
    registerOne(server, skill);
  }
}

function registerOne(server: McpServer, skill: RegistryEntry): void {
  server.registerPrompt(
    skill.name,
    {
      title: skill.name,
      description: skill.description,
      argsSchema: PROMPT_ARGS_SHAPE,
    },
    async (args) => {
      const userQuery = typeof args?.user_query === 'string' ? args.user_query : '';
      const messages = [
        {
          role: 'user' as const,
          content: {
            type: 'text' as const,
            text: buildSkillPreamble(skill),
          },
        },
      ];
      if (userQuery.trim().length > 0) {
        messages.push({
          role: 'user' as const,
          content: { type: 'text' as const, text: userQuery },
        });
      }
      return {
        description: skill.description,
        messages,
      };
    },
  );
}

function buildSkillPreamble(skill: RegistryEntry): string {
  return [
    `You have been given access to the following compliance skill: \`${skill.name}\`.`,
    '',
    'Follow the workflow described below. Cite the regulations it references. Use the Cleo Legal API or other compliance tools when available.',
    '',
    '---',
    '',
    skill.content,
  ].join('\n');
}
