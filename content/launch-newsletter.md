# Launch Newsletter — skills_library open-source release

**Audience**: Existing Cleo Labs subscribers (founders, ops leaders, compliance pros in physical-product companies)
**Format**: Plain text email, ~800 words
**From**: Naomie + the Cleo Labs team

---

**Subject line**: We open-sourced our compliance brain

---

Hi,

Quick note from Naomie — founder of Cleo Labs.

For the last 18 months, our team has been quietly building what I think is the most useful thing we've made yet. Today we are releasing it: **skills_library**, a free, open-source collection of 40+ compliance skills that plug into Claude Code and answer the questions every physical-product founder asks every week.

> "Can I sell this in the EU?"
> "What does it cost to land in California?"
> "Is this ingredient still legal in 2026?"
> "Where do I get pulled off Amazon and how do I fix it?"

Forty skills. Six verticals. Open source. MIT licensed.

**Install**:
```
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

Thirty seconds and Claude Code starts auto-triggering compliance answers on whatever you're working on. No keys. No login. No paywall.

The repository: https://github.com/Cleo-Labs-IA/skills_library
The landing page: https://cleo-labs-ia.github.io/skills_library/

## What's actually in it

Forty-plus skills organized in six tiers:

- **Tier 1 — Core**: `product-compliance`, `labeling-compliance`, `market-entry-checklist`
- **Tier 2 — Intelligence**: `regulatory-intelligence`, `multi-jurisdiction-scan`, `customs-and-trade`
- **Tier 3 — Action**: `compliance-audit-sprint`, `compliance-remediation`, `evidence-blitz`
- **Tier 4 — Deep dives**: `substance-screening`, `testing-certification`, `claims-substantiation`, `responsible-person`, `packaging-compliance`, `recall-response`, `import-export-docs`, `marketplace-compliance`
- **Tier 5 — Verticals**: `cosmetics-compliance`, `food-compliance`, `electronics-compliance`, `textile-compliance`, `toy-compliance`, `sustainability-compliance`, `product-safety-incident`, `regulatory-calendar`
- **Tier 6 — Reference**: `compliance-frameworks-ref`, `compliance-mcp-tools`, `compliance-reporting`

Plus specialized vertical skills for **alcohol/spirits, automotive aftermarket, baby/children products, candles, household chemicals, jewelry, medical device, pet products, sporting goods, supplement, agricultural** — fourteen verticals total. Every skill is production-grade. They have been used internally on cosmetics launches in 8 EU markets, US MoCRA filings, Japan MHLW notifications, and emergency Amazon EU GPSR remediations.

## Why we are giving it away

Honest answer: it's a product-led growth play.

The skills work without any of our paid services. They use Claude Code's built-in capabilities and your own knowledge. But they get **dramatically more powerful** when plugged into the **Cleo Legal API** — our paid backbone (€349/mo) that gives skills access to live, authoritative legal data: current EU Annex versions, current EPR schemes, current customs duty rates, sanctions lists, INCI-to-CAS resolution, all updated daily.

So the funnel is simple: the skills attract founders who want compliance answers. Founders use them. Some hit the limits of "general knowledge" and want **authoritative, audit-grade data** — they upgrade to Cleo Legal API. Everyone wins.

The deeper reason: compliance is the **single biggest hidden cost** for small physical-product brands. The information exists in regulator websites, but it's fragmented across 27 EU member states, 50 US states, MHLW, MFDS, NMPA, ECHA, FDA, CPSC, OPSS, OEHHA... You spend 200 hours figuring out what every founder needs to know. We want to make that 30 seconds.

## Three things to try right now

1. **Run a substance check on something you're shipping today.**
   In Claude Code: `"Screen the ingredients in my [product] against EU + California"`
   The `substance-screening` skill auto-triggers. You'll get a per-substance verdict with limits and margins. If you're shipping textiles or cosmetics, you may discover a PFAS or banned-fragrance issue you didn't know about.

2. **Estimate landed cost on your next import.**
   `"Landed cost: 1,000 [product] FOB [origin] to [destination]"`
   The `customs-and-trade` skill returns HS code + duty + VAT/GST + freight estimate + EPR + any sanctions check.

3. **Map your next market entry.**
   `"Step-by-step roadmap to enter [market] with [product]"`
   The `market-entry-checklist` skill gives you the 12-step plan with costs and lead times.

## Roadmap

In the next 90 days we're shipping:

- **MCP plug-in pack v2** — Cleo Legal API + Cleo Insight + (optional) Bastion for compliance audits
- **5 new verticals** — alcohol/spirits already in, plus medical device deep dive, agricultural, automotive aftermarket, pet products
- **Compliance Academy** — twelve free lessons that teach the foundations behind the skills (Lesson 01 is live in the repo)
- **YouTube series** — thirty 30-second demos, one per skill, real terminal output

We need your help with:
- **Star the repo** (it really matters for discovery): https://github.com/Cleo-Labs-IA/skills_library
- **Try a skill** and tell us what you discovered (good or embarrassing)
- **Share the link** with one founder who would benefit. That's how this grows.

## One last thing

I have spent the last two years rebuilding compliance tooling from scratch because the existing tools — regulatory consultancies, SaaS dashboards, country-by-country agencies — are too slow, too expensive, and too opaque for the founders we work with. The skills_library is the result of every founder conversation where we heard *"I had no idea this was a thing."*

If you've ever had that conversation, this is for you.

Naomie
Founder, Cleo Labs
naomie@cleolabs.co

PS — If you want compliance answers grounded in live legal data (not general knowledge), upgrade to Cleo Legal API. €349/mo, plug-and-play with skills_library. https://legaldata-public.cleolabs.co/

PPS — If you build something cool with the skills, send it. We will feature it.

---

*You're receiving this because you subscribed to the Cleo Labs newsletter at cleolabs.co. Unsubscribe any time.*
