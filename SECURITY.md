# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the skills, the landing page, the MCP server, the npm package, or any related infrastructure, please email **security@cleolabs.co**.

**Do not open public issues for security concerns.**

For sensitive reports, you may encrypt your email using our PGP key:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
[PLACEHOLDER — Cleo Labs PGP key for security@cleolabs.co will be published here]

Fingerprint:    TBD
Key ID:         TBD
Algorithm:      TBD
Created:        TBD
-----END PGP PUBLIC KEY BLOCK-----
```

> _The PGP key for `security@cleolabs.co` has not yet been generated. Until it is, send sensitive material over an end-to-end encrypted channel (Signal, ProtonMail) and we will coordinate a secure handoff. This section will be updated once the key is published._

## Response Timeline

| Step | Target |
|------|--------|
| Initial acknowledgement | Within **48 hours** of report |
| Triage and severity assessment | Within **5 business days** |
| Status updates to reporter | At least **every 7 days** until closed |
| Fix or mitigation for critical issues | Typically **within 30 days** |
| Public disclosure | **90 days** after initial report (see below) |

## Responsible Disclosure Policy

We follow a **90-day coordinated disclosure window**, aligned with industry practice (Google Project Zero, CERT/CC).

- **Day 0** — vulnerability reported privately to `security@cleolabs.co`.
- **Day 0 – 90** — we triage, fix, and prepare a release. The reporter is kept in the loop.
- **Day 90** — public disclosure via GitHub Security Advisory, even if a fix is not yet shipped. This deadline can be extended by mutual agreement (e.g. an ecosystem-wide bug needing coordinated patches) or shortened if the bug is already being actively exploited.
- **No legal action** will be taken against good-faith researchers who follow this policy, do not access data they shouldn't, and do not degrade the service for other users.

## Supported Versions

We support the latest minor release of `@cleo-labs/skills-mcp` on npm and the `main` branch of this repository. Older versions do not receive security backports.

| Version | Supported | Notes |
|---------|-----------|-------|
| `main` (this repo) | Yes | Always patched first |
| `@cleo-labs/skills-mcp` latest on npm | Yes | Patches published as a new minor/patch release |
| `@cleo-labs/skills-mcp` previous minor | Yes | Critical fixes only, for 30 days after a new minor ships |
| `@cleo-labs/skills-mcp` older minors | No | Please upgrade |
| Forks / vendored copies | No | You are responsible for backporting |

## Scope

### In scope

- The MCP server (`mcp-server/` and the published `@cleo-labs/skills-mcp` npm package)
- The skill registry, loader, and parser
- The landing page (`index.html`, related assets) served from this repo
- The GitHub Actions workflows in `.github/workflows/`
- Supply-chain integrity of the published artifacts (npm package, GitHub release tarballs)

### Out of scope

- Issues in our upstream dependencies (please report those to the upstream maintainers; we'll patch via Dependabot)
- Cleo Legal API or Cleo Insight production endpoints — those have their own security contact (`security@cleolabs.co` with subject prefix `[Cleo API]`)
- Social-engineering, physical-security, or denial-of-service tests against Cleo Labs staff or infrastructure
- Regulatory content correctness — that's a documentation issue, please open a regular GitHub issue or PR

## Bug Bounty

**We do not currently run a paid bug bounty program.** Cleo Labs is a small team and we'd rather put that budget into shipping fixes quickly than into payouts.

What we _can_ guarantee:

- **Acknowledgement** in the GitHub Security Advisory (with the reporter's preferred name and handle, unless they request anonymity).
- **Credit in `CHANGELOG.md`** for the release that includes the fix.
- **A spot in `CONTRIBUTORS.md`** with the security emoji.
- **A direct thank-you** from the team, and an offer of Cleo Labs swag once we have any.

If our circumstances change and we launch a paid bounty later, prior reporters who followed this policy will be eligible for retroactive payouts at our discretion.

## Disclosure Process

After fixing a vulnerability, we will:

1. Publish a **GitHub Security Advisory** with a CVE if applicable.
2. Cut a patched release of the npm package and tag the repository.
3. Credit the reporter (unless they request anonymity).
4. Update `CHANGELOG.md` under a `## Security` section.
5. Notify downstream consumers via the release notes.

## Contact

- General security: `security@cleolabs.co`
- Cleo Legal API security: `security@cleolabs.co` (subject prefix `[Cleo API]`)
- API support (non-security): `api@cleolabs.co`
- Commercial / partnerships: `contact@cleolabs.co`
