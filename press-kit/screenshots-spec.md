# Screenshots Specification

Specs for the 8 official `skills_library` screenshots. Use these to commission/shoot the images.

> **Note:** This file specifies what to capture. The actual image files live in `press-kit/screenshots/` (created separately). All screenshots should be exported as PNG at 2× retina resolution, then a 1× downscale provided for web use.

---

## Global conventions

| Property | Value |
|---|---|
| **Color space** | sRGB |
| **Format** | PNG (lossless), with WebP fallback |
| **Resolutions** | Native (1×) + retina (2×) |
| **Naming convention** | `skills-library-{number}-{slug}@{1x,2x}.png` |
| **Output folder** | `press-kit/screenshots/` |
| **Background** | Match Cleo brand — peach `#FFD9C7`, off-white `#FAF7F2`, or pure white depending on shot |
| **Brand mark** | Bottom-right corner watermark on all shots: 80×20px `cleo LABS` wordmark, 60% opacity |

---

## Screenshot 1 — Hero (landing page)

| Property | Value |
|---|---|
| **File name** | `skills-library-01-hero@2x.png` (and @1x) |
| **Dimensions** | 1920 × 1080 (16:9, desktop) |
| **Crop target** | Above-the-fold of [cleo-labs-ia.github.io/skills_library](https://cleo-labs-ia.github.io/skills_library/) |

**Content to show:**
- The `skills_library` headline + subhead
- Stats bar (40 skills · 6 verticals · 7 markets · MIT license)
- Both CTAs visible — "View on GitHub" + "Install in 30 seconds"
- "CLEO LABS · MAY 2026" label visible

**Notes:** Take in light mode. Make sure fonts have fully loaded (Satoshi). Cursor not visible.

---

## Screenshot 2 — Skills grid

| Property | Value |
|---|---|
| **File name** | `skills-library-02-skills-grid@2x.png` |
| **Dimensions** | 1920 × 1280 (taller than 16:9 to fit all tiers) |
| **Crop target** | The skills-by-tier section of the landing page |

**Content to show:**
- All 40 skills organized by tier/vertical (cosmetics, food, electronics, toys, textiles, sustainability)
- Visible category labels
- Skill names readable at 100% zoom

**Notes:** If the page doesn't render all 40 at once, stitch two screenshots or take a full-page export from Chrome DevTools (Cmd+Shift+P → "Capture full size screenshot").

---

## Screenshot 3 — Terminal demo

| Property | Value |
|---|---|
| **File name** | `skills-library-03-terminal-demo@2x.png` |
| **Dimensions** | 1600 × 1000 (terminal aspect, leaves breathing room) |
| **Crop target** | Claude Code answering a real compliance question |

**Content to show:**
- Terminal window with macOS chrome (the three lights) visible
- A real prompt typed by user, e.g.:
  > `> can I sell this lipstick in California? ingredients: parabens, mica, titanium dioxide`
- Claude Code's structured response — citing CosIng/ECHA/FDA, with a clear verdict and reasoning
- Skill invocation indicator visible ("Using skill: cosmetics-us-california")

**Notes:** Use a real ingredient list. Don't fake the response. Take from a real session.

---

## Screenshot 4 — Install one-liner

| Property | Value |
|---|---|
| **File name** | `skills-library-04-install@2x.png` |
| **Dimensions** | 1600 × 600 (wide, terminal-only) |
| **Crop target** | Terminal showing the `git clone` install command |

**Content to show:**
- Terminal prompt with: `git clone https://github.com/Cleo-Labs-IA/skills_library ~/.claude/skills/comply`
- Output of the clone — "Cloning into..." and final success message
- Optional: a second command showing `ls ~/.claude/skills/comply/skills | head` listing skill names

**Notes:** Keep it short. Aim for "install ceremony in one shot."

---

## Screenshot 5 — MCP integration

| Property | Value |
|---|---|
| **File name** | `skills-library-05-mcp-integration@2x.png` |
| **Dimensions** | 1600 × 800 |
| **Crop target** | Terminal showing the Cleo Legal API MCP install |

**Content to show:**
- The command: `claude mcp add cleo-legal-api --url https://legaldata-public.cleolabs.co/mcp --header "Authorization: Bearer $CLEO_API_KEY"`
- Success confirmation
- A follow-up `claude mcp list` showing `cleo-legal-api` registered

**Notes:** Show the real flag syntax for the current `claude mcp` CLI. Redact any real API key.

---

## Screenshot 6 — API dashboard

| Property | Value |
|---|---|
| **File name** | `skills-library-06-api-dashboard@2x.png` |
| **Dimensions** | 1920 × 1080 |
| **Crop target** | Homepage of [legaldata-public.cleolabs.co](https://legaldata-public.cleolabs.co/) |

**Content to show:**
- Cleo Legal API landing page
- Headline stats — 1,479 sources, 131 countries, 200+ authorities
- Pricing visible (€349/mo Pro tier)

**Notes:** Take in light mode. Fully-loaded state.

---

## Screenshot 7 — Compliance matrix

| Property | Value |
|---|---|
| **File name** | `skills-library-07-compliance-matrix@2x.png` |
| **Dimensions** | 1600 × 1200 |
| **Crop target** | Claude Code output showing a multi-jurisdiction verdict |

**Content to show:**
- A real product (e.g., a SPF50 sunscreen) being checked across all 7 markets
- A matrix output:

| Market | Verdict | Notes |
|---|---|---|
| EU | ✅ Compliant | CosIng cross-checked |
| US (Federal) | ⚠️ Reformulation needed | Octinoxate restricted |
| US (California) | ❌ Banned | Prop 65 listed |
| UK | ✅ Compliant | Post-Brexit CTPA aligned |
| Japan | ⚠️ Label change | MHLW requires JP-language |
| Korea | ✅ Compliant | KCS notification ready |
| Canada | ✅ Compliant | Health Canada cleared |

**Notes:** This is the "money shot" — the screenshot that shows the value in 2 seconds.

---

## Screenshot 8 — Founder portrait

| Property | Value |
|---|---|
| **File name** | `skills-library-08-founder-naomie@2x.png` |
| **Dimensions** | 1200 × 1500 (4:5 portrait) + 1080 × 1080 (square crop for social) |
| **Crop target** | Naomie Halioua headshot |

**Content to show:**
- Professional but not stiff — laptop-era founder energy, not enterprise headshot
- Plain or softly-styled background (no logo wall)
- Eyes to camera or three-quarter
- Color photo, well-lit

**Notes:**
- 🚧 Placeholder — Naomie to commission or self-shoot.
- Provide both 4:5 (editorial use) and 1:1 (social/podcast cover) crops.
- A black-and-white duplicate is appreciated by print outlets.
- Photographer credit, if any, should be listed in image EXIF + a `CREDITS.md` next to the file.

---

## Delivery checklist

When all 8 are captured:

- [ ] All exported as PNG (1× and 2×)
- [ ] WebP fallbacks generated
- [ ] Files renamed per convention
- [ ] Watermark applied (except Screenshot 8 — founder portrait)
- [ ] Uploaded to `press-kit/screenshots/`
- [ ] Listed in `press-kit/README.md` if not already
- [ ] Zip bundle generated at `press-kit/screenshots.zip` for one-click journalist download
