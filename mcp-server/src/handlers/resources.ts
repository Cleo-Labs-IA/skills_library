/**
 * Register one MCP resource per skill. URI scheme: `skill://<name>`.
 * Mime type: `text/markdown`.
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import type { RegistryEntry, SkillRegistry } from '../skills/registry.js';

/** Build the canonical `skill://` URI for a given skill name. */
export function skillUri(name: string): string {
  return `skill://${name}`;
}

/**
 * Register every skill in the registry as a static MCP resource.
 *
 * @param server - The high-level MCP server.
 * @param registry - The skill registry.
 */
export function registerSkillResources(
  server: McpServer,
  registry: SkillRegistry,
): void {
  for (const skill of registry.all()) {
    registerOne(server, skill);
  }
}

function registerOne(server: McpServer, skill: RegistryEntry): void {
  const uri = skillUri(skill.name);
  server.registerResource(
    skill.name,
    uri,
    {
      title: skill.name,
      description: skill.description,
      mimeType: 'text/markdown',
    },
    async () => ({
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: skill.content,
        },
      ],
    }),
  );
}
