/**
 * End-to-end test: drive the server through an in-memory transport pair,
 * exactly as a real MCP client would over stdio.
 */

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';

import { createServer } from '../src/server.js';

const here = fileURLToPath(import.meta.url);
const SKILLS_DIR = resolve(here, '..', '..', '..', 'skills');

async function bootClient() {
  const { server } = await createServer({ skillsDir: SKILLS_DIR });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

  const client = new Client(
    { name: 'e2e-test', version: '0.0.1' },
    { capabilities: {} },
  );
  await Promise.all([
    server.connect(serverTransport),
    client.connect(clientTransport),
  ]);
  return { client, close: async () => server.close() };
}

describe('e2e MCP flow', () => {
  it('advertises the right capabilities', async () => {
    const { client, close } = await bootClient();
    try {
      const caps = client.getServerCapabilities();
      expect(caps?.resources).toBeDefined();
      expect(caps?.prompts).toBeDefined();
      expect(caps?.tools).toBeDefined();
    } finally {
      await close();
    }
  });

  it('lists 45 resources, 45 prompts, and 3 tools', async () => {
    const { client, close } = await bootClient();
    try {
      const [resources, prompts, tools] = await Promise.all([
        client.listResources(),
        client.listPrompts(),
        client.listTools(),
      ]);
      expect(resources.resources.length).toBe(52);
      expect(prompts.prompts.length).toBe(52);
      expect(tools.tools.map((t) => t.name).sort()).toEqual([
        'find_skill',
        'list_skills',
        'read_skill',
      ]);
    } finally {
      await close();
    }
  });

  it('reads a skill resource by URI', async () => {
    const { client, close } = await bootClient();
    try {
      const res = await client.readResource({ uri: 'skill://product-compliance' });
      expect(res.contents.length).toBe(1);
      const text = res.contents[0].text;
      expect(typeof text).toBe('string');
      expect(text as string).toContain('name: product-compliance');
    } finally {
      await close();
    }
  });

  it('calls list_skills tool and gets all 52', async () => {
    const { client, close } = await bootClient();
    try {
      const result = await client.callTool({ name: 'list_skills', arguments: {} });
      expect(result.isError).not.toBe(true);
      const structured = result.structuredContent as { count: number; total: number };
      expect(structured.total).toBe(52);
      expect(structured.count).toBe(52);
    } finally {
      await close();
    }
  });

  it('calls find_skill tool and ranks results', async () => {
    const { client, close } = await bootClient();
    try {
      const result = await client.callTool({
        name: 'find_skill',
        arguments: { question: 'how do I label a children toy in EU?', limit: 3 },
      });
      const structured = result.structuredContent as {
        matches: Array<{ name: string; score: number }>;
      };
      expect(structured.matches.length).toBeGreaterThan(0);
      expect(structured.matches[0].score).toBeGreaterThan(0);
      const names = structured.matches.map((m) => m.name);
      expect(names.some((n) => /toy|labeling|baby/.test(n))).toBe(true);
    } finally {
      await close();
    }
  });

  it('gets a prompt with user_query parameter', async () => {
    const { client, close } = await bootClient();
    try {
      const result = await client.getPrompt({
        name: 'cosmetics-compliance',
        arguments: { user_query: 'Can I sell my sunscreen in France?' },
      });
      expect(result.messages.length).toBe(2);
      expect((result.messages[1].content as { text: string }).text).toContain(
        'sunscreen',
      );
    } finally {
      await close();
    }
  });
});
