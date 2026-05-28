# CE Marking for Electronics: The Founder's Practical Guide

*Last updated: May 2026 — by Cleo Labs*

The two letters **CE** are everywhere on European packaging — from coffee machines to mesh routers to baby monitors. They look like a quality stamp. They are not. CE marking is a **manufacturer's self-declaration** that a product complies with the applicable EU directives and regulations. Get it wrong, and customs can seize your shipment in Rotterdam. Get it right, and you have access to 450 million consumers across 27 markets.

This guide explains, in plain English, exactly what it takes to legally CE-mark a typical consumer electronics product in 2026. We cover the directives that apply, the testing you actually need, the costs you can realistically expect, and where founders usually trip.

## What CE marking means (and what it doesn't)

CE = **Conformité Européenne**. The mark indicates that the manufacturer takes responsibility for compliance with all **applicable EU "harmonisation legislation"** — the umbrella term for directives and regulations that set product requirements.

CE is **not**:
- A certification by an EU authority
- A guarantee of safety or quality
- A trade mark you can license

CE **is**:
- A binding declaration by the manufacturer
- A legal precondition for placing the product on the EU market
- Backed by a **technical file** the manufacturer must hold for **10 years**

For most consumer electronics, the manufacturer **self-certifies**. For some product types (high-risk medical devices, certain radio products), a **Notified Body** must intervene.

## The directives that hit a typical electronic product

For a standard consumer device (laptop charger, smart speaker, kitchen scale, mesh router), expect at least these:

| Directive / Regulation | Scope | Applies if... |
|---|---|---|
| **LVD 2014/35/EU** (Low Voltage) | 50–1,000 V AC / 75–1,500 V DC | Mains-powered or near it |
| **EMC 2014/30/EU** (Electromagnetic Compatibility) | Any electrical/electronic product | Almost always |
| **RED 2014/53/EU** (Radio Equipment) | Wi-Fi, Bluetooth, NFC, BLE, LoRa, etc. | Any wireless |
| **RoHS 3 2011/65/EU (recast)** | Hazardous substances in EEE | Always for EEE |
| **WEEE 2012/19/EU** | E-waste, registration, marking | Always for EEE |
| **Ecodesign / ErP 2009/125/EC** | Energy efficiency | If energy-using product in scope |
| **Battery Regulation 2023/1542** | Batteries | If product contains a battery |
| **GPSR 2023/988** | General product safety | Always (consumer products) |
| **CRA 2024/2847 (Cyber Resilience Act)** | Products with digital elements | Connected devices (full 11 Dec 2027) |
| **REACH 1907/2006** | Chemical substances | Always |

Plus, after Jan 2027: **Ecodesign for Sustainable Products Regulation (ESPR)** with the **Digital Product Passport (DPP)** rolling out per category.

## Step-by-step: the founder's CE-marking process

### Step 1 — Classify your product

Before you can CE-mark anything, you must know **which directives apply**. The fastest way: run a product through `electronics-compliance` in `skills_library`. Manually, you start by asking:

- Is there a mains plug or external power supply >50 V? → LVD
- Is there any electrical/electronic circuit? → EMC, RoHS, WEEE
- Is there any radio (Wi-Fi, Bluetooth, NFC, ZigBee, LTE, LoRa, etc.)? → RED
- Is there a battery (any type)? → Battery Reg + EU Battery Reg labelling
- Is it connected to a network or has firmware updatable remotely? → CRA (2027) + cybersecurity expectations under RED Art. 3.3 (already in force)

### Step 2 — Identify applicable harmonised standards

Each directive references a list of **harmonised standards (hENs)**. Conformity to a hEN gives "presumption of conformity" with the corresponding essential requirements. Examples for an IoT consumer device:

- LVD: **EN 62368-1** (audio/video, ICT)
- EMC: **EN 55032 / EN 55035**
- RED: **ETSI EN 300 328** (Bluetooth/Wi-Fi 2.4 GHz), **ETSI EN 301 893** (5 GHz)
- RoHS: **EN IEC 63000:2018**
- CRA / RED 3.3 cybersecurity: **EN 18031-1/-2/-3**

The harmonised standards list is **updated multiple times per year** in the EU Official Journal. Track the latest versions.

### Step 3 — Testing

Most consumer electronics testing happens at **third-party EMC/RED labs**. Typical scope:

| Test family | Lab time | Cost (typical, €) |
|---|---|---|
| LVD safety (62368-1) | 5–10 days | 3,500–6,500 |
| EMC radiated/conducted | 5–8 days | 4,500–9,000 |
| RED radio (single band) | 3–5 days | 3,500–6,000 |
| RED radio (multi-band, Wi-Fi + BT) | 5–10 days | 6,500–14,000 |
| Battery (UN 38.3 + IEC 62133) | 6–10 weeks | 3,000–9,000 |
| RoHS analytical | 5–10 days | 600–1,500 |
| ErP standby + active power | 2–4 days | 1,500–3,000 |

Plan **8–14 weeks** for a complete test campaign on a new product, including retesting after design tweaks.

### Step 4 — Decide if you need a Notified Body

For most consumer electronics under RED, **self-declaration is allowed if a harmonised standard is fully applied**. A Notified Body is required when:

- The product type is in **Annex IV of RED** (life-safety equipment)
- You **do not** use harmonised standards and instead use other technical specifications
- Specific articles are activated (e.g., Article 3.3 RED — cybersecurity, when applied through certain assessment routes)

Notified Body fees range **€4,000–€15,000** depending on scope.

### Step 5 — Compile the Technical File

Required content for the **EU technical documentation** (Annex IV of LVD, Annex VI of RED, etc.):

- General description of the product
- Conceptual design + manufacturing drawings
- Component lists, BOM
- Description of any deliberately incorporated radio module + technical parameters
- Risk assessment
- List of harmonised standards applied
- Test reports (from lab)
- Software/firmware version reference
- User manual
- **Declaration of Conformity (DoC)**

The technical file must be kept for **10 years after the last unit was placed on market** (in the EU or at the **Authorized Representative**).

### Step 6 — Sign the Declaration of Conformity

The **EU DoC** is a one-page document signed by the manufacturer:

- Product identification (model, type)
- Manufacturer name + address
- "We declare under our sole responsibility that the product..."
- List of directives applied
- List of harmonised standards applied
- Notified Body name + number (if applicable)
- Place + date + signature of authorized person

A DoC must accompany the product into the EU.

### Step 7 — Apply the CE mark + other markings

CE mark dimensions: **minimum 5 mm height**. If a Notified Body was involved, the **4-digit NB number** appears next to CE.

Other marks you may need on the same product:

- **WEEE crossed-bin symbol** (Annex IX of WEEE Directive)
- **Energy label** (if ErP product in scope)
- **Battery crossed-bin + chemistry letters** (Pb, Hg, Cd)
- **EAC mark** if also sold into Eurasian Economic Union
- **UKCA** if also sold into Great Britain (post-Brexit)

### Step 8 — Register for WEEE + EPR per country

Each EU member state has its own WEEE register. You cannot ship into Germany without **stiftung ear** registration, into France without **ADEME / Citeo**, into Italy without **CdC RAEE**, etc.

Typical WEEE registration cost per country: **€500–€2,500** setup + **€200–€800/yr** + per-tonne fees.

If you do not have an EU subsidiary, you appoint an **Authorized Representative (AR)** in each member state. WEEE AR services bundle this for **€1,500–€5,000/yr** across 27 markets.

### Step 9 — UK post-Brexit

Great Britain (England, Scotland, Wales) requires **UKCA** for many product categories. Northern Ireland uses CE under the Windsor Framework. UKCA closely mirrors CE for electronics, but requires:

- UK-based **Authorized Representative**
- **UK Declaration of Conformity**
- UK WEEE registration
- A separate UKCA technical file (can be copy of CE file)

The UK government has indefinitely accepted CE for some categories (announced Aug 2023, made indefinite 2024). Track per category.

## Realistic budget — a typical IoT consumer product

For a Bluetooth + Wi-Fi consumer device (think smart kitchen scale), going EU + UK first:

| Item | Cost (EUR) | Lead time |
|---|---|---|
| EMC + LVD + RED lab campaign | 12,000–18,000 | 8–12 weeks |
| RoHS + Battery + ErP | 3,500–6,500 | 4–6 weeks |
| Technical file compilation + DoC | 1,000–2,500 (internal time) | 1–2 weeks |
| WEEE registration (5 key EU markets) | 4,000–7,000 | 4–6 weeks |
| EU AR / UK AR | 1,500–3,500/yr | 1–2 weeks setup |
| Notified Body (if required) | 0–10,000 | 4–8 weeks |
| Packaging EPR per country | 1,500–4,500 | 2–4 weeks |
| **TOTAL** | **€23,500–€52,000** | **12–18 weeks** |

Plus **€2,000–€6,000/yr** ongoing for EPR fees, AR retainer, and renewal admin.

## What can go wrong

- **CE without testing** → Customs detains shipment; surveillance authority fines; product banned from market
- **Wrong harmonised standard version** → DoC invalidated; pull from market until retested
- **No Authorized Representative** → GPSR enforcement; Amazon delisting; retailer cancellation
- **No WEEE registration** → Up to €100K fine per country; refused customs entry
- **CRA non-compliance after Dec 2027** → Phased enforcement; loss of EU market access
- **Forged or copied test reports from supplier** → Criminal liability; product recall

Many cheap Chinese suppliers will hand you a **"CE certificate"** that is in fact a **"China Export"** mark or a fabricated lab report. The CE mark is **not** issued by any certification body. There is no "CE certificate" — there is only your **DoC + technical file + actual lab reports**. Verify.

## How `skills_library` accelerates this

The `electronics-compliance` skill maps every applicable directive + harmonised standard per product, estimates lab budget, identifies whether a Notified Body is needed, and generates the DoC + technical file scaffolding.

`testing-certification` selects the right labs (cost vs lead time vs reputation), and `responsible-person` sets up your AR per market.

`regulatory-calendar` tracks the CRA enforcement countdown (Dec 11, 2027) and the EU Battery Regulation removable-battery rule (Feb 2027).

Install:

```bash
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

Plug in the **Cleo Legal API** at https://legaldata-public.cleolabs.co/ for live customs HS codes, duty calculation, and harmonised standards data inside Claude Code (€349/mo).

---

*Cleo Labs builds open-source compliance tools and the Cleo Legal API. We are not a law firm. For binding regulatory advice, retain a Notified Body or an accredited consultant.*
