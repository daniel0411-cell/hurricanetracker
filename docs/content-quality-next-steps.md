# Content quality next steps

## Agreed direction - 2026-11-09

The owner requested fixing the five findings in the Antigravity audit and deploying the corrected site. After release, continue improving existing articles individually, following the approach below. This is an ongoing project direction, not a scheduled automation or a claim that all articles have already been reviewed.

- Prioritize safety, insurance, evacuation, and recovery articles where a mistaken generalization could affect a household decision.
- Verify specific claims against topic-specific official primary sources; record source URLs, issue/update dates where available, observation dates, and the limited scope of each check.
- Add useful original explanation: worked official examples, local resources, concrete decision steps, reading exercises, or printable records where appropriate.
- Distinguish historical cases, hypothetical examples, editorial revision dates, advisory issue times, and feed fetch times.
- Keep publisher identity truthful. Do not invent experts, teams, credentials, professional reviews, or blanket fact-checking assurances.
- Update an article's date only for an actual substantive change. Do not replace useful specificity with generic professional-sounding copy or inflate word counts.
- Preserve the previous source-backed pet, mold, ALE, deductible, business-continuity, and NWS-warning improvements documented in content-quality-followup-2026-11-08.md.
- Start future work with the required version checks and inspect the current article before selecting the next focused batch. Verify changes with the build and relevant content/render checks; follow AGENTS.md authorization requirements for each release.

## Current release

See antigravity-content-audit-2026-11-09.md for the original findings and the release checkpoint for the implemented fixes and deployment status.

## Individual article work - 2026-11-09

The owner selected Codex to carry out the continuing article improvements directly. Check the claims and the final changes separately; do not invent a second reviewer or an expert team.

- First follow-up article: `/blog/hurricane-contractor-scams-insurance-claim/`.
- Primary source read in the background browser on November 9, 2026: FTC, "How To Avoid a Home Improvement Scam", dated July 2022, https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam . Located through a search engine and read on the FTC site.
- Checked scope: license and insurance checks, multiple written estimates, written contract details, upfront and final payments, financing pressure, and dispute records. No state-specific law, contractor or insurance policy was checked.
- Added an explicitly hypothetical $6,000/$8,000 bid comparison, signing and payment checkpoints, a private verification record, and a dispute documentation path. Clarified safe ground-level damage photography and that receipts do not establish coverage.
- Keep the example amounts separate from market prices. Do not publish nationwide deposit, cancellation or assignment rules from this general source.
- Initial contractor validation: `npm run build`, `npm run faq:audit`, `npm run links:audit`, `npm run metadata:audit`, and `git diff --check` passed. Article data parses successfully with 13 sections and six FAQs. It was subsequently included in the verified three-article release at content commit 614eef0, Worker version 466f391a-0948-410e-a7d6-5d2bb7962785.
- School/daycare reunification and apartment renters are now included in the same three-article batch; see content-quality-batch-2026-11-09.md for sources, scope and validation. The contractor-only validation above predates the combined batch.

## Scope estimate and batch plan - 2026-11-09

This is a planning estimate from local content inventory and existing revision checkpoints, not a fresh sentence-by-sentence factual audit or confirmation of the current production deployment. Baseline: `93da2f28eceb916225d4b930ac833894445d95a2`, main/origin/main equal after fetch, with the contractor article and this plan overlaid. No site content was changed for this estimate.

The existing local build's sitemap contains 189 fixed URLs. Live or retained registry-only storm routes can add URLs and are excluded from this fixed inventory. APIs, redirects and preview pages are not article work items.

| Page family | Fixed URLs | Estimated pages needing substantive or targeted changes |
| --- | ---: | ---: |
| Blog articles: 46 data records plus 3 standalone pages | 49 | 12-16 |
| Local pages: 33 city trackers, 9 state trackers, 22 preparedness guides | 64 | 30-40 |
| Topic guides | 23 | 10-14 |
| Storm archives: 6 named tracker records plus 3 dated archive pages | 9 | 3-6 |
| Tools and remaining entry, directory and policy pages | 44 | 5-9 |
| Total | 189 | 60-85 |

These are capacity allowances, not 60-85 confirmed defective pages. Review the remaining pages and preserve useful existing material rather than rewriting everything. Missing sourceCheck, a short article or a recent modification date alone does not establish poor quality or factual correctness.

Evidence for prioritization: 28/46 blog data records currently declare a limited source check, including the unpublished contractor revision; 18 do not. Nine of 33 city records and four of 22 preparedness records declare a limited source check. Earlier records also document useful revisions without this field. The local-page allowance therefore requires semantic review, not mechanically rewriting every unmarked record. The 108-route content test is a structural test subset, not proof that all 189 fixed URLs have received a substantive editorial review.

### Delivery order

1. First batch completed and deployed: contractor verification, school/daycare reunification, and apartment renters. See content-quality-batch-2026-11-09.md. Second batch now revised and locally validated: emergency kit, evacuation checklist and household communication, plus three blank text records; see content-quality-batch-2-2026-11-09.md for sources and release status.
2. Address safety and household decision gaps: evacuation checklist, emergency supplies, preparation timing, household communications and records; inspect high-use local pages and overlapping topic guides alongside them. Target roughly 25-35 unique pages across this and the first batch, about 8-12 batches. This is a priority subset of the total estimate, not extra pages.
3. Extend local differentiation across the remaining city/state guides, then improve topic overlap and historical evidence in weaker archives. Combine these with the first phase for approximately 25-35 batches overall; local research and original-product/PDF work may require smaller batches.
4. Recheck navigation, tools' claims and limitations, source/date consistency, FAQ/schema alignment, mobile rendering and production output. Review unchanged pages too; do not add another 189-page rewrite quota.

For articles, normally deliver 2-3 per batch; for local pages or historical reports, 1-2. Each batch includes primary-source reading, source/date/scope notes, a useful example or practical output where appropriate, editorial review, build and focused render/link checks. Release only with applicable authorization. A shared template fix may benefit many URLs and should not be counted as independently deepening all of them.

Batch counts are more useful than a calendar promise while source availability and page overlap remain uncertain. Two batches now cover six existing articles; keep the 60-85-page / 25-35-batch range provisional because this work does not establish defects in remaining pages. Next inspect preparation timing and high-use local/overlapping evacuation guides, then reestimate from actual findings. Route merging, redirects, noindex, sitemap or protected configuration changes require their own concrete proposal and authorization under AGENTS.md. Completing this plan is not a prediction of AdSense approval.
