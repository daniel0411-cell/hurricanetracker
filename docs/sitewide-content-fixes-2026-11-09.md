# Sitewide content corrections - November 9, 2026

## Baseline and scope

- Baseline: `a1e7d1edd6e030f9ce87e95c5d37a27d417cc8e9`, main tracking origin/main, freshly fetched and equal before implementation.
- User authorized corrections, commit, push and production deployment following the sitewide audit.
- Corrected Potential Tropical Cyclone advisory timing and development illustration; removed unsupported next-name inference.
- Reconciled city guide editorial dates across visible content, metadata, Article schema and sitemap without changing the route inventory.
- Deepened Gulf Shores and Norfolk guides using their distinct official evacuation and assistance processes.
- Added category-specific wind damage descriptions and dated NOAA seasonal outlook figures, with limits on interpretation.
- Matched newsletter/privacy disclosures to stored fields and retention; corrected unsafe offline evacuation and shelter instructions.
- Refresh offline guidance and the corrected diagram on service worker update; preserve alert-monitor state and unrelated caches during activation.

## Primary sources checked

Observation date: November 9, 2026. Local resource pages and NHC scale did not display a revision date in the checked sections.

- https://www.nhc.noaa.gov/aboutgloss.shtml - Potential Tropical Cyclone and the 72-hour land threat criterion.
- https://www.nhc.noaa.gov/aboutsshws.php - category thresholds and potential wind damage.
- https://www.cpc.ncep.noaa.gov/products/outlooks/hurricane.shtml - issued August 6, 2026; 75% below-normal, 20% near-normal, 5% above-normal. Whole-season 70%-probability ranges: 7-13 named storms, 2-6 hurricanes, 0-2 major hurricanes; named count includes two already recorded at issuance.
- https://www.norfolk.gov/659/Evacuation-Information - A/B/C zones, CARES contact, official evacuation instructions and Norfolk Alert.
- https://baldwincountyal.gov/services/ema/evacuation-information/evacuation-zones - location-based zones and planning scenarios versus actual orders.
- https://baldwincountyal.gov/services/ema/evacuation-information - evacuation and road resources.
- https://baldwincountyal.gov/services/ema/shelters/transportation-to-shelters - BRATS eligibility, activation and advance arrangements.

## Verification and limits

- Production build passed before final offline/cache adjustments; release build will validate the final committed version again.
- Astro check: zero errors, zero warnings, four existing hints.
- Metadata and schema audits: 62 static and 127 dynamic pages passed; internal links audit: 64 generated HTML files passed.
- Date regression script: 55 local pages agree; later page revisions survive earlier template revisions and feed refreshes do not become editorial revisions.
- Service worker lifecycle simulation: offline and diagram requests bypass HTTP cache; activation removes obsolete runtime caches while retaining monitor state and unrelated caches.
- Browser checks covered corrected pages, desktop layout, mobile local guides, categories and newsletter, and the corrected diagram.
- No newsletter signup was submitted. Delivery and unsubscribe processing were not tested end to end.
- Two local guides were deepened in this batch; remaining local pages still need gradual individual source-based improvements. This release does not guarantee AdSense approval.

Deployment identifiers and final verification are recorded separately after publication.
