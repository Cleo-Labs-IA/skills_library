# Submission #5 — Reddit Posts (15 subreddits)

**Strategy:** Never the same post twice. Each subreddit has its own culture; ignore that and your post is auto-removed or sinks.
**Cadence:** Maximum 2 subreddits per week. Spread across 3 weeks.
**Tracking:** Spreadsheet — sub, posted date, URL, status, comments, signups attributed.

**Universal anti-patterns:**
- Never post the repo link in the body if the sub bans self-promo (most do). Use a pinned founder comment for the link.
- Never cross-post within 48h to overlapping subs (Reddit's spam filter catches it).
- Always engage in 3 other threads in the sub before posting your own.
- Never DM upvote-asks. Reddit detects and bans.

---

## Post 1 — r/ClaudeAI (180k members)

**Best time:** Tuesday 10:00 AM PT
**Angle:** Technical builder — how we built it, why skills + MCP
**Link policy:** Link in body OK
**Flair:** Project / Show & Tell

### Title

```
I built 28 Claude Code skills for product compliance — auto-trigger pattern + parallel agent dispatch
```

### Body

```
Hey r/ClaudeAI — wanted to share what we just shipped and some technical notes for anyone building skill bundles.

**What it is:** 28 Claude Code skills for product compliance (cosmetics, food, electronics, toys, textiles). Brand sells a serum in California? The right skill triggers, queries a regulatory dataset, returns a cited verdict with MoCRA + Prop 65 citations in 8 seconds.

**Repo:** github.com/Cleo-Labs-IA/skills_library
**MIT licensed, free forever.**

**Three things I learned that might be useful:**

**1. Auto-trigger > slash commands for non-technical users.**
We initially built these as slash commands. Adoption was zero because the buyers (D2C founders, not devs) don't know to type `/check-substance`. Switched to skill auto-trigger on natural-language prompts and adoption 10x'd. The skill description in the frontmatter does the heavy lifting — write it like a job-to-be-done, not like a tool description.

**2. Parallel agent dispatch is huge for jurisdiction scans.**
Three of our Tier 3 skills (`multi-jurisdiction-scan`, `compliance-audit-sprint`, `evidence-blitz`) use `superpowers:dispatching-parallel-agents`. One sub-agent per jurisdiction. The user asks "can I sell this in EU + US + JP + KR?" and four agents run in parallel, each with the right vertical skill loaded. Result comes back in ~25s instead of 100s.

**3. MCP as the data layer, skills as the discovery layer.**
We ship both an MCP server (Cleo Legal MCP — substance checks, customs, sanctions) and the skill bundle. The skills wrap the MCP. This separation lets the same data backend work in Cursor, Continue, Claude Desktop, and Claude Code — only the skill layer is Claude-specific. Means we can port the bundle later without rewriting the data layer.

**Architecture diagram:** see ARCHITECTURE.md in the repo.

**Asking for:**
- If you build skills, what's the cleanest pattern you've found for skill-to-skill chaining? Ours feels janky.
- Anyone shipped a skill bundle to the Anthropic plugin registry yet? Want to compare notes.
- General feedback — install is one command, would love to know if anything breaks.

Happy to answer anything.
```

### Comment strategy if it gains traction
- Pin a founder comment with the API link (`legaldata-public.cleolabs.co`) once thread has 10+ upvotes.
- Reply to every comment within 2 hours.
- If asked about Anthropic plugin registry status, link to the open PR.
- Don't link to the landing page in the body — repo only. Landing in pinned comment.

---

## Post 2 — r/LocalLLaMA (350k members)

**Best time:** Wednesday 9:00 AM PT
**Angle:** Open-source agent capability — runs locally if you want
**Link policy:** Link OK if substantive
**Flair:** Resources / Other

### Title

```
Open-source: 28 Claude Code skills for product compliance (works with local models too)
```

### Body

```
Sharing in case useful — we open-sourced 28 Claude Code skills for product compliance under MIT.

**Repo:** github.com/Cleo-Labs-IA/skills_library

**Why posting in r/LocalLLaMA:**
The skill prompts are plain text. The MCP backend speaks the standard MCP protocol. So the bundle works against:
- Claude (intended)
- Local models via Ollama + an MCP-compatible client (Continue, LibreChat, etc.)
- Any OpenAI-compatible endpoint with a wrapper

The data layer (Cleo Legal MCP — regulatory citations, substance checks) is the only thing that's external. Free tier is 50 calls/day, no card. You can also self-host an alternative data source — the skills are agnostic to which MCP they call.

**Skill list:**
28 skills across cosmetics, food, electronics, toys, textiles, packaging. Tier 1 covers core workflows (substance check, labeling, market entry). Tiers 4-5 are vertical-specific.

**Tested model performance:**
We benchmarked Claude Sonnet 4.6, Haiku 4.6, GPT-4o, Llama 3.3 70B, and Mixtral 8x22B on a 200-question regulatory benchmark. Retrieval-with-citation accuracy:
- Sonnet 4.6: 96%
- GPT-4o: 91%
- Haiku 4.6: 88%
- Llama 3.3 70B: 79%
- Mixtral 8x22B: 71%

Benchmark code in /benchmarks/. Disagree with our methodology? PRs welcome.

**Asking for:**
- If you've shipped skill bundles for local agents, how do you handle skill discovery without Claude's auto-trigger?
- Anyone want to test against a smaller local model and PR the results to the benchmark?
- Roast the architecture if there's something obviously wrong.

License: MIT. Run it on whatever you want.
```

### Comment strategy
- This sub values technical depth. Don't promote. Engage on the benchmark methodology.
- If someone says "post your prompts" — link them directly to `/skills/[skill-id]/SKILL.md` paths.
- Avoid mentioning "€349/mo Pro" unless explicitly asked. r/LocalLLaMA is allergic to paid SaaS pitches.

---

## Post 3 — r/Anthropic (25k members)

**Best time:** Monday-Thursday, any time
**Angle:** Anthropic skills ecosystem — meta-question about plugin registry
**Link policy:** Link in COMMENT only
**Flair:** Discussion

### Title

```
Anyone else shipping skill bundles to the plugin registry? Comparing notes on submission format
```

### Body

```
We just submitted a 28-skill bundle (open-source, MIT) to the Anthropic Claude Code plugin registry. The submission process raised a few questions I'd love community input on:

1. **claude-plugin.json schema:** the docs cover the basics but I couldn't find guidance on multi-MCP bundles. We have two optional MCP servers in our config. Did anyone find a canonical example?

2. **Auto-trigger description style:** is there a written best-practice? We iterated heavily on the frontmatter description to make skills auto-fire correctly. Anthropic's example skills are short; ours ended up ~150 chars to disambiguate between Tier 1 ("product-compliance") and Tier 5 ("cosmetics-compliance"). Curious how others handle skill overlap.

3. **Plugin registry review SLA:** how long did your PR sit before review? Trying to set expectations internally.

4. **Hosting the demo GIF:** does the registry mirror assets or hot-link to the repo? Ours is ~3MB.

(I'll drop the repo link in a comment so this doesn't read as self-promo — the question is real, not the pitch.)
```

### Pinned founder comment (post 2 minutes after the main post)

```
For context, the bundle is at github.com/Cleo-Labs-IA/skills_library — 28 skills for product compliance. Sharing the link here so the post stays a question, not a pitch.

Mostly looking for community wisdom on the registry submission format. Happy to share what worked (and what didn't) on our side once we have more data.
```

### Comment strategy
- Lead with curiosity, not promotion.
- If Anthropic staff comment (alexalbert__, etc.) reply within minutes — this is a recruiting moment for DevRel attention.
- Don't link the API or landing page anywhere. Repo only.

---

## Post 4 — r/entrepreneur (3M members)

**Best time:** Monday 7:00 AM ET
**Angle:** "We open-sourced our core IP — here's why and what happened"
**Link policy:** NO link in body — comment only
**Flair:** Lessons Learned / Story

### Title

```
We open-sourced the core IP of our €5k MRR startup. Here's why and what we expect to happen.
```

### Body

```
8 months ago I started Cleo Labs in Paris. We sell brands a Legal Data API — regulatory citations for any product/country combo. €349/mo. Currently at ~14 paying customers, ~€4.9k MRR.

This week we open-sourced what most founders would consider our core IP: the 28 Claude Code skills that wrap our API and make it useful. MIT licensed. Free forever. Anyone can fork them, swap our backend for their own data source, and the skills still work.

Sounds insane. Let me explain why we did it.

**The realization:**
The moat in our business isn't the skills (prompts + workflow logic). The moat is the data — 13 regulatory databases indexed daily, primary sources, cited. Anyone can write a prompt that says "check if this ingredient is legal in California." Almost no one can answer that question accurately because the data is fragmented across EUR-Lex, eCFR, ECHA, FDA OFAS, CPSC, state attorneys general...

We kept the data layer paid. We open-sourced everything else.

**Why this is GTM, not philanthropy:**
Buyers (D2C founders launching products internationally) don't search for "regulatory API." They ask AI agents "can I sell this in [country]?" If our skills are pre-installed in their Claude Code, they hit our API the first time they ask. That's distribution. Free skills = distribution channel. Paid API = monetization.

Funnel math we're betting on:
- 1,000 GitHub stars → 5,000 installs (5x)
- 5,000 installs → 1,000 free API signups (20%)
- 1,000 free → 100 paid at €349/mo (10%)
- = €34,900 MRR from the open-source channel

If we hit that in 90 days, the open-source bundle is the cheapest customer-acquisition channel we'll ever build.

**What could go wrong:**
1. Someone forks, swaps in their own data, undercuts us. (Defense: data licensing + 13-source moat is real)
2. We can't convert free → paid at 10%. (Defense: we'll know by Day 30; if it's <5% we shift pricing)
3. Open-source crowd hates that we have a paid tier behind it. (Defense: be explicit and unapologetic about the model)

**What I want to know from this sub:**
- Anyone done this and have a horror story?
- Anyone done this and have it work?
- Pricing question: free tier (50 calls/day) → Pro (€349/mo). Do we need a Starter tier in between? Or does the gap force the right behavior?

I'll be in the comments all day.
```

### Pinned founder comment (post within 60 seconds of the main post)

```
Putting the links here because r/entrepreneur rightly bans link-in-body self-promo:

- Cleo Labs (the company): cleolabs.co
- The open-source bundle we shipped this week: github.com/Cleo-Labs-IA/skills_library
- The paid API: legaldata-public.cleolabs.co

Happy to answer specific numbers questions — pricing model, CAC, conversion targets — in this thread.
```

### Comment strategy
- This sub responds to honest numbers + honest concerns. Don't sanitize.
- When asked about revenue, share real numbers (already disclosed in the body).
- Pricing-question comments are gold — engage deeply. r/entrepreneur loves a debate on pricing tiers.
- Cross-link to /entrepreneur in 14 days only after the thread fully cools.

---

## Post 5 — r/smallbusiness (2M members)

**Best time:** Tuesday 8:00 AM ET
**Angle:** Practical — "save your lawyer money"
**Link policy:** Link in comment
**Flair:** Tools

### Title

```
Free AI tool: ask any product compliance question, get a cited answer instead of a lawyer invoice
```

### Body

```
For small business owners who sell physical products (cosmetics, food, electronics, toys, textiles) and have ever stared at a $5,000 lawyer invoice for a "can I sell this in [state/country]?" question:

We built an open-source AI tool that answers these questions in about 8 seconds with citations to the actual regulations. Free up to 50 questions a day, then a paid tier kicks in at $349/mo if you need more.

**What it can answer (real examples from our users):**
- "Can I sell my CBD-infused balm in Texas?"
- "Does my baby toy need lead testing for California buyers?"
- "What does my pickle jar label need to say in Germany?"
- "Do I need a 'responsible person' to sell skincare in the EU?"
- "Is my electronics product subject to the EU GPSR rules effective December 2024?"

**Important caveat:**
This is not legal advice. It's a research tool that pulls cited sources from primary regulations. You still want a real lawyer or regulatory consultant for the final sign-off on high-stakes launches. But for the first 90% of the work (figuring out what you don't know), it's faster and cheaper than a lawyer.

**Setup:**
1. Install Claude Code (Anthropic's AI coding tool) — works on macOS, Linux, Windows
2. Install our skill bundle (one command)
3. Ask your question in plain English

Not for everyone — if you're not technical and don't want to install dev tools, this might not be your fit yet. We're shipping a web version in Q3.

Will drop link in comment so this doesn't read as spam.
```

### Pinned founder comment

```
Link to the project:
- github.com/Cleo-Labs-IA/skills_library
- Free API signup (no card): legaldata-public.cleolabs.co
- Walkthrough (no install needed): cleo-labs-ia.github.io/skills_library

I'm Naomie, the founder. Happy to answer any question — pricing, accuracy, setup, anything.
```

### Comment strategy
- This sub has lots of "skeptical small business owner" energy. Lead with empathy.
- "I just lost $X to a lawyer" anecdotes will appear — sympathize first, then offer the tool as one alternative.
- Many will ask "is there a no-install web version?" Be honest: not yet, Q3.

---

## Post 6 — r/ecommerce (380k members)

**Best time:** Wednesday 9:00 AM ET
**Angle:** Sell internationally without compliance killing you
**Link policy:** Link in comment
**Flair:** General

### Title

```
Selling internationally? Free AI tool that handles compliance for cosmetics, food, electronics, toys
```

### Body

```
Cross-border compliance is the #1 silent killer of international expansion for ecommerce brands. EU GPSR (December 2024), FDA MoCRA (cosmetics), REACH (chemicals), CPSIA (toys), Prop 65 (California) — every market has its own rules and consultants charge $5k–50k to answer each question.

We open-sourced 28 AI skills that answer these questions with citations to primary regulation text. Free tier is 50 questions a day.

**The skills cover:**
- INCI ingredient checks (cosmetics)
- HS code classification + duty calculation
- Multi-market substance bans (EU REACH, US TSCA, JP PMDA)
- Label compliance (allergens, warnings, languages)
- Marketplace compliance (Amazon EU, Shopify cross-border, Etsy, TikTok Shop)
- EU Responsible Person / US Agent / UK RP requirements
- Recall response (when something goes wrong)
- Packaging EPR per EU country

**Real example output:**
User asks: "Can I sell my retinol serum on Amazon Germany?"
Tool returns:
- Verdict: ORANGE (caution)
- Reason: Retinol 0.3% is approved in EU under SCCS opinion of 2024; need a Responsible Person registered in EU (CPNP); need German-language INCI label
- Citations: EU 1223/2009 Annex III, SCCS/1639/23, German cosmetics regulation
- Estimated compliance cost: €1,500–4,000 (RP setup + label translation)
- Time to comply: 2–4 weeks

Tool is MIT licensed, free forever for the skills themselves. The paid backend is optional.

Link in comment to avoid the auto-removal.
```

### Pinned founder comment

```
Link: github.com/Cleo-Labs-IA/skills_library
Walkthrough: cleo-labs-ia.github.io/skills_library
Free API tier (50 calls/day): legaldata-public.cleolabs.co

I'm Naomie, founder. Built this because three friends abandoned launches over compliance — that frustration is what got me into this. Happy to answer anything specific to your category or your target market.
```

### Comment strategy
- "What about [my specific niche]?" is the most-asked question. Answer with the specific skill that covers it.
- If someone asks about Shopify/Amazon integration: be honest that the Shopify app is Q3, Amazon integration is roadmapped.

---

## Post 7 — r/shopify (290k members)

**Best time:** Thursday 10:00 AM ET
**Angle:** Marketplace + cross-border compliance
**Link policy:** Link in comment
**Flair:** General

### Title

```
EU GPSR is here — free tool to check if your Shopify store is compliant for EU buyers
```

### Body

```
Quick PSA + free tool announcement.

**The EU General Product Safety Regulation (GPSR) went into full enforcement in December 2024.** If you sell to EU consumers (any EU country, any volume) you need:
1. EU-based Responsible Person on file (your name in the EU)
2. Product safety documentation per SKU
3. Manufacturer + RP contact on the product label
4. Risk assessment + technical file per product category

Marketplaces are starting to enforce. Amazon EU is asking for RP info on new ASINs. Etsy has updated seller policies. Shopify itself doesn't enforce but your customers' returns / disputes will increasingly cite GPSR.

**Most Shopify sellers I talk to haven't done this yet.** Not because they don't want to — because the info is fragmented and consultants quote €2k–8k per product to set up.

**We open-sourced a tool that auto-generates the GPSR compliance docs for any product category.** 28 Claude Code skills, MIT licensed, free to use. Specifically:
- `marketplace-compliance` — Amazon EU, Shopify, Etsy, TikTok Shop requirements
- `responsible-person` — RP setup per market with cost estimates
- `labeling-compliance` — what your label needs to say in each language
- `recall-response` — what to do when (not if) you get a Safety Gate alert

Works against your existing product data (or you can paste a single SKU and get a per-SKU compliance report).

**Caveat:** This is research/draft assistance, not legal advice. The output is a draft you give to your RP or lawyer to finalize. Cuts the legal hours from ~10 to ~1.

Link to repo in comment.
```

### Pinned founder comment

```
Link: github.com/Cleo-Labs-IA/skills_library
Free API tier: legaldata-public.cleolabs.co (no card)
Walkthrough: cleo-labs-ia.github.io/skills_library

Specifically for Shopify folks:
- Shopify app integration is on the Q3 roadmap (so you can run this against your product catalog directly)
- If you want early access to the Shopify app beta, DM me

I'm Naomie, founder, contact@cleolabs.co
```

### Comment strategy
- "How does this compare to [Shopify compliance app]?" — answer factually, don't trash competitors.
- Sellers will share their specific compliance horror stories. Use these as evidence to push them to the tool.

---

## Post 8 — r/d2cmarketing (search for active sub — may be r/d2c or r/DTC)

**Best sub variant:** r/d2c (18k members) — verify activity before posting
**Best time:** Tuesday 11:00 AM ET
**Angle:** D2C compliance story — founder narrative
**Link policy:** Link OK in body
**Flair:** Discussion

### Title

```
The compliance problem killing D2C launches and what we're doing about it
```

### Body

```
Spent 8 months talking to D2C founders launching internationally. The pattern is brutal:

1. Founder builds great product. Sells well in home market.
2. Tries to expand to EU (or US, or wherever).
3. Hits compliance. GPSR. MoCRA. REACH. CE marking. CPSIA. Pick your acronym.
4. Lawyer quotes €5k–50k per market. 
5. Founder either: (a) gives up, (b) ships without compliance and hopes (until they get a Safety Gate alert), or (c) goes broke paying lawyers.

I run Cleo Labs (Paris). We sell a regulatory data API to brands that helps them answer compliance questions in seconds instead of weeks. This week we open-sourced 28 Claude Code skills that wrap the API.

**Repo (MIT licensed):** github.com/Cleo-Labs-IA/skills_library
**Live walkthrough:** cleo-labs-ia.github.io/skills_library
**API free tier (50 calls/day):** legaldata-public.cleolabs.co

**Why I'm posting here, not on a tech sub:**
The people who feel this pain aren't devs. They're D2C founders. They use Shopify, run ads, do quarterly investor updates. They don't want to read MCP specs. So I'm trying to find the right way to reach this audience and would love feedback:

1. **Distribution:** what newsletters / podcasts / Slacks does a D2C founder actually read? DTC Newsletter, Modern Retail, Beauty Independent — what else?

2. **Pricing:** free tier is 50 questions/day forever. Pro is €349/mo. Most D2C brands above €1M revenue should easily justify €349/mo (one lawyer hour = €350+). But the gap between free and Pro feels wide. Should there be a €99 Starter tier?

3. **Education:** the brands that need this most don't know what they don't know. They've never heard of GPSR. They think "FDA-approved" applies to cosmetics (it doesn't). How do you market a tool to someone who doesn't know they need it?

Roast the GTM. I'm in the comments.
```

### Comment strategy
- The audience here is your buyer, not just a builder. Treat the comments as a research call.
- Pricing debate will heat up — that's good. Even if no one buys today, you've validated.

---

## Post 9 — r/cosmeticchemistry (45k members)

**Best time:** Wednesday 6:00 PM ET
**Angle:** Niche tool — INCI checker that actually works
**Link policy:** Link in comment
**Flair:** Resources

### Title

```
Free AI tool: INCI ingredient check across EU/US/UK/JP/KR, with cited regulatory verdicts
```

### Body

```
For formulators and cosmetic chemists: we built a tool that does multi-jurisdiction INCI checks with citations.

**What it does:**
Paste your INCI list. Get back, per ingredient per market:
- Verdict (banned / restricted / unrestricted)
- Concentration limit (where applicable)
- Citation to the actual regulation (EU 1223/2009 Annex II/III/IV/V/VI, FDA OFAS, MoCRA, Health Canada Hotlist, China NMPA IECIC, JP MHLW Standards, KR MFDS)
- Notable industry guidance (SCCS opinions, BfR opinions, CIR safety assessments)

**Why we built it:**
Existing tools (EWG, CosIng, INCIDecoder) are great for consumers but don't give you the cited regulatory verdict you need to actually launch a product. Cosmetics consultants charge €200–500/hr to do this manually. The data is fragmented.

We index 13 primary regulatory databases daily and cite every claim. The skills layer is open-source (MIT). The data API has a free tier of 50 calls/day, then €349/mo Pro.

**Sample run:**
INCI: AQUA, RETINOL, BAKUCHIOL, BHT
- AQUA: unrestricted, all markets
- RETINOL: EU restricted to 0.3% face / 0.05% body per SCCS/1639/23 (in force Nov 2025); US no limit; UK = EU; JP allowed; KR allowed up to 1% with stability data
- BAKUCHIOL: EU unrestricted (legal, no specific entry); US unrestricted; KR functional cosmetic if used for anti-wrinkle
- BHT: EU restricted to 0.8% per Annex III/342; US allowed (FDA GRAS for food, no cosmetic limit)

Output also calculates "Revenue at Risk" — if you sell in 5 markets and 1 ingredient is banned in 1 market, what % of revenue is blocked.

**Caveat:** This is research, not regulatory clearance. Use it to draft your CPSR / safety assessment; your safety assessor signs off.

Link to repo in comment.
```

### Pinned founder comment

```
Repo: github.com/Cleo-Labs-IA/skills_library
Free API tier: legaldata-public.cleolabs.co
Walkthrough: cleo-labs-ia.github.io/skills_library

The relevant skill for this sub is `substance-screening` (Tier 4 in the bundle) and `cosmetics-compliance` (Tier 5). They auto-trigger when you ask things like "is [ingredient] legal in [country]" or "INCI check for [list]".

I'm Naomie, founder. If you spot a citation that's wrong or stale, please open an issue on the repo — I triage within 24h. Citation accuracy is the whole game for this audience.
```

### Comment strategy
- This audience is THE most technically demanding for accuracy.
- Take every "you got X wrong" comment seriously — these are gold. Fix and ship the same day.
- If a safety assessor / RA professional comments — DM them after the thread for a deeper conversation.

---

## Post 10 — r/FoodScience (90k members)

**Best time:** Tuesday 12:00 PM ET
**Angle:** Niche tool — FDA labeling helper
**Link policy:** Link in comment
**Flair:** Resources

### Title

```
Free tool: FDA + EU food labeling compliance checker with cited regulations
```

### Body

```
For food scientists / product developers / small food brand operators:

We open-sourced an AI tool that checks food labeling compliance across FDA + EU + UK + JP + KR + CA. MIT licensed; free up to 50 questions/day.

**What it does for a single product:**
- Required nutrition panel (FDA vs EU vs UK)
- Allergen declarations (14 EU / 9 US FALCPA / 8 JP)
- Health claims validation (FDA authorized vs EU 1924/2006 approved)
- Novel food status (EU 2015/2283 — is your ingredient pre-1997?)
- HACCP requirements (FSMA Hazard Analysis Plan)
- Country of origin labeling
- Best-before vs use-by formatting per market
- Specific market gotchas (CA F.I.R. for Canada, JP food labeling standards for JP, etc.)

**Sample query:**
"Can I sell my chickpea-based protein bar in Germany?"

Output:
- Novel food check: chickpea protein concentrate >70% = MAY require novel food authorization, depending on extraction method (cited: EU 2015/2283 + EFSA guidance)
- Allergen check: chickpea NOT in EU allergen list (Annex II); declare under "may contain" if cross-contamination risk
- Nutrition declaration: required per FIC 1169/2011 (German + main EU languages)
- Front-of-pack: voluntary Nutri-Score allowed; no mandatory FOPL in Germany (yet)
- Best-before formatting: "mindestens haltbar bis" (German)
- Estimated launch cost: €600–1,500 (label translation + nutrition lab analysis if not done)

**Caveat:** Research aid. Not regulatory clearance. You still want a food law specialist for novel food / health claim sign-off.

Link in comment.
```

### Pinned founder comment

```
Repo: github.com/Cleo-Labs-IA/skills_library
Free API: legaldata-public.cleolabs.co
Walkthrough: cleo-labs-ia.github.io/skills_library

Relevant skill: `food-compliance` (Tier 5) and `labeling-compliance` (Tier 1).

I'm Naomie, founder. Specifically for this sub — if you've shipped products into multiple markets and have war stories, I'd love to hear them. They become test cases for the benchmark.
```

### Comment strategy
- "What about [specific food category like infant formula / dietary supplements]?" — be honest about coverage. Infant formula and supplements have separate, very strict regs; we cover at the general level but recommend specialists for sign-off.
- This sub has lots of academic/industry people. Engagement is medium-high.

---

## Post 11 — r/Etsy (950k members)

**Best time:** Saturday 10:00 AM ET
**Angle:** Small seller compliance for EU buyers
**Link policy:** NO link in body
**Flair:** General

### Title

```
PSA: If you sell to EU buyers on Etsy, GPSR is now mandatory. Here's what to do (and a free tool).
```

### Body

```
I run a small startup that helps brands with compliance and I keep seeing Etsy sellers blindsided by EU GPSR, so a PSA.

**The short version:**
- Since December 2024, the EU General Product Safety Regulation (GPSR) requires every product sold to EU consumers to have an EU-based "Responsible Person" (RP) and specific documentation.
- This applies to YOU even if you're based outside the EU and just ship to EU buyers.
- Etsy is starting to enforce. Some sellers have already had listings hidden for EU customers.

**The 5 things every Etsy seller targeting EU needs:**

1. **An EU Responsible Person.** A name + EU address on file. Options:
   - Use a paid service (e.g., authorisedrep.eu, ~€500/yr)
   - Find an EU friend/family member willing to be listed
   - Restrict your Etsy listings to non-EU shipping (cheap but limits market)

2. **Manufacturer + RP info on the product or packaging.**
   - Name, address, email of both
   - Tiny products: can be on the package or the user info

3. **Product-specific documentation kept on file.**
   - For most Etsy categories (handmade goods, jewelry, soap, candles, textiles): a Risk Assessment + Technical File
   - For soap/candles/skincare: additional cosmetic regulation (CPNP notification)
   - For toys: EN 71 testing
   - For electronics: CE marking (different beast)

4. **Hazard warnings on the label** if your product has any (candles, electric items, choking hazard for kids' goods, allergens for skincare).

5. **A plan for if a customer reports a safety issue.** EU member state authorities can investigate.

**The free tool:**
I'm the founder of a regulatory data company. We open-sourced 28 AI skills that auto-generate this paperwork for any product category. MIT licensed, free up to 50 questions/day. Not legal advice — it gives you the draft documents your RP signs off on.

Won't drop the link in the body (Etsy sub auto-removes self-promo). It's in my profile if you want it. Or DM and I'll send.

What I want to ask the sub: what's the rough split of Etsy sellers here who block EU shipping vs. who set up an RP? Trying to understand how many of you have done the work already.
```

### Comment strategy
- Auto-flag risk is high on this sub. Stay informational, don't pitch.
- Many sellers will say "I'm not in the EU, doesn't apply to me." Politely correct: GPSR follows the buyer, not the seller.
- If a mod removes the post, don't repost. Try again with different framing in 60 days.

---

## Post 12 — r/AmazonSeller (220k members)

**Best time:** Sunday 11:00 AM ET
**Angle:** Amazon EU GPSR enforcement angle
**Link policy:** Link in comment
**Flair:** Tools

### Title

```
Amazon EU is enforcing GPSR — checklist + free tool to get compliant
```

### Body

```
PSA for Amazon EU sellers:

Amazon has started requiring GPSR-compliant info on new ASINs in EU marketplaces. Existing ASINs get flagged in waves; if you ignore the flag, the listing is hidden from EU buyers.

**What Amazon now asks for per ASIN:**
- Manufacturer name + EU address
- Responsible Person name + EU address (if manufacturer is outside EU)
- Product safety documentation reference
- Hazard warnings (if applicable)
- Compliance with CE marking where required (electronics, toys, PPE, etc.)

**What happens if you don't:**
- Listing becomes invisible to EU buyers (most US sellers don't notice immediately)
- Some categories (kids products, electronics) get harder enforcement
- Brand Registry status doesn't protect you from this

**The checklist:**
1. Get an EU Responsible Person (service or family member with EU address)
2. Update each ASIN's "Compliance" tab in Seller Central with RP info
3. Make sure product or packaging has manufacturer + RP info physically printed
4. Keep a Technical File / Risk Assessment per product (no need to upload, just have it ready)
5. For toys / electronics / cosmetics: have your specific testing docs ready
6. If you ship to a specific EU country (DE, FR, IT, ES): register for EPR (packaging takeback)

I run Cleo Labs — we built an open-source AI tool that generates the docs above for any product category. Free up to 50 questions/day. MIT licensed.

Link in comment.

Happy to answer specific questions about Brand Registry interactions, FBA EU vs EFN, or what categories enforce harder.
```

### Pinned founder comment

```
Repo: github.com/Cleo-Labs-IA/skills_library
Free API: legaldata-public.cleolabs.co

Specifically for Amazon sellers — the `marketplace-compliance` skill (Tier 4) covers Amazon EU, US product safety, brand registry handoffs. Auto-triggers when you ask things like "What does Amazon EU need for my ASIN?"

I'm Naomie. DM for specifics.
```

### Comment strategy
- This sub is full of "tell me my listing is going to die" anxiety. Lean into actionable advice over fear.
- "Which EPR service should I use?" — recommend 2-3 options (none are paid promotions): Lizenzero.de (DE), Yellow-Group (FR), Recypack (multi-country). Don't push your own.

---

## Post 13 — r/skincareaddicts (high member count, exact name varies — verify r/SkincareAddiction has 1.7M and r/skincareaddicts is smaller alternative)

**Target sub:** r/SkincareAddiction (1.7M) — alt: r/AsianBeauty if AB-focused
**Best time:** Sunday 8:00 PM ET
**Angle:** Consumer — ingredient check tool
**Link policy:** No link in body, comment only
**Flair:** Resources / Other

### Title

```
Free AI tool to check if a skincare ingredient is legal/safe in your country
```

### Body

```
For anyone who's ever wondered "is this ingredient banned in [country]?" or "why is this product available in Korea but not the US?":

We built an open-source AI tool that checks any cosmetic ingredient against 8 markets (EU, US, UK, JP, KR, CN, CA, plus ASEAN). It returns:
- Is it legal in your market? (banned / restricted / unrestricted)
- What's the legal concentration limit?
- Why is the limit what it is? (citation to the safety opinion that set it)
- How does that compare to other markets?

**Real example:**
"Is kojic acid legal in the US vs Japan?"

Output:
- US: unrestricted, no specific FDA limit. Used as a depigmenting cosmetic ingredient.
- Japan: Was a "quasi-drug" approved in concentrations up to 1%. Recalled by MHLW in 2003 due to long-term skin sensitization concerns; off-market for years; re-evaluated; now used in lower concentrations in some products under specific conditions.
- EU: not in Annex II banned list; not in Annex III restricted list; allowed but requires CPSR justification at >0.5%
- KR: allowed up to 2% in functional cosmetics with skin-whitening claim

(That's the kind of cross-market answer you couldn't easily get from EWG or INCIDecoder.)

**The honest caveats:**
- Not medical advice. Talk to a dermatologist for skin concerns.
- Not a "safe vs unsafe" tool — regulations don't equal safety perfectly (legal ≠ optimal for your skin). It's a compliance lens.
- Free tier is 50 questions/day. Most casual users will never hit the cap.

Built by Cleo Labs (Paris). MIT licensed. Link in comment.
```

### Pinned founder comment

```
Repo: github.com/Cleo-Labs-IA/skills_library
Free API (no card): legaldata-public.cleolabs.co
Walkthrough: cleo-labs-ia.github.io/skills_library

The relevant skill is `substance-screening`. Auto-triggers on questions like "is [ingredient] legal in [country]?"

(For full disclosure: this is open-source MIT, but my company sells a Pro tier API to brands behind it. Heavy users / commercial use can hit the rate limit. The consumer use case fits within the free tier easily.)
```

### Comment strategy
- This sub is consumer, not professional. Keep language accessible.
- The biggest skeptics will say "this is just an AI hallucinating regulatory text." Counter: every claim is cited and links to the primary source. Show, don't tell — share a screenshot of a citation.
- Don't engage in "X ingredient is dangerous!" debates. Stay in compliance-not-safety lane.

---

## Post 14 — r/AskMarketing (large sub — verify; alt: r/marketing)

**Target sub:** r/marketing (3M) — primary
**Best time:** Monday 10:00 AM ET
**Angle:** Open-source as a growth channel (meta angle)
**Link policy:** Link in comment
**Flair:** Discussion

### Title

```
Open-sourcing the core of our SaaS as our primary growth channel — would love marketing brain on this
```

### Body

```
Quick context: I run a B2B SaaS in Paris (regulatory data API for D2C brands). 8 months in, ~14 paying customers at €349/mo. Just open-sourced what would normally be our SaaS frontend — 28 AI skills that wrap our API — under MIT.

The bet: open-source the skills, win the developer audience, funnel free users to the paid API.

Funnel math:
- 1,000 GitHub stars → 5,000 installs (5x — industry rule of thumb)
- 5,000 installs → 1,000 free API signups (20% — based on early data from similar SDK-led growth plays)
- 1,000 free → 100 paid at €349/mo (10% — placeholder; we'll know by Day 30)
- = €34.9k MRR in 90 days if the assumptions hold

**Where I want marketing brain:**

1. **The free → paid step is the riskiest assumption.** B2C-style SaaS converts 2–5%; B2B with high-intent installers might hit 10–15%. Where do you think the real number lands when the install is technical (Claude Code) but the buyer is non-technical (D2C founder)?

2. **Content distribution after the open-source launch.** I have 28 skills = 28 SEO landing pages (one per skill) + 28 YouTube shorts. Plus 50+ long-form blog targets ("is [ingredient] legal in [country]"). Is the right play to bombard a few subreddits + niche newsletters, or go wide with PR?

3. **Pricing tier gap.** Free (50 calls/day) → Pro (€349/mo). The gap feels wide. Most D2C founders are €1–10M revenue and €349 is comfortable. But a Starter at €99 might be where the long-tail lives. Or does it just dilute the brand?

4. **Naming.** Product is "Compliance Product Guidance." Repo is `skills_library`. Brand is Cleo Labs. Three different names is messy. Should we collapse to one?

Roast it. I'll be in the comments.
```

### Comment strategy
- This sub will give you honest pricing/positioning critique. Take it seriously.
- "Why €349 not $349?" — be honest: Cleo is FR, EU customers prefer EUR, USD checkout coming Q3.

---

## Post 15 — r/SaaS (large sub)

**Best time:** Tuesday 9:00 AM ET (avoid Monday — full of Show-and-Tell posts)
**Angle:** Meta — we're a SaaS using our own skills
**Link policy:** Link OK
**Flair:** Self Promotion / Build in Public

### Title

```
We're a SaaS using our own AI skills as the GTM. Here's what's working at Day 0.
```

### Body

```
8 months ago I started Cleo Labs (Paris). We sell a Legal Data API to D2C brands — regulatory citations for any product/country combo. €349/mo Pro tier. ~€5k MRR as of last week.

This Tuesday we open-sourced our core "frontend" — 28 Claude Code skills that wrap the API — as the primary GTM channel for the next 90 days.

**Repo:** github.com/Cleo-Labs-IA/skills_library
**Live site:** cleo-labs-ia.github.io/skills_library
**API:** legaldata-public.cleolabs.co

**Why I'm posting here:**
I want to share the GTM thesis and have it stress-tested by other SaaS founders.

**The thesis in one sentence:**
For technical B2B products with non-technical buyers, the cheapest distribution is to be pre-installed in the buyer's existing AI workflow.

**Why we think open-source is the right wedge:**
- Buyers (D2C founders) don't search for "regulatory API." They ask their AI agent.
- If our skills are pre-installed in their Claude Code, the agent uses our API the first time they ask a compliance question.
- Open-source = pre-installable. Closed-source = not.

**What's working (early):**
- Anthropic plugin registry PR opened (decision pending)
- 4 awesome-list PRs merged in 36 hours
- HN Show HN landed (top 30 — not front page but durable)
- 280 free API signups in 7 days post-launch

**What's not working:**
- Reddit cross-post coordination is harder than we thought (cross-sub spam filter)
- GitHub star velocity is below target (200 vs. expected 500 at Day 7)
- Tier 5 vertical skills (cosmetics-compliance etc.) get less attention than Tier 1 — buyers don't know they need a vertical skill until they ask
- Conversion from free signup to first API call is ~40%. Should be 80%. Onboarding is broken.

**What I'm watching:**
- Day 30 free → paid conversion. If <5%, the funnel math doesn't work.
- Whether the Pro tier needs a Starter ($99) tier between Free and €349.
- Whether vertical landing pages (cosmetics-compliance.cleolabs.co etc.) outperform the master landing.

**What I want from this sub:**
- Has anyone else open-sourced their SaaS frontend and tracked the conversion lift?
- Has anyone seen a free → paid funnel work below 5% conversion at this price point, just on volume?
- Should we close the open source after some milestone or commit to MIT forever? (Hypothesis: forever, but let me hear arguments.)

Roast away.
```

### Comment strategy
- r/SaaS is high-quality. Engage thoughtfully on every comment.
- Strong overlap with r/entrepreneur and r/marketing — DON'T post the same content there within 2 weeks (spam detection).

---

## Posting schedule — 3-week blitz

| Week | Day | Sub | Post |
|---|---|---|---|
| 1 | Tue Jun 16 | r/ClaudeAI | Post 1 |
| 1 | Wed Jun 17 | r/LocalLLaMA | Post 2 |
| 1 | Thu Jun 18 | r/Anthropic | Post 3 |
| 2 | Mon Jun 22 | r/entrepreneur | Post 4 |
| 2 | Tue Jun 23 | r/smallbusiness | Post 5 |
| 2 | Wed Jun 24 | r/ecommerce | Post 6 |
| 2 | Thu Jun 25 | r/shopify | Post 7 |
| 2 | Sat Jun 27 | r/Etsy | Post 11 |
| 2 | Sun Jun 28 | r/AmazonSeller | Post 12 |
| 3 | Tue Jun 30 | r/d2c | Post 8 |
| 3 | Wed Jul 1 | r/FoodScience | Post 10 |
| 3 | Wed Jul 1 evening | r/cosmeticchemistry | Post 9 |
| 3 | Mon Jul 6 | r/marketing | Post 14 |
| 3 | Tue Jul 7 | r/SaaS | Post 15 |
| 3 | Sun Jul 12 | r/SkincareAddiction | Post 13 |

**Universal rules during the blitz:**
- Engage in 3 other threads in each sub for 24h before posting your own
- Read each sub's rules in full before posting (every sub has 1 weird rule)
- If post is removed: do not repost without rule change; try a different angle in 60 days
- Track every post in the spreadsheet
- Reply to every comment in first 6 hours

---

## Notes for Naomie

- **Your tone in Reddit comments is your highest-leverage hour.** Be honest, curious, never defensive. Reddit smells PR speak in milliseconds.
- **The /entrepreneur and /marketing posts are GTM research as much as promotion.** Take the criticism seriously — these audiences will critique your funnel for free.
- **Don't link to legaldata-public.cleolabs.co or cleolabs.co from r/skincareaddicts comments.** Consumers will see €349/mo and assume it's a scam. Repo link only for consumer subs.
- **r/d2c may be too small to matter.** If it's still under 20k members by posting time, swap it for r/DTC or skip entirely.
- **Cross-sub posting cooldown:** never post in two overlapping subs in 48h. Spam filter is real.
