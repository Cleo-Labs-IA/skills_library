# Amazon EU GPSR Deadline: What Sellers Need by July 2025 (Updated for 2026)

*Last updated: May 2026 — by Cleo Labs*

If you sell physical products on **Amazon EU, eBay EU, Etsy, TikTok Shop, or any EU marketplace**, you are already operating under the **General Product Safety Regulation (GPSR)**. It went into force on **December 13, 2024**, and Amazon's enforcement wave hit hard in the second half of 2025. By 2026, missing GPSR documentation is the **single most common reason for EU marketplace de-listings** — accounting for an estimated **40% of new suspensions** based on Amazon Seller Forum data.

This guide explains what GPSR requires, what Amazon specifically checks, what gets you suspended, and how to fix it.

## What GPSR is — in one paragraph

The **General Product Safety Regulation (EU) 2023/988** replaces the old General Product Safety Directive (GPSD). Unlike its predecessor, GPSR is a **regulation** (directly applicable, no national transposition) and it covers virtually every **non-food consumer product** placed on the EU market, including products sold **B2C online from outside the EU**. Crucially, it **requires every product to have an "economic operator established in the EU"** — meaning a US, UK, Chinese, or Korean seller cannot ship directly to EU consumers without naming an EU-based contact.

## The four things GPSR requires

1. **An economic operator established in the EU** for every product
2. **Product safety information** affixed to or accompanying the product
3. **A traceability identifier** + manufacturer info on label
4. **Risk assessment + technical documentation** kept for 10 years

If you sell on Amazon EU, **Amazon enforces all four** through Seller Central upload requirements.

## Who is an "Economic Operator"?

GPSR Article 4 says products can only be placed on the EU market if there is an economic operator **established in the EU** who is responsible for them. The operator can be:

- **The manufacturer**, if EU-based
- **The importer**, if the product comes from outside the EU
- **The authorized representative** (named in writing by a non-EU manufacturer)
- **The fulfilment service provider**, when none of the above apply

For **non-EU sellers using Amazon FBA**, Amazon does **not** automatically act as your fulfilment-service-provider economic operator. You **must** name one yourself.

## How Amazon EU enforces GPSR

Amazon Seller Central added a **"Manufacturer Information"** and **"Responsible Person Information"** field to every product listing. Required:

- Manufacturer name, address, email, phone, website
- Responsible Person (= EU economic operator) name, address, email, phone, website

Listings missing this information are **automatically blocked from sale in EU storefronts** (DE, FR, IT, ES, NL, PL, SE, BE — and in some categories UK via .co.uk).

You also need to provide on the listing:
- **Product safety warnings**
- **Compliance certificates** for certain categories (CE for electronics, EN 71 for toys, EN 14878 nightwear flammability, etc.)
- **Substance compliance** (REACH SCIP, RoHS)

For high-risk categories, Amazon now requires **uploaded test reports** and may use third-party verification.

## What gets you suspended

The five most common GPSR-related Amazon suspensions:

1. **No Responsible Person listed** → automated removal in DE/FR/IT/ES/PL
2. **Generic / fake Responsible Person** → Amazon cross-checks against marketplace databases; mismatched info triggers manual review
3. **Manufacturer field empty or "China"** without address → blocked listing
4. **Safety warning missing** for category (electrical, toys, cosmetics) → category-specific deny
5. **CE mark mentioned but no DoC available** when Amazon requests it → "Compliance documentation required" notice with 30-day cure window

After 30 days without resolution: listing removed. After 60 days: **account-level scrutiny** and possible seller suspension. Reinstatement requires uploading the full RP + DoC + test reports + risk assessment.

## The EU EPR connection

Beyond GPSR, marketplaces also enforce **Extended Producer Responsibility (EPR)** numbers. In:

- **Germany**: LUCID-Verpackungsregister-Nr. (packaging) + EAR-Nr. (electronics) + BattG-Nr. (batteries)
- **France**: Citeo + ADEME + DEEE + Refashion (textile) UIN per scheme
- **Austria**: ARA registration
- **Spain**: Ecoembes + ANGRP

If you ship 1 unit to a German buyer without LUCID-Nr., the marketplace can refuse the listing. Each EPR scheme has annual fees + per-tonne contributions, plus an annual declaration.

## Step-by-step fix for non-EU sellers

If you are a US, UK, or Asian brand selling on Amazon EU and just got the dreaded "Responsible Person required" notice:

### Day 1
- Sign up with an EU RP service. Multi-category services include **EAS / Authorized Reps**, **Obelis** (for cosmetics), **Compliancy Services**, **Inverto**, **Compliance Gate** (low-end). Expect **€55–€250/mo flat** for a non-cosmetic RP.
- Receive your **RP address + RP onboarding letter**

### Day 2–3
- Upload manufacturer + RP info in Seller Central, per ASIN, in bulk via Excel feed
- Add or verify **CE mark + safety warnings** on each listing's safety attributes

### Day 4–7
- Compile **technical file** per product family:
  - Spec sheet + drawings
  - BOM + components
  - Risk assessment
  - Applicable harmonised standards
  - Test reports (if available; if not, schedule lab work)
  - User manual
  - DoC

### Day 8–14
- Register for EPR in countries you sell to. **Germany LUCID** is online and instant; **France Citeo** takes 2 weeks; **Spain Ecoembes** 1–3 weeks.
- Once registered, **add EPR numbers** to Amazon Seller Central per country

### Day 15+
- File any pending **CPNP** (cosmetics) or **WEEE/Battery** registrations
- Send your RP a copy of the technical file (they must hold it)

You can be back online in **2 weeks** if you start today.

## What it actually costs to be GPSR-compliant

For a typical small brand selling 20 SKUs across DE / FR / ES / IT:

| Item | Cost (EUR) |
|---|---|
| EU Responsible Person service | €1,200–€3,000/yr |
| Technical file + DoC for 20 SKUs | €2,500–€6,000 one-time |
| Lab testing (if not already done) | €0–€15,000 (varies wildly) |
| Germany LUCID + EAR + BattG | €500–€1,500 setup + €300–€1,500/yr |
| France Citeo + Refashion + DEEE | €1,000–€3,000 setup + €1,000–€4,000/yr |
| Other EU EPR (IT, ES, AT) | €1,500–€5,000/yr |
| **TOTAL Year 1** | **€7,000–€33,500** |

This is what nobody tells you when you set up Amazon EU. Many small sellers have learned this the expensive way.

## What `skills_library` does

`marketplace-compliance` runs an Amazon EU listing audit — what's missing, what's blocked, what the fix is. `responsible-person` compares EU RP services and drafts the mandate letter. `packaging-compliance` builds your EPR registration roadmap per country. `evidence-blitz` assembles the technical file in parallel.

For UK GPSR equivalents (Office for Product Safety and Standards regime), `compliance-frameworks-ref` maps the differences.

Install:

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

For real-time legal data — current EPR schemes, RP registries, country-specific labelling rules — plug in the **Cleo Legal API** at https://legaldata-public.cleolabs.co/ (€349/mo).

---

*Cleo Labs builds open-source compliance tools and the Cleo Legal API. We are not a law firm.*
