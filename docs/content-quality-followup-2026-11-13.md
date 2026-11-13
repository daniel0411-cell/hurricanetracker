# Content quality follow-up — November 13, 2026

## Version and scope

Fresh origin HEAD lookup and fetch confirmed default main at 455e4a84e0e4c1bafb2f0d2759ee6ab5650684e5. Detached HEAD has no upstream and equals the fetched main (0 ahead / 0 behind). Existing edits in blog.ts, contentDates.ts, stormPages.ts and topicPages.ts, untracked diagnostic/research notes and the dependency symlink were preserved. This work adds two blog revisions to that working tree. No production deployment version was freshly checked in this content-only pass.

Reviewed the existing six-page diff and its November 12 source/validation record in content-six-page-2026-11-12.md: tracking, hurricane warnings, storm-surge warnings, travel refunds, Erin and Melissa. Retained those edits and their November 12 dates. Their prior PDF, browser and runtime checks are not claimed as newly executed today.

## Primary sources read today

Background in-app browser search followed by official pages. Observation date: November 13, 2026 (Asia/Shanghai); no publication/update date displayed on these pages.

- https://www.floodsmart.gov/get-insured/renew-a-policy — annual renewal is required; NFIP does not automatically renew; declarations expiration, agent contact and mortgage/escrow payment questions. Flood causes include storms, snowmelt and nearby construction.
- https://www.floodsmart.gov/get-insured/buy-a-policy — expanded waiting-period FAQ. Usual 30-day wait; stated exceptions include qualifying mortgage transactions and coverage changes at renewal. Did not independently adjudicate exception eligibility or interpret a particular policy. Avoided expanding special map/wildfire exceptions into unsupported advice.
- https://ibhs.org/hurricanereadyhomeupgrades/ — roof-system measures, independent FORTIFIED evaluation, possible insurance incentives, installed garage-door pressure label retention, impact protection.
- https://ibhs.org/hurricanereadyhome/ — annual garage-door servicing; licensed roof assessment; drainage attachments and clearing; model-specific generator maintenance (not newly added to this guide).

## Edits

- Flood insurance guide: added annual renewal versus new purchase versus coverage changes, escrow/coverage confirmation, uncertain expiry follow-up, direct sources and FAQ. No assumed late-payment reinstatement, automatic exception or promise of continuous coverage.
- Home hardening guide: replaced a repetitive fictional label example with a completion handover. Separates installation evidence, local closeout, FORTIFIED designation and insurer decision. Added product-specific maintenance and annual IBHS checks without DIY structural instructions or promised savings.
- Updated only these two articles' modification, editorial-review and bounded source-check dates to November 13. Older claim, warning and evacuation research is explicitly retained rather than presented as newly verified.

No invented team, expert review, product testing, ROI or final 2026 season totals added. No routes, sitemap, dependencies or deployment configuration changed. No commit, push, deployment or indexing request performed.

## Validation

- Prebuild passed: 33-city data verification, 19 SVG social cards and 46 article OG records. The initial npm build then encountered sandbox loopback restrictions. Retried the same build script with `npm --ignore-scripts run build` under approved access, reusing the completed prebuild; Astro server build passed.
- `npm run check`: 228 files, 0 errors, 0 warnings, 4 hints. Initial sandboxed check could not update the shared dependency Vite cache; the approved retry passed.
- Content trust, editorial-date and storm-indexing regressions passed; `git diff --check` passed.
- Audits rerun after successful build: metadata (62 static / 127 dynamic), schema (62 / 127), FAQ (11 priority pages) and internal links (64 HTML files) passed.
- Local built Worker on localhost:8794: content audit passed 112/112 required routes and 46 blog source/asset records. An earlier invocation without a Worker base URL was incomplete and is superseded by this successful run.
- Targeted local requests to both revised guides returned HTTP 200, the new body headings and source URLs, November 13 dates, production www trailing-slash canonical, and one H1. These are local rendering checks, not evidence of deployment or a new visual-browser inspection.
- Existing six-page source research and previous visual verification remain documented in the November 12 note. No new assertion of current storm conditions or AdSense approval is made.
