# Radar and flood-map reading examples

## Scope

Baseline: `d60ab5c80972eb61ba2de7ea2f1e0ce77c49c01b`, fresh fetch on
October 27, 2026. Main and origin/main matched, ahead/behind 0/0.
The 17 original untracked files are excluded. Two existing article records,
three derived official images and the existing regression script are changed;
no routes, templates, dependencies, sitemap or live-data logic changes.
Initially local implementation only; the user subsequently explicitly authorized
commit and deployment of this batch.

## Sources and image provenance

Retrieved October 27, 2026:

- https://www.weather.gov/ilm/HurricaneIan : NWS Wilmington's September 2022
  Ian event summary identifies the visible satellite/radar animation and date.
- https://www.weather.gov/images/ilm/climate/Ian/IanVIS_anim.gif : original
  737x485, 100-frame animation, about 21 MB. Frame 0 reads 13:01Z 30-Sep;
  frame 50 reads 17:11Z 30-Sep. Extracted without cropping, labels or overlays
  added; JPEG quality 88. These are historical composite views, not independent
  perfectly synchronized radar/satellite scans. Source legend text is partly
  clipped; no numerical color interpretation is claimed. The original large
  animation is linked, not automatically downloaded or animated on the page.
- https://www.weather.gov/radarfaq : reflectivity versus velocity definitions.
- https://www.fema.gov/flood-maps/tutorials : links the official tutorial below.
- https://www.fema.gov/sites/default/files/documents/how-to-read-flood-insurance-rate-map-tutorial.pdf
  : January 2022 How to Read a Flood Map, 21 PDF pages. PDF page 12 (printed
  slide 11) rendered at 1600x1200, cropped to its map detail at x590/y260,
  940x716, then JPEG quality 90. Approximate pin, all three numbered arrows,
  map identifiers, date field and Zone AE retained; surrounding slide prose
  and footer omitted. Attribution and original PDF link are in the caption.
  Small screenshot date is not transcribed or guessed.
  Earlier slides define BFE, SFHA, map changes and the qualified federal
  insurance-purchase context. The image is not a current effective map or an
  address determination. Current viewer navigation can differ from this tutorial.

The article adds a private lookup-record checklist, distinguishes current map
checks from the teaching exercise, and does not manufacture a property result,
flood depth, safe travel time or policy quote. Map elevations must not be read
as depth above ground; unresolved building-specific questions go to qualified
official/professional sources. Access dates are not product dates.

An exploratory https://www.weather.gov/chs/HurricaneIan returned HTTP 404;
it is not used. The working Wilmington summary is the cited event source.
PDF rendering logged fontconfig cache warnings but completed; rendered source
slides and the derived article images require visual inspection. HTML/PDF
text extraction used MarkItDown; visual checks use the original products.

## Verification

Completed after the final image crop and content changes:

- `npm run build`: passed. One restricted-sandbox attempt failed at local
  SSR prerender binding (`listen EPERM 127.0.0.1`); rerun with local-port
  permission succeeded. No configuration change was needed.
- `npm run check`: 0 errors, 0 warnings, 4 existing hints in unchanged files.
- `npm run links:audit`: 64 static HTML files passed.
- `npm run media:audit`: 46 blog records and 62 static pages passed.
- Extended pilot regression against the final built local Worker: 12 routes passed.
- `npm run content:audit`: 94/94 required pages and 46 source/asset records passed.
- Chrome at 1440x1000 and 390x844: both articles returned local HTTP 200;
  no production redirect, horizontal overflow or decorative body hero;
  correct figure counts, successful image decoding, exact intrinsic dimensions,
  source/full-size links and functioning contents disclosures. Initial checks
  also confirmed the unchanged production canonical URLs.
- Inspected official source images and final desktop/mobile screenshots. The
  FEMA slide was cropped after the first mobile review to enlarge the map detail.
- Body text, excluding shared layout/FAQ: radar 944 words, FEMA 997 words.
- `git diff --check`: passed.

The deploy config's default local-upstream host initially caused canonical-host
redirects; those failed checks were not counted as successes. The final local
Worker explicitly uses `--local-upstream localhost`, without editing the config.
Local preview: http://127.0.0.1:8798/ . The live feed logged an upstream network
failure while unrelated pages were checked; this batch does not certify live
feed health or current weather. Structural checks cannot certify individual
insurance obligations, rankings or traffic. At the local verification stage, no
commit, push, deployment or indexing request had been performed. All 17 original
untracked files were preserved. The authorized release uses Wrangler directly
with the exact Git commit in its version message, without indexing submissions.
