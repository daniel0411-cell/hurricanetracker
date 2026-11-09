# Household decision content batch 2 - November 9, 2026

## Baseline and scope

Main tracks origin/main. Origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git; queried remote default is main. Fresh fetch before editing found HEAD/origin/main equal at 8033b041775ebefde396614d4316e78f2194605f, ahead/behind 0/0, clean worktree. Owner authorized continuing the phased improvements and committing/deploying successful work.

Three existing articles: hurricane-emergency-kit-checklist, hurricane-evacuation-checklist and hurricane-family-communication-plan. Added three plain-text planning records under public/downloads. No route, sitemap source, dependency or deployment configuration changes.

## Primary sources

Located through a Google search and official Ready.gov navigation, then read in the background browser on November 9, 2026:

- https://www.ready.gov/kit - visible update July 1, 2026. Several-day supplies; one gallon per person per day; household needs; maintenance and home/work/car storage. No universal seven-day prescription quantity established.
- https://www.ready.gov/evacuation - visible update March 20, 2026. Destinations, carry bags, transport planning, recommended routes without shortcuts, flooded-road avoidance, conditional utility actions and return checks at both locations.
- https://www.ready.gov/plan - visible update September 1, 2026. Household alerts, shelter, evacuation and communication; familiar meeting place; age, access, caregiving, language, school and pet needs; written practice plan.
- https://www.ready.gov/get-tech-ready - visible update March 13, 2026. Text bandwidth versus calls, backup power, household contacts and protected document backups. Did not adopt dated platform or text-service instructions.

Only the named HTML-page claims were checked. Linked forms/PDFs, actual kits, prescriptions, equipment runtime, current orders, shelter openings, routes, rides, reentry and carrier/emergency texting services were not verified. Retained water references are not represented as newly read. Worksheet formats, arithmetic and fictional exercises are editorial aids.

## Changes

- Kit: several-day planning instead of universal duration; pharmacist/clinician confirmation instead of generic prescription quantity; 12/28-gallon alternative examples and four/20-gallon shortfalls with eight on hand; separate carry/home supplies, actual cable/load checks and unresolved essential tasks. Added hurricane-kit-gap-record.txt.
- Evacuation: order scope and deadlines; current recommended routes over navigation shortcuts; request versus confirmed transport; confirmed destination and passenger/equipment handoffs; no blanket utility shutoff; return checks and receipts/coverage distinction. Added hurricane-departure-handoff.txt.
- Communication: household messages versus official alerts; explicit human acknowledgement and pending relays; fictional timed exchange; failed-network/power tradeoffs; language, accessible paper records and privacy. Preserved the existing plan generator. Added hurricane-communication-checkin-record.txt.
- Three substantive modification dates and limited source-check dates are November 9, 2026. No invented reviewers, credentials or current event observations.

## Validation and release

- Build passed, including city verification and OG generation; no generated tracked asset changes.
- Astro check: 225 files, zero errors/warnings and four existing hints.
- FAQ, internal-link, metadata and media audits passed; git diff --check passed.
- Built Worker preview on localhost:8840 with local bindings and explicit localhost upstream. Browser inspected all three at desktop 1440x900 and mobile 390x844: no horizontal overflow, correct headings/modification dates, www trailing-slash canonicals, loaded hero images with alt text, FAQ schema counts 4/4/6. Mobile screenshots and kit desktop screenshot visually checked. All three plain-text assets displayed their full expected records through local HTTP.
- Content commit 6bada02746508bf14cf834a20fdc8576054001e9 pushed to origin/main. Fresh fetch before push found the baseline unchanged; fresh fetch before deployment confirmed HEAD/origin/main equal at the content commit, ahead/behind 0/0 and clean worktree.
- `npm run deploy` completed successfully. Actual Wrangler output identified Worker hurricanehub version e679984f-3e73-4efc-b76f-5d58c4fba2a5 serving https://www.hurricanetracker.cc/ and the configured apex route, from the build for 6bada02. This deployment identity is not inferred from Git.
- Production browser verified all three articles' new headings, November 9 revision and limited source notes, www canonicals, download links and FAQ schema counts 4/4/6. All three production plain-text records displayed their expected heading and revision. Local rendering checks above are distinguished from these production observations.
- Production SEO endpoints and crawler GET/HEAD checks passed, including ads.txt. IndexNow submitted 210 unique URLs with HTTP 200. Google Indexing API skipped for lack of configured service-account credentials. These results do not establish indexing or AdSense approval.
- This final release record is documentation only; its follow-up commit does not require rebuilding or redeploying the Worker.

## Remaining work

Two batches now cover six existing articles. The earlier 60-85-page / 25-35-batch allowance remains provisional, not a confirmed defect count. Both batches improved existing pages without route changes; local guides and historical evidence may need smaller batches. Next inspect preparation timing and high-use local/overlapping evacuation guides before choosing another 2-3 items. Review remaining priorities before narrowing the total estimate.
