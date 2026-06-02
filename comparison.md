# How `skills_library` compares

> An honest comparison of [`skills_library`](https://github.com/Cleo-Labs-IA/skills_library) against the most common alternatives prospects evaluate. We compare on what matters for **physical product compliance** (cosmetics, food, electronics, toys, textiles, supplements, medical devices, etc.) — not generic GRC or regulatory news.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## At a glance

| Feature | skills_library | Compliance.ai | Drata | Vanta | Consultant | ChatGPT | Claude (no skills) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product compliance focus | ✅ Native | ❌ | ❌ | ❌ | ✅ | ⚠️ Generic | ⚠️ Generic |
| Per-jurisdiction substance check | ✅ 13 DBs | ⚠️ Limited | ❌ | ❌ | ✅ | ⚠️ Hallucinates | ⚠️ Better but still hallucinates |
| 45 vertical skills (cosmetics, toys, medical, etc.) | ✅ | ❌ | ❌ | ❌ | ✅ (one expert per vertical) | ❌ | ❌ |
| Real-time regulation updates | ✅ Via MCP + Cleo Legal | ✅ | ⚠️ SOC2 frameworks only | ⚠️ SOC2 frameworks only | ❌ Snapshot at time of engagement | ❌ Training-data cutoff | ❌ Training-data cutoff |
| Citations to primary sources | ✅ Article/regulation refs in every skill | ✅ | ❌ Not the focus | ❌ Not the focus | ✅ | ❌ Often fabricated | ⚠️ Better but unverified |
| Open source | ✅ MIT | ❌ Closed | ❌ Closed | ❌ Closed | N/A | ❌ | ❌ |
| Self-host | ✅ `npm install` or Docker | ❌ SaaS only | ❌ SaaS only | ❌ SaaS only | N/A | ❌ | ❌ |
| Works in IDE (Cursor / Continue / VS Code) | ✅ Native MCP | ❌ | ❌ | ❌ | ❌ | ⚠️ Via extension, generic | ⚠️ Via extension, generic |
| Cost (1,000 product checks / month) | $0 (MCP self-host) + LLM cost | $$$ $1,000-$5,000/mo | $$$ $1,500-$3,500/mo (GRC, not product) | $$$ $1,500-$3,500/mo (GRC, not product) | $$$$$ €4-12k per opinion | $ ~$20-50/mo per seat | $ ~$20-50/mo per seat |
| Setup time | 30 seconds | weeks | weeks | weeks | weeks of intake | 1 minute | 1 minute |
| Multi-agent / parallel jurisdiction scan | ✅ Built-in (multi-jurisdiction-scan, compliance-audit-sprint) | ❌ | ❌ | ❌ | ⚠️ Serial human work | ❌ | ❌ |
| Source code transparent | ✅ Every skill is readable Markdown | ❌ | ❌ | ❌ | ⚠️ Their head | ❌ Closed model | ❌ Closed model |
| Auto-trigger from natural prompts | ✅ Claude Code SKILL.md mechanism | ❌ | ❌ | ❌ | ❌ | ⚠️ Best-effort | ⚠️ Best-effort |

---

## vs Compliance.ai (RegTech)

[Compliance.ai](https://compliance.ai) is a regulatory-content + change-management platform aimed at financial services, healthcare compliance, and (more recently) some product-regulation tracking. Strengths: a large editorially curated taxonomy of regulations, change alerts, internal-stakeholder workflow.

Where `skills_library` differs:

- **Vertical depth, not horizontal coverage.** Compliance.ai aims to be the system of record for "all regulation that matters to your enterprise." `skills_library` aims to be the **operator-level expert** for a small team launching cosmetics, toys, electronics, etc. The 45 skills are deeply specific (`baby-formula-compliance` knows NMPA registration per-stage-per-factory; `electronics-compliance` knows CRA timelines and battery carbon-footprint declaration dates).
- **Free + open source.** Compliance.ai is enterprise SaaS with a sales motion; `skills_library` is MIT-licensed and installable with a single `npx` command.
- **Lives inside the agent.** `skills_library` integrates with Claude Code, Cursor, Continue, and any MCP client. The compliance check happens *where the work happens* — in chat, in the IDE, in CI. Compliance.ai lives in a separate web app you switch to.

A team running a regulated marketplace might use **both**: Compliance.ai for the regulatory-monitoring + internal-stakeholder workflow, `skills_library` for the per-SKU product compliance work.

## vs Drata (SOC 2 / GRC)

[Drata](https://drata.com) is a SaaS GRC tool focused on **information security frameworks** — SOC 2, ISO 27001, HIPAA, NIST CSF, GDPR data-protection compliance, PCI-DSS. It is excellent at what it does: continuous control monitoring of cloud infrastructure, employee on-boarding evidence, vendor management.

Where they overlap with `skills_library`: **nowhere meaningful.** Drata does not tell you if your retinol cream complies with EU Reg 1223/2009. It does not check REACH SVHC, it does not know toy-safety EN 71. The two products solve completely different compliance problems — security and data privacy on one side, physical product regulation on the other. We list it here only because prospects sometimes ask "isn't that what Drata does?" — no, it isn't.

A physical-product brand selling to enterprise might run **both**: Drata for SOC 2, `skills_library` for product regulation.

## vs Vanta (SOC 2 / GRC)

Same comment as Drata. [Vanta](https://vanta.com) is excellent for the SOC 2 / ISO 27001 / HIPAA continuous-compliance use case. It does not address product regulation in any depth. We compete with neither, but we get asked the question.

## vs a regulatory consultant

The honest comparison. Consultants are the *real* alternative — every product brand has a Rolodex of "the cosmetics lawyer," "the medical-device RA," "the customs broker." Strengths:

- Deep expertise (the right one in the right vertical).
- Legal accountability — you can sign a SoW and they have professional liability.
- Local market knowledge that hasn't made it into any database yet (an NMPA reviewer's known preferences, a French ANSES position that hasn't been published).

Where `skills_library` wins:

- **Cost.** A one-off opinion from a competent cosmetics-RA in Paris is €4-12k. The skills run in chat. The marginal cost of a question is your model token bill (~$0.10-$2.00 per substantive chat).
- **Speed.** A consultant takes 1-3 weeks to schedule, scope, deliver. The skills take minutes.
- **Coverage.** A typical product brand can afford one or two RAs on retainer. The skills cover 45 verticals at once. Cross-vertical questions (cosmetics + food + customs, for a beauty supplement) are well-suited to the skills, awkward for a single human RA.
- **Operational, not advisory.** A consultant gives you a written opinion. The skills produce per-SKU matrices, per-substance verdicts, ready-to-use label copy. They live in your loop.

Where consultants still win: **the legally-accountable final opinion** before a high-stakes launch. The right pattern is to use `skills_library` to do 80-90% of the prep, then have a consultant **review** rather than build from zero. The hourly bill drops accordingly.

See the [10 case studies](./case-studies/) — every one of them quantifies the savings vs the consultant route.

## vs ChatGPT (alone)

ChatGPT-the-product is a generalist assistant. It knows compliance topics in broad strokes — it has seen REACH, FDA, CE — but it has no special-purpose mechanism for routing to a regulation-specific expert, no auto-trigger on natural prompts, and no built-in citation discipline.

What goes wrong without skills:
- **Hallucinated regulations.** ChatGPT will confidently cite "EU Regulation 2021/1234" that does not exist. We have logged dozens of such fabrications on substance-restriction questions.
- **No structured outputs.** "What's restricted in this formula?" → free-form prose, not a verdict table.
- **Stale data.** The training cutoff means recent regulations (EU PFAS restriction adoption, EU Reg 2024/996 retinol, CRA timelines) are unreliable.

`skills_library` solves the routing + citation discipline problem. The skill bodies themselves anchor the model to specific articles, regulations, CAS numbers, and procedural steps.

Note: ChatGPT supports MCP-style integrations through OpenAI's own tooling — `skills_library` does not currently ship a first-class connector for ChatGPT-the-app, but the underlying skills are plain Markdown and can be loaded into any system prompt.

## vs Claude alone (without skills)

Claude's a more capable raw model on this kind of task than ChatGPT — better recall of regulations, better discipline on citations, more honest when it doesn't know. But "Claude alone" still has the same structural problem ChatGPT does: no routing layer between "user asks a vague compliance question" and "the right regulatory framework is loaded into context."

What `skills_library` adds on top of raw Claude:
- **Auto-trigger.** A natural prompt about a cosmetics formula loads `cosmetics-compliance` into the conversation. The model isn't guessing — it's working from a vetted skill body.
- **Vertical depth.** Each of the 45 skills was written by domain operators, not just summarised from public regulations. The detail level (per-stage NMPA, per-state US EPR, per-member-state CLP allergen lists) is operator-grade.
- **Multi-agent orchestration.** Skills like `multi-jurisdiction-scan` and `compliance-audit-sprint` dispatch parallel sub-agents — one per jurisdiction — and merge the results. Raw Claude cannot do this without scaffolding.

If you're already using Claude Code (the CLI/IDE agent), installing the skills via MCP is a 30-second upgrade. See the [Claude Desktop tutorial](./tutorials/claude-desktop.md).

---

## What `skills_library` is *not*

- It is **not legal advice**. Every skill body is anchored to publicly available regulation text. None of it is reviewed by counsel for your specific situation. For high-stakes launches, pair with a consultant.
- It is **not a replacement for accredited testing**. We do not produce CPSR, EN 71 test reports, FCC ID grants, or 510(k) submissions. We help you plan, scope, and prepare them.
- It is **not a notification portal**. It will not file your CPNP / MoCRA / CNF / SCPN entries for you. (The Cleo Legal API, at <https://legaldata-public.cleolabs.co/>, is moving in that direction — talk to us if filing-as-a-service is your need.)
- It is **not a SOC 2 / GDPR / security GRC tool**. That's Drata, Vanta, and the rest. Use them for that.

---

## When to choose `skills_library`

- You're a small-to-mid physical-product brand without a full-time RA.
- You sell across multiple jurisdictions and feel the gaps every quarter.
- You're already using Claude Code, Cursor, Continue, or any MCP-compatible client.
- You want the speed of an LLM with the rigor of a domain-specific framework.
- You're cost-sensitive — consulting opinions are not a sustainable monthly cost.

## When *not* to choose `skills_library`

- You need a single legally accountable opinion for a critical launch (use a consultant; use us for prep).
- Your compliance problem is SOC 2 / GDPR / data security (use Drata/Vanta).
- You're in a heavily licensed / pre-market-approval regime (Class III medical devices, prescription pharma) — the skills help you plan but you absolutely need humans on the path.

---

## Try it

```bash
npx -y @cleo-labs/skills-mcp@latest
```

Wire it into [Claude Desktop](./tutorials/claude-desktop.md), [Cursor](./tutorials/cursor.md), [Continue](./tutorials/continue.md), or [your own MCP client](./tutorials/custom-client.md). Read the [10 case studies](./case-studies/) for concrete before-and-after numbers.

For live, queryable, jurisdiction-aware regulation data and a real API: <https://legaldata-public.cleolabs.co/>.

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
