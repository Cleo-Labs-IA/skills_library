# Submission #6 — MCP Server Marketplaces (6 submissions)

**Strategy:** Submit one marketplace per day, Thursday May 29 – Tuesday Jun 2.
**The asset:** A separate MCP server entry for Cleo Legal MCP, with skills_library referenced as the "companion skill library."
**Estimated reach:** 5,000–20,000 agent developers over 6 months.

**Pre-flight (run once before any submission):**
- [ ] Tag the cleo-legal MCP repo with GitHub topics `mcp` and `model-context-protocol`.
- [ ] Verify the MCP server manifest passes `npx @modelcontextprotocol/inspector` validation.
- [ ] Confirm the server runs locally via `npx -y @cleolabs/legal-mcp`.
- [ ] Capture the 3 standard screenshots (described in section 6 below).

---

## Universal asset bundle (used by all 6 marketplaces)

### Server name
```
Cleo Legal MCP
```

### Short tagline (under 80 chars)
```
Regulatory citations, substance checks, customs HS codes for compliance agents
```

### Long description (under 500 chars)
```
Cleo Legal MCP exposes regulatory data as MCP tools: substance checks (CAS → 13 databases → per-jurisdiction verdict), customs HS code classification, duty calculation, sanctions screening, and primary-source regulatory citations across EU, US, UK, JP, KR, CN, CA. 

Companion: skills_library — 28 open-source Claude Code skills that wrap this MCP for compliance workflows.

Free tier: 50 calls/day. Pro: €349/mo.
```

### Categories / tags
```
compliance, regulatory, regtech, cosmetics, food-safety, electronics, ce-marking, fda, reach, customs, hs-codes, sanctions, gpsr, mocra, cpsia
```

### Install command
```
npx -y @cleolabs/legal-mcp
```

### Authentication
```
Environment variable: CLEO_LEGAL_API_KEY
Get free key at: https://legaldata-public.cleolabs.co/signup
```

### Repository URL
```
https://github.com/Cleo-Labs-IA/cleo-legal-mcp
```

### Companion / related project
```
skills_library — https://github.com/Cleo-Labs-IA/skills_library
```

### Logo
```
240×240 PNG, transparent background
At: https://raw.githubusercontent.com/Cleo-Labs-IA/cleo-legal-mcp/main/assets/logo-240.png
```

---

## Marketplace 1 — Glama (https://glama.ai/mcp/servers)

**Submission method:** Auto-indexed from GitHub topic `mcp` (no manual submission required for indexing). Manual claim / enrichment via their dashboard.
**Target date:** Thursday May 29
**Expected approval timeline:** Auto-indexed within 24h of GitHub topic added; manual enrichment review 3–7 days.

### Steps

1. Verify `cleo-legal-mcp` repo has topic `mcp` and `model-context-protocol` set.
2. Wait 24h for auto-index.
3. Visit https://glama.ai/mcp/servers and search "cleo-legal" to confirm listing.
4. Click "Claim this server" (or equivalent) — sign in with GitHub.
5. Fill the enrichment form (see below).

### Form fields they ask for

| Field | Value to enter |
|---|---|
| Server name | Cleo Legal MCP |
| Short description | Regulatory citations, substance checks, customs HS codes for compliance agents |
| Long description | (use the 500-char long description above) |
| Category | Compliance & Regulatory (if option) — fallback: Data |
| Tags | compliance, regulatory, regtech, cosmetics, customs, sanctions |
| Hosted? | Yes — https://legaldata-public.cleolabs.co |
| Self-hostable? | No (data backend) |
| License (server code) | MIT |
| Author | Cleo Labs |
| Contact | contact@cleolabs.co |
| Logo | (upload 240×240 PNG) |
| Banner | (upload 1200×400 PNG with tagline) |
| Pricing | Free tier (50 calls/day) + Pro €349/mo |
| Documentation URL | https://docs.cleolabs.co/legal-mcp |
| Companion projects | skills_library: https://github.com/Cleo-Labs-IA/skills_library |
| Demo video URL | https://www.youtube.com/watch?v=[VIDEO_ID once recorded] |

### Screenshots to upload

1. **screenshot-tool-list.png** (1270×760) — Claude Desktop showing the Cleo Legal MCP tools available in the picker.
2. **screenshot-substance-check.png** (1270×760) — A tool call running `substance_check` on retinol, returning cited verdict.
3. **screenshot-customs-classification.png** (1270×760) — A tool call running `customs_classify` returning HS code + duty estimate.

---

## Marketplace 2 — MCP.so (https://mcp.so/)

**Submission method:** PR to their public repo (https://github.com/chatmcp/mcp-directory — verify the exact repo name before submitting).
**Target date:** Friday May 30
**Expected approval timeline:** 2–5 days.

### Steps

1. Fork the mcp-directory repo.
2. Add a new entry under the correct category file (typically `data/servers/[category].yaml` or similar — read CONTRIBUTING.md).
3. Open PR with the entry below.

### Entry to add (YAML/JSON — verify their exact schema; this is the canonical content)

```yaml
- name: "Cleo Legal MCP"
  id: "cleo-legal"
  description: "Regulatory citations, substance checks, customs HS codes, sanctions screening for compliance agents. Free tier 50 calls/day."
  long_description: |
    Cleo Legal MCP exposes regulatory data as MCP tools:
    - Substance checks (CAS → 13 regulatory databases → per-jurisdiction verdict)
    - Customs HS code classification + duty calculation + landed cost
    - Sanctions + dual-use screening
    - Primary-source regulatory citations across EU, US, UK, JP, KR, CN, CA
    
    Companion: skills_library (https://github.com/Cleo-Labs-IA/skills_library) — 28 open-source Claude Code skills that wrap this MCP.
  category: "compliance"
  tags:
    - compliance
    - regulatory
    - regtech
    - cosmetics
    - customs
    - sanctions
  author: "Cleo Labs"
  homepage: "https://legaldata-public.cleolabs.co"
  repository: "https://github.com/Cleo-Labs-IA/cleo-legal-mcp"
  documentation: "https://docs.cleolabs.co/legal-mcp"
  install: "npx -y @cleolabs/legal-mcp"
  license: "MIT (server code) / Proprietary (data)"
  pricing: "Free tier (50/day), Pro €349/mo"
  hosted: true
  self_hostable: false
  logo: "https://raw.githubusercontent.com/Cleo-Labs-IA/cleo-legal-mcp/main/assets/logo-240.png"
```

### PR title

```
Add Cleo Legal MCP to Compliance category
```

### PR body

```markdown
This PR adds Cleo Legal MCP — a regulatory-data MCP server — to the directory.

**Why it fits:**
- First MCP server in the compliance/regulatory category (please create the category if it doesn't exist yet).
- Free tier (50 calls/day) means readers can try without payment.
- Companion open-source skill bundle (skills_library) provides a working example for builders.

**Validation:**
- Server manifest passes `npx @modelcontextprotocol/inspector` validation.
- Tested with Claude Desktop 1.x, Cursor, Continue.
- All tools documented at https://docs.cleolabs.co/legal-mcp.

Happy to adjust formatting if my YAML doesn't match your schema — point me at the right file.

— Naomie Halioua, Cleo Labs (contact@cleolabs.co)
```

---

## Marketplace 3 — Smithery (https://smithery.ai/)

**Submission method:** CLI `npx @smithery/cli publish`
**Target date:** Friday May 30
**Expected approval timeline:** Automatic on publish; manual review for featured slot 1–2 weeks.

### Steps

1. Install Smithery CLI: `npm install -g @smithery/cli`
2. Sign in: `smithery login` (uses GitHub OAuth)
3. From the `cleo-legal-mcp` repo root, run: `smithery publish`
4. The CLI reads `smithery.yaml` at repo root. Ensure it exists with the content below.
5. After publish, request feature slot via Discord (see below).

### `smithery.yaml` content (must be at repo root before publishing)

```yaml
name: cleo-legal-mcp
displayName: "Cleo Legal MCP"
version: 1.0.0
description: "Regulatory citations, substance checks, customs HS codes, sanctions screening for compliance agents. Free tier 50 calls/day."
author:
  name: "Cleo Labs"
  email: "contact@cleolabs.co"
  url: "https://cleolabs.co"
license: "MIT"
homepage: "https://legaldata-public.cleolabs.co"
repository: "https://github.com/Cleo-Labs-IA/cleo-legal-mcp"
categories:
  - compliance
  - regulatory
  - data
tags:
  - compliance
  - regulatory
  - regtech
  - cosmetics
  - customs
  - sanctions
  - gpsr
  - mocra
  - fda
runtime: node
install:
  command: "npx"
  args: ["-y", "@cleolabs/legal-mcp"]
env:
  - name: CLEO_LEGAL_API_KEY
    description: "Get free key at https://legaldata-public.cleolabs.co/signup"
    required: false
tools:
  - name: substance_check
    description: "Check a substance against EU/US/UK/JP/KR/CN/CA regulatory databases. Returns per-jurisdiction verdict + concentration limit + citation."
  - name: customs_classify
    description: "Classify a product into HS code (6/8/10 digits) with duty rate estimation."
  - name: sanctions_screen
    description: "Screen a person/entity against EU, US, UK, UN sanctions lists."
  - name: regulation_lookup
    description: "Fetch primary regulation text by reference (e.g., EU 1223/2009 Art. 5)."
  - name: signal_search
    description: "Search regulatory signals (recalls, bans, label changes) for a substance/product/country."
icon: "https://raw.githubusercontent.com/Cleo-Labs-IA/cleo-legal-mcp/main/assets/logo-240.png"
```

### After publish — request featured slot

Post in Smithery Discord (#submissions channel):

```
Hi Smithery team — just published `cleo-legal-mcp`.

It's the first compliance/regulatory MCP server on the platform. Companion open-source Claude Code skill bundle (skills_library) demonstrates usage patterns. Free tier available, no card.

Would love consideration for a feature slot. Listing: https://smithery.ai/server/cleo-legal-mcp

Happy to provide additional materials (demo video, etc.) if useful.

— Naomie / Cleo Labs
```

---

## Marketplace 4 — MCP Servers (https://mcpservers.org/)

**Submission method:** Form submission at https://mcpservers.org/submit (verify exact URL)
**Target date:** Sunday May 31
**Expected approval timeline:** 5–10 days.

### Steps

1. Visit https://mcpservers.org/submit.
2. Sign in via GitHub.
3. Fill the form (fields below).
4. Submit.

### Form fields

| Field | Value |
|---|---|
| Server name | Cleo Legal MCP |
| GitHub repo | https://github.com/Cleo-Labs-IA/cleo-legal-mcp |
| Category | Compliance / Regulatory (if absent: Data or Other) |
| Short description (80 chars) | Regulatory citations, substance checks, customs HS codes for compliance agents |
| Long description | (use the 500-char from universal section) |
| Install command | `npx -y @cleolabs/legal-mcp` |
| Requires API key? | Optional (free tier available) |
| Hosted | Yes — https://legaldata-public.cleolabs.co |
| License | MIT (server code) |
| Author | Cleo Labs |
| Author URL | https://cleolabs.co |
| Logo URL | https://raw.githubusercontent.com/Cleo-Labs-IA/cleo-legal-mcp/main/assets/logo-240.png |
| Documentation URL | https://docs.cleolabs.co/legal-mcp |
| Demo video URL (optional) | (leave blank if not recorded yet; add later) |
| Companion projects | skills_library (https://github.com/Cleo-Labs-IA/skills_library) |
| Tags | compliance, regulatory, regtech, cosmetics, customs |

### Screenshots needed (typically 2-3)

Same as Glama: tool list, substance check in action, customs classification in action.

---

## Marketplace 5 — PulseMCP (https://pulsemcp.com/)

**Submission method:** Form submission at https://pulsemcp.com/submit-server (verify exact URL).
**Target date:** Monday Jun 1
**Expected approval timeline:** 7-14 days.

### Steps

1. Visit https://pulsemcp.com/submit-server.
2. Fill form. PulseMCP requests both technical details AND a "why does this matter" narrative.

### Form fields

| Field | Value |
|---|---|
| Server name | Cleo Legal MCP |
| Description | (use 500-char long description) |
| Why this matters (PulseMCP-specific) | First open-source-companion compliance MCP. Brands building physical products internationally hit compliance walls daily (CE, FDA, REACH, GPSR). This server brings primary-source regulatory data to any MCP-compatible agent (Claude, Cursor, Continue) so the agent can give cited compliance answers in seconds instead of weeks. Free tier means anyone can try. Companion skill bundle (skills_library, MIT) shows builders how to wrap MCP for end-user workflows. |
| GitHub | https://github.com/Cleo-Labs-IA/cleo-legal-mcp |
| Install | `npx -y @cleolabs/legal-mcp` |
| Categories | Compliance, Data, Regulatory |
| Logo | (upload 240×240) |
| Documentation | https://docs.cleolabs.co/legal-mcp |
| Pricing | Free tier (50 calls/day), Pro €349/mo |
| Hosted | Yes |

### Screenshots needed

Same set. If PulseMCP allows a banner: 1200×400 with the tagline "Regulatory citations in 8 seconds."

---

## Marketplace 6 — MCP.run (https://mcp.run/)

**Submission method:** GitHub repo PR or form (verify; some marketplaces consolidate — if mcp.run is acquired or merged, skip and use the replacement)
**Target date:** Tuesday Jun 2
**Expected approval timeline:** 5-10 days.

### Steps

1. Visit https://mcp.run/.
2. Sign in.
3. Submit via "Add Server" or PR to https://github.com/mcprun/registry (verify).

### Entry

(Same content as MCP.so, formatted to their schema. Likely YAML or JSON in `registry/servers/` directory.)

```yaml
id: cleo-legal-mcp
name: "Cleo Legal MCP"
description: "Regulatory citations, substance checks, customs HS codes, sanctions screening for compliance agents. Free tier 50 calls/day."
repository: "https://github.com/Cleo-Labs-IA/cleo-legal-mcp"
homepage: "https://legaldata-public.cleolabs.co"
install: "npx -y @cleolabs/legal-mcp"
author: "Cleo Labs"
license: "MIT"
categories: ["compliance", "regulatory"]
tags: ["compliance", "regulatory", "regtech", "cosmetics", "customs"]
hosted: true
companion_projects:
  - name: "skills_library"
    url: "https://github.com/Cleo-Labs-IA/skills_library"
    description: "28 open-source Claude Code skills that wrap this MCP."
```

### PR / submission title

```
Add Cleo Legal MCP (compliance & regulatory)
```

### PR / submission body

```markdown
Adding the first compliance MCP server to the registry.

**What it does:**
- Substance checks across 13 regulatory databases
- Customs HS code classification + duty estimation
- Sanctions screening (EU, US, UK, UN lists)
- Primary-source regulatory citations for cosmetics, food, electronics, toys, textiles

**Why it matters:**
Compliance is the silent killer of D2C international launches. MCP + this server = agents that answer "can I sell this in [country]?" with citations.

**Companion:** skills_library (28 open-source Claude Code skills, MIT licensed).

Documentation: https://docs.cleolabs.co/legal-mcp
Free tier: 50 calls/day, no card.

— Naomie, Cleo Labs (contact@cleolabs.co)
```

---

## Screenshots specification (used across all marketplaces)

All 1270×760 PNG, light or dark theme (pick one and stick with it across all 3).

### screenshot-1-tool-list.png
- Claude Desktop tool picker showing Cleo Legal MCP tools: `substance_check`, `customs_classify`, `sanctions_screen`, `regulation_lookup`, `signal_search`.
- Sidebar visible to show "Cleo Legal" prefix on each tool.
- Caption (in image): "5 MCP tools, plug into any agent."

### screenshot-2-substance-check.png
- A tool call running `substance_check(cas="123-45-6", jurisdiction="EU")` returning a verdict JSON.
- Show the response with: verdict, concentration limit, citation URL, regulation reference.
- Caption: "Cited verdict in 1 call."

### screenshot-3-customs-classify.png
- A tool call running `customs_classify(product="retinol serum 30ml, ingredient list X")` returning HS code + duty + landed cost.
- Show structured response with HS code, duty rate, customs value.
- Caption: "HS classification + duty in 1 call."

---

## Submission tracking spreadsheet

Create Google Sheet `MCP marketplaces — Cleo Legal` with columns:
- Marketplace
- Submission URL
- Submitted date
- Status (pending / approved / rejected / featured)
- Listing URL (once live)
- Notes

Update daily until all 6 are live.

---

## After all 6 are live

1. **Tweet a single thread** listing all 6 marketplace URLs:
```
Cleo Legal MCP is now live on:
1/ Glama: glama.ai/mcp/servers/cleo-legal
2/ MCP.so: mcp.so/server/cleo-legal
3/ Smithery: smithery.ai/server/cleo-legal-mcp
4/ MCP Servers: mcpservers.org/cleo-legal
5/ PulseMCP: pulsemcp.com/server/cleo-legal
6/ MCP.run: mcp.run/server/cleo-legal

Compliance + regulatory citations for any MCP-compatible agent. Free tier 50/day.

Companion skill bundle: github.com/Cleo-Labs-IA/skills_library
```

2. **Add badges to the cleo-legal-mcp repo README** showing each marketplace listing.

3. **Add a "Where to install" section** to skills_library README pointing to all 6 marketplaces for the MCP companion.

---

## Notes for Naomie

- **The exact URLs and schemas of these marketplaces drift quarterly.** Verify each one's current submission flow before opening the form. Don't trust this doc on URLs — trust the doc on content.
- **Smithery is the most influential of the 6.** If you only have time for 2, do Smithery + Glama.
- **MCP.so requires a PR — that's the slowest path. Open it Thursday for a Monday review.**
- **Don't submit duplicate listings.** Each marketplace allows one listing per server. Pick the cleo-legal-mcp repo, not skills_library, as the primary server reference (skills_library lives on as the companion).
- **If a marketplace lists categories that don't include "compliance" — propose one in your submission.** Most are early enough that they'll create the category.
