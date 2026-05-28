# Compliance Academy — Lesson 01: Product Compliance 101

*The first lesson of the Cleo Labs Compliance Academy. ~30 minutes. No prior knowledge required.*

---

## Why this lesson exists

If you are reading this, you probably have a product. Maybe it's a skincare line, maybe it's a Bluetooth speaker, maybe it's organic baby food, maybe it's reusable steel water bottles. You also probably had a conversation that went like this:

> **You**: "We're launching in Europe next month."
>
> **Lawyer / consultant / freight forwarder**: "Have you done CPNP? Do you have an EU Responsible Person? Is your RoHS file ready? What about EPR in Germany? Have you assessed CBAM? Did you map your INCI? Are your claims substantiated under Reg 655/2013?"
>
> **You**: *long blank stare*

That conversation happens to founders every day, and it almost always ends with a 3-month launch delay and a five-figure consultant invoice.

The purpose of this lesson — and the entire Compliance Academy — is to make sure that conversation never happens to you again. By the end of this lesson, you will:

- Understand what "product compliance" actually is, and where it comes from
- Know the 5-step lifecycle that every regulated product follows
- Be able to map the 6 major regulatory regimes (EU, US, UK, Canada, Japan, Korea) in your head
- Understand which authoritative sources to trust for each market
- Know when you need a regulatory consultant (and when AI tools are enough)
- See a worked example: taking a retinol night cream from formulation to EU launch

This is the foundation. Lessons 02–12 go vertical (cosmetics, electronics, toys, food, supplements, textiles) and horizontal (substance screening, labelling, claims, customs, sustainability). But you need this lesson first.

---

## What product compliance actually is

**Product compliance is the body of obligations that a physical product must satisfy to be legally sold in a given market.**

That definition has three load-bearing pieces:

1. **"Body of obligations"** — not one law, but a stack. For a typical EU cosmetic, the stack is: EU Reg 1223/2009 + CLP + REACH + GPSR + Packaging & Packaging Waste Reg + national EPR + member-state labelling rules. For a US electronic toy: CPSIA + ASTM F963 + FCC Part 15 + Cal Prop 65 + state-specific PFAS rules + Amazon listing requirements. Compliance is the **intersection** of all these.

2. **"Physical product"** — software compliance (GDPR, AI Act, NIS2) is a different field. Product compliance is about atoms: the thing in the customer's hand. Note: connected products (IoT) increasingly blur this line, but the regulatory layer (CRA, RED Art 3.3) sits on top of the physical product layer.

3. **"Legally sold in a given market"** — compliance is **market-by-market**. A product that is fully compliant in the US may be illegal in the EU and vice versa. Compliance does not generalize. This is the #1 founder mistake.

### Why compliance exists

Three reasons, in roughly historical order:

1. **Consumer safety**: post-thalidomide, post-Bhopal, post-leaded-paint, governments concluded that markets alone don't prevent harmful products. Regulators set minimum requirements.

2. **Trade harmonization**: when 27 countries each had their own rules, exporting was a nightmare. EU regulations exist partly to harmonize rules within the single market and reduce non-tariff barriers.

3. **Industrial policy + externalities**: more recently, environmental rules (REACH, EPR, CBAM, ESPR/DPP) and cybersecurity rules (CRA) push policy goals (decarbonization, circular economy, digital sovereignty) through product regulation.

Knowing **why** a rule exists usually tells you **how strictly** it will be enforced and **where it is heading**. Substance bans for clear health harms (lead, asbestos, certain phthalates) are enforced strictly. Sustainability rules are enforced more loosely at first but tighten fast.

---

## The 5-step lifecycle

Every regulated product follows the same 5 steps, in order, regardless of category:

### Step 1 — Classify

The first question a regulator (and an importer, and a customs officer) asks is: **what is this product, in the regulatory taxonomy of this market?**

A face cream might be:
- A **cosmetic** (EU)
- A **cosmetic** subject to MoCRA (US federal) + Toxic-Free Cosmetics Act (Washington state) + Prop 65 (California)
- A **cosmetic** under PMD Act in Japan — or a **quasi-drug** if you claim "whitening"
- A **drug-cosmetic** in China NMPA if it claims "anti-acne"

A children's smartwatch is:
- An **electronic product** (LVD/EMC) + **radio equipment** (RED) + **toy** (Toy Safety Directive) + **product with digital elements** (CRA) + **connected medical device** in some jurisdictions if it has health-monitoring features

Each classification triggers a different rulebook. **Classification errors cascade**: misclassify, and every downstream check is wrong.

Classification draws on three things:
- **Product description** (function, design, materials)
- **Intended use** + **foreseeable use**
- **Claims** (this is critical — claims can re-classify a product into a stricter regime)

### Step 2 — Check substances

Once classified, you check every ingredient or material against the **substance rules** of the target market(s).

The substance rule families:
- **Cosmetic substance lists**: EU Annexes II–VI of Reg 1223/2009; Japan negative/positive lists; China NMPA IECIC
- **Chemical regulations**: EU REACH (substances of very high concern, restrictions in Annex XVII), US TSCA, Korea K-REACH, Switzerland ChemO
- **Food/feed limits**: maximum residue limits, additive lists, novel food rules
- **Heavy metals + Prop 65**: US state-level toxicology lists
- **Restricted substances in electronics**: RoHS, REACH Annex XVII for textiles, conflict minerals

Substance checks happen at the **CAS number** level (Chemical Abstracts Service registry). INCI-to-CAS resolution is a frequent source of error — many INCI names map to **multiple CAS numbers** and you need the right one.

### Step 3 — Label

Each market has labelling rules covering:
- **Language(s)** of the label
- **Mandatory text** (name, function, contents, warnings)
- **Ingredient declarations** (INCI for cosmetics, fiber composition for textiles, energy class for ErP)
- **Allergens** (varies by market — EU is 26, soon 81; US food has 9; FDA fragrance allergen rule applies Jul 2026)
- **Warnings** (Prop 65, CLP hazard pictograms, choking hazards)
- **Responsible Person / importer address**
- **Country of origin**
- **Batch / lot code**
- **Mandatory symbols** (CE, UKCA, WEEE, recycling, Triman, etc.)
- **Net content** in mandated units

Labelling is the **last fail point** before launch. Many founders fix everything else and then ship with a non-compliant label.

### Step 4 — Certify

Certify means: **prove** the product complies. This is where money flows. Certification consumes:

- **Lab tests** (EMC, RF, thermal, microbiology, allergen screening, heavy metals, stability)
- **Conformity assessments** by Notified Bodies (electronics in some categories, medical devices, toys above complexity threshold)
- **Safety reports** signed by qualified assessors (cosmetic CPSR, food safety reports, toy risk assessments)
- **Audits** of manufacturing facilities (ISO 22716 for cosmetics, HACCP for food, ISO 13485 for medical)

The output of Step 4 is a **technical file** (or **Product Information File** in cosmetics, **Design History File** in medical devices) that must be retained for **5–10 years** depending on regime.

### Step 5 — Notify / register / declare

The final step is **putting the product into the official registry** of the target market:

- **EU cosmetics**: CPNP (Cosmetic Product Notification Portal) — free, instant
- **US cosmetics**: FDA Cosmetics Direct — facility registration + product listing, free, biennial renewal
- **EU electronics**: WEEE register per country + LUCID (DE) packaging + EPR per country
- **Japan cosmetics**: MHLW notification via Prefectural Health Department
- **Korea cosmetics**: MFDS Cosmetic Information Management System
- **China cosmetics**: NMPA dossier (long, expensive)
- **Food in EU**: HACCP plan + national authority notification + EFSA if novel
- **Medical devices**: EUDAMED + FDA 510(k) / PMA + UK MHRA + Health Canada MDL

Notification is where authorities **know your product exists**. It is also the trigger for **market surveillance** — once notified, you are in the database, and inspectors can check your file.

This 5-step lifecycle — **classify → substances → label → certify → notify** — applies to every regulated physical product. Memorize it. It is the spine of every check in the `skills_library`.

---

## The 6 major regulatory regimes

Globally, ~90% of physical-product trade flows through **6 regulatory regimes**. If you understand these 6, you cover most markets you will ever care about.

### 1. European Union (EU) + EEA

**Single market, harmonized rules.** Strictest in cosmetics, electronics, sustainability. Driven by **regulations** (directly applicable) and **directives** (require national transposition).

Key actors:
- **European Commission** (DG-GROW, DG-SANTE, DG-ENV) writes regulations
- **European Parliament + Council** vote them
- **ECHA** runs REACH
- **National competent authorities** enforce
- **EU Customs** uses CN code (Combined Nomenclature, based on HS)

Authoritative sources:
- **EUR-Lex** (https://eur-lex.europa.eu) — primary legal source
- **ECHA** (https://echa.europa.eu) — REACH, CLP
- **EU Safety Gate** (https://safety-gate.ec.europa.eu) — non-food product alerts
- **EFSA** for food
- **CPNP** for cosmetics

Norway, Iceland, Liechtenstein follow EU rules via EEA agreement. Switzerland follows ~80% via bilateral agreements.

### 2. United States (US)

**Federal + state layered.** Less restrictive than the EU at federal level (with exceptions like CPSIA), but states (especially CA, NY, WA, OR) add tough rules.

Key actors:
- **FDA** for food, drugs, cosmetics (now under MoCRA), medical devices
- **CPSC** for consumer product safety (toys, electronics, juvenile products)
- **EPA** for chemicals (TSCA), pesticides (FIFRA), environment
- **FCC** for radio frequency devices
- **FTC** for advertising and labelling
- **State AGs** + **state laws** (Prop 65, Toxic-Free acts)

Authoritative sources:
- **eCFR** (electronic Code of Federal Regulations)
- **FDA** site
- **CPSC** site
- **California OEHHA** for Prop 65
- **FCC ECFS** for grants

### 3. United Kingdom (UK)

**Post-Brexit divergence.** Mostly tracks EU but with its own enforcement and a separate **UKCA mark** for Great Britain. Northern Ireland follows EU rules under the **Windsor Framework**.

Key actors:
- **OPSS** (Office for Product Safety and Standards) for general products
- **MHRA** for medical devices, cosmetics enforcement
- **HSE** for chemicals (UK REACH)
- **DEFRA** for environment + EPR
- **OFCOM** for radio + telecom

Authoritative sources:
- **legislation.gov.uk**
- **HSE** for UK REACH
- **OPSS** site

### 4. Canada

**Bilingual + provincially split for some categories.** Federally regulated for cosmetics, food, drugs, medical devices, but provinces handle EPR.

Key actors:
- **Health Canada** (cosmetics, food, drugs, medical devices, NHP)
- **CFIA** (Canadian Food Inspection Agency)
- **ISED** (Innovation, Science and Economic Development — radio + electronics)
- **ECCC** (Environment + climate change — chemicals)

Authoritative sources:
- **Health Canada CNF list** for cosmetics
- **NNHPD** for Natural Health Products
- **CRC** (Consolidated Regulations of Canada)

### 5. Japan

**Slow, conservative, highly structured.** PMD Act + MHLW notifications + Japanese-language requirements. Quasi-drug system creates a sharp split.

Key actors:
- **MHLW** (Ministry of Health, Labour and Welfare)
- **PMDA** (Pharmaceuticals and Medical Devices Agency)
- **METI** for electronics + radio (Radio Act, Telecom Business Act)
- **Customs** (JapanCustoms)

### 6. Korea

**Functional cosmetic regime + strict K-REACH.** MFDS regulates cosmetics with two-tier categorisation: general vs functional.

Key actors:
- **MFDS** (Ministry of Food and Drug Safety)
- **NIER** (National Institute of Environmental Research) for K-REACH
- **KCS** (Korean Customs Service)

---

## Where to find authoritative info per market

A founder's #1 mistake is to rely on **blog posts, ChatGPT raw answers, or LinkedIn opinion** for compliance facts. Regulations change multiple times per year. You need **primary sources** + **dated retrieval**.

For each market, learn 2–3 primary sources by heart:

| Market | Primary regulator/source | Secondary source |
|---|---|---|
| EU | EUR-Lex | ECHA, CPNP, Safety Gate |
| US | eCFR, FDA, CPSC | OEHHA (Prop 65) |
| UK | legislation.gov.uk, OPSS | HSE, MHRA |
| Canada | Health Canada | CRC |
| Japan | MHLW, PMDA | JETRO guides |
| Korea | MFDS | NIER for K-REACH |

The Cleo Legal API consolidates these into a single queryable interface, updated daily.

---

## When you need a regulatory consultant vs when AI is enough

There is a **division of labour** between AI tools and human consultants. Knowing the line saves money.

### AI is enough for
- Substance screening against published lists
- Labelling structure + INCI/JCID translation
- Multi-market comparative scans
- Deadline tracking + calendar management
- Cost estimation
- Document assembly (PIF, technical file scaffolding)
- Draft Declarations of Conformity
- Customs HS classification + landed cost
- Initial claim review
- Market entry roadmaps

### You need a human for
- **Signing safety assessments** (cosmetic CPSR, MoCRA safety substantiation — legally requires a qualified person)
- **Lab testing** (physical tests cannot be done by software)
- **Notified Body conformity assessment** (where required by law)
- **Reformulation chemistry decisions**
- **Litigation defence** (Prop 65 lawsuits, recall management)
- **Border-case classification** (cosmetic vs drug vs medical device)
- **Negotiation with regulators** (pre-submission meetings, scientific advice)
- **Anything where personal legal liability is required**

The Cleo Labs philosophy: **let AI do the mapping work, let humans handle the regulated signatures.** This typically cuts compliance costs by **40–60%** vs full agency outsourcing.

---

## Cost-of-non-compliance examples

To make this concrete: here are real recent enforcement actions and what they cost.

**Cosmetics:**
- **Sephora EU**: pulled 30 SKUs of a US indie brand because of CPNP inconsistency. €180K of lost sales over 4 weeks.
- **L'Oréal** (2019): CMA fined €450K for "100% natural" claim without substantiation.
- **Smaller D2C** (2024): Amazon DE suspension for missing RP. Account fully restored after 6 weeks. Lost €70K revenue.

**Electronics:**
- **Hoverboard recalls** (2016 + ongoing): $30M+ in losses across multiple brands due to fire risks (UN 38.3 + UL 2272).
- **Anker** (2025): Class-action settlement for false energy claims on power banks: ~$2.7M.

**Toys:**
- **MGA Entertainment** (2024): CPSC ordered $1.5M civil penalty for non-compliant L.O.L. Surprise! magnet products.
- **AliExpress** (2025): EU Safety Gate flagged 5 toys per week from AliExpress with banned phthalates → ongoing investigation.

**Textiles:**
- **REI** (2024): paid $13M in PFAS-related class action settlement.
- **Patagonia, Columbia, Vans**: multiple cases over PFAS in DWR coatings, ranging $2M–$8M each.

**Food/supplements:**
- **Athletic Brewing Company** (2025): EU import block due to caffeine labelling threshold miss.
- **Multiple US supplement brands**: FDA warning letters for "structure-function" claims that cross into drug territory.

The **average compliance failure** for a small D2C brand costs **€40K–€180K** in direct losses (recalls, refunds, legal, relabeling) plus reputational damage. **Preventing a failure costs ~€5K–€30K**. The ROI of compliance is **5–20x**.

---

## Worked example: retinol night cream, EU launch

Let's apply the 5-step lifecycle to a single product. You are launching a **0.05% retinol night cream** in the EU under your D2C brand based in the US.

### Step 1 — Classify

It's a **leave-on cosmetic** for the face under Reg 1223/2009. Not a medicine (cosmetic claims only), not a quasi-drug (Japan), not a drug-cosmetic (China not in scope here).

Skill used: `cosmetics-compliance` (auto-classifies).

### Step 2 — Check substances

`substance-screening` runs every ingredient against Annexes II–VI.

The headline finding: **retinol is restricted to 0.05% in face-leave-on under Reg 2024/996** (in force November 2025). At 0.05%, you are **exactly at the limit** — legal but margin-zero. If you have manufacturing variability, you risk exceeding.

Other findings:
- Phenoxyethanol (preservative): allowed up to 1.0%. Your formula uses 0.6%. OK.
- Tocopherol (vitamin E): general use, no restriction. OK.
- Niacinamide: general use, no restriction. OK.
- Fragrance allergens: limonene present at 0.012% (above 0.01% leave-on threshold) → must be declared on label.

Skill output: GREEN status with the recommendation to either reformulate retinol to 0.04% (safety buffer) or implement strict CQA on retinol assay.

### Step 3 — Label

`labeling-compliance` redrafts the label:

- Front: brand name + product name + nominal content (50 mL)
- Back: function ("night cream"), warnings ("avoid contact with eyes", "use sunscreen during day — increased UV sensitivity"), PAO symbol (12M)
- Ingredient list in INCI order, descending weight, sub-1% in any order
- Limonene declared after the main allergen line ("CONTAINS LIMONENE")
- **EU Responsible Person address** in full (must be EU address)
- Country of origin: "Made in USA"
- Batch code: ____________ (placeholder for production)
- Multi-language: EN + FR + DE + IT + ES + NL minimum for top-7 EU markets

### Step 4 — Certify

`testing-certification` + `evidence-blitz` orchestrate:

- **CPSR**: assigned to a qualified safety assessor (€650, 2 weeks)
- **Stability test**: 3 conditions × 12 weeks ICH-style (€1,800)
- **Microbiology + PET (ISO 11930)**: (€900)
- **Heavy metal screening**: (€350)
- **Patch test data**: from clinical lab (€2,400)
- **GMP certificate**: ISO 22716 from contract manufacturer (already in place — confirmed)

Total certification spend: ~**€6,100**. Lead time: **10–12 weeks parallel**.

### Step 5 — Notify

`compliance-reporting` + `responsible-person` orchestrate:

- Appoint EU RP service (€89/mo, mandate letter generated)
- File CPNP notification with full ingredient list, frame formulation, photo of label, importer details
- Receive CPNP number → store in product record

Free, ~45 minutes per SKU.

### Total

- One-time cost: **~€7,500**
- Recurring: **€1,100/yr** (RP + admin)
- Timeline from green-light to first EU shipment: **12 weeks**

Without skills_library and Cleo Legal API, the **same workflow with a regulatory agency** typically costs **€18,000–€30,000** one-time and **€4,000–€6,000/yr** recurring, taking **18–24 weeks**.

---

## How skills_library and Cleo Legal API change the game

`skills_library` is an open-source collection of **40+ Claude Code skills** that auto-trigger when you work on compliance tasks. Each skill maps to a specific compliance workflow:

- The 5-step lifecycle is wired into the **Tier 1 skills**: `product-compliance`, `labeling-compliance`, `market-entry-checklist`
- The deep dives (`cosmetics-compliance`, `food-compliance`, `electronics-compliance`, `toy-compliance`, etc.) carry vertical knowledge
- Parallel-agent skills (`multi-jurisdiction-scan`, `compliance-audit-sprint`, `evidence-blitz`) dispatch sub-agents to scan multiple markets simultaneously

The library is **MIT-licensed**, free, and installed in 30 seconds:

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

**Cleo Legal API** is the paid backbone (€349/mo) that gives the skills **live legal data**: current Annex versions, current EPR schemes, current customs duty rates, current sanctions lists, current INCI-to-CAS mappings, all updated daily from primary sources.

Without Cleo Legal API, the skills still work — they fall back to web search + general knowledge. With Cleo Legal API, every check is grounded in the **dated, authoritative source**.

You can sign up for Cleo Legal API at https://legaldata-public.cleolabs.co/.

---

## What's next

In **Lesson 02**, we go vertical into **cosmetics compliance** — the deepest single-category course in the Academy. Annex-by-Annex, claim-by-claim, market-by-market.

In **Lesson 03**, we go horizontal into **substance screening** — the workflow that powers most compliance checks across categories.

By Lesson 12, you will have a working mental model of global product compliance, the ability to map any regulated product to its rulebook in seconds, and the tooling to launch in 27 EU markets + US + UK + Canada + Japan + Korea with confidence.

---

*The Cleo Labs Compliance Academy is open-source. Contribute, suggest topics, or report errors at https://github.com/Cleo-Labs-IA/skills_library.*
