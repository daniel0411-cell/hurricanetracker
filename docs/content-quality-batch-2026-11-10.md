# Local preparedness content batch - November 10, 2026

## Baseline and authorization

The owner asked to continue yesterday's content updates, following the previously authorized gradual improvement and publication workflow. Read AGENTS.md and checked status, remote URLs, branch configuration, remote HEAD and fetched origin before substantive work. Main tracks origin/main; the remote default is main. Both were `b1bf574c1b0af6581b149794eb3f843144a8d972`, ahead/behind 0/0, with a clean worktree.

## Changed pages

- `/city/wilmington/hurricane-tracker/`: address versus order, receiving place versus planning shelter list, access registry versus confirmed transport, cat/dog co-location requirements, road checks and locally controlled reentry.
- `/city/virginia-beach/hurricane-tracker/`: origin/destination lookup, Chesapeake Bay Bridge-Tunnel exclusion versus Monitor-Merrimac, conditional I-64 reversal, center activation, limits of medically friendly care and confirmation of pet acceptance.
- Added distinct private household planning records and explicitly hypothetical exercises; replaced broad historical FAQ answers with actionable local questions.
- Revised both pages to November 10 only after substantive changes. Existing templates derive dates and FAQ/HowTo schema from these records; no route, sitemap source, dependency or deployment configuration changes.
- The shared template prioritizes a planning record over the old history grid when a record exists. Retained history data was not rewritten or represented as newly verified. Other tracker URLs were not independently deepened in this batch.

## Primary-source research

Sources located through browser search and opened on official websites in the background browser on November 10, 2026. No visible editorial revision dates appeared in the checked sections.

- https://www.nhcgov.com/203/Evacuation-Shelters - read main content and Emergency Evacuation Shelters panel. Possible school locations are planning sites; not all open together. Basic last-resort shelter provisions; cat/dog co-location requires owners to stay, animals separate, vaccination records and 5-7 days of food. The live closed-shelter status observed was not copied into the standing guide.
- https://www.nhcgov.com/1193/Access-Functional-Needs-Registry - advance contact, voluntary enrollment, provider/facility exclusions. Main page lists 910-798-6900 for questions. Search snippets showed other numbers; use the checked main-page number, not unverified snippets. No application submitted or assistance booked.
- https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone - address-lookup and travel entry; expanded unzoned-area and return-home FAQs. Local officials determine reentry; lodging availability should be checked. The county page says 20 participating counties while the state page says 21; no county count is repeated in the guide.
- https://oem.virginiabeach.gov/emergency-preparedness/during/evacuating - named crossing exclusion, distinction from listed routes and governor-controlled I-64 reversal. Detailed ramp plans and questionable blanket home-return/utility instructions were not republished.
- https://oem.virginiabeach.gov/emergency-preparedness/during/evacuation-centers - activation and last-resort framing; expanded medical and pet panels. Medical assistance is bounded, not total care. Pet list names turtles but separately excludes reptiles; do not resolve that inconsistency by inventing an acceptance rule. Ask operator about specific species and maintain a backup.
- https://www.vdem.virginia.gov/know-your-zone - verified A-D, full street-address lookup and event-specific directives. Older vaemergency.gov URL redirected here; initial navigation timeout resolved to a readable page.

## Limits

No specific property zone, actual evacuation order, road/crossing status, shelter opening, transport booking, animal placement or clinical placement was verified. No private data was submitted. Hazard background retained from earlier versions was not reverified in this batch. Source-check text states its limited scope; no expert team or blanket certification is claimed.

## Validation and release

- `npm run build`: passed.
- `npm run check`: zero errors, zero warnings, four existing hints.
- Metadata/schema audits: 62 static and 127 dynamic page checks passed. Internal links: 64 generated HTML files passed. Priority FAQ audit passed (11 pages; not a full rendered FAQ comparison).
- Date regression: all 55 local pages passed. Diff whitespace check passed.
- Browser rendered both updated routes: Article dateModified and visible date November 10, 2026; Wilmington seven FAQs, Virginia Beach six. Main text approximately 1,517 and 1,540 words respectively, including shared sections; word count is not evidence of factual accuracy.
- Desktop and 390x844 mobile checks found no horizontal overflow; Virginia Beach screenshot verified heading and action wrapping. No broken loaded images on the checked Wilmington page.
- Local preview needed a restart after concurrent build/dev dependency optimization caused a missing optimized dependency. No config or dependencies changed.
- Released content commit `9c1d346` through `npm run ship`; its build, fresh origin/main check and push passed. Cloudflare Worker version: `63de0764-57f6-4a0b-817b-c54e555780a7`, deployed to `https://www.hurricanetracker.cc/` (including the apex route).
- Production browser checks confirmed both new planning records, visible and Article dates `2026-11-10`, Wilmington seven FAQs and Virginia Beach six. Confirmed Wilmington registry number and Virginia Beach crossing exclusion/medical scope text in the deployed pages.
- Production SEO endpoint checks passed, including crawler GET/HEAD redirects and ads.txt. IndexNow accepted 210 URLs with HTTP 200; this is submission acceptance, not proof of indexing. Google service-account submission was skipped because credentials were unavailable; normal sitemap discovery remains separate.
- This release record is a subsequent documentation-only commit; no further Worker deployment is needed for it.
