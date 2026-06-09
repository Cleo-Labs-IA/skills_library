import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { createServer } from '../src/server.js';

const here = fileURLToPath(import.meta.url);
const SKILLS_DIR = resolve(here, '..', '..', '..', 'skills');

describe('createServer', () => {
  it('loads the full 52-skill library', async () => {
    const { registry, skillsDir } = await createServer({ skillsDir: SKILLS_DIR });
    expect(skillsDir).toBe(SKILLS_DIR);
    expect(registry.size).toBe(52);
    expect(registry.get('product-compliance')).toBeDefined();
    expect(registry.get('cosmetics-compliance')?.description).toMatch(/cosmetics/i);
  });

  it('exposes a sensible vertical list', async () => {
    const { registry } = await createServer({ skillsDir: SKILLS_DIR });
    const verticals = registry.verticals();
    expect(verticals).toContain('cosmetics');
    expect(verticals).toContain('food');
    expect(verticals).toContain('textile');
  });
});
