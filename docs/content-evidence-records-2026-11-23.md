# Evidence records: three existing articles — 2026-11-23

## Version and scope

AGENTS.md read in full. Detached HEAD, no upstream. Fresh origin default-branch discovery and fetch confirmed main. HEAD and origin/main both ccb302e38bb28c890dc797481d5a1656a86efc48, 0 ahead / 0 behind. No tracked changes at start; unrelated untracked notes and node_modules preserved. This batch changes only three existing blog records in src/data/blog.ts, without new routes, downloads, dependencies or configuration changes.

## Research observations

Background in-app browser search followed by direct primary-source reading on November 23, 2026. Search snippets and AI summaries were not evidence.

- https://www.floodsmart.gov/claims-checklist — read conversation logs, documentation, insurer submission address, estimate corrections and record retention. No visible publication/update date found. The page describes NFIP-specific documentation and appeal periods; this batch does not generalize these to other policies or invent a deadline. No form was submitted and no actual policy, receipt, proof of loss or claim was checked. Earlier Start a Claim and NAIC sources were not reread.
- https://ibhs.org/hurricanereadyhomeupgrades/ — read roof-system measures and independent evaluation, garage-door labels and local requirements, and the distinction between an upgrade and an insurance incentive. No visible publication/update date found. No property, contractor, product or quote assessed.
- https://ibhs.org/hurricanereadyhome/ — read professional roof inspection, drainage, annual garage-door service and separate upgrade planning. No visible publication/update date found. No inspection, technical installation or maintenance performed.
- https://msc.fema.gov/portal/home — browser reported ERR_CONNECTION_CLOSED. A subsequent attempt at https://www.fema.gov/flood-maps/tutorials did not yield readable content; the tab surfaced the prior connection-error document and navigation-policy error. Neither source was successfully reread. The FEMA article retains its October 27 sourceCheck unchanged; no current map UI, effective panel, letter or property status is newly verified. Its new exercise is an editorial illustration using existing research, not a current FEMA lookup.

## Article changes

1. hurricane-insurance-claim-guide-documentation: replace the shorter generic claim-number exercise with a four-step fictional file record: preparation, transmission, response requesting missing evidence, and corrected submission. Separate file version and receipt from acceptance, proof-of-loss compliance and coverage. Preserve earlier versions, explain corrections and maintain separate policy trails. Consolidate repeated claim-log bullets. NFIP sourceCheck scoped to the page actually reread.
2. hurricane-flood-zone-map-fema-understanding: replace the generic record bullets with an older-versus-later comparison showing an unchanged effective panel, a separate preliminary product and an unconfirmed letter. Panel A/B are explicit placeholders. End with an exact enquiry to the floodplain administrator; preserve the separate evacuation record. No property conclusion or refreshed FEMA sourceCheck.
3. hurricane-home-hardening-checklist: replace the generic closing action paragraph with four fictional enquiry rows: unexplained stain, missing door label, undocumented annual service and vague future reroofing scope. Identify the relevant professional and evidence needed before a purchase. No universal priority order, cost, safe delay, discount or ROI invented.

These are editorial exercises, not official forms or new professional determinations. Existing publication dates, images, source URLs and FAQs retained. Only modified dates and accurately scoped review metadata updated.

## Validation

Semantic comparison with /tmp/hurricane-blog-before-records-20261123.ts confirms all 46 records parse, exactly the three intended objects changed, original publication dates preserved, every table row matches its column count and FEMA sourceCheck is identical to the prior version. No references to the three replaced section anchors found in src or public text files. Existing EditorialTable provides caption, column/row headers and keyboard-focusable horizontal scrolling; no component changes made. No visual browser layout test claimed.

npm run check passed: 0 errors, 0 warnings, 4 existing hints across 235 files. npm run build passed, including verification of 33 cities across 9 coastal states, OG generation and the complete server build. git diff --check passed. Logs: /tmp/hurricane-records-check-20261123.log and /tmp/hurricane-records-build-20261123.log.

No commit, push, deployment, security-setting change or AdSense action in this batch. The prior six-article production release remains separately documented in content-six-release-and-next-value-2026-11-23.md; this document does not establish a fresh production observation.

## Continuing authorization

On November 23 the user explicitly instructed that completed, validated changes should be committed and deployed directly in future work. This authorizes routine commit, push and deployment after the required version and validation checks; it does not authorize discarding other work or prohibited configuration/route changes. The three-article batch above is now being released under that instruction.

## Completed release

The earlier no-release statement describes the pre-release checkpoint. Subsequently committed and pushed as 1cf90a47c2a31d33d4171c2bf10a7832c025b9a1. Production Worker e5065a67-8ce6-4b26-b49b-b8e92e5bfd4b received 100% traffic at 2026-11-23T08:29:11.850Z, independently confirmed through deployments list and versions view with the full Git message. All three live article markers, canonical and JSON-LD were verified over HTTP 200. Homepage and ads.txt also returned 200; expected pub-1321310404115919 was present. See content-ten-opportunities-2026-11-23.md for the next ten identified editorial opportunities and complete scope boundaries.
