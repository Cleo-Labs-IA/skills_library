# Textile / apparel — PFAS exposure audit for a technical outerwear brand

> A small technical-outerwear brand auditing their supply chain after the EU's PFAS restriction proposal moved closer to final adoption. They used `skills_library` to identify the **specific** PFAS-bearing components in their jackets, before reformulating panic-bought.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Independent French technical-outerwear brand, ~€6M revenue, 19 SKUs split between hiking shells, urban parkas, and ski jackets. They source DWR-treated face fabrics from a long-time Italian supplier and rely on a 3-layer membrane laminate (face / membrane / backer). When the **REACH PFAS restriction proposal** (ECHA Annex XV dossier published January 2023) moved through Committee for Risk Assessment in 2024 and the Commission signalled adoption in 2026 with phased transition periods, the founder panicked.

## The question they asked Claude Code

> *"Where am I exposed to the EU PFAS restriction across my 19 SKUs? I have 4 DWR finishes, two membranes, and a bunch of trims. I need to know what to swap and what to keep."*

The MCP server pulled `textile-compliance` + `substance-screening` + `sustainability-compliance` + `regulatory-intelligence` (for the timeline) + `regulatory-calendar` (for the dates).

## The verdict from `skills_library`

- **The scope of the PFAS restriction.** The current draft (as of the regulatory snapshot in the skill) restricts the **manufacture, placement on the market and use** of PFAS as substances, in mixtures, and in articles, with **derogations** under consideration for specific high-performance applications. For textiles, the proposed regime is:
  - General consumer textiles: phase-out, with a 6.5-year transition period for use in PPE-categorised garments and 18 months for other textile uses (this is the snapshot at time of writing; track the EU Official Journal for the final).
  - **C8 PFAS** (PFOA, PFOS, PFHxS, PFNA + their salts) are already restricted under the Stockholm Convention + REACH Annex XVII entries 68/69/71/74. Not new — but the brand needed evidence they were already compliant.

- **Where their products had exposure.**
  - **DWR finish A** (used on 11 SKUs) — a C6 fluorotelomer chemistry from their Italian supplier. Within current REACH limits, **but** in scope of the new restriction. **Plan to swap.**
  - **DWR finish B** (used on 4 SKUs) — already a non-fluorinated dendrimer (Bionic Finish ECO or similar). **Already compliant.**
  - **DWR finishes C and D** (specialty winter jackets, 4 SKUs) — undisclosed by the supplier. The skill recommended issuing a **REACH Article 33(1) request** to the supplier (mandatory within 45 days under SVHC rules; PFAS is being added in stages to the Candidate List). Without confirmation, treat as in-scope and plan to swap.
  - **Membrane.** The supplier's ePTFE membrane is fluorinated by definition — but a derogation for technical performance is being discussed for membranes in PPE-grade outerwear. **Watch list.** Plan B: switch to a polyurethane membrane on the ski-jacket line if the derogation does not land.
  - **Trims.** Zipper sliders and snap buttons — checked, no fluorinated treatments. Reflective tape — confirmed not PFAS-treated.

- **Timeline.** The skill output a date-by-date calendar via `regulatory-calendar`: ECHA Opinion expected Q4 2025, Commission adoption mid-2026, phased transition starting 18 months after publication. The brand had until **Q1 2028** to swap the C6 DWR on consumer jackets, and **Q4 2032** if the PPE derogation lands and applies to their products.

- **Marketing claims.** The brand's product pages said "PFC-free" on the 4 SKUs using DWR B (correct), but their hero shell still said "highly water-repellent — eco-conscious chemistry" while using DWR A. `claims-substantiation` flagged this as a **Green Claims Directive** risk: vague eco-claims are now scrutinised under the EU's Empowering Consumers for the Green Transition Directive (2024/825) — the brand needed to either remove the claim or document the specific environmental advantage of the C6 over the alternatives (hard, because C6 is exactly what's being restricted).

## Time saved

The founder had been quoted **€8,200** by a Lyon-based textile chemistry consultancy for "a PFAS audit" — a 4-week engagement. The skill-led audit completed in **two afternoons** of focused work. Outcomes:
- A clear "swap / keep / watch" table per SKU.
- An Article 33(1) request template they sent to the supplier the same day.
- A roadmap with 2028 and 2032 milestones tied to the EU regulation timeline.
- Green Claims Directive exposure removed from the website that week.

The cost of getting this wrong — discovering at scale, after the Commission adoption, that 15 of 19 SKUs need reformulation with 18 months notice — was very real for several of their competitors. The skill-driven audit cost them ~€0 in advisory.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"I have a technical outerwear line with C6 DWR, ePTFE membranes, and some unknown finishes. Audit my exposure to the EU PFAS restriction and produce a swap-keep-watch table."*

For live REACH SVHC + PFAS substance lookups across 13 databases: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [recall detection](./recall-detection.md) · [multi-jurisdiction launch](./multi-jurisdiction-launch.md)
