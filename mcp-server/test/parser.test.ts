import { describe, expect, it } from 'vitest';

import { parseSkill } from '../src/skills/parser.js';

const VALID = `---
name: demo-skill
description: A short description
extra: hello
---

# Body

Hello world.
`;

describe('parseSkill', () => {
  it('extracts frontmatter and body', () => {
    const parsed = parseSkill(VALID, 'demo.md');
    expect(parsed.frontmatter.name).toBe('demo-skill');
    expect(parsed.frontmatter.description).toBe('A short description');
    expect(parsed.body).toContain('# Body');
    expect(parsed.raw).toBe(VALID);
  });

  it('throws when frontmatter is missing', () => {
    expect(() => parseSkill('no frontmatter here', 'x.md')).toThrow(/Missing YAML/);
  });

  it('throws when name is missing', () => {
    const src = `---\ndescription: only desc\n---\nbody`;
    expect(() => parseSkill(src)).toThrow(/"name" is required/);
  });

  it('throws when description is missing', () => {
    const src = `---\nname: only-name\n---\nbody`;
    expect(() => parseSkill(src)).toThrow(/"description" is required/);
  });
});
