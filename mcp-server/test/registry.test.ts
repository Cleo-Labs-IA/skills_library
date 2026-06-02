import { describe, expect, it } from 'vitest';

import type { LoadedSkill } from '../src/skills/loader.js';
import { SkillRegistry } from '../src/skills/registry.js';

function loaded(name: string, description: string): LoadedSkill {
  const raw = `---\nname: ${name}\ndescription: ${description}\n---\n\n# ${name}\n`;
  return {
    frontmatter: { name, description },
    body: `# ${name}`,
    raw,
    path: `/fake/${name}/SKILL.md`,
  };
}

describe('SkillRegistry', () => {
  const skills = [
    loaded(
      'cosmetics-compliance',
      'Use when selling cosmetics, skincare or fragrance in the EU or US',
    ),
    loaded(
      'food-compliance',
      'Use when selling food, beverages or supplements with allergen rules',
    ),
    loaded(
      'product-compliance',
      'Use when checking if a product is compliant in target markets',
    ),
  ];

  it('indexes by name and reports size', () => {
    const r = new SkillRegistry(skills);
    expect(r.size).toBe(3);
    expect(r.get('food-compliance')?.description).toContain('food');
    expect(r.get('nope')).toBeUndefined();
  });

  it('returns deterministic sorted lists', () => {
    const r = new SkillRegistry(skills);
    const names = r.all().map((s) => s.name);
    expect(names).toEqual([
      'cosmetics-compliance',
      'food-compliance',
      'product-compliance',
    ]);
  });

  it('filters by vertical', () => {
    const r = new SkillRegistry(skills);
    expect(r.list({ vertical: 'cosmetics' }).map((s) => s.name)).toEqual([
      'cosmetics-compliance',
    ]);
  });

  it('ranks search results by relevance', () => {
    const r = new SkillRegistry(skills);
    const hits = r.search('can I sell my sunscreen and cosmetics in EU?', 2);
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].skill.name).toBe('cosmetics-compliance');
  });

  it('returns empty results on noise query', () => {
    const r = new SkillRegistry(skills);
    expect(r.search('xyz unrelated zzzz', 3)).toEqual([]);
  });

  it('rejects duplicates', () => {
    expect(
      () => new SkillRegistry([skills[0], skills[0]]),
    ).toThrow(/Duplicate skill/);
  });
});
