# Search image audit — 2026-11-27

## Baseline and observations

- Repository: detached HEAD cbcd45998b698ae32a2b7281c2a71365b748ef99; no upstream. Origin default main freshly queried/fetched; HEAD...origin/main 0/0. Existing untracked notes and node_modules link preserved.
- Production https://www.hurricanetracker.cc/ independently confirmed in Wrangler deployment history: version 69b62aaa-82fd-43ef-9353-d0b808637192, deployed November 24 at 07:33:01 UTC, Git cbcd459.
- Astro SSR + Cloudflare Workers; src/data/blog.ts is the 46-article production source. Central SEO component, ContentFigure, existing gen-og prebuild and selective commit/manual deploy flow reviewed. No dependency, sitemap, weather logic or deployment configuration changes required.
- Confirmed: max-image-preview:large already present on normal pages; robots.txt does not block /images/. OG/Twitter share a URL, while blogs previously always selected generated cards instead of their useful body teaching figures. Some card alt text described a different hero image. Hero dimensions were uniformly declared 1600×900 even for external images of other sizes. Explicit ogImage was always assumed 1200×630. Existing media audit chiefly inspects static output and cannot fully exercise SSR blogs.
- Existing body assets already include sourced NHC/NWS/FEMA/CDC teaching images, historical dates/limits and original educational diagrams with retained provenance. Many legacy illustrated covers/cards are less useful as search representatives. This is an editorial gap, not proof of a Google indexing failure.
- 404 previously had default index meta despite its error purpose; now explicitly noindex. Existing design-preview HTTP noindex,nofollow remains. No broader indexing settings changed.
- No evidence in this task establishes why a particular Google result lacked an image, that Googlebot successfully fetched these files, or that CTR will change. Public HTTP accessibility and simulated clients are not proof of an actual Google crawl.

## Changes

11 reviewed page representatives (7 articles, 4 topic pages) now use their useful body image for OG/Twitter, WebPage.primaryImageOfPage and applicable Article/BlogPosting image. All use real intrinsic metadata. Source/copyright-use records are in src/data/representativeImages.json; corresponding body captions retain dates, source links and limitations. No article dates were refreshed.

Compressed local derivatives retain pixel dimensions, labels and framing; original resources remain available: Michael radar 1,570,220 → 353,212 bytes (975×564); Hurricane X map 820,631 → 693,489 bytes (1650×1275). Exact byte values are in generated imageMetadata.json if platform encoding differs. Both require visual label review; JPEG encoding is lossy and is not described as unchanged pixels.

The build measures 176 local assets, verifies representative provenance fields and budgets, and checks all 46 blog figure sets. Actual-server checks cover registered body/meta/schema agreement plus all 46 blog layouts. See content-image-publishing-standard.md for release commands and human checks.

## Representative pages

- /blog/hurricane-eyewall-replacement-cycle-explained/ — /images/blog/external/nws-michael-2018-radar-eye.jpg
- /blog/official-hurricane-information-sources-rumor-verification/ — /images/blog/external/nhc-cone-helene-2024-example.png
- /blog/hurricane-radar-vs-satellite/ — /images/blog/external/nws-ian-2022-radar-visible-1301z.jpg
- /blog/how-to-read-the-hurricane-cone-of-uncertainty/ — /images/blog/external/nhc-cone-helene-2024-example.png
- /blog/hurricane-storm-surge-forecasting/ — /images/blog/external/nhc-surge-charleston-teaching-example-optimized.jpg
- /blog/hurricane-flood-zone-map-fema-understanding/ — /images/blog/external/fema-flood-map-tutorial-zone-ae.jpg
- /blog/hurricane-rapid-intensification/ — /images/guides/michael-24h-desktop.webp
- /hurricane-tracker/why-hurricane-forecasts-change/ — /images/guides/irma-valid-time-desktop.webp
- /hurricane-tracker/spaghetti-models/ — /images/guides/joaquin-2015/reading-annotated.webp
- /hurricane-tracker/what-does-a-hurricane-look-like/ — /images/blog/external/nws-michael-2018-radar-eye.jpg
- /hurricane-tracker/storm-surge-map/ — /images/blog/external/nhc-surge-charleston-teaching-example-optimized.jpg

## Remaining image gaps and replacement plan

39 articles retain legacy share-card fallback; this is not 39 missing body images. Some have useful inline visuals already. Do not auto-promote an unverified cover or create a title poster to close the list.

Priority actions:

1. /blog/how-to-use-hurricane-tracker-live-tools/ and /blog/real-time-hurricane-tracking-2026/: capture real public tracker/radar UI when it illustrates the actual steps; retain observation date, feed state and a clear historical/screenshot caption. Do not fabricate an active storm or present a saved state as live.
2. /blog/how-el-nino-affects-hurricanes/: recover exact original NOAA/NASA source pages, date and legend for existing external images before promoting one; current local ENSO PNG is about 1.88 MB. Optimize/replace that asset and place each retained figure next to its explanation. No current climate phase is inferred.
3. /blog/hurricane-generator-safety-carbon-monoxide/: CDC 326×276 figure remains useful inline and is now capped at its real width. Obtain a genuinely higher-resolution authorized original or create a sourced explanatory layout if needed; do not enlarge it to 1200px.
4. Preparedness, kit, documents and insurance pages: use original checklists/process diagrams only where a visual adds a decision or operation; otherwise a documented original household photo. Screenshots of a real official lookup can help zone/map guides, with private location data removed. No fake insurance paperwork, benefit amounts or results.
5. Home, live tracker, state/city pages and tools: retain current fallbacks until page-specific useful captures/diagrams and captions are reviewed. No claim that their generic card is an ideal search thumbnail.
6. Existing label-dense historical maps still need full-size reading on a narrow phone; the adjacent prose gives the reading steps. Do not crop away date/legend to make a more dramatic thumbnail. A future detail panel must preserve source meaning and be explicitly identified as a crop.

Article inventory awaiting representative review:

- /blog/how-el-nino-affects-hurricanes/
- /blog/2025-atlantic-hurricane-season-outlook/
- /blog/how-to-prepare-your-home-for-a-hurricane/
- /blog/what-hurricane-watch-warning-means/
- /blog/hurricane-emergency-kit-checklist/
- /blog/hurricane-evacuation-checklist/
- /blog/what-to-do-during-a-hurricane-warning/
- /blog/hurricane-power-outage-food-medicine-plan/
- /blog/hurricane-documents-insurance-checklist/
- /blog/hurricane-preparation-timeline-72-48-24-hours/
- /blog/how-far-is-a-hurricane-from-me/
- /blog/storm-surge-warning-vs-hurricane-warning/
- /blog/hurricane-family-communication-plan/
- /blog/how-to-check-your-hurricane-evacuation-zone/
- /blog/nws-hurricane-alert-meanings/
- /blog/real-time-hurricane-tracking-2026/
- /blog/hurricane-insurance-deductibles-guide/
- /blog/hurricane-tracking-after-landfall-inland-flooding-tornadoes/
- /blog/saffir-simpson-hurricane-wind-scale-explained/
- /blog/how-to-read-hurricane-spaghetti-models/
- /blog/hurricane-vs-typhoon-vs-cyclone/
- /blog/below-normal-hurricane-season-2026-real-time-tracker/
- /blog/what-to-do-after-a-hurricane/
- /blog/hurricane-pet-safety/
- /blog/hurricane-home-preparedness-room-by-room-checklist/
- /blog/hurricane-safety-seniors-children-disability/
- /blog/hurricane-insurance-claim-guide-documentation/
- /blog/hurricane-home-hardening-checklist/
- /blog/hurricane-medical-needs-registry-preparedness/
- /blog/hurricane-flood-insurance-guide-nfip/
- /blog/hurricane-generator-safety-carbon-monoxide/
- /blog/hurricane-additional-living-expenses-ale-coverage/
- /blog/how-to-use-hurricane-tracker-live-tools/
- /blog/hurricane-mold-prevention-after-flood/
- /blog/hurricane-small-business-preparedness-plan/
- /blog/apartment-hurricane-preparedness-renters-checklist/
- /blog/hurricane-school-daycare-emergency-plan/
- /blog/hurricane-contractor-scams-insurance-claim/
- /blog/hurricane-water-storage-purification-emergency/

## Primary guidance read

Observed November 27, 2026 through the in-app browser after search-engine discovery:

- https://developers.google.com/search/docs/appearance/google-images (page footer March 3, 2026): standard img src, responsive fallback, relevant nearby text, descriptive alt, preferred image metadata; preview selection is automatic. Avoid generic logos/text cards as preferred images.
- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#max-image-preview (footer March 25, 2026): large permits larger previews; restrictions combine and noimageindex differs from preview size.
- https://www.nhc.noaa.gov/aboutcone.shtml: verified historical Helene example link /images/cone_5day_with_ww.png, alongside 2026 cone-radius explanation; the historical image does not establish current conditions.
- Retained project provenance: docs/teaching-media-integration-2026-11-05.md and docs/content-media-provenance-2026-11-06.md. Other retained source materials were inspected locally; they are not claimed as freshly downloaded or comprehensively re-licensed today.

## Validation and release

- Local build passed (22.58s Astro compilation after existing OG prebuild). Existing warning: public/robots.txt shadows src/pages/robots.txt.ts; actual public robots file is verified. No new robots source added.
- Local rendered acceptance passed: 11 representatives, all 46 blog image layouts, 8 distinct representative resources; correct MIME/intrinsic dimensions/HTTP 200, no blocking image header, 404 noindex, preview noindex,nofollow.
- Browser local viewports actually measured: desktop 1440×1000 (client/scroll width 1425/1425), phone 390×844 (375/375), narrow phone 360×800 (345/345). The 15px difference is the browser scrollbar, not a claim of a 390px content area.
- Michael teaching figure switches from 1600×1000 desktop asset to the 720×1480 mobile asset; displayed 604×377 desktop and 339×697 on 390px phone. CDC image displays at 326×276 on desktop/390px phone and 309×262 at 360px; no upscaling. Historical cone displays 339×278 from 897×736. Examined figures loaded successfully and had no horizontal overflow in these pages. Dense map labels still require full-size view; reading steps remain in prose.
- Compressed Michael and Hurricane X images visually inspected at native dimensions; original labels/legends and framing remain legible. No source pixels or numerical values were invented.
- Final Astro check passed: 0 errors, 0 warnings, 4 existing hints. Existing media audit passed for 46 articles and 62 static sitemap HTML files. Production verification is recorded in the release receipt after deployment.
