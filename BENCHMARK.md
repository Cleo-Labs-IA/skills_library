# Benchmark Methodology

We're building a public benchmark to measure compliance answer quality. The goal is to make the question _"does adding `skills_library` to an LLM actually make its compliance answers better?"_ answerable with numbers instead of vibes.

This document is the **methodology**. The numbers will land here once the run is complete — contributions welcome (see [Contributing](#contributing-to-the-benchmark)).

## Methodology

1. **The test set**: 200 hand-crafted compliance questions across 10 verticals (cosmetics, food, electronics, toys, textiles, supplements, medical devices, sustainability, customs, packaging).

2. **The graders**: 2 independent regulatory experts evaluate answers blindly on:
   - Citation accuracy (regulation name + article number)
   - Verdict correctness (compliant / non-compliant / needs-review)
   - Recency (does it reflect 2025-2026 regulatory updates)
   - Actionability (does it tell the user what to do next)

3. **The models**: Claude Sonnet 4.6, Claude Haiku 4.6, GPT-4o, Llama 3.3 70B, Mixtral 8x22B — all with and without `skills_library`.

## Test set design

The 200 questions are split across 10 verticals (20 each), and within each vertical across 4 question types (5 each):

| Type | What it measures | Example |
|------|------------------|---------|
| **Substance check** | Can the model resolve INCI/CAS to a verdict per market? | _"Can I use 0.4% retinol in a face serum sold in the EU and the US?"_ |
| **Label check** | Can the model produce a compliant label for a given jurisdiction? | _"What are the mandatory back-of-pack elements for a chocolate bar sold in France?"_ |
| **Customs / market entry** | Can the model classify, find duty, and list pre-import documents? | _"What HS code and EU duty apply to a leather handbag imported from Vietnam under EVFTA?"_ |
| **Action / remediation** | Given a blocker, can the model produce a concrete next-step plan? | _"Amazon delisted my product for missing GPSR responsible person — what do I do this week?"_ |

Verticals:

1. Cosmetics
2. Food & beverage
3. Electronics & IoT
4. Toys & children's products
5. Textiles & apparel
6. Dietary supplements
7. Medical devices
8. Sustainability & ESG
9. Customs & trade
10. Packaging & EPR

Each question ships with a **gold answer** written by a regulatory expert: regulation name, article number, current substance limit / threshold / fee, transition date, and the concrete next action. The gold answer is the grading rubric, not the prompt.

## Grading rubric

Each answer is scored on 4 axes, 0–4 each (so 16 max per question, 3,200 max per model):

| Axis | 0 | 2 | 4 |
|------|---|---|---|
| **Citation accuracy** | No citation, or wrong regulation | Right regulation, wrong article | Regulation + article + version date |
| **Verdict correctness** | Wrong verdict | Right verdict, no reasoning | Right verdict + reasoning + edge cases |
| **Recency** | Cites pre-2024 state | Cites 2024 state | Cites latest 2025-2026 update |
| **Actionability** | "Consult a lawyer" | One concrete step | Full multi-step plan with owner + deadline |

The two graders score independently. Inter-rater disagreement >2 points triggers a third grader (regulatory consultant on retainer) to break the tie.

## Models under test

| Family | Model | With skills_library | Without skills_library |
|--------|-------|---------------------|------------------------|
| Anthropic | Claude Sonnet 4.6 | TBD | TBD |
| Anthropic | Claude Haiku 4.6 | TBD | TBD |
| OpenAI | GPT-4o | TBD | TBD |
| Meta | Llama 3.3 70B (Instruct) | TBD | TBD |
| Mistral | Mixtral 8x22B (Instruct) | TBD | TBD |

The "with `skills_library`" runs use the npm MCP server and let the model call `find_skill` + `read_skill` freely. The "without" runs are the same prompt with no tools attached.

System prompts, sampling parameters (temperature 0, max tokens 4096), and the exact harness commit will be published alongside the results so the run is reproducible.

## What we expect to learn

- **Does context help?** We expect a 2–3x lift in citation accuracy when `skills_library` is attached, especially on verticals with fast-changing rules (cosmetics MoCRA, electronics CRA, packaging PPWR).
- **Does context hurt anywhere?** Possibly on simple questions where the long skill content distracts from a one-line answer.
- **Where do smaller models break?** We expect Haiku 4.6 + skills to outperform GPT-4o without skills on regulation citation — the test is whether the gap closes for verdict + actionability.
- **What's the recency floor?** We want to know how stale base-model knowledge is on 2026 regulation. The "without" arm tells us that.

## Limitations we're upfront about

- **English-only.** The first pass is English questions only. French / German / Italian / Spanish questions are tracked for V2.
- **Single-shot.** No multi-turn dialogue. Real users iterate.
- **Static cutoff.** Regulations change between when we grade and when you read this. We re-run the benchmark every 6 months on a refreshed test set.
- **No retrieval-augmented baseline.** "Without skills_library" means no compliance tools at all, not "with a generic web search." A future arm will add a web-search-only baseline so we can isolate the value of curated skills vs raw search.

## Results

| Model | Skills enabled | Citation | Verdict | Recency | Actionability | Total / 3200 |
|-------|----------------|----------|---------|---------|---------------|--------------|
| _TBD_ | — | — | — | — | — | — |

[Results table — TBD, contributors welcome]

## Contributing to the benchmark

Three ways to help:

1. **Write test questions.** Open a PR adding questions + gold answers under `/_internal/benchmark/questions/<vertical>/`. Every accepted question gets you on `CONTRIBUTORS.md`.
2. **Grade answers.** Once we publish the raw model outputs, anyone with regulatory expertise can grade them. We'll release the harness so you can re-grade locally.
3. **Run an additional model.** If you want us to add a model (Gemini, Qwen, DeepSeek, etc.), open an issue with the API access plan and we'll include it.

For methodology questions, email `contact@cleolabs.co` with subject prefix `[BENCHMARK]`.

---

_This benchmark is run by Cleo Labs and is **not** a Cleo product. Results will be published under MIT alongside the rest of the repo so anyone can reproduce or critique them._
