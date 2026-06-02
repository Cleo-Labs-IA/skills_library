# Medical device — Class I non-sterile ergonomic posture corrector, EU + US

> A boutique medical-device startup launching their first Class I device. Misclassification of medical devices is one of the costliest mistakes in product compliance — they used `skills_library` to get the class right *before* spending six figures on the wrong pathway.

```bash
npx -y @cleo-labs/skills-mcp@latest
```

## The brand

Two-person team — a physio and an industrial designer — building a soft posture-correcting brace that uses passive textile architecture (no electronics, no software, no measuring function) to encourage upright thoracic alignment. Crowdfunded ~€140k. Target: EU launch through their own e-commerce + selected medical retailers, plus a US launch via Amazon and a few PT clinics.

## The question they asked Claude Code

> *"Is our posture corrector a medical device? If yes, what class, and what does it take to ship in EU + US?"*

`medical-device-compliance` triggered. The MCP also pulled `labeling-compliance`, `claims-substantiation`, `responsible-person`, and `regulatory-calendar`.

## The verdict from `skills_library`

- **The classification question is *the* question.** Under **EU MDR 2017/745**, a "medical device" is anything intended by the manufacturer to be used on humans for one of: diagnosis, prevention, monitoring, prediction, prognosis, treatment, alleviation of disease, injury, etc. — Article 2(1). Two paths:
  - If marketed as **"for posture-correction therapy" / "alleviates back pain" / "treats kyphosis"** → it is a medical device.
  - If marketed as **"wellness garment" / "supports upright posture during desk work"** with no therapeutic claim → it is not a medical device. It is a consumer product (textile + GPSR).

  The team's website draft said "alleviates upper-back pain and treats slouching" — the skill flagged this as **squarely inside MDR scope**. They had a choice: rewrite the marketing copy and ship as consumer textile, or keep the medical claims and accept the MDR pathway.

- **They chose to keep the medical claim.** Under MDR Annex VIII Rule 1 (non-invasive devices that do not channel/store fluids), this is **Class I**. No Notified Body involvement required. But Class I now has real obligations under MDR:
  - **Quality Management System** under ISO 13485:2016 — required for all classes since MDR. Cost: €15-25k to establish, €4-8k/year to maintain.
  - **Technical Documentation** per MDR Annex II + III (post-market surveillance plan).
  - **Risk Management** per ISO 14971:2019 — risk file, FMEA, residual-risk evaluation.
  - **Clinical evaluation report** per MEDDEV 2.7/1 rev 4 — even Class I needs one, though the literature route is typically acceptable for low-risk passive devices. Cost: €4-8k.
  - **EUDAMED registration** + **Basic UDI-DI assignment**.
  - **EU Authorised Representative** if the manufacturer is outside the EU. The brand is in Berlin — no AR needed for EU, but the **Person Responsible for Regulatory Compliance (PRRC)** per Article 15 is required. For a micro-enterprise (<10 employees), the PRRC can be a contracted external — €600-€1,500/month.
  - **MDR labelling** — manufacturer name + address, CE mark (Class I needs no NB number), basic UDI, "Medical Device" symbol ISO 15223-1, intended purpose, batch/serial.

- **US — 510(k)?** Not necessarily. Class I orthotic braces "designed and developed for general use to reduce, restrict, or limit motion of a body part" are listed under **21 CFR 890.3475** — Class I, generally **510(k)-exempt** (subject to general controls). The brand needs:
  - **Establishment Registration + Device Listing** with FDA (annual, ~$8,000 establishment fee in FY2026).
  - **US Agent** if outside the US — ~$1,200-$3,000/year for a registered agent.
  - **Quality System Regulation (21 CFR 820)** — much lighter than ISO 13485 for 510(k)-exempt Class I, but design controls still apply (Subpart C 21 CFR 820.30) only if explicitly required (it is *not* for most 510(k)-exempt Class I — the brand verified their specific product code).
  - **No FDA pre-market clearance**, but labelling rules under 21 CFR 801 apply.

- **Claims — a danger zone.** The skill flagged that US-side claims like "treats" or "diagnoses" would push the device from 510(k)-exempt into 510(k)-required territory. The team wrote two parallel claim sets — a *therapeutic-but-passive* EU set and a *structural-function* US set — both consistent with the same product.

## Time saved

The team had been considering hiring a regulatory consultancy on retainer (€7,500/month for 6 months minimum) to "navigate MDR." The skills-driven session in one afternoon:
- Confirmed Class I, not Class IIa.
- Avoided the trap of building a 510(k) submission they did not need.
- Identified the contractor-PRRC path so they did not need to hire a full-time RA person.
- Built a phased compliance budget: **€35-45k year one** (QMS + clinical evaluation + PRRC + EUDAMED + FDA registration), versus the consultancy's implicit **€90k+** quote.

Total saved: **~€45-50k in the first year** plus 8-12 weeks of clarity earlier in the timeline.

## Try it yourself

```bash
npx -y @cleo-labs/skills-mcp@latest
```

> *"I'm shipping a passive posture brace with medical claims in EU + US. What class, what pathway, what does it cost?"*

For live device-classification database queries, market-authorisation status, and recall feeds, the Cleo Legal API is the upgrade path: <https://legaldata-public.cleolabs.co/>.

---

Repo: <https://github.com/Cleo-Labs-IA/skills_library>
Related: [cosmetics retinol](./cosmetics-eu-retinol.md) · [multi-jurisdiction launch](./multi-jurisdiction-launch.md)
