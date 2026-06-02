# Recall detection — using skills to assess a competitor's recall

> A direct competitor in the children's-sleepwear category got hit with a CPSC recall. A brand selling adjacent SKUs used `skills_library` to triage: are we exposed? Could the same issue hit us next quarter?

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Direct-to-consumer children's-sleepwear brand, ~$5M ARR, sells in the US + Canada. Their core line is **tight-fitting cotton/elastane pyjamas** that meet **CPSIA 16 CFR 1610 + 1615/1616** flammability standards by virtue of fabric construction (tight fit exempts the garment from the flammability *resistance* test, provided it passes the *dimensional* tight-fit requirements).

In Q1 2026, a competitor recalled ~280,000 pyjama units because the garments **did not actually meet** the tight-fit dimensions on the medium and large sizes — they were too loose, which means the flammability-resistance test was required and had not been done.

## The question they asked Claude Code

> *"<Competitor brand> just got hit with a CPSC recall on their kids' pyjamas — tight-fit failure. We use the same standard. Are we exposed? What do we need to check?"*

The MCP pulled `recall-response` + `product-safety-incident` + `textile-compliance` + `evidence-blitz` + `regulatory-intelligence`.

## The verdict from `skills_library`

- **What the competitor's recall actually says.** The CPSC press release listed the specific failure mode: a sample drawn from production had a chest circumference **5/8 inch over** the maximum allowed by **16 CFR 1610.5(c)(5)** — the tight-fit dimensional requirements. Above that threshold, the garment is no longer exempt from flammability testing, and the competitor had no flammability test on file.

  The skill walked through the exact dimensions per size band:
  - 9 months: chest ≤ 19 7/8″
  - 12 months: ≤ 20 7/8″
  - 18 months: ≤ 21 1/2″
  - 24 months: ≤ 22 1/4″
  - 2T: ≤ 22 1/2″
  - … up through 14 size.

- **Internal triage with `evidence-blitz`.** The brand's QA lead pulled the last 12 months of incoming-inspection records:
  - **Sizes 6m through 4T**: pattern measurements stable, last 18 months of incoming samples ≤ spec by 1/4″ to 1/2″ margin. **GREEN.**
  - **Sizes 5 through 8**: chest measurements at -0 / +1/8″ margin to spec — a **YELLOW** because the production tolerance had eaten the margin.
  - **Sizes 10, 12, 14**: 3 of 14 incoming samples in the last 6 months over spec by 1/8″ to 3/8″. **ORANGE.** The brand's QC threshold ("within 1/4″ of pattern") was less strict than the **regulatory** threshold ("≤ CFR maximum").

- **Immediate actions the skills surfaced.**
  1. **Quarantine in-warehouse stock** for sizes 10, 12, 14 — measure 100% of cartons before further release.
  2. **Re-measure the fit-pattern blocks** at the contract manufacturer; if drift, re-block. The skill cited the 14-day root-cause window before a CPSC reportable obligation might trigger under **15 USC 2064(b)** Section 15 reporting.
  3. **Begin Section 15(b) substantial-hazard analysis** — if the brand's product also fails the tight-fit dimensions, they may need to report to CPSC within 24 hours of acquiring information that reasonably supports the conclusion of a substantial product hazard. The skill walked through the analysis matrix.
  4. **Pull the GCC (General Certificate of Conformity) for each affected size** and confirm whether it referenced "tight-fit exemption" — if so, and the dimensions are now out, the GCC is invalid and the product is non-compliant *as labelled*.
  5. **Prepare a voluntary corrective action plan** — pulling, refit, optional voluntary recall. The skill made clear that voluntarily resizing before a CPSC notification was the right path if the measurements were marginal but the GCC was technically invalid.

- **Forward-looking.** `regulatory-intelligence` flagged that CPSC has been increasing enforcement activity in children's sleepwear specifically in 2025-2026 after a cluster of similar tight-fit failures. The brand pre-emptively booked their next production run for **third-party flammability testing** as a belt-and-braces — abandoning the tight-fit exemption pathway for the large sizes and going to ASTM D6413 / 16 CFR 1615 testing for sizes 10-14.

## Time saved

The brand's CEO had two competing instincts: panic-recall everything pre-emptively (expensive, customer-trust risk) or do nothing (regulatory and customer-safety risk). The skill-led triage in a single afternoon produced:
- A size-by-size risk grid backed by their own QC data.
- A precise CFR-citation rationale for each decision.
- A 14-day root-cause + 24-hour Section 15(b) reporting timeline.
- A pre-emptive testing decision for the at-risk sizes.

They did **not** recall, they did re-block the patterns, they did add testing for the at-risk sizes. No CPSC notification was needed (no substantial product hazard finding). The estimated avoided cost of an unnecessary precautionary recall: **~$280-450k** in product retrieval, refunds, and brand damage.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"<Competitor> just got recalled by CPSC for tight-fit failure on children's pyjamas. Walk me through the standard, the failure mode, and our internal triage."*

For live CPSC + Safety Gate + Health Canada recall feeds: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [toy children's EU](./toy-childrens-eu.md) · [textile PFAS](./textile-pfas-restriction.md)
