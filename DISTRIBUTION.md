# Distribution Strategy — skills_library

**Repo:** https://github.com/Cleo-Labs-IA/skills_library
**Landing:** https://cleo-labs-ia.github.io/skills_library/
**Monetization:** Cleo Legal API — https://legaldata-public.cleolabs.co/ — €349/mo
**Document owner:** Naomie Halioua, Cleo Labs
**Date:** 2026-05-28
**Horizon:** 90 days (through 2026-08-26), then ongoing

---

## North Star

Become THE default open-source compliance toolkit for AI coding agents.

**Day 90 targets:**
- 1,000+ GitHub stars
- 5,000+ installs (git clones / plugin installs)
- 500+ MCP server adds pointing at Cleo Legal API
- 1,000+ free API signups
- 100+ paying customers at €349/mo (= €34,900 MRR attributable to the skills)

If we hit those numbers, skills_library becomes the cheapest customer-acquisition channel Cleo will ever have. The skills are the bait; the API is the hook.

---

## The Master Funnel

```
   GitHub / Awesome lists / HN / PH / Reddit / YouTube / SEO
                          │
                          ▼
              skills_library on GitHub  (1,000 stars)
                          │
                          ▼
          User installs skills into Claude Code  (5,000)
                          │
                          ▼
        First skill run hits a paywall / rate limit
        on Cleo Legal API key OR shows free-tier banner  (3,000)
                          │
                          ▼
       Signs up for free Cleo Legal API tier  (1,000)
                          │
                          ▼
        Hits 50 calls/day cap or needs Pro features
        (multi-jurisdiction, history, webhooks)  (300)
                          │
                          ▼
            Converts to Pro at €349/mo  (100)
```

Funnel math: 1,000 stars → 5,000 installs (5x) → 1,000 free signups (20%) → 100 paid (10%) → €34.9k MRR.
Each star is worth ~€35 in attributable MRR. That is the unit economics that justifies every action below.

---

## Distribution Channels (Ranked by ROI)

### Tier 1 — Maximum Leverage (Do This Week: May 28 – Jun 3)

#### 1. Anthropic Claude Code Plugin Registry

**URL:** https://github.com/anthropics/claude-code
**Why it works:** Native distribution to every Claude Code user. The registry is the "App Store" for skills. Acceptance = featured surface area, default discoverability, implicit Anthropic endorsement.

**The asset:** A PR adding `skills_library` to the plugin registry manifest with a clean entry: name, description, install URL, screenshots, and a `claude-plugin.json` manifest validated against the schema.

**Concrete action steps:**
1. Fork `anthropics/claude-code`.
2. Read `CONTRIBUTING.md` and the plugin manifest spec end-to-end.
3. Create `claude-plugin.json` at repo root with: `name`, `version`, `description`, `author`, `license: MIT`, `skills: [...28 entries...]`, `screenshots`, `homepage`.
4. Run their linter / schema validator locally.
5. Run security review pass: no shell-out without sanitization, no hardcoded keys, no telemetry without opt-in, no PII leak.
6. Open PR titled `Add skills_library: 28 product-compliance skills for brands selling internationally`.
7. PR body must include: problem statement, demo GIF, security note, license, maintainer commitment SLA.
8. Tag relevant Anthropic DevRel (publicly known: @alexalbert__, @AnthropicAI dev advocates).
9. Mirror PR announcement on Twitter, tag @AnthropicAI.

**Pre-submission checklist:**
- [ ] README has install-in-30-seconds section at the top
- [ ] Every skill has a working example in `EXAMPLES.md`
- [ ] LICENSE file present (MIT)
- [ ] SECURITY.md present with disclosure email
- [ ] CODE_OF_CONDUCT.md present
- [ ] CI badge green
- [ ] No dependencies on private services without graceful degradation
- [ ] Demo GIF under 5MB, under 30 seconds
- [ ] Screenshots: 3x (input prompt, skill running, result)

**Estimated reach:** 50,000–200,000 Claude Code users over 6 months if accepted.
**Conversion to API signups:** 3–5% of installers → 1,500–10,000 signups.

#### 2. Awesome Lists on GitHub

**Why it works:** Each awesome list is a curated, search-indexed, high-DA backlink that drives qualified developer traffic for years. One PR = perpetual SEO.

**The asset:** A single-line PR per list adding `skills_library` with the canonical 80-char description:
> `skills_library — 28 Claude Code skills for product compliance (EU, US, UK, intl) — by Cleo Labs`

**Target lists & action:**

| List | URL | Owner responsiveness | Priority |
|---|---|---|---|
| awesome-claude | https://github.com/hannesrudolph/awesome-claude | High (weekly merges) | P0 |
| awesome-claude-code | https://github.com/hesreallyhim/awesome-claude-code | High | P0 |
| awesome-mcp-servers | https://github.com/punkpeye/awesome-mcp-servers | High | P0 |
| awesome-ai-agents | https://github.com/e2b-dev/awesome-ai-agents | Medium | P1 |
| awesome-compliance | search GitHub topic | Low | P1 |
| awesome-llm-tools | various forks | Medium | P1 |
| awesome-d2c | github.com/dgilfoyle/awesome-d2c | Low | P2 |
| awesome-regulatory | search | Low | P2 |
| awesome-legal-tech | github.com/bcongdon/awesome-legaltech | Medium | P2 |
| awesome-shopify-apps | search | Low | P2 |

**Concrete action:**
1. Spend one block (2 hours) opening all 10 PRs in one sitting.
2. Each PR uses the same title template: `Add skills_library to <category>`.
3. Each PR body: one-paragraph value prop + screenshot.
4. Track in a spreadsheet: PR URL, opened date, merged status, follow-up date.

**Estimated reach:** 10,000–30,000 niche developer impressions over 12 months.
**Conversion to API signups:** 1–2%.

#### 3. Product Hunt Launch

**Why it works:** Single-day spike of 20–80k impressions, qualified maker/builder audience, lasting SEO ("Product of the Day" badge), and a permanent profile page.

**Launch date:** Tuesday 2026-06-09 (Tier 1 wave 2). Submit at 12:01 AM PT (09:01 Paris).

**Tagline options (pick one A/B tested):**
- "28 AI skills to launch your product in any country."
- "Stop paying compliance consultants. Use these 28 AI skills."
- "Claude Code skills that handle product compliance globally."

**Pre-launch (May 28 – Jun 8):**
- [ ] Build subscriber list for upcoming page (target: 300 subs)
- [ ] Reach out to 5 high-credibility hunters and ask 1 to hunt: Sahil Lavingia (@shl), Jason Lemkin (@jasonlk), Pieter Levels (@levelsio), Marc Köhlbrugge (@marckohlbrugge), Chris Messina (@chrismessina)
- [ ] Draft 3 maker comments (problem, demo, ask for feedback)
- [ ] Prepare assets: logo 240×240, gallery 1270×760 ×3, demo GIF (under 3MB)
- [ ] Schedule 10 supporter notifications (friends/early users committed to commenting day-of)
- [ ] Pre-write reply templates for the top-20 likely questions

**Launch day playbook:**
- 00:01 PT — Live
- 00:05 PT — Maker first comment posted
- 00:10 PT — Hunter posts hunt comment
- 06:00 PT — Tweet from @Cleo_Labs + Naomie personal
- 09:00 PT — LinkedIn post
- 09:00 PT — Email to subscribers + Cleo customer list
- All day — Reply to every comment within 10 minutes
- 17:00 PT — Mid-day update tweet with current rank

**Week after:**
- [ ] Write retro blog post
- [ ] Embed "Product of the Day" badge on landing
- [ ] Re-tweet thread with final stats

**Imagery requirements:**
- 1 logo (240×240 PNG transparent)
- 3 screenshots (1270×760): (a) installing skills, (b) running a query, (c) API response
- 1 GIF demo (3MB max, 20–30 seconds, ideally a real prompt→answer flow)

**Estimated reach:** 30,000–80,000 impressions, 500–2,000 site visits.
**Conversion to API signups:** 5–8% of visitors → 25–160 signups.

#### 4. Hacker News — Show HN

**Why it works:** One front-page hit = 50,000+ qualified developer impressions, durable SEO backlinks from blog republishes, and instant credibility signal.

**When:** Wednesday 2026-06-03, 8:00 AM PT (17:00 Paris). HN front page traffic peaks 8–11 AM PT weekdays.

**Title:** `Show HN: skills_library – 28 Claude Code skills for global product compliance`

**First comment (founder, posted within 2 minutes of submission):**
> Hey HN — Naomie here, founder of Cleo Labs. We sell brands a Legal Data API (€349/mo) that returns regulatory citations for any product/country combo. After 8 months of helping cosmetics/food/electronics brands, we noticed the same 28 questions kept coming up. So we packaged them as Claude Code skills and open-sourced them.
>
> The skills are MIT licensed and standalone — they degrade to public sources if you don't have an API key. With a free key (50 calls/day at legaldata-public.cleolabs.co), they pull cited answers from our regulatory dataset.
>
> Happy to answer anything about: the regulatory data plumbing, how we model jurisdictions, why we chose Claude Code skills over an MCP server (we ship both), or the business model.

**Rules of engagement:**
- Reply to every commenter within 1 hour for first 6 hours
- Never ask for upvotes (HN bans this and the algorithm penalizes)
- Don't email anyone "go upvote my HN post" — algorithm detects voting rings
- If front-page, do NOT also post to Reddit same day (looks coordinated)
- Stay calm under criticism. Cynicism is HN's love language.

**Estimated reach:** 5,000 (no front page) to 80,000 (front page top 10).
**Conversion to API signups:** 3–6% of visitors.

#### 5. MCP Server Marketplaces

**Why it works:** MCP is the emerging protocol. Marketplaces are pre-loaded into agent frameworks (Claude Desktop, Cursor, Continue, etc.). Each listing = passive distribution.

**The asset:** A separate MCP server entry for the Cleo Legal API, with skills_library referenced as the "companion skill library."

| Marketplace | URL | Submission method | Target date |
|---|---|---|---|
| Glama | https://glama.ai/mcp/servers | Auto-indexed from GitHub topic `mcp` | May 29 |
| MCP.so | https://mcp.so/ | PR to their repo | May 30 |
| Smithery | https://smithery.ai/ | CLI: `npx @smithery/cli publish` | May 30 |
| MCP Servers | https://mcpservers.org/ | Form submission | May 31 |
| OpenTools | https://opentools.com/ | Form submission | Jun 2 |
| Awesome MCP Servers | github list | PR (already in Tier 1.2) | May 29 |

**Concrete actions:**
1. Tag the cleo-legal MCP repo with GitHub topic `mcp` and `model-context-protocol`.
2. Ensure server manifests pass `npx @modelcontextprotocol/inspector` validation.
3. Submit one marketplace per day.
4. Every listing must link to BOTH `legaldata-public.cleolabs.co` AND `skills_library` repo.

**Estimated reach:** 5,000–20,000 agent developers over 6 months.
**Conversion to API signups:** 4–7%.

---

### Tier 2 — Community Distribution (Weeks 1-4: May 28 – Jun 24)

#### 1. Reddit Subreddits

**Strategy:** Never the same post twice. Each subreddit gets a custom angle. Provide value first, link in comments where allowed by the sub's rules.

| Subreddit | Members | Best day/time (local) | Angle | Post format | Link policy |
|---|---|---|---|---|---|
| r/ClaudeAI | 180k | Tue 10am PT | "I built 28 Claude Code skills for compliance" | Show & tell + GIF | Link in body OK |
| r/LocalLLaMA | 350k | Wed 9am PT | "Open-source skills for product compliance — works locally" | Technical writeup | Link OK if substantive |
| r/Anthropic | 25k | Mon-Thu, any time | "Anthropic skills ecosystem question" | Discussion | Link in comment only |
| r/MachineLearning | 2.9M | Tue 8am PT | Tag as `[P]` Project | Technical post | Link in body |
| r/entrepreneur | 3M | Mon 7am ET | "How we are giving away our core IP to grow our API" | Long story | NO link in body — comment only |
| r/smallbusiness | 2M | Tue 8am ET | "Free tool: compliance answers for product brands" | Practical | Link in comment |
| r/ecommerce | 380k | Wed 9am ET | "Free Claude tool for compliance" | Practical | Link in comment |
| r/shopify | 290k | Thu 10am ET | "Compliance toolkit for Shopify sellers" | Practical | Link in comment |
| r/d2c | 18k | Tue 11am ET | DTC compliance story | Story | Link OK |
| r/cosmeticchemistry | 45k | Wed 6pm ET | "INCI checker via AI" | Niche tool | Link in comment |
| r/FoodScience | 90k | Tue 12pm ET | "FDA labeling helper" | Niche tool | Link in comment |
| r/Etsy | 950k | Sat 10am ET | "Compliance for Etsy sellers selling EU" | Practical | NO link in body |
| r/AmazonSeller | 220k | Sun 11am ET | "Brand registry + compliance toolkit" | Practical | Link in comment |
| r/freelance | 1.1M | Mon 10am ET | "For freelancers helping brands launch" | Tool tip | Link in comment |
| r/SideProject | 280k | Sat 9am ET | "Just launched: skills_library" | Show | Link OK |

**Cross-post DO NOT zones:**
- Never crosspost r/entrepreneur to r/smallbusiness same week (overlap = ban)
- Never post in r/MachineLearning without the `[P]` tag (auto-removal)
- Never post in r/ClaudeAI within 7 days of last self-promo

**Reddit cadence:** 2 subreddits per week max. 7 weeks of content prepared up front.

#### 2. Discord Servers

| Server | Channel | Approach |
|---|---|---|
| Anthropic | #showcase, #plugins | Post launch announcement + GIF |
| Claude Builders | #projects | Detailed walkthrough |
| Indie Hackers | #show-and-tell | Founder story |
| Vercel | #showcase | Tech angle if hosted on Vercel |
| Latent Space | #projects | Technical writeup |
| DTC Newsletter | #tools | D2C angle |
| Shopify Partners | #apps-and-tools | Shopify integration |
| MCP Community | #servers | MCP server announcement |

**Discord rules of thumb:**
- Lurk for 24h before posting in any new server.
- Read pinned messages.
- Never DM moderators asking for permission unless rules say to.
- Engage in 3 other threads before posting your own.

#### 3. Twitter/X Strategy

**Founder thread (Naomie personal account), 6 tweets:**

1/ "8 months ago I started Cleo Labs. We sell a legal/regulatory API to brands. Today we are open-sourcing the 28 questions our API answers — as Claude Code skills. Free forever. Here is why ↓"

2/ [Problem] "If you sell a physical product internationally, compliance kills you. CE marking, FDA MoCRA, REACH, CPSIA, INCI checks. Each costs €5–50k via a consultant. Brands give up before launch."

3/ [Insight] "An AI agent with the right skills can answer 90% of these questions in 30 seconds. Not by hallucinating — by querying a real regulatory dataset and citing sources."

4/ [Demo GIF] "Watch Claude Code answer 'Can I sell my retinol serum in California?' with citations to MoCRA + Prop 65, in 8 seconds."

5/ [The catch] "The skills are free. They run against our public API (50 calls/day free). If you need more, the Pro tier is €349/mo. That is our business model — fully open about it."

6/ [CTA] "Install: github.com/Cleo-Labs-IA/skills_library. API: legaldata-public.cleolabs.co. Built for @AnthropicAI Claude Code. Would love feedback — what regulatory question should we add next?"

**@Cleo_Labs account:**
- Pinned: thread above
- Daily: one skill highlight ("Skill of the day: #14 INCI checker")
- Weekly: customer win or stat

**Reply guy strategy:**
- Search "Claude Code" every morning, reply with value (not just a link) to 5 threads
- Same for "MCP server", "compliance for D2C", "product launch international"
- Never lead with a link — earn the link

**Hashtags:** #ClaudeCode #compliance #D2C #ProductCompliance #RegTech #AIagents #MCP

#### 4. LinkedIn Strategy

**Founder post (Naomie), long-form, 1,300 words target:**
- Hook: "I just gave away the core IP of my startup. Here is why."
- Story: building Cleo, realizing the moat is data not skills, decision to open-source
- Demo: embedded video
- CTA: "Try it. Tell me what compliance question I should solve next."

**Company page repost** within 1 hour of founder post (algorithm boost).

**Target LinkedIn groups:**
- D2C Founders (12k members)
- Compliance Professionals (180k)
- Regulatory Affairs Professionals Society (RAPS) (45k)
- Cosmetics Industry (90k)
- Food Industry Executives (210k)
- Shopify Plus Partners

**Sponsored post budget:** €1,500 for first launch week, targeting:
- Job titles: Head of Regulatory, VP Compliance, Founder D2C
- Industries: Cosmetics, Food, Electronics, Toys, Apparel
- Geographies: EU + US + UK
- Expected CPM: €25–40, expected CPC: €2–4, expected signups: 60–100

---

### Tier 3 — Content Marketing (Months 1-3: Jun – Aug)

#### 1. YouTube Channel: "Compliance in 30 Seconds"

**Format:** 30 videos, one per skill (28 + 2 bonus: install + tour).
**Length:** 60–90 seconds each.
**Structure:** Problem statement (10s) → prompt typed live (5s) → skill runs (10s) → result on screen (20s) → CTA (10s).

**Title formula:** `How to [compliance task] in 8 seconds with Claude Code`
- "How to check if a cosmetic ingredient is legal in the EU in 8 seconds with Claude Code"
- "How to FDA-label a supplement in 12 seconds with Claude Code"

**Thumbnail style:**
- Red/green pass-fail badge top right
- Country flag top left
- Big text: jurisdiction + product type
- Naomie's face for first 5 videos (face-cam boost), then drop

**Production cadence:** 3 videos per week, batch recorded, edited in CapCut.

**SEO targets per video:**
- "is [ingredient] legal in [country]"
- "how to [regulation] [product type]"
- "[regulation] checklist [year]"

**Cross-post:** YouTube Shorts + TikTok + LinkedIn video + X video.

#### 2. Blog Content (Cleo blog + Medium + dev.to + Hashnode + Substack)

**Series A: "The 28 Skills"** — one blog per skill, 600–900 words each. SEO-optimized.

**Series B: "Launching [product] in [market]"** — long-form playbooks, 2,000+ words. Examples:
- Launching a retinol serum in California
- Launching a baby toy in the EU under EN71
- Launching a food supplement in Germany
- Launching a smartwatch in the UK post-Brexit

**Cross-posting matrix:**

| Platform | Audience | Cadence | Canonical URL |
|---|---|---|---|
| cleolabs.co/blog | Buyers / D2C founders | 2/week | Always primary |
| Medium @cleolabs | Compliance niche | 1/week | Backlink to cleolabs.co |
| dev.to @cleolabs | Devs | 1/week | Tag: claudecode, mcp, ai |
| Hashnode @cleolabs | Tech builders | 1/week | Same as dev.to |
| Substack | Newsletter subs | 1/week | Standalone series |
| LinkedIn Articles | Industry pros | 1/week | Repost from Medium |

#### 3. SEO Long-Tail Strategy

**Target query archetypes:**
- "is [substance] legal in [country]" — 5 articles/week
- "how to ce mark a [product]" — top 10 product types
- "EU cosmetics responsible person cost" — top 20 EU/US compliance cost queries
- "FDA cosmetics MoCRA requirements" — every major US regulation
- "[regulation] checklist 2026"

**Target:** 50 articles in Q1 of distribution (by Aug 26).

**Each article structure:**
1. H1 — exact match query
2. TL;DR answer in first 60 words
3. Detailed answer with citations
4. "Try it yourself" — copy-paste prompt for Claude Code with skills_library installed
5. Footer CTA: "Get instant cited answers — install skills_library"

**Internal linking:** every article links to ≥3 other compliance articles + skills_library + Cleo Legal API signup.

**Schema markup:** `FAQPage` + `SoftwareApplication` + `HowTo` schemas on every article.

#### 4. Newsletter Sponsorships

| Newsletter | Audience | Subs | Est. cost/sponsor | Best fit |
|---|---|---|---|---|
| The Hustle | Founders/biz | 2.5M | €5,000 | Brand story |
| Morning Brew Retail | Retail execs | 600k | €3,500 | D2C focus |
| Lenny's Newsletter | Product/startup | 700k | €25,000 | API/builder angle |
| The Daily Carnage | Marketers | 35k | €800 | Indie pricing |
| Beauty Independent | Cosmetics | 80k | €2,500 | Hyper-niche |
| Food Navigator | Food industry | 150k | €4,000 | Hyper-niche |
| DTC Newsletter | D2C founders | 50k | €1,500 | Best ROI bet |
| Indie Hackers (sponsorship) | Builders | 300k | €1,200 | Open-source story |
| MCP Weekly (if launches) | MCP devs | TBD | TBD | Native fit |

**Budget allocation Q1:** €15,000. Start with DTC Newsletter + Indie Hackers + Beauty Independent (smallest, most niche, cheapest CPM).

**Mandatory CTA in every sponsorship:** "Try the API free — legaldata-public.cleolabs.co".

---

### Tier 4 — Partnerships & Integrations (Months 2-6: Jul – Nov)

#### 1. Test Lab Partnerships

| Lab | Why | Pitch | Contact |
|---|---|---|---|
| SGS | World's largest | "Pre-qualify clients before they pay you. Reduce your sales cycle." | sales@sgs.com |
| TÜV SÜD | DACH leader | German market | LinkedIn outreach |
| Intertek | Toys + electronics | CPSIA + CE | sales@intertek.com |
| Eurofins | Cosmetics + food | Cosmetics Europe member | partnerships@ |
| UL | US electronics | UL listing pipeline | partnerships@ |
| Bureau Veritas | Mixed | EU + LATAM | Direct LinkedIn |

**Co-marketing assets:** white-labeled checklist PDFs, co-branded webinar series, shared lead-gen forms.

#### 2. Incubators & Accelerators

| Program | Why | Pitch |
|---|---|---|
| Y Combinator | Reach | Free for portfolio companies, badge on landing |
| Techstars | DTC verticals | Verticalized accelerators (retail, food, beauty) |
| Station F | EU hub | Cleo is FR-based → home-field advantage |
| Antler | Pre-seed | Founders launching products need this |
| Sequoia Arc | High signal | Cleo Pro free for all Arc companies |
| 500 Global | Reach | E-commerce vertical |
| L'Oréal Big Bang | Cosmetics-specific | Direct vertical fit |
| Plug and Play Food & Beverage | Food | Direct vertical fit |

**Pitch template:** "We will give every portfolio company free Pro access (€349/mo × 12mo = €4,188 value/co) in exchange for: (1) intro email to all portfolio, (2) logo on our landing, (3) mention in your monthly portfolio newsletter."

#### 3. Shopify App Store

**Action:**
1. Integrate skills_library calls into Cleo's Shopify app (cleo-shopify repo).
2. Add "Powered by skills_library — open source" footer in the app UI.
3. Apply to Shopify Plus Technology Partner program.
4. Get listed in Shopify App Store under "Compliance" category.

**Target:** 200 app installs in 6 months, 30 conversions to Pro.

#### 4. Marketplace Integrations

| Marketplace | Integration angle | Effort |
|---|---|---|
| Amazon Brand Registry | Compliance pre-check for new ASINs | High |
| Walmart Marketplace | Seller onboarding compliance | Medium |
| Etsy | Sellers shipping EU need GPSR compliance | Low |
| WooCommerce | Plugin: cleo-woo | Medium |
| BigCommerce | App | Medium |
| PrestaShop | EU base, FR-friendly | Low |
| Shopify | (covered above) | — |

#### 5. Industry Associations

| Association | Country | Angle | Status |
|---|---|---|---|
| Cosmetics Europe | EU | Sponsor / speak | Apply Q3 |
| Personal Care Products Council | US | Member | Apply Q3 |
| Cosmetic Toiletry & Perfumery Association | UK | Member | Apply Q3 |
| Toy Industries of Europe | EU | Niche sponsor | Apply Q4 |
| American Apparel & Footwear Association | US | Member | Apply Q4 |
| FEBEA | FR | Cleo is FR — natural home | Apply Q3 |

---

### Tier 5 — Earned Media (Months 3-12: Aug 2026 – Apr 2027)

#### 1. Podcasts

| Podcast | Host | Audience | Pitch angle | Likelihood |
|---|---|---|---|---|
| Indie Hackers | Courtland Allen | Builders | Open-source as a moat | High |
| Lenny's Podcast | Lenny Rachitsky | Product | API GTM | Medium |
| Latent Space | swyx + Alessio | AI builders | MCP + agent skills | High |
| This Week in Startups | Jason Calacanis | Founders | Niche RegTech | Low |
| DTC Pod | Blaine Bolus | D2C founders | Compliance pain | High |
| Beauty Independent Podcast | Jamie Matusow | Beauty execs | Hyper-niche | High |
| Modern Retail Podcast | Cale Weissman | Retail | D2C trend | Medium |
| Tim Ferriss Show | Tim Ferriss | Mass | Founder story | Low (aspirational) |
| 20VC | Harry Stebbings | VCs | When raising | Q4 only |
| Acquired | Ben + David | Strategy | Long shot | Skip |

**Pitch cadence:** 2 pitches per week, tracked in a CRM. Cold pitch → warm intro → record.

#### 2. PR Outreach

| Outlet | Beat | Angle | Reporter (research before pitching) |
|---|---|---|---|
| TechCrunch | AI / SaaS | "First open-source compliance toolkit for AI agents" | Kyle Wiggers |
| The Verge | AI products | Consumer-facing AI use case | Emma Roth |
| Wired | AI culture | Open-source vs. consultant disruption | Will Knight |
| Glossy | Beauty/fashion | DTC compliance pain | Sara Spruch-Feiner |
| Modern Retail | Retail | D2C founder tools | Cale Weissman |
| DTC Newsletter | D2C | Founder story | Web Smith |
| RegTech Analyst | Compliance | Industry shift | Editor team |
| AI News | AI | Skills as new app paradigm | Editor team |
| Sifted | EU startups | Cleo is FR-based | Eleanor Warnock (FR) |
| Les Echos | FR business | French scaleup angle | Tech beat |
| Maddyness | FR tech | French startup angle | Tech beat |

**Embargo strategy:** offer one outlet a 48-hour embargo on "Cleo open-sources its 28 compliance skills" in exchange for premium placement.

#### 3. Conference Talks

| Conference | Date | Theme | CFP deadline |
|---|---|---|---|
| Anthropic Dev Day | TBD 2026 | Skills + MCP | When announced |
| AWS re:Invent (Bedrock track) | Dec 2026 | Agent compliance | Aug 1 |
| SaaStr Annual | Sep 2026 | API monetization story | Open now |
| In-Cosmetics Global | Apr 2027 | Cosmetics compliance | Nov 2026 |
| SupplySide West | Oct 2026 | Supplements compliance | Closed — sponsor instead |
| Compliance Week | May 2027 | Enterprise angle | Feb 2027 |
| MCP Conf (if created) | TBD | Native fit | Watch |
| VivaTech Paris | Jun 2026 | FR scene | Closed — attend, network |
| Web Summit Lisbon | Nov 2026 | EU founders | Apr 2026 — late |

---

### Tier 6 — Long-tail Discovery (Ongoing)

#### 1. Search Optimization

**Repo SEO:**
- Description: "28 open-source Claude Code skills for product compliance — EU, US, UK, international. Powered by Cleo Legal API."
- Topics: `claude-code`, `compliance`, `regulatory`, `ai-skills`, `mcp`, `model-context-protocol`, `regtech`, `dtc`, `cosmetics`, `food-safety`, `ce-marking`, `fda`, `reach`, `cpsia`, `claude-skills`
- README first 200 chars optimized for GitHub search

**Landing page SEO:**
- Sitemap.xml at root
- robots.txt allowing all
- `<meta name="description">` under 160 chars
- OpenGraph + Twitter Card tags
- Schema.org `SoftwareApplication` + `Organization` markup
- Lighthouse score ≥95 on all four axes
- One H1, structured Hs
- Internal links to /skills/[name] pages (1 per skill = 28 indexable pages)

#### 2. Backlinks

| Source | Type | Action |
|---|---|---|
| insight.cleolabs.co | Owned | Footer link |
| legaldata-public.cleolabs.co | Owned | "Powered by" + docs |
| cleolabs.co | Owned | Top nav |
| cleo blog | Owned | Every article |
| Wikipedia | Earned | Add as external link on "regulatory compliance" / "MoCRA" / "REACH" / "CE marking" pages — only as an example tool, no spam |
| Stack Overflow | Earned | Answer genuine questions, mention as tool only when truly relevant |
| GitHub Gists | Owned | 20 gists with code examples |
| dev.to articles | Owned | Auto-linked |
| Reddit comments | Earned | Long term — answers stay indexed |
| YouTube descriptions | Owned | Every video |

#### 3. Templates & Boilerplates

| Template | Platform | Topic |
|---|---|---|
| "Cosmetics launch compliance checklist" | Notion | EU + US |
| "Food product labeling checklist" | Notion | FDA + EU |
| "Toy safety pre-launch" | Notion | EN71 + CPSIA |
| "EU REACH SVHC tracker" | Airtable | Substance tracker |
| "Multi-country product launch tracker" | Google Sheets | All verticals |
| "GPSR checklist 2026" | Notion | EU GPSR — hot topic |
| "California Prop 65 tracker" | Airtable | US |
| "INCI ingredients checker" | Google Sheets | Cosmetics |

Each template's footer:
> Powered by skills_library — install in 30 seconds and let Claude Code fill this for you.
> github.com/Cleo-Labs-IA/skills_library

Promote each template in its native discovery (Notion gallery, Etsy templates, Gumroad).

---

## Launch Sequence — Week-by-Week Plan (90 days)

### Week 1 — May 28 – Jun 3 (foundation week)
- [ ] Mon May 28 — Repo polish: README, LICENSE, SECURITY, CODE_OF_CONDUCT, screenshots
- [ ] Tue May 29 — Submit to MCP marketplaces (Glama, Smithery)
- [ ] Wed May 30 — Open PR to Anthropic claude-code registry
- [ ] Wed May 30 — Open PRs to top 3 awesome lists
- [ ] Thu May 31 — Submit to remaining MCP marketplaces (MCP.so, MCP Servers, OpenTools)
- [ ] Fri Jun 1 — Open PRs to remaining 7 awesome lists
- [ ] Tue Jun 3 8AM PT — Show HN

### Week 2 — Jun 4 – Jun 10 (high-leverage burst)
- [ ] Mon Jun 8 — Pre-launch PH page live, hunter confirmed
- [ ] Tue Jun 9 00:01 PT — Product Hunt launch
- [ ] Wed Jun 10 — Reddit r/ClaudeAI + r/LocalLLaMA
- [ ] Thu Jun 11 — Reddit r/SideProject + r/entrepreneur (comments only)
- [ ] Fri Jun 12 — Founder LinkedIn long-form + company repost

### Week 3 — Jun 11 – Jun 17 (content kickoff)
- [ ] Record + publish YouTube videos 1–7
- [ ] Reddit r/d2c + r/shopify + r/ecommerce
- [ ] Twitter founder thread + @Cleo_Labs cadence begins
- [ ] First Substack issue

### Week 4 — Jun 18 – Jun 24 (content depth)
- [ ] Long-form blog post #1: "How we open-sourced our core IP" (Medium + Hashnode + dev.to)
- [ ] First niche newsletter pitch (DTC Newsletter + Beauty Independent)
- [ ] Reddit r/cosmeticchemistry + r/FoodScience
- [ ] First Notion template published + Gumroad listing

### Weeks 5–8 — Jun 25 – Jul 22 (content cadence + partnerships)
- 3 YouTube videos/week
- 2 blog posts/week
- 1 podcast pitch/week (DTC Pod, Indie Hackers, Latent Space)
- 1 partnership convo/week (SGS, Eurofins, Techstars, YC)
- 1 Reddit post/week
- Continue Twitter cadence

### Weeks 9–12 — Jul 23 – Aug 26 (earned media + conferences)
- Pitch TechCrunch, Sifted, Glossy
- Submit CFPs to AWS re:Invent, In-Cosmetics, Compliance Week
- First sponsored podcast episode goes live
- LinkedIn sponsored campaign launches (€1,500)
- Q1 retro blog post on Aug 26
- 90-day review: are we hitting metrics?

---

## Metrics Dashboard

| Metric | Source | Day 7 | Day 30 | Day 60 | Day 90 |
|---|---|---|---|---|---|
| GitHub stars | GH API | 50 | 200 | 500 | 1,000 |
| Forks | GH API | 5 | 30 | 100 | 300 |
| Installs (clones + plugin) | Referrer logs + plugin telemetry | 100 | 500 | 2,000 | 5,000 |
| MCP server adds | Cleo Insight API logs (server start events) | 10 | 50 | 200 | 500 |
| Free API signups | legaldata-public Stripe | 30 | 100 | 400 | 1,000 |
| Paid Pro signups | Stripe | 1 | 5 | 25 | 100 |
| MRR attributable | Stripe + UTM | €349 | €1,745 | €8,725 | €34,900 |
| Blog organic visits | GA4 | 200 | 2,000 | 8,000 | 25,000 |
| YouTube views | YT API | 500 | 5,000 | 25,000 | 100,000 |
| Twitter impressions | X analytics | 5k | 50k | 200k | 500k |
| LinkedIn impressions | LI analytics | 5k | 30k | 100k | 250k |
| Press mentions | manual | 0 | 1 | 3 | 8 |
| Podcast appearances | manual | 0 | 0 | 1 | 3 |

**Weekly review cadence:** every Monday 9am, 30 minutes, Naomie + whoever joins. Update metrics, decide pivots. If a Tier is underperforming by Day 30 (<50% of target), reallocate budget to better-performing channel.

**Attribution:** every external link uses UTM (utm_source=tier_channel, utm_medium=type, utm_campaign=launch90). Cleo Legal API signup form captures last-touch + first-touch UTM.

---

## The Killer Quote — Candidate One-Liners

Pick one as primary. A/B test where possible.

1. **Developer angle** — "The Stripe of compliance for AI agents."
2. **D2C angle** — "Compliance answers in 30 seconds, not 6 weeks."
3. **AI angle** — "We taught Claude Code to handle global product compliance."
4. **Cost angle** — "Replace your compliance consultant with 28 AI skills."
5. **Open-source angle** — "Built in the open. Free forever. Powered by Cleo Legal API."

**Recommended primary:** #2 ("Compliance answers in 30 seconds, not 6 weeks.")
**Recommended developer-channel variant:** #3
**Recommended HN/PH tagline:** #5

---

## Anti-patterns — What NOT to Do

- No spammy posts in unrelated subreddits. Compliance + DTC + AI subs only. No drive-by self-promotion.
- No paid GitHub stars. The algorithm + community detects this and the reputation cost is permanent.
- No fake reviews on Product Hunt. PH bans accounts and the founder forever.
- No buying lookalike domains. "claude-compliance.com" or similar = trademark issues + bad faith.
- No misleading claims. The skills do not give legal advice; they query a dataset and cite sources. Say that everywhere.
- No bait-and-switch. The free tier (50 calls/day) must remain genuinely useful. Reducing it after launch = trust death.
- No DM spam asking for upvotes (HN, PH, Reddit all penalize).
- No fake hunters on PH. Use real ones who actually like the product.
- No cross-posting within 48h to overlapping subreddits — Reddit's spam filter catches it.
- No undisclosed sponsored content. Always tag #ad or #sponsored.
- No telemetry without explicit opt-in. Privacy-first or the open-source crowd will eat us alive.
- No removing the open-source license retroactively. MIT today is MIT forever.

---

## Cleo Legal API Integration Points (per channel)

| Channel | How the funnel works | CTA placement |
|---|---|---|
| GitHub repo | README "Quick start" links to legaldata-public.cleolabs.co/signup for free API key | Top of README + every skill's docs |
| Awesome list entries | Description includes "powered by Cleo Legal API" | Single-line description |
| Product Hunt | Gallery features API live; one screenshot is the API dashboard | First comment links API |
| HN Show HN | Founder first comment openly states business model | Comment only, not body |
| Reddit | CTAs in comments only (most subs ban links in body) | Pinned founder comment |
| YouTube videos | Each video shows the API call live; description has UTM link | Description + on-screen at 0:50 |
| Blog posts | Contextual mentions in body + footer "Try the API free" CTA | Footer always |
| Twitter | Bio link + every thread ends with API link | Bio + thread tail |
| LinkedIn | Founder posts include API link; sponsored ads CTA = signup | In-post + ad CTA |
| Newsletter sponsorships | Mandatory "Try the API" CTA + free-tier mention | Required in contract |
| Conference talks | Live demo hits the API on stage; slide deck QR to signup | Demo + closing slide |
| Podcasts | Naomie talks about API as business model openly; host gets unique discount code | In-show + show notes |
| MCP marketplaces | Listing IS the Cleo Legal API MCP; skills_library is companion link | Listing description |
| Notion/Airtable templates | Footer of every template | Footer always |
| SEO articles | Footer CTA + 1 contextual mention per 1,000 words | Footer + body |
| Partnerships (labs/accelerators) | Discount code unique per partner = clean attribution | Partner page |
| Shopify app | Embedded API key entry + free-tier nudge | App settings UI |

---

## Operating Principles

1. **Compounding > spikes.** A blog post indexed today drives traffic for 3 years. A tweet drives traffic for 3 days. Invest 70% in compounding assets, 30% in spikes.
2. **Show the source.** Every claim links to data or repo. "AI" + "compliance" + closed source = nobody trusts it.
3. **Talk about money openly.** Founders trust founders who admit the business model. Hide it = look sketchy.
4. **Niche first.** Cosmetics > beauty > consumer goods > e-commerce > business. Win one vertical, expand.
5. **Reply to everyone for the first 90 days.** Naomie personally answers every comment, every issue, every DM. Compounds trust.
6. **One channel, one owner.** If nobody owns a channel by name, it dies. Hire/assign before launching.
7. **Kill what doesn't work by Day 30.** If a Tier 1 channel is under 50% of target by Day 30, cut budget and reallocate. No sunk-cost.

---

*Document version: 1.0 — 2026-05-28. Owner: Naomie Halioua. Review cadence: weekly through Day 90, then monthly.*
