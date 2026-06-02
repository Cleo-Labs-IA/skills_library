# Support

Thanks for using **Compliance Product Guidance** (`skills_library` / `@cleo-labs/skills-mcp`). Here's where to go depending on what you need.

## I think I found a bug

**Open a [GitHub issue](https://github.com/Cleo-Labs-IA/skills_library/issues/new/choose).** Use the **Bug report** template — it asks for the version, environment, reproduction steps, and expected vs actual behaviour. The more we have up front, the faster we can fix it.

If the bug is **security-related**, do **not** open a public issue. See [SECURITY.md](../SECURITY.md) and email `security@cleolabs.co` instead.

## I have a feature request

**Open a [GitHub issue](https://github.com/Cleo-Labs-IA/skills_library/issues/new/choose)** with the **Feature request** template. Tell us:

- The problem you're trying to solve (not the solution you have in mind).
- A concrete example, ideally with the product / vertical / jurisdiction.
- Whether you'd be willing to PR it yourself — we're happy to mentor first-time contributors.

For larger ideas (a new vertical, a new MCP tool, etc.), drop them in **[Discussions › Ideas](https://github.com/Cleo-Labs-IA/skills_library/discussions/categories/ideas)** first so the community can weigh in before we lock scope.

## I have a question about a skill or how to use it

**Use [GitHub Discussions](https://github.com/Cleo-Labs-IA/skills_library/discussions).** Categories:

- **[Q&A](https://github.com/Cleo-Labs-IA/skills_library/discussions/categories/q-a)** — "How do I integrate `skills_library` with my tool?", "Which skill should I use for X?", "Why does the EU vs US verdict differ for substance Y?"
- **[Ideas](https://github.com/Cleo-Labs-IA/skills_library/discussions/categories/ideas)** — propose new skills, integrations, or product directions.
- **[Show & Tell](https://github.com/Cleo-Labs-IA/skills_library/discussions/categories/show-and-tell)** — share what you built. Especially welcome: tooling that wraps the MCP server, dashboards, internal compliance copilots.
- **[Announcements](https://github.com/Cleo-Labs-IA/skills_library/discussions/categories/announcements)** — release notes and regulation watch (maintainer-posted, read-only for the community).

Please **search Discussions first** — there's a good chance your question is already answered.

## I need commercial support

For paid SLAs, white-glove onboarding, on-call regulatory help, or custom skill development:

- Email **`contact@cleolabs.co`** with a one-paragraph description of your use case and team size.
- We respond within 1 business day (Paris time, Mon–Fri).

Cleo Labs offers:

- **Implementation services** — integrating `skills_library` into your stack (Slack bot, Notion, internal portal).
- **Custom skills** — vertical playbooks for product categories we don't yet cover.
- **Compliance-on-call** — a regulatory consultant accessible via your AI agent.

## I'm using the Cleo Legal API

The `@cleo-labs/skills-mcp` server is **free and MIT-licensed**. The Cleo Legal API (customs classification, substance lookups, duty calculation, landed cost, sanctions screening) is a separate **commercial** product.

- **API documentation, signup, pricing**: <https://legaldata-public.cleolabs.co/>
- **API support**: `api@cleolabs.co`
- **API status**: <https://legaldata-public.cleolabs.co/status>

You can use the skills without the API — they fall back to web search and file-based evidence with the same prompt structure. With the API enabled, the same prompts get back current data instead of best-effort lookups.

## I'm a regulator, journalist, or researcher

We're happy to talk. Email `contact@cleolabs.co` with `[PRESS]` or `[RESEARCH]` in the subject line.

- Press kit, logos, and screenshots: see [`/press-kit/`](../press-kit/).
- Benchmark methodology and (eventually) results: see [`BENCHMARK.md`](../BENCHMARK.md).

## Response expectations

| Channel | Target first response | Best for |
|---------|----------------------|----------|
| GitHub Issues (bug) | 2 business days | Bugs, regressions, broken examples |
| GitHub Issues (feature) | 5 business days | Feature scoping |
| GitHub Discussions | Community-driven | Questions, ideas, show-and-tell |
| `security@cleolabs.co` | 48 hours | Security only — see [SECURITY.md](../SECURITY.md) |
| `contact@cleolabs.co` | 1 business day | Commercial, press, partnerships |
| `api@cleolabs.co` | 1 business day | Cleo Legal API support |

We're a small team. If you don't hear back in the target window, ping the issue or send a polite nudge — we don't ghost on purpose.

---

_Cleo Labs · MIT licensed · contact@cleolabs.co_
