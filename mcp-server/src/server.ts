/**
 * Server factory. Builds an `McpServer` instance configured with the
 * skill registry, all handlers wired up, and the announced capabilities.
 *
 * The factory is transport-agnostic: callers attach a stdio (or other)
 * transport via `await server.connect(transport)`.
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { registerSkillPrompts } from './handlers/prompts.js';
import { registerSkillResources } from './handlers/resources.js';
import { registerSkillTools } from './handlers/tools.js';
import { loadAllSkills, resolveSkillsDir } from './skills/loader.js';
import { SkillRegistry } from './skills/registry.js';

/** Hard-coded server metadata. Kept in sync with `package.json#version`. */
export const SERVER_INFO = {
  name: 'cleo-skills-mcp',
  title: 'Cleo Skills MCP',
  version: '0.1.0',
} as const;

export interface CreateServerOptions {
  /** Override the skills directory (otherwise auto-resolved). */
  readonly skillsDir?: string;
}

export interface CreatedServer {
  readonly server: McpServer;
  readonly registry: SkillRegistry;
  readonly skillsDir: string;
}

/**
 * Build a fully-configured MCP server. Idempotent at the type level: the
 * returned `McpServer` has resources, prompts, and tools registered but no
 * transport attached.
 */
export async function createServer(
  options: CreateServerOptions = {},
): Promise<CreatedServer> {
  const skillsDir = options.skillsDir ?? (await resolveSkillsDir());
  const skills = await loadAllSkills(skillsDir);
  if (skills.length === 0) {
    throw new Error(
      `No skills found under ${skillsDir}. Each subdirectory must contain a SKILL.md with YAML frontmatter.`,
    );
  }
  const registry = new SkillRegistry(skills);

  const server = new McpServer(
    {
      name: SERVER_INFO.name,
      title: SERVER_INFO.title,
      version: SERVER_INFO.version,
    },
    {
      capabilities: {
        resources: { listChanged: false },
        prompts: { listChanged: false },
        tools: { listChanged: false },
        logging: {},
      },
      instructions:
        'This server exposes product-compliance skills. Use `list_skills` to discover skills, `find_skill` to map a user question to the right skill, and `read_skill` to pull full content. Each skill is also available as an MCP resource (`skill://<name>`) and as a parameterized prompt.',
    },
  );

  registerSkillResources(server, registry);
  registerSkillPrompts(server, registry);
  registerSkillTools(server, registry);

  return { server, registry, skillsDir };
}
