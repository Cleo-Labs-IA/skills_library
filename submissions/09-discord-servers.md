# Submission #9 — Discord Server Posts (8 servers)

**When:** Week 2 (Jun 8 – Jun 14), staggered across days.
**Rules of thumb:** Lurk 24h before posting in any new server. Read pinned messages. Engage in 3 other threads before posting your own. Never DM mods asking permission unless rules say to.

**Per server:** Channel, post timing, exact message text.

---

## Server 1 — Anthropic Discord

**Server invite:** https://discord.gg/anthropic (verify current invite via anthropic.com/discord)
**Channels:** `#showcase` (primary), `#plugins` (secondary), `#general` (if no plugin channel exists)
**Best time:** Wednesday 10:00 AM PT (post-launch day momentum)
**Lurk-before-post:** 48h (this is the most important server — get the culture right)

### Pre-post tasks
- React to and reply substantively to 5 other showcase posts.
- Read the last 100 messages in #showcase to learn the format.

### Message text

```
Just open-sourced **skills_library** — a 28-skill bundle for product compliance (cosmetics, food, electronics, toys, textiles, packaging).

Built for D2C brands shipping internationally. The skills auto-trigger on natural-language compliance questions and return cited answers from a regulatory dataset (Cleo Legal API — free tier, 50 calls/day).

**Repo:** https://github.com/Cleo-Labs-IA/skills_library
**Walkthrough:** https://cleo-labs-ia.github.io/skills_library/

A few things that might be useful for other skill builders here:
- Skill descriptions are written job-to-be-done style — adoption 10x'd vs slash-command framing
- Three skills use parallel agent dispatch (one per jurisdiction) for multi-market scans
- Skills wrap an MCP server, so the data layer ports to Cursor / Continue / Claude Desktop with no rewrite

Anthropic plugin registry PR is open: [link to PR once opened]

Open to feedback, especially on the multi-skill chaining pattern in `compliance-audit-sprint` — feels janky to me, would love to see how others structure it.

— Naomie (Cleo Labs, Paris)
```

### Follow-up
- Respond to every reply within 1 hour.
- If alexalbert__ or another Anthropic team member replies, engage thoughtfully and ask one specific question (about registry timing or DevRel best practices).

---

## Server 2 — Claude Builders / Claude Code Community

**Server invite:** Find via Anthropic Discord pinned link OR https://claudebuilders.com
**Channels:** `#projects` (primary), `#feedback` (secondary)
**Best time:** Tuesday 11:00 AM PT
**Lurk-before-post:** 24h

### Message text

```
Hey builders — sharing what I just shipped in case useful as a reference.

**skills_library** — 28 Claude Code skills for product compliance. MIT licensed, free.
https://github.com/Cleo-Labs-IA/skills_library

A few engineering decisions I want to share that might save you time:

1. **Skill description frontmatter is everything.** Spent more time on the descriptions than on the actual prompts. Auto-trigger reliability went from ~60% to ~95% by rewriting them job-to-be-done style.

2. **MCP server lives separately from the skills.** The MCP is the data layer (Cleo Legal). The skills are the discovery + orchestration layer. Means the same MCP works in Cursor / Continue / Claude Desktop — only the skill bundle is Claude-native.

3. **Parallel sub-agents for multi-jurisdiction scans.** Used `superpowers:dispatching-parallel-agents` in three skills. One agent per jurisdiction, results aggregated. Cut multi-market scan time from ~100s to ~25s.

4. **Tier-based skill organization.** 6 tiers, 28 skills. Tier 1 are everyday workflows. Tier 5 are vertical (cosmetics, food, etc.). Helps users discover. README maps the tiers.

Looking for feedback on:
- How are you handling skill-to-skill chaining when a Tier 1 skill needs to call a Tier 5 one?
- Anyone shipped 20+ skill bundles? At what count does the bundle become hard to maintain?

Roast freely. I am here.
```

---

## Server 3 — Indie Hackers Discord (or Slack)

**Server invite:** https://www.indiehackers.com/discord (verify; IH historically used a Slack but moved to Discord)
**Channels:** `#show-and-tell` (primary), `#open-source`
**Best time:** Monday 09:00 AM PT
**Lurk-before-post:** 24h

### Message text

```
**Show and tell: I open-sourced the core IP of our €5k MRR startup.**

I run Cleo Labs (Paris). We sell a regulatory data API to D2C brands at €349/mo. ~14 paying customers, ~€5k MRR.

This week we open-sourced our 28 Claude Code skills — the "frontend" of the API — under MIT.

Why: the moat is the regulatory data (13 primary sources, daily updates), not the prompts. Anyone can write "check if this ingredient is legal in California" — almost no one can answer it accurately because the data is fragmented. We kept the data paid. Gave away the wrapper.

Funnel math:
- 1,000 GitHub stars → 5,000 installs → 1,000 free API signups → 100 paid at €349/mo
- = €34,900 MRR from a free distribution channel

Week 1 numbers (open-sourced last Wednesday):
- ⭐ Stars: [fill in]
- 📥 Installs (rough estimate): [fill in]
- 🆓 Free API signups: [fill in]
- 💸 Paid conversions: [fill in]

Repo: https://github.com/Cleo-Labs-IA/skills_library
API: https://legaldata-public.cleolabs.co
DISTRIBUTION.md in the repo has the full 90-day plan if you want to peek at the GTM.

Two real asks for this server:
1. **Has anyone here open-sourced their SaaS frontend and tracked conversion?** I have the funnel math but no live data points from peers. Would love benchmarks.
2. **Pricing tier debate:** free (50 calls/day) → Pro (€349/mo). Gap feels wide. Should I add a Starter at €99? Or does it just dilute?

I am in the channel all week, happy to share more numbers honestly.
```

---

## Server 4 — Vercel Community

**Server invite:** https://vercel.com/discord
**Channels:** `#showcase` (primary), `#help-projects`
**Best time:** Thursday 10:00 AM PT
**Lurk-before-post:** 48h (Vercel Discord is large and active; respect the noise floor)

### Message text

```
Sharing what we just shipped — fits Vercel's audience even though it's a CLI tool, not a webapp:

**skills_library** — 28 Claude Code skills for product compliance. The landing page is hosted on GitHub Pages but the dashboards / docs are Vercel:
- Landing: https://cleo-labs-ia.github.io/skills_library/
- Docs (Vercel): https://docs.cleolabs.co/
- API dashboard (Vercel): https://legaldata-public.cleolabs.co/

A few Vercel-relevant notes:
- Docs site is Nextra on Vercel. Build time 4s. ISR works perfectly for the daily-changing regulatory pages.
- Edge Functions handle the API rate limiter (50 calls/day free tier). Cold start under 50ms — much better than the Lambda version we tried first.
- OG image generation via @vercel/og for every skill — gives us 28 pre-rendered share images for social.

Open-source: github.com/Cleo-Labs-IA/skills_library
Architecture write-up: [link to dev.to post once published]

If anyone is interested in the Vercel Edge Functions setup for rate-limiting an API like ours, happy to share the code patterns we use.
```

---

## Server 5 — Latent Space Discord

**Server invite:** https://latent.space/discord (verify via newsletter footer)
**Channels:** `#projects` (primary), `#agents` (if exists)
**Best time:** Tuesday 09:00 AM PT
**Lurk-before-post:** 48h (Latent Space audience is technical and demanding)

### Message text

```
Sharing — fits the agents / skills / MCP discussion that's been active here:

**skills_library** — 28 Claude Code skills for product compliance, wrapping an MCP server (Cleo Legal MCP).

A few things that might interest this audience:

**1. Skills vs MCP — we ship both.**
The MCP server is the data layer (substance checks, customs HS, sanctions screening). The skills are the discovery + orchestration layer. We chose to ship skills for Claude-native users because skills auto-trigger on natural-language prompts — users don't have to know to call a specific tool. The MCP works in Cursor / Continue / Claude Desktop for users who prefer explicit tool calls.

**2. Parallel agent dispatch for multi-jurisdiction scans.**
Three skills use `superpowers:dispatching-parallel-agents`. User asks "can I sell this in EU + US + JP + KR?" — four sub-agents fire in parallel, each loaded with the right vertical skill. Cuts time from ~100s to ~25s. Cleanest real-world parallel-agent use case we've shipped.

**3. Benchmarked retrieval accuracy on 200 regulatory questions.**
Claude Sonnet 4.6: 96% retrieval-with-citation. GPT-4o: 91%. Haiku 4.6: 88%. Llama 3.3 70B: 79%. Methodology + benchmark code in /benchmarks. Disagree? PR welcome.

Repo: https://github.com/Cleo-Labs-IA/skills_library (MIT)

Looking for feedback on:
- Better patterns for skill-to-skill chaining (our current one feels janky)
- Whether anyone has shipped MCP + skill bundles side-by-side and seen interesting failure modes from the dual surface
- @swyx / @alessio — would love your take on the skills-as-distribution thesis

— Naomie, Cleo Labs (Paris)
```

---

## Server 6 — DTC Newsletter Discord (or Slack)

**Server invite:** https://dtcnewsletter.com/community (verify; some D2C communities are paid Slack)
**Channels:** `#tools`, `#general`
**Best time:** Wednesday 14:00 ET (when D2C founders check Slack between meetings)
**Lurk-before-post:** 24h

### Message text

```
For DTC founders shipping internationally — sharing a free tool we built that handles compliance.

We sell a regulatory data API (€349/mo Pro tier) to D2C brands. Customers were the ones telling us: "the questions we ask you are the same 28 every time." So we open-sourced 28 AI skills that wrap our API and answer those questions in 8 seconds.

**Free for everyone.** MIT licensed. Optional Pro tier if you use it heavily.

What it handles for DTC specifically:
- **EU GPSR** — enforcement in full swing since Dec 2024. Auto-generates the Responsible Person setup, Technical File template, and Risk Assessment skeleton for any product category.
- **Amazon EU compliance** — what the platform asks for per ASIN.
- **Shopify cross-border** — the marketplace-compliance skill maps Shopify to required docs per destination.
- **Etsy + EU buyers** — same.
- **INCI / substance checks** — for cosmetics brands.
- **Allergen + nutrition labeling** — for food brands.
- **CE marking + Cyber Resilience Act** — for electronics.
- **EN71 + CPSIA** — for toys.

**Real example:** "Can I sell my retinol serum on Amazon Germany?" → cited verdict (yes, with these 3 conditions), compliance cost estimate (€1,500–4k), time-to-comply (2–4 weeks).

Repo: https://github.com/Cleo-Labs-IA/skills_library
Free API: https://legaldata-public.cleolabs.co (no card)

What I'd love from this community:
- Which compliance question costs you the most time today?
- Has anyone shipped EU GPSR compliance? How long did it take?

I'm Naomie (founder). I'm in this channel through Friday answering anything.
```

---

## Server 7 — MCP Community / Model Context Protocol Discord

**Server invite:** https://modelcontextprotocol.io/discord (verify; may be hosted on the Anthropic server or have its own)
**Channels:** `#servers`, `#showcase`
**Best time:** Monday 11:00 AM PT
**Lurk-before-post:** 48h

### Message text

```
Sharing — **Cleo Legal MCP**, a regulatory-data MCP server for compliance agents.

5 tools exposed:
- `substance_check` — CAS → 13 regulatory databases → per-jurisdiction verdict
- `customs_classify` — product description → HS code + duty estimate
- `sanctions_screen` — entity → EU/US/UK/UN sanctions lists
- `regulation_lookup` — fetch primary regulation text by reference
- `signal_search` — search recalls, bans, label changes for a substance/product/country

**Architecture decisions worth discussing:**
- All tools return structured JSON with citation URLs. Never raw text. Makes it easier for agents to build secondary reasoning.
- Rate limited at the API edge (50 calls/day free, €349/mo Pro). Limit is per-API-key, not per-IP.
- Tools accept partial inputs and return what they can — agent doesn't have to provide complete schema. Improves multi-turn workflows.
- Server is stateless. Caching is upstream (Vercel Edge).

**Companion:** skills_library — 28 open-source Claude Code skills that wrap this MCP for compliance workflows. https://github.com/Cleo-Labs-IA/skills_library

**Repos:**
- MCP: https://github.com/Cleo-Labs-IA/cleo-legal-mcp
- Skills: https://github.com/Cleo-Labs-IA/skills_library

**Install (any MCP-compatible client):**
`npx -y @cleolabs/legal-mcp`

Two questions for the community:
1. How are you handling rate-limited MCP servers in agent frameworks? We return a structured `rate_limited` response — agent retries with backoff. Working well so far but curious about other patterns.
2. Anyone built an MCP server with a hosted SaaS backend and want to compare go-to-market notes? This is the first compliance MCP I know of with a paid tier. Would love peer benchmarks.
```

---

## Server 8 — OpenAI Developer Discord

**Server invite:** https://discord.gg/openai (verify; OpenAI runs an active dev community)
**Channels:** `#showcase` or `#tool-use`
**Best time:** Thursday 09:00 AM PT
**Lurk-before-post:** 48h

### Message text

```
Cross-posting because the MCP layer is model-agnostic — sharing for OpenAI Responses API / Assistants builders:

**Cleo Legal MCP** — regulatory-data MCP server. Works with any MCP-compatible client (including OpenAI's MCP support).

5 tools for compliance use cases:
- Substance / ingredient checks (cosmetics, food, electronics)
- Customs HS classification + duty estimation
- Sanctions screening
- Primary regulation text lookup
- Regulatory signal search

Architecturally interesting: the server is one thing, the **client-side bundle** is another. For Claude Code users, we ship 28 skills that auto-trigger on natural-language compliance questions (the bundle is `skills_library` at https://github.com/Cleo-Labs-IA/skills_library).

**For OpenAI Responses API users:** the MCP server alone is what you need — your agent picks the right tool from the 5 on the server.

**Benchmark on 200 regulatory questions:**
- GPT-4o: 91% retrieval-with-citation accuracy
- Claude Sonnet 4.6: 96%
- Haiku 4.6: 88%

So GPT-4o is competitive. Worth a try if you build compliance agents on OpenAI.

**Install:**
`npx -y @cleolabs/legal-mcp`

**Free tier:** 50 calls/day at https://legaldata-public.cleolabs.co (no card).
**Pro:** €349/mo.

If anyone is building compliance / RegTech on OpenAI and wants to swap notes — I'm Naomie, contact@cleolabs.co.
```

---

## Universal posting checklist (per server)

Before posting in any of the 8 servers:

- [ ] Lurked at least 24h (Anthropic / Latent Space / Vercel / MCP: 48h)
- [ ] Engaged substantively in at least 3 other threads in the past week
- [ ] Read all pinned messages in the target channel
- [ ] Read at least the last 50 messages in the target channel
- [ ] Confirmed self-promo is allowed in this channel (most #showcase / #projects channels allow; #general usually does not)
- [ ] Tailored the message to the server's culture (engineering depth for Latent Space; founder story for IH; D2C pain for DTC Newsletter)
- [ ] Repo link works in incognito (cold check)
- [ ] Free signup tested in incognito (cold check)

---

## Post-post engagement (per server)

- **First 30 minutes:** stay in the channel, ready to reply.
- **First 6 hours:** respond to every comment within 1 hour.
- **First 48 hours:** check the channel twice daily.
- **Beyond 48h:** the post is buried. Move on. Do NOT repost.

---

## Notes for Naomie

- **Vercel and Latent Space are technical audiences.** Lead with engineering decisions, not founder story.
- **Indie Hackers and DTC Newsletter are buyer/founder audiences.** Lead with the funnel math and the pain.
- **Anthropic and MCP Community are platform audiences.** Lead with how we use the platform well.
- **OpenAI Discord is competitive territory.** Be respectful — you're shipping on a competitor's tool but pitching a model-agnostic MCP layer. That's a legitimate cross-post.
- **Personal voice notes:** the "engineering decisions worth discussing" framing for Latent Space and MCP feels right for you. Stay in that mode.
- **If a server has a #show-and-tell-introductions channel for new members, post there first** before posting in the main showcase. Some servers require this.
- **Don't post the same content in 8 servers within 24h.** Spread over 5–7 days. Discord users overlap heavily; coordinated posting is detected.
