# Food supplement — Vitamin D + K2 export to Japan

> A French food-supplement brand on its first export project: a vitamin D3 + K2 capsule into Japan. They used `skills_library` to understand the pathway (FFC vs FOSHU vs standard food) and the substance-level constraints — before sending the first PO to their Japanese distributor.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Family-run nutraceutical company based near Lyon, 11 SKUs, ~€4M revenue, mostly French pharmacy retail and own website. A Japanese distributor (Tokyo-based health-food chain) had asked for a private-label deal on their D3+K2 capsule — 25 µg D3 / 75 µg K2 — with first shipment targeted for spring 2026.

## The question they asked Claude Code

> *"What does it take to put our D3+K2 capsule on the Japanese market via a distributor? Is FFC notification the right pathway?"*

The MCP server surfaced `supplement-compliance` + `labeling-compliance` + `responsible-person` + `customs-and-trade`. The `multi-jurisdiction-scan` skill was not needed — this is a single-market question.

## The verdict from `skills_library`

- **Japan does not have a single "supplement" category.** Three regulatory pathways under the Food Sanitation Act, each with very different obligations:
  1. **Standard "health food" (kenko shokuhin).** No notification required, no functional claim allowed. Just basic food labelling. Cheapest, fastest.
  2. **FFC — Foods with Function Claims** (since 2015). Notification to the Consumer Affairs Agency (CAA) at least 60 days before market. Functional claim allowed if substantiated by published research or systematic review. The brand owns ingredient + final product responsibility.
  3. **FOSHU — Food for Specified Health Uses.** Pre-approval pathway (not notification). 2-3 years and ¥20-50M typical cost. Out of scope.

  For this product, **FFC is the right path** — it allows the brand to claim, e.g., "contributes to maintaining bone health" if backed by a systematic review of D3 + K2 effects on bone density (which exists).

- **D3 is OK, K2 has a constraint.**
  - Vitamin D3 at 25 µg/day is well within Japan's Dietary Reference Intake upper limit (100 µg).
  - **Vitamin K2 (menaquinone-7) is the issue.** Japan's positive list (the Food Sanitation Act Article 11 standards) includes K2, but **MK-7 specifically from Bacillus subtilis natto fermentation has a precedent of acceptance**, while synthetic MK-7 has not been formally cleared as a food ingredient. Their supplier was using natto-derived MK-7 — confirmed OK. Skill cited: MHLW Notification No. 0319-1, 2014.

- **Labelling.** All mandatory information must be in Japanese, including:
  - Product name, ingredient list (in descending order by weight, with allergens highlighted from the 8 mandatory + 20 recommended Japanese allergen list — different from EU's 14),
  - Nutritional info per 100 g and per portion,
  - **Importer's name and address in Japan** (the distributor will act as importer of record),
  - "FFC notified product" mark + the notified functional claim verbatim,
  - Use-by date in YYYY/MM/DD or 西暦, and storage instructions.

- **Customs.** HS code **2106.90.99** (food preparations not elsewhere specified). Japan's MFN duty is 12.5%, but the EPA between the EU and Japan (in force since 2019) reduces this to **0% with a REX statement on origin**. The brand was REX-registered in France — straight win.

- **Importer of record.** The distributor will register as importer with Customs. The brand needs to provide the Food Sanitation Import Notification (Form C) documents — a manufacturing-process flow chart, the ingredient breakdown to two decimal places, and a heavy-metal + microbial test report from an ISO 17025 accredited lab. The brand had IFS-FOOD certified manufacturing but had never had a Japan-spec lab test panel done. Cost: €1,400, lead time 3 weeks.

## Time saved

The brand had been told by a regulatory consultancy in Paris that "Japan probably requires a FOSHU" — which is wrong for this product and would have killed the deal economically. The skill correctly identified FFC as the right path, the K2 source constraint, and the EU-Japan EPA duty saving (12.5 % → 0 %). Total time in chat: **~45 minutes**. Cost saved versus the consultancy-led "we need FOSHU" path: **€20-40M of misdirected effort**, or more realistically, the deal lost.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

Then in [Claude Desktop](../tutorials/claude-desktop.md), [Cursor](../tutorials/cursor.md), or [Continue](../tutorials/continue.md):

> *"We want to export a D3 + K2 supplement to Japan. Walk me through FFC vs FOSHU vs standard food, and flag any substance-level issues."*

For live MK-7 / vitamin substance lookups and Japan customs queries, use the Cleo Legal API: <https://legaldata-public.cleolabs.co/>.

---

Source: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [multi-jurisdiction launch](./multi-jurisdiction-launch.md) · [pet product UK rebrand](./pet-product-uk-rebrand.md)
