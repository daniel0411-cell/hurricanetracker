# Six-page content revision - November 12, 2026

## Baseline

Fresh remote HEAD query and fetch confirmed origin default main. Detached local HEAD has no upstream and equals origin/main at 455e4a84e0e4c1bafb2f0d2759ee6ab5650684e5, ahead/behind 0/0. No tracked changes existed before this batch. Existing untracked November 11 production notes, November 12 priorities and the node_modules dependency symlink were preserved.

Production was independently identified as Worker 5e2b1614-b54d-4683-877c-03dd6273a707, 100% traffic, created November 11 at 09:30:22 UTC, with that same complete commit in its release annotation. Local edits in this batch are additional to that baseline; they are not evidence of a production release.

## Sources actually read

All checks below occurred November 12, 2026, Asia/Shanghai. Used background in-app browser searches followed by primary sources; downloaded the two directory-linked public PDFs for scoped extraction and rendering.

- https://www.nhc.noaa.gov/aboutgloss.shtml : hurricane-warning and storm-surge-warning definitions. Hurricane threshold 64 kt, usual lead time before tropical-storm-force winds, continuation for dangerously high water/waves, and surge warning coverage for locations potentially isolated by neighboring inundation. No live warning or local order verified.
- https://www.nhc.noaa.gov/archive/xgtwo/gtwo_archive.php?basin=atlc&fdays=7&current_issuance=202611120000 : actual signed Atlantic outlook, 7 PM EST November 11, equivalent to 0000 UTC November 12. Forecaster Hagen: formation not expected during the next seven days. This archive was opened successfully after earlier research found a broken text shell. It does not clear local marine or coastal hazards.
- https://www.transportation.gov/individuals/aviation-consumer-protection/refunds : last updated November 7, 2025. Read ticket cancellation/significant-change rules, replacement travel and compensation choices, and merchant-of-record responsibility. Did not publish refund-processing deadlines because the page inconsistently labels the non-credit-card interval as calendar versus business days in different sections. No booking or waiver verified.
- https://www.nhc.noaa.gov/data/tcr/index.php?season=2025&basin=atl : verified Erin and Melissa PDF links and the Melissa May 19 revision notice.
- https://www.nhc.noaa.gov/data/tcr/AL052025_Erin.pdf : read PDF pages 1-5. January 30, 2026 edition revises intensity forecast verification. Confirmed retained timeline, Duck datum and Highway 12 discussion. PDF page 4 distinguishes the apparently gust-like 179 kt dropsonde sample around 1403 UTC from the analyzed 140 kt peak at 1800 UTC and the 154 kt flight-level observation at 1639 UTC. Visually inspected rendered page 4.
- https://www.nhc.noaa.gov/data/tcr/AL132025_Melissa.pdf : read PDF pages 1-5, May 19, 2026 revision of the February 25 original. Synoptic History page 4: 165 kt peak at 1200 UTC October 28; Jamaica landfall about 1725 UTC at 160 kt near New Hope; Cuba landfall 0720 UTC October 29 at 100 kt near Chivirico. Page 5: extratropical by 1200 UTC October 31. Visually inspected rendered page 4. Did not re-audit all impact totals or verification tables.

Cruise-policy search yielded mostly secondary results. A direct Royal Caribbean FAQ attempt returned its missing-page screen. No operator-specific refund entitlement was added. Melissa 2019's existing report link and narrow year/classification comparison were retained from the November 4 check and explicitly labeled as not newly audited; its former detailed measurements were replaced by the 2025 analysis.

## Implementation

1. Real-time tracking blog: added a dated, archived example distinguishing no active cyclone, no formation expected and unavailable data. Kept the previous November 8 AL94 example explicitly historical.
2. Hurricane-warning actions blog: clarified the 36-hour reference and dangerous-water continuation without changing the immediate local-instruction priority.
3. Surge-versus-hurricane-warning blog: corrected exclusive wind/water shorthand, added isolation coverage, removed one redundant explanation section and combined repeated action advice.
4. Travel topic: replaced vague U.S. cancellation wording with the verified DOT distinction; separated airline cancellation, voluntary cancellation, vouchers and independent cruise/hotel bookings. Added a fictional booking example, direct source and bounded source-check note.
5. Erin: retained verified historical data, added aircraft measurement interpretation and a corresponding source-specific FAQ. Updated data title/description and check scope.
6. Melissa: made 2025 AL132025 the main historical record, preserved the distinct 2019 source, separated peak from landfall intensity and added year-specific FAQs. Updated data title/description and check scope.

Only four content data files changed, plus these notes. Blog dates and the three topic/storm date overrides reflect this material revision. No route logic, dependencies, sitemap truth source or AdSense configuration changed.

## Verification

- Build passed; city data 33/33 and OG assets 46/46 verified.
- Astro check: 0 errors, 0 warnings, four pre-existing hints.
- Content trust, storm indexing and content-date regression scripts passed.
- Metadata, schema, FAQ and static internal-link audits passed.
- Local built Worker content audit: 112/112 required pages and 46 blog source/asset records passed.
- Browser: all six local routes checked at 390px and 1440px; revised body markers and November 12 Article dates present, one H1 each, no horizontal overflow or broken loaded images. Visually reviewed Melissa mobile and travel desktop screenshots. Canonical retained the production www host with trailing slash.
- Local NHC requests could not verify a current feed; storm pages correctly retained the unavailable-state presentation while rendering the updated historical report. Existing template behavior replaces data-specific hero/FAQ with generic status text in this state. This batch does not change that protected route logic or claim to test the verified-active-feed rendering path.
- Initial local audit hit sandbox loopback restrictions, then route-derived upstream canonical redirects. Re-ran with approved loopback access and `--local-upstream localhost` on port 8794. Only the verified local run above was accepted; an initially redirected production view was not mistaken for the edited build.

No commit, push, deployment or search-engine notification was performed in this batch. Structural checks do not establish AdSense approval.
