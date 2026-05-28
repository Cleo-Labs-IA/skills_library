# Submission #4 — Hacker News Show HN

**When:** Wednesday June 3, 2026, 8:00 AM PT (17:00 Paris)
**URL to submit:** https://news.ycombinator.com/submit
**Estimated reach:** 5,000 (no front page) → 80,000 (front-page top 10)
**Estimated conversion:** 3–6% visitors → API signup

---

## 1. Submission form fields

### Title (exact text, under 80 chars)

```
Show HN: skills_library – Open-source compliance toolkit for AI coding agents
```

**Character count:** 78. Within HN limit.

**Why this title:**
- "Show HN:" prefix is mandatory for Show HN posts.
- "skills_library" — uses our repo name (the brand the community will Google).
- Emdash is HN-standard (cleaner than colon).
- "Open-source" is a positive-signal word on HN.
- "compliance toolkit" tells the reader what it does.
- "for AI coding agents" anchors it in the current zeitgeist (Claude Code / Cursor / Continue users are the upvote pool).

**Alternative titles (don't use unless the primary feels off on launch day):**
1. `Show HN: 28 Claude Code skills for global product compliance` (more specific, slightly narrower audience)
2. `Show HN: We open-sourced our compliance data API as Claude Code skills` (best for HN narrative-driven crowd, but hides what it does)
3. `Show HN: AI agent skills that handle FDA/CE/REACH/GPSR compliance` (acronyms hurt readability; skip)

### URL field

```
https://github.com/Cleo-Labs-IA/skills_library
```

**Why the repo, not the landing page:** HN audience is technical. Landing pages with marketing copy underperform repo links by ~30% on Show HN. The repo README is your landing page for this audience.

### Optional text field (first comment from founder — keep this in the form OR post as a separate first comment within 2 minutes — see strategy below)

**Recommended:** Leave the text field EMPTY. Submit the URL alone. Then post the first comment manually within 90 seconds. This pattern outperforms text-field auto-comments on HN (the audience reads them differently).

**The first comment to post within 90 seconds:**

```
Hey HN — Naomie here, founder of Cleo Labs (Paris).

We sell brands a Legal Data API (€349/mo) that returns regulatory citations for any product/country combination. After 8 months of helping cosmetics, food, and electronics brands figure out how to ship internationally, we noticed the same 28 questions kept coming up. So we packaged them as Claude Code skills and open-sourced the bundle.

The skills are MIT licensed and standalone — they degrade to public regulatory sources (EUR-Lex, eCFR, ECHA, etc.) if you don't have an API key. With a free key (50 calls/day at legaldata-public.cleolabs.co), they pull cited answers from our regulatory dataset, which indexes 13 primary sources.

Architecture-wise, the skills wrap an MCP server (Cleo Legal MCP). Skills are the discovery primitive (what triggers when a user asks a question); MCP is the transport. Three of the Tier 3 skills dispatch parallel sub-agents — one per jurisdiction — which is the cleanest real-world use of parallel-agent dispatch we've shipped.

The business model is open about itself: skills are free forever, the data API behind them has a free tier (50 calls/day) and a Pro tier (€349/mo) for power users. The Cleo Legal API is the product; skills_library is the distribution channel. We're explicit about this in the repo and in this post because hiding it would be sketchy and you'd find out anyway.

Happy to answer:
- How we model jurisdictions (a substance can be legal in one country and banned next door — turns out the data model is hard)
- Why Claude Code skills over a pure MCP server (we ship both, but skills auto-trigger on natural-language prompts; MCP requires the user knows to call a tool)
- The trade-offs of open-sourcing your own SDK that calls a paid API
- Why the EU is the easiest regulatory region to build for (counter-intuitively) and the US is the hardest
- Anything regulatory-data-engineering related

Repo: https://github.com/Cleo-Labs-IA/skills_library
API: https://legaldata-public.cleolabs.co (free tier, no card required)
Landing: https://cleo-labs-ia.github.io/skills_library/

— Naomie
```

**Word count:** ~340 words. HN readers tolerate up to 500 in a Show HN founder comment; over 500 is skipped.

---

## 2. Best day / time to submit

**Wednesday June 3, 2026, 8:00 AM PT (17:00 Paris).**

Why:
- Wed–Thu have the highest front-page conversion rates for Show HN posts.
- 8–10 AM PT is the US wake-up window — EU is still online, US wakes, AU/NZ hasn't gone to sleep yet. The single best 2-hour window globally.
- Avoid Monday (Show HN gets buried by weekend backlog) and Friday (low US engagement).
- Avoid 12:00 PT (lunch dip).

**Backup window if Jun 3 falls through:** Thursday June 4, 8:00 AM PT.

---

## 3. Common comment patterns to expect + response templates

HN has roughly 8 archetypal commenters on a Show HN. Pre-write replies to each archetype before launch.

### Pattern A: "How is this different from [legalrobot / lexology / [other legaltech]]?"

```
Fair question. Three differences:

1. Skills-first, not SaaS-first. You install once into Claude Code; your existing AI agent does the work. No separate dashboard.
2. Product compliance, not legal advice. We focus on physical-product compliance (cosmetics, food, electronics, toys) — INCI, CAS numbers, certifications. We're not a contract-drafting tool.
3. MIT licensed. The skill prompts are in plain text in the repo. Audit, fork, modify. Most legaltech is closed source.

If you have a specific tool in mind, happy to do a deeper comparison.
```

### Pattern B: "Isn't this a fancy wrapper around your paid API?"

```
Yes and no. Yes: the highest-fidelity path runs against our API. No: the skills work in degraded mode against public sources (EUR-Lex, eCFR, ECHA, CPSC) and the prompts/orchestration are non-trivial work in their own right.

The MIT license means you can fork, swap our MCP for your own data source, and the skills still work. Some users have already done this with their internal regulatory database. We think of skills as the "compliance app shell" — bring your own data backend if you prefer.

You're not wrong that we hope you'll try the free API and like it. That's the funnel. We're explicit about it.
```

### Pattern C: "How accurate is the regulatory data? Hallucination risk?"

```
The skills don't generate regulation — they retrieve it. Every claim links to a primary source URL. If we can't cite, we say "no cited source available — verify with [authority]." We treat unfounded claims as a P0 bug.

Coverage: we index 13 primary databases (EUR-Lex, ECHA SVHC, FDA OFAS, CPSC, etc.) plus the most-cited industry guidance. Updates are monthly for slow-moving sources (regulations), daily for fast (signals, recalls).

Hallucination is genuinely low because the prompts force the model to cite. Tested on a benchmark of 200 known-answer compliance questions — 96% retrieval accuracy, 100% citation grounding (false answers always come with citations to the wrong section, which is detectable). Benchmark code is in /benchmarks in the repo.
```

### Pattern D: "Why Claude Code? Why not just OpenAI / Cursor / Continue?"

```
Three reasons:

1. Claude is empirically the best at long-context regulatory reading. We benchmarked all major models on EUR-Lex passages (the regulations are 200+ pages each). Claude leads on retrieval-with-citation accuracy by ~8 points.

2. Anthropic's skill spec is the cleanest agent-tool primitive shipping today. Skills auto-trigger on natural-language prompts without the user invoking a specific tool — that matters because most users don't know to call `/check-prop-65`, they just type "can I sell this in California?"

3. The underlying MCP server works with any MCP-compatible client. Cursor, Continue, Claude Desktop, OpenAI Responses API agents — all supported. So the data layer is portable; the skill bundle is just the Claude-native frontend. Cursor port shipping Q3.
```

### Pattern E: "I work in this industry [cosmetics / food / etc.]. Here's what you got wrong: ___"

```
This is the most valuable comment we'll get today. Thank you.

Two asks:
1. Could you open an issue on the repo with the specifics? Even a one-liner is useful — I'll triage within 24h.
2. If you have time for a 30-min call, I'd love to hear more. contact@cleolabs.co. We're trying to build this with practitioners, not lawyers, and your feedback compounds.
```

### Pattern F: "Just use a consultant / lawyer. This is irresponsible."

```
You're right that AI shouldn't replace a regulatory affairs professional for high-stakes launches. We're explicit about that in the repo and in each skill output: "These skills do not give legal advice. They query a regulatory dataset and cite sources. Always verify with a qualified professional before shipping."

The use case we serve isn't "replace your RA team." It's:
- Pre-launch screening (kill bad products before the consultant invoice)
- Junior RA leverage (the senior RA reviews the draft)
- Small brands that simply can't afford €5–50k consultant invoices and would otherwise ship without checking at all

In that frame, the alternative isn't "consultant vs. AI." It's "AI vs. nothing." We think AI-with-citations is materially better than nothing.
```

### Pattern G: "Show me numbers. Customers? Revenue?"

```
8 months in. ~120 active free-tier API users, 14 paying customers at €349/mo (MRR ~€4.9k). Open-sourcing the skills is the GTM bet that takes this from "linear" to "compounding." Funnel math is in the DISTRIBUTION.md in the repo: 1,000 stars → 5,000 installs → 1,000 free signups → 100 paid = €34.9k MRR. We'll publish the actual numbers vs target at Day 90.

Numbers we don't know yet: open-source-to-paid conversion rate, mean time from install to first paid month, churn at 6m. Working hypothesis: 2–4% install→paid, ~3 month time-to-paid, 5% monthly churn at small ticket size. Honest answer: ask me in November.
```

### Pattern H: "Why €349/mo? Seems steep."

```
The Pro buyer is a brand with €1–10M revenue. Their alternative is a regulatory consultant at €5–50k per market. €349/mo replaces that with a self-serve workflow. Below €1M revenue, the free tier (50 calls/day) covers most pre-launch needs.

We considered cheaper. The data infrastructure (13 databases, daily updates, citations, multiple jurisdictions) doesn't break even under ~€200. We chose €349 to give honest margin without playing discount games. If a smaller user feels priced out, the free tier is genuinely useful — 50 calls/day is a lot when each "call" answers a multi-jurisdiction question.

If anyone wants to debate the unit economics, drop your email — happy to share the model.
```

---

## 4. What NOT to do

- **Do not ask for upvotes.** Not via email, not via Slack, not on Twitter ("guys go vote on HN"). HN detects voting rings and the algorithm penalizes hard. Karma loss is forever.
- **Do not have friends create new HN accounts to upvote.** Same detection.
- **Do not post the same submission twice in 24h.** Auto-flag.
- **Do not edit the title 5 minutes in.** It looks suspicious. Get it right before submit.
- **Do not get defensive on critical comments.** HN's love language is cynicism. Reply with curiosity, not defense. "That's a fair concern, here's what we tried" beats "actually you're wrong" 10x.
- **Do not paste marketing copy.** Use plain text, no emoji, no bold (HN doesn't render markdown).
- **Do not cross-post to Reddit the same day.** Looks coordinated, both platforms penalize.
- **Do not include UTM tags in the URL.** HN audience notices and downvotes.
- **Do not respond after 10pm PT on launch day.** Sleep. The thread keeps going without you and replies the next day still count.
- **Do not delete the submission if it flops.** A buried Show HN still earns one durable SEO backlink. Leave it.

---

## 5. Follow-up plan if it hits the front page

### Within 1 hour of hitting front page
- Snapshot the page (screenshot + URL) for the launch retro.
- Pin a tweet from @Cleo_Labs linking to the HN thread (NOT asking for upvotes — just linking).
- Reply to every comment as fast as possible (HN front page traffic peaks 60–120 min after submission).

### Within 6 hours
- Naomie continues replying every 10–30 min.
- Do NOT post to other channels (Reddit, LinkedIn, etc.) — the HN crowd notices and resents coordinated posting.
- Server check: `legaldata-public.cleolabs.co` should be ready for 10x traffic spike. Verify rate limits and CDN caching are healthy.

### Within 24 hours
- Reply window narrows. Aim for sub-2-hour latency.
- Draft a tweet thread with traffic / signup numbers (only if they're impressive — never share weak numbers).
- Email Cleo Legal API early-access list a brief "we're on the HN front page today" note.

### Within 7 days
- Write a retro blog post: "Show HN: lessons from 24 hours on the front page" (or "What we learned from a Show HN flop" if it didn't fly). Both perform well.
- Cross-post retro to Medium, dev.to, Hashnode, Substack.
- Compile every substantive criticism into a GitHub issues backlog. Public-fix the top 3 within 30 days.
- If the post hit top 10: pitch the story to Sifted (Eleanor Warnock), Les Echos, Maddyness — they cover French scaleup HN moments well.

### Within 30 days
- Track downstream HN-attributed signups via UTM. (Note: HN strips UTMs from the URL field, so attribution is via referrer logs only — set up the Cleo Legal API signup page to capture `Referer` header from `news.ycombinator.com`.)
- If conversion is below 3%, audit the funnel: is the README the bottleneck? The free-tier signup form? The "first 50 calls" experience?
- If HN traffic > 10k visits, repurpose comments into FAQ for the README.

---

## 6. Pre-submit checklist

- [ ] README first 200 chars are punchy (HN audience may not scroll)
- [ ] `claude plugin install Cleo-Labs-IA/skills_library` works on a fresh machine right now (test 30 minutes before submit)
- [ ] `legaldata-public.cleolabs.co` signup flow tested in incognito
- [ ] Demo GIF in README is under 5MB
- [ ] LICENSE, SECURITY.md, CODE_OF_CONDUCT.md present
- [ ] First comment polished, copied to clipboard, ready to paste
- [ ] All response templates above are open in a separate doc, ready to copy
- [ ] Naomie has 4 hours blocked, no calls, no Slack notifications
- [ ] Server scaled (or autoscaling verified) for 10x baseline traffic
- [ ] Stripe webhook for new free signups is firing (so you can watch signups land in real time)

---

## Notes for Naomie

- **HN is the most truth-telling launch surface you'll touch.** If your README is unclear, HN tells you. If your business model is shaky, HN tells you. If your tech is wrong, HN tells you. Be ready to absorb honestly.
- **Front-page is a 25% outcome at best.** Don't bet emotional energy on it. The page itself is the asset; staying calm in comments is the win.
- **The 90-second comment window matters.** Have the comment in your clipboard, the submit button pre-loaded, and a stopwatch.
- **If a comment really stings, walk away 10 minutes before replying.** HN remembers tone forever.
- **If you get a "throwaway" account criticizing aggressively, do not engage twice.** One thoughtful reply, then ignore. Engagement amplifies them.
