# Contributing to Compliance Product Guidance

Thanks for your interest in contributing. This library helps small brands selling physical products internationally get to market legally. Every skill should earn its place by saving real time or preventing real fines.

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Ways to Contribute

1. **Report a bug** in an existing skill (wrong fee, outdated regulation reference, broken workflow).
2. **Suggest a new skill** (vertical, market, or workflow we don't yet cover).
3. **Submit a pull request** (new skill, bugfix, doc improvement).
4. **Improve documentation** (clarify wording, add examples, fix typos).

---

## Reporting Bugs

Open an issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md). Include:

- Skill name and exact filename
- What you typed to Claude Code
- What you expected vs what actually happened
- Claude Code version (`claude --version`)
- OS (macOS / Linux / Windows + version)

Regulation-related bugs (wrong limit, outdated deadline, wrong fee) are the highest priority. Cite the official source in your bug report so we can verify.

---

## Suggesting New Skills

Open an issue using the [New Skill template](.github/ISSUE_TEMPLATE/new_skill.md). Include:

- The exact user question the skill answers
- Target audience (e.g. "Cosmetics brands shipping to Japan")
- Regulations to reference (with article numbers)
- MCP tools to integrate (Cleo Legal API, Cleo Insight)
- Expected workflow (5-10 steps)

Skills that overlap heavily with existing ones will be merged or rejected. Search [existing skills](skills/) first.

---

## Submitting Pull Requests

### 1. Fork and branch

Branch naming convention:

- `skill/<skill-name>` for new skills (e.g. `skill/wine-spirits-eu-compliance`)
- `fix/<skill-name>-<short-desc>` for bug fixes (e.g. `fix/cosmetics-cpnp-fee`)
- `docs/<area>-<short-desc>` for documentation
- `chore/<short-desc>` for tooling / CI

### 2. Commit message format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

<body explaining the why, not the what>

<optional footer with breaking changes, refs>
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`.

Examples:

- `feat(skills): add wine-spirits-eu-compliance skill`
- `fix(cosmetics-compliance): update CPNP fee from EUR 0 to EUR 0 (free, was wrong in doc)`
- `docs(readme): add badges and funnel link`

### 3. Update CHANGELOG.md

Every PR that ships user-visible change must add an entry under `## [Unreleased]` in [CHANGELOG.md](CHANGELOG.md).

### 4. Open the PR

Use the [PR template](.github/PULL_REQUEST_TEMPLATE.md) and fill in every checkbox. PRs with empty checklists will be closed.

---

## Skill File Format Requirements

Every skill lives at `skills/<skill-name>/SKILL.md` and MUST include:

### Frontmatter

```yaml
---
name: skill-name-in-kebab-case
description: One-line auto-trigger description starting with "Use when..."
---
```

Optional fields: `version`, `audience`, `mcp` (list of MCP servers used).

### Required sections, in order

1. **Title** (H1) -- short, no marketing fluff
2. **When to Use This Skill** -- bullet list of triggers
3. **Workflow** -- numbered steps the agent follows
4. **Inputs Required** -- exactly what the user must provide
5. **Outputs Delivered** -- exactly what the agent produces
6. **Power This With the Cleo Legal API** -- how `https://legaldata-public.cleolabs.co/` accelerates the workflow
7. **Common Mistakes** -- 3-7 concrete pitfalls with the wrong-vs-right pattern
8. **Concrete Regulation References** -- article numbers, agency names, official URLs

### Word count

- Minimum: 600 words (anything shorter is too thin to be useful)
- Maximum: 4000 words (anything longer should be split into multiple skills)
- Target: 1200-2500 words

### Examples

Every workflow step that involves data must show a real example. No "the agent calls the API". Show the exact MCP tool name, the exact arguments, and the shape of the response.

---

## Testing Your Skill

Before submitting, test the skill end-to-end in Claude Code:

1. Copy your skill folder to `~/.claude/skills/<skill-name>/`
2. Restart Claude Code
3. Trigger the skill with the question from your "When to Use" section
4. Verify the agent follows your Workflow steps in order
5. Verify the Cleo Legal API integration actually runs (if applicable)
6. Verify the final output matches the "Outputs Delivered" section

Run the lint workflow locally if possible:

```bash
# From repo root
.github/workflows/lint.sh   # if a local script exists
# or just inspect the workflow file at .github/workflows/lint.yml
```

Document your test in the PR description: "Tested with prompt X, agent produced Y."

---

## Skill Quality Checklist

Before opening a PR, your skill must pass:

- [ ] Frontmatter has `name` and `description`
- [ ] All 8 required sections present in order
- [ ] Word count between 600 and 4000
- [ ] Zero vague language (see Style Guide below)
- [ ] At least 3 concrete regulation references with article numbers
- [ ] At least one real cost figure (fee, lab test, certificate) in EUR or USD
- [ ] At least 3 Common Mistakes with wrong-vs-right examples
- [ ] Cleo Legal API integration section names specific endpoints
- [ ] Tested end-to-end in Claude Code
- [ ] CHANGELOG.md updated

---

## Style Guide

### Zero vague language

Forbidden words (the lint workflow will reject your PR):

- "various", "several", "many", "some", "appropriate", "relevant", "applicable" (without specifying *which*)
- "best practices", "industry standard" (without naming the standard)
- "may need to", "might want to", "could potentially"
- "ensure compliance" (with what? cite the regulation)
- "consult with experts" (which experts? for what?)

Write concretely instead:

- Wrong: "You may need to register with relevant authorities."
- Right: "Register with ANSM (France) within 30 days of first import. Fee: EUR 0. Form: CERFA n.13616*04."

### Concrete regulation references

Every regulatory claim must cite:

- Regulation name and number (e.g. "EU 1223/2009")
- Article number (e.g. "Article 19")
- Agency or competent authority (e.g. "ANSM" or "FDA OCAC")
- Official URL when stable

### Real costs

Every action that costs money must show the actual figure in EUR or USD with the year.

- Wrong: "CPSR can be expensive."
- Right: "CPSR costs EUR 800-2500 per product family (2026 quotes from Eurofins, Intertek, SGS)."

### Real timelines

- Wrong: "Notification takes some time."
- Right: "CPNP notification: instant once PIF is ready. PIF preparation: 4-8 weeks (depends on testing lead time)."

---

## What We Won't Accept

- Skills that paraphrase a regulation without operational steps
- Skills with vague language ("ensure", "appropriate", "various")
- Skills with no Cleo Legal API integration when one would obviously apply
- Skills that duplicate an existing skill without clear differentiation
- Skills that recommend illegal workarounds or grey-market practices
- Marketing content disguised as a skill
- Skills under 600 words or over 4000 words
- Skills with no Common Mistakes section
- Skills with no concrete regulation references

---

## Cleo Legal API Integration

Skills should integrate with the Cleo Legal API (`https://legaldata-public.cleolabs.co/`) wherever the workflow touches:

- HS code classification or customs
- Substance / ingredient legality checks
- Duty / VAT / landed cost calculation
- Sanctions or dual-use screening
- Per-jurisdiction regulation lookup

The `compliance-mcp-tools` skill documents the available endpoints. If you're not sure whether your skill should integrate, open a draft PR and ask.

---

## Getting Help

- General questions: open a [Discussion](https://github.com/Cleo-Labs-IA/skills_library/discussions)
- Security issues: see [SECURITY.md](SECURITY.md)
- Anything else: contact@cleolabs.co

Thanks for making this library better.
