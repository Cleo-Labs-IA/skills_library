# Multi-jurisdiction launch — skincare in EU + US + CA + JP + KR simultaneously

> A scaled skincare brand launching a new flagship serum in five jurisdictions at the same time. The skills surfaced the full compliance matrix across 13 substance databases and produced a single Revenue-at-Risk view across all five markets.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Mid-size skincare brand, Series-B funded, ~€42M revenue, 38 SKUs. Their new flagship: a peptide + 0.5% bakuchiol + niacinamide serum, positioned as the "next-generation retinol alternative." Launch plan: EU (DE/FR/IT/ES/NL), US, Canada, Japan, Korea — all on the same date, with influencer campaigns aligned. Failure to launch in any single market would create a confidence problem with retailers in the other four.

## The question they asked Claude Code

> *"We have a peptide + 0.5% bakuchiol + 3% niacinamide serum launching in 14 weeks in EU, US, CA, JP, KR. Run a full multi-jurisdiction scan and tell us where we're blocked."*

The MCP pulled `multi-jurisdiction-scan` (which dispatches one sub-agent per jurisdiction), `cosmetics-compliance`, `substance-screening`, `labeling-compliance`, `claims-substantiation`, `responsible-person`, `regulatory-calendar`.

## The verdict from `skills_library`

`multi-jurisdiction-scan` ran five parallel sub-agents, one per market, and produced this matrix:

| Market | Verdict | Critical issues |
| ------ | ------- | --------------- |
| **EU (DE/FR/IT/ES/NL)** | YELLOW | Bakuchiol: not listed in EU CosIng. Treat as new ingredient. Notification via CPNP requires fresh CPSR including safety data. Lead time: 8-10 weeks. |
| **US** | GREEN | MoCRA: facility + product listing already in place. No federal cap on any ingredient at these levels. |
| **CA** | YELLOW | Bakuchiol not on Health Canada Hotlist nor on Cosmetic Ingredient Hotlist as restricted, but must be reported via CNF within 10 days of first sale. |
| **JP** | YELLOW | Quasi-drug vs cosmetic: borderline. Bakuchiol is *not* on the MHLW Standards for Cosmetics positive list of "designated ingredients with required labelling" — but its therapeutic-sounding nature would attract attention. Stay strictly cosmetic in claims. |
| **KR** | ORANGE | MFDS: 화장품법 requires cosmetic ingredients be on the **Catalogue of Standards for Cosmetic Ingredients**. Bakuchiol is **not yet listed**. Two options: (1) submit pre-notification with full safety dossier (6-9 months, blocks the simultaneous launch), or (2) launch via the 'functional cosmetic' pathway (~3-4 months). |

The Korean blocker was the headline — Korea was a planned 12-15% of first-year revenue.

- **Detailed substance verdicts.**
  - **Bakuchiol (CAS 10309-37-2)** — natural meroterpene from *Psoralea corylifolia*. Permitted in cosmetics in EU/US/CA at the brand's level. JP: cosmetic-acceptable but watch for therapeutic claim drift. KR: not on the inventory — the blocker.
  - **Peptide complex** (Palmitoyl Tripeptide-1, INCI: Palmitoyl Tripeptide-1) — listed in CosIng, US PCPC, Health Canada list, JP MHLW Standards, KR Catalogue. GREEN across all five.
  - **Niacinamide at 3%** — GREEN. EU 1223/2009 has no concentration cap (the SCCS Opinion on niacinamide does not restrict at this level), US/CA/JP all cosmetic-acceptable, KR cosmetic-acceptable (max declared concentrations for cosmetic claims do not apply at 3%).
  - **Preservatives (phenoxyethanol 0.6%, ethylhexylglycerin 0.3%)** — GREEN across all five.

- **Labelling matrix.**
  - EU: INCI in EN + member-state language for warnings. Responsible Person address. PIF held. CPNP notification. PAO (Period After Opening). Batch.
  - US: MoCRA-compliant ingredient panel, "Drug Facts" not applicable. State-specific (CA Prop 65 — no listed substances above safe harbour in this formula).
  - CA: bilingual EN/FR mandatory. CFIA-format INCI. CNF reportable within 10 days of first sale.
  - JP: Japanese-language ingredient list per JCIA standard names + Japanese product name + importer name and address.
  - KR: Korean-language labelling, MFDS importer ID, batch, manufacturing date + expiry. "Functional cosmetic" mark *if* taking that pathway.

- **Claims.** The brand's hero claim was "the next-generation retinol alternative." `claims-substantiation` flagged this as:
  - **EU** — comparative claim under Reg 655/2013 + Cosmetics Claims Regulation, requires evidence the brand has bakuchiol-vs-retinol head-to-head data. They had one published study (Dhaliwal et al., 2019, *Br J Dermatol*) — third-party but used as evidence is acceptable as long as not overstated.
  - **US** — FTC substantiation rules apply, similar evidence threshold. The "alternative to retinol" wording is OK; "as effective as retinol" would be borderline-drug.
  - **KR** — comparative claims especially sensitive. They softened the KR-market claim to "a plant-derived approach to skin renewal."

## Time saved

The brand had quotes from regulatory consultancies on a per-market basis: ~€18k total advisory fee. The skill-led launch audit, run in **two working days**, produced:
- A market-by-market verdict and a clear "fix or sunset" decision (KR took the functional-cosmetic 3-4 month pathway; the brand staged KR three months after the other four markets).
- A complete claims matrix per market with substantiation references.
- A regulatory-calendar export with notification deadlines (CPNP, CNF, MoCRA listing update, MFDS application, JP importer notification).
- An evidence-blitz checklist: PIF + CPSR documents, third-party stability tests, microbiological challenge tests, regulatory-grade INCI translation files for JP and KR.

Total saved: **~€16k in consultancy fees + 6 weeks of timeline + KR launch staged correctly** instead of the brand pushing into a Korean market they were not registered in (which would have triggered an MFDS enforcement action).

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"Run a multi-jurisdiction scan for a peptide + 0.5% bakuchiol + 3% niacinamide serum launching in EU, US, CA, JP, KR. Surface every blocker."*

For live KR MFDS inventory + JP MHLW Standards + CA Hotlist + EU CosIng + US MoCRA lookups: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [cosmetics retinol](./cosmetics-eu-retinol.md) · [food supplement Japan](./food-supplement-japan.md) · [marketplace Amazon EU GPSR](./marketplace-amazon-eu-gpsr.md)
