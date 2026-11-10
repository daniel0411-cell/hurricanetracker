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

1. First batch completed and deployed: contractor verification, school/daycare reunification, and apartment renters. See content-quality-batch-2026-11-09.md. Second batch completed and deployed: emergency kit, evacuation checklist and household communication, plus three blank text records. Content commit 6bada02, Worker version e679984f-3e73-4efc-b76f-5d58c4fba2a5; see content-quality-batch-2-2026-11-09.md for source scope, validation and production observations.
2. Third batch completed and deployed: preparation timing, Orlando standing shelter/assistance guide and a focused Orlando tracker resource update. Content commit 68d8792, Worker version d0480166-9fb6-4bf7-878f-356d55747b73; see content-quality-batch-3-2026-11-09.md. Continue inspecting high-use local pages and overlapping topic guides for safety and household decision gaps. Target roughly 25-35 unique pages across this and the first batch, about 8-12 batches. This is a priority subset of the total estimate, not extra pages.
3. Extend local differentiation across the remaining city/state guides, then improve topic overlap and historical evidence in weaker archives. Combine these with the first phase for approximately 25-35 batches overall; local research and original-product/PDF work may require smaller batches.
4. Recheck navigation, tools' claims and limitations, source/date consistency, FAQ/schema alignment, mobile rendering and production output. Review unchanged pages too; do not add another 189-page rewrite quota.

For articles, normally deliver 2-3 per batch; for local pages or historical reports, 1-2. Each batch includes primary-source reading, source/date/scope notes, a useful example or practical output where appropriate, editorial review, build and focused render/link checks. Release only with applicable authorization. A shared template fix may benefit many URLs and should not be counted as independently deepening all of them.

Batch counts are more useful than a calendar promise while source availability and page overlap remain uncertain. The third batch addresses preparation timing and the two Orlando URLs: a standing household guide and a focused tracker resource update. See content-quality-batch-3-2026-11-09.md for source scope and actual validation/release status. Three batches address seven blog articles and two local URLs; the tracker update is not a full independent factual rewrite. Keep the 60-85-page / 25-35-batch range provisional because this work does not establish defects in remaining pages. Next inspect high-use local/overlapping evacuation guides, then reestimate from actual findings. Route merging, redirects, noindex, sitemap or protected configuration changes require their own concrete proposal and authorization under AGENTS.md. Completing this plan is not a prediction of AdSense approval.

Fourth batch completed and deployed: deepened the Jacksonville standing preparedness guide, connecting the zone and current order with the destination, JTA transport, annual medical registration, pet journey and return checks. Preserved the already researched Jacksonville tracker rather than treating it as a second rewrite. Content commit c12681f, Worker version 67dbfbeb-d937-47e6-9c8a-c32fd0ed4ff3. See content-quality-batch-4-2026-11-09.md for official sources, bounded observations and validation/release evidence. Four batches address seven blog articles and three local URLs, including one focused tracker update; this does not establish defects in other unreviewed pages. Continue inspecting high-use local/overlapping evacuation guides, then revise the provisional workload estimate from actual findings.

Fifth batch completed and deployed: New Orleans standing guide, with locally specific city-assisted evacuation, home-to-hub access, medical profile versus pickup, carry-on exceptions, pet transport and resident reentry. The existing researched tracker remains unchanged. Content commit 97b7873, Worker version 5241a2ec-8b36-4072-a545-d3b35ddbe629; production text and schema verified. See content-quality-batch-5-2026-11-09.md for official sources, disagreements between standing pet transport descriptions and validation/release evidence. Five batches address seven blog articles and four local URLs, including one focused tracker update. Continue inspecting high-use local and overlapping evacuation guides before deciding the next substantive revision; the remaining workload estimate is provisional.

Sixth batch completed and deployed: Charleston standing guide, with area-specific departure corridors, conditional traffic controls, usable transport and receiving place, Medical Equipment Power Shelter limitations, caregiver and pet needs, activation and return checks. Houston's existing guide and Charleston's tracker were inspected and retained. Content commit c17885a, Worker version 36190978-1452-4f6f-922d-2809c374a500; production text and schema verified. See content-quality-batch-6-2026-11-09.md for source scope and validation/release evidence. Six batches address seven blog articles and five local URLs, including one focused Orlando tracker update; this is not five full independent local rewrites. Continue inspecting high-use local and overlapping evacuation guides and preserve useful existing material. The remaining workload estimate stays provisional.

## Continued local work - 2026-11-10

Yesterday's sitewide correction batch also deepened the Gulf Shores and Norfolk tracker guides; see sitewide-content-fixes-2026-11-09.md. The next two standing preparedness guides, Wilmington and Virginia Beach, now have distinct address/order/transport/destination records and bounded official source checks. Wilmington focuses on planning shelters versus activation, access registry and pet co-location; Virginia Beach covers crossing selection, conditional lane reversal and medical-support limits. Build, type/date/schema/metadata/link checks and desktop/mobile browser review passed. See content-quality-batch-2026-11-10.md for sources, scope and actual release status. Continue with other local guides after checking their current content, rather than expanding the batch automatically or counting a template effect as an independent rewrite.

Next focused batch: Texas standing preparedness guide, connecting local instructions, STEAR annual registration and consent, separately confirmed transport/care/destination, and TxDOT's contraflow versus evacuation-shoulder distinction. See content-quality-texas-2026-11-10.md for bounded source observations, validation and release status. This is one state preparedness page, not an independent revision of every Texas route.

Quality comparison and next revision: sampled Texas, Wilmington, Virginia Beach and the contractor guide. The additions improve local specificity, decision usefulness and limits on claims; long paragraphs and unreviewed generic pages remain. Florida now receives an address/home/shelter planning revision with official registration and eligibility limits. See content-quality-review-florida-2026-11-10.md for comparison scope, sources, limitations and validation/release status. Continue with one or two inspected local guides per batch; do not count a source note or template effect as a full factual audit.

Next focused revision: Louisiana standing preparedness guide, connecting parish instructions and assistance with accessible transport, continued treatment and a receiving destination. Distinguishes medical-needs registry contact, 211 shelter information, 511 road information and LDH preparation/relocation assistance. Preserves the existing New Orleans work and does not apply city services statewide. See content-quality-louisiana-2026-11-10.md for sources, limits and actual validation/release status. Continue small, inspected batches; historical evidence and reading density remain separate review tasks.

## Larger batches requested - 2026-11-10

The owner explicitly requested more articles per turn to reduce repeated back-and-forth. For ordinary existing-article work, target approximately six to eight inspected articles in one turn, with review, validation and the already authorized release handled together. This supersedes the earlier two-to-three article batching preference, not the requirement to inspect each article or verify claims. Reduce the batch when necessary for substantive research or unresolved issues rather than padding the count. This is a work preference for active requests, not a scheduled automation.

The first larger batch covers six existing articles: ENSO context, the archived 2025 outlook, radar versus satellite, the cone, regional cyclone terminology and generator safety. Browser research was unavailable, so the work uses existing evidence and bounded editorial corrections; it must not be reported as six new primary-source fact checks. See `content-quality-six-article-batch-2026-11-10.md` for scope, source limits and validation.

The next requested six-article batch covers real-time product clocks, rapid intensification, wind categories, spaghetti-model time matching, surge reference levels and FEMA flood-map interpretation. It adds explicit reading/calculation exercises and corrects overgeneralized wording, preserving prior evidence and asset records. Browser research remains unavailable; no new source-check dates are claimed. See `content-quality-reading-batch-2026-11-10.md` for scope and validation. Continue selecting articles for concrete unresolved reader questions rather than repeatedly appending generic checklists to already useful guides.
