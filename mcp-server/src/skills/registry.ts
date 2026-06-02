/**
 * In-memory skill registry with lightweight keyword search.
 *
 * The registry is the single source of truth used by all MCP handlers. It is
 * built once at startup, indexed by `name`, and supports a deterministic
 * BM25-flavoured scoring function for the `find_skill` tool.
 *
 * The search implementation favours simplicity and zero runtime cost — we do
 * not pull in a vector store or embedding model. The skills have very
 * descriptive `description` fields by design, so substring + token match
 * yields high-quality results in practice.
 */

import type { LoadedSkill } from './loader.js';

/** Read-only view of a registered skill. */
export interface RegistryEntry {
  /** Stable identifier (matches `frontmatter.name`). */
  readonly name: string;
  /** Short instruction-style description from the frontmatter. */
  readonly description: string;
  /** Full SKILL.md content (frontmatter + body). */
  readonly content: string;
  /** Markdown body without the frontmatter block. */
  readonly body: string;
  /** Absolute on-disk path (useful for debugging). */
  readonly path: string;
  /** Inferred vertical / category (best-effort from the skill name). */
  readonly vertical: string;
  /** All free-form frontmatter keys, for forward compatibility. */
  readonly frontmatter: Readonly<Record<string, unknown>>;
}

/** Result row from {@link SkillRegistry.search}. */
export interface SearchResult {
  readonly skill: RegistryEntry;
  /** Higher = better match. Non-negative. */
  readonly score: number;
}

/** Optional filters supported by {@link SkillRegistry.list}. */
export interface ListFilters {
  readonly vertical?: string;
  readonly query?: string;
}

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has',
  'have', 'i', 'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'this',
  'to', 'was', 'were', 'will', 'with', 'use', 'using', 'when', 'what',
  'how', 'do', 'does', 'can', 'should', 'my', 'your', 'we', 'our',
]);

export class SkillRegistry {
  readonly #byName = new Map<string, RegistryEntry>();

  constructor(skills: readonly LoadedSkill[]) {
    for (const skill of skills) {
      const name = skill.frontmatter.name;
      if (this.#byName.has(name)) {
        throw new Error(`Duplicate skill name detected: ${name}`);
      }
      this.#byName.set(name, {
        name,
        description: skill.frontmatter.description,
        content: skill.raw,
        body: skill.body,
        path: skill.path,
        vertical: inferVertical(name),
        frontmatter: skill.frontmatter,
      });
    }
  }

  /** Total number of registered skills. */
  get size(): number {
    return this.#byName.size;
  }

  /** Return a snapshot of all skills, sorted by name. */
  all(): RegistryEntry[] {
    return [...this.#byName.values()].sort((a, b) => a.name.localeCompare(b.name));
  }

  /** Lookup a skill by exact name, or `undefined` if not found. */
  get(name: string): RegistryEntry | undefined {
    return this.#byName.get(name);
  }

  /**
   * Return skills matching the provided filters. Filters compose with AND
   * semantics. With no filters, equivalent to {@link all}.
   */
  list(filters: ListFilters = {}): RegistryEntry[] {
    const candidates = this.all();
    return candidates.filter((skill) => {
      if (filters.vertical && skill.vertical !== filters.vertical) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const hay = `${skill.name} ${skill.description}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  /**
   * Rank skills by relevance to a free-text question. Returns at most
   * `limit` results, sorted descending by score. Results with score 0 are
   * dropped.
   *
   * @param question - The natural-language question.
   * @param limit - Maximum number of rows to return (default 3).
   */
  search(question: string, limit = 3): SearchResult[] {
    const queryTokens = tokenize(question);
    if (queryTokens.length === 0) return [];

    const rows: SearchResult[] = [];
    for (const skill of this.#byName.values()) {
      const score = scoreSkill(skill, queryTokens, question);
      if (score > 0) rows.push({ skill, score });
    }
    rows.sort((a, b) => b.score - a.score || a.skill.name.localeCompare(b.skill.name));
    return rows.slice(0, Math.max(1, limit));
  }

  /** Distinct verticals seen in the registry, sorted alphabetically. */
  verticals(): string[] {
    const set = new Set<string>();
    for (const s of this.#byName.values()) set.add(s.vertical);
    return [...set].sort();
  }
}

function inferVertical(name: string): string {
  // Names follow either `<vertical>-compliance` or a workflow verb form.
  if (name.endsWith('-compliance')) return name.slice(0, -'-compliance'.length);
  return 'workflow';
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((tok) => tok.length > 1 && !STOPWORDS.has(tok));
}

function scoreSkill(
  skill: RegistryEntry,
  queryTokens: string[],
  rawQuestion: string,
): number {
  const nameTokens = tokenize(skill.name);
  const descTokens = tokenize(skill.description);
  const lowerName = skill.name.toLowerCase();
  const lowerDesc = skill.description.toLowerCase();
  const lowerQuestion = rawQuestion.toLowerCase();

  let score = 0;
  for (const tok of queryTokens) {
    if (nameTokens.includes(tok)) score += 4;
    if (descTokens.includes(tok)) score += 2;
    // Substring fallback catches hyphenated forms like "first-aid".
    if (lowerName.includes(tok)) score += 1;
    if (lowerDesc.includes(tok)) score += 1;
  }
  // Bonus when the whole vertical token appears in the question
  // (e.g. "cosmetics" -> cosmetics-compliance).
  if (lowerQuestion.includes(skill.vertical) && skill.vertical !== 'workflow') {
    score += 3;
  }
  return score;
}
