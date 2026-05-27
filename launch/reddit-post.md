# Reddit Post — r/ClaudeAI + r/entrepreneur + r/smallbusiness + r/ecommerce

## Title
I open-sourced 12 compliance skills for Claude Code — checks if your product is legal to sell in EU/US/UK/Japan in seconds

## Body

Hey everyone,

We built a compliance AI company (Cleo Labs) and after 2 years of monitoring regulations across 49 countries, we packaged our knowledge into 12 reusable Claude Code skills.

**Install:**
```
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

**What it does:**

You tell Claude Code about your product and where you want to sell it. The skills auto-trigger and tell you:

1. Whether your ingredients/materials are legal in that market (checks 500K+ substances across 13 databases including CosIng, REACH, FDA, Prop 65)
2. What labels you need (INCI, allergens, warnings, responsible person, CE/UKCA marks)
3. Full market entry checklist (notifications, registrations, certifications)
4. Customs classification and landed cost (duty + VAT + handling)
5. Any upcoming regulation changes that could block your product

**Who it's for:**

Small product companies (cosmetics, food, supplements, electronics, toys, textiles) selling internationally.

**Example:**

> "I'm launching a face cream with retinol in the EU and US"

Returns: Retinol restricted to 0.3% (EU Annex III, new 2025 limits), CPNP notification required, EU Responsible Person needed, FDA MoCRA registration for US, full timeline + cost estimate.

**What's NOT included:**

This doesn't replace a lawyer or safety assessor for final sign-off. It gets you 90% of the way there instantly so you know what you're dealing with before spending money.

Free. MIT license. Built from real production data (1.68M legal documents, 78 regulations, 131 countries).

GitHub: https://github.com/Cleo-Labs-IA/skills_library

Happy to answer questions about product compliance — it's literally what we do all day.
