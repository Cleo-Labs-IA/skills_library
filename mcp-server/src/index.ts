#!/usr/bin/env node
/**
 * `@cleo-labs/skills-mcp` entry point.
 *
 * Boots an MCP server over stdio. Logging goes to stderr — stdout is
 * reserved exclusively for MCP protocol traffic, per the spec.
 */

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { SERVER_INFO, createServer } from './server.js';

function logStderr(...args: unknown[]): void {
  // eslint-disable-next-line no-console
  console.error('[skills-mcp]', ...args);
}

async function main(): Promise<void> {
  const { server, registry, skillsDir } = await createServer();
  logStderr(
    `${SERVER_INFO.title} ${SERVER_INFO.version} — loaded ${registry.size} skills from ${skillsDir}`,
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  logStderr('listening on stdio');

  const shutdown = async (signal: string): Promise<void> => {
    logStderr(`received ${signal}, shutting down`);
    try {
      await server.close();
    } catch (err) {
      logStderr('error during close:', err);
    }
    process.exit(0);
  };

  process.on('SIGTERM', () => {
    void shutdown('SIGTERM');
  });
  process.on('SIGINT', () => {
    void shutdown('SIGINT');
  });
}

main().catch((err: unknown) => {
  logStderr('fatal:', err);
  process.exit(1);
});
