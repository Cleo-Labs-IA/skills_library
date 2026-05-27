# Hacker News Post

## Title
Show HN: Open-source compliance skills for Claude Code – check product legality across markets

## Body
We built Cleo Labs, a regulatory intelligence platform. We extracted our compliance knowledge into 28 reusable Claude Code skills.

Install: `git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply`

The problem: if you sell a physical product internationally (cosmetics, food, electronics, toys), figuring out compliance is a nightmare. Each country has different substance limits, labeling rules, certifications, and notification portals. A regulatory consultant costs $5K-20K per market.

Our skills let you ask Claude Code questions like "Is my face cream with retinol legal in the EU?" and get instant, specific answers: retinol max 0.3% body/0.05% face (Annex III), CPNP notification required, need EU Responsible Person, etc.

Under the hood:
- 13 substance databases (CosIng, ECHA, REACH, Prop 65, FDA, EFSA, etc.)
- 13 substance databases with regulatory limits per jurisdiction
- Country-specific labeling rules (EU, US, UK, Japan, Korea, Canada)
- HS code classification and landed cost calculation
- Multi-agent architecture (parallel market scans)

Built from real production compliance workflows.

Limitations: this is compliance guidance, not legal advice. You still need a safety assessor to sign off your CPSR. But it eliminates weeks of research.

MIT licensed. PRs welcome.

https://github.com/Cleo-Labs-IA/skills_library
