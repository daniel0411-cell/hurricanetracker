# Evidence-led editorial improvements

## Scope and Baseline

Baseline: `3e919a5150d068e0b8dd2736d49335966da011f8`, fetched October 27,
2026; local and origin/main matched. Existing 17 untracked files are excluded.
Implementation was initially local only; the user subsequently authorized
commit and deployment of this batch after evaluating its content-quality value.

Three substantive article changes:

- Cone guide: place the historical Helene figure immediately after its reading
  instructions, supply intrinsic dimensions and source/full-size links, and
  decode the actual M/H/S/D legend instead of merely naming the symbols.
- Surge guide: use NHC's fictional Hurricane X Charleston map and its separate
  legend; explain thresholds, gray mask, exceedance probability and the absence
  of road-status information. A household example separates supported readings
  from unresolved building, route and shelter questions.
- Rumor verification: use a genuine historical image to test a clearly invented
  current-day claim; explain how to verify video/community posts without
  fabricating quotes, firsthand accounts or current conditions.

Presentation changes use the existing ContentFigure component. Existing blog
pages receive a native expandable contents list. The three inline-figure
articles omit the decorative cover from the body, while existing SEO image
metadata is retained. Unpositioned legacy figures remain at the end of articles.
Blog titles and spacing are sized for article reading rather than a homepage
hero. The duplicate article title is removed from the body; actual sections now
use h2 headings. Detailed source-check scope is available in a native disclosure.
Routing, redirects, data retrieval, sitemap sources and dependencies are unchanged.

Miami, Tampa and Houston receive explicit per-city content dates and the
scoped source-check dates already supported by the previous pilot. Other cities
retain their metadata fallback; no blanket freshness claim is added. These
dates do not certify live weather, shelters, routes or orders.

## Sources and Asset Provenance

Retrieved October 27, 2026:

- https://www.nhc.noaa.gov/aboutcone.shtml : cone explanation and historical
  Helene example, previously stored locally. Image label inspected: advisory 9,
  September 25, 2024, 10 AM CDT. This is not the 2026 product-change example.
- https://www.nhc.noaa.gov/surge/inundation/ : definition, legend, exclusions,
  road-reference limitation, 10-percent exceedance and static teaching examples.
  This explanation includes legacy model-version and rollout text; those
  sections are not used to assert current model versions or publication delays.
- https://www.nhc.noaa.gov/surge/inundation/images/inundation-charleston-example.jpg
  : original 3300x2550 map, labeled Hurricane X. The graphic does not state an
  original publication date. Local JPEG was resized to 1650x1275, quality 85,
  using sips; 4,382,533 bytes became 820,631 bytes. No map labels were edited.
  Both the source page and original high-resolution map remain linked.
- https://www.nhc.noaa.gov/surge/inundation/images/legend_surge_bins.png : unchanged
  580x202 legend, 9,953 bytes. Blue >1 ft, yellow >3 ft, orange >6 ft, red >9 ft.
- https://www.nhc.noaa.gov/TCvideos.shtml : NHC catalog contains Track Forecast
  Cone and Storm Surge Fast Draw entries and their YouTube iframe IDs. Links in
  this pilot go to the official catalog, not an unverified player.

Direct YouTube oEmbed requests for the catalog-linked IDs `bBa9bVYKLP0` and
`9SiGSvNP-F0` failed with curl 35, LibreSSL SSL_ERROR_SYSCALL. Playback,
transcript, publication date and present availability were not verified.
Consequently no YouTube embed, transcript quotation, thumbnail or VideoObject
claim is added. No Reddit thread was inspected or quoted. Reddit appears only
in explicit source-evaluation instructions and hypothetical examples.

## Editorial Standard

Every teaching image should answer a named question, appear beside the relevant
explanation, retain legible labels, identify its source and distinguish an
observed event, historical forecast, fictional scenario and current product.
An access/check date is not the source's original publication date.

Official external materials supplement the written answer; they do not replace
it. Community material can reveal questions or experiences, not verify current
warnings, evacuation orders or availability. Never invent platform quotes,
testimonials, timestamps, video transcripts or a claim to have watched a video.

## Verification

Run the extended `scripts/content-pilot-regression.mjs` to check all inline figure
ownership, source scopes, dimensions, local assets and the three city dates.
With `CONTENT_AUDIT_BASE_URL`, it covers 11 rendered routes from both pilots.
Build and shared-template rendering require broader checks than the three
substantively edited articles; record actual results below after completion.

Completed after the final code and asset changes:

- `npm run build`: passed, including the 33-city data check and OG generation.
- `npm run check`: 0 errors, 0 warnings; 4 existing hints in unchanged files.
- `npm run links:audit`: passed, 64 HTML files.
- `npm run media:audit`: passed, 46 blog records and 62 static pages.
- Extended pilot regression on the built local Worker: 11 rendered routes passed.
- `npm run content:audit` on that Worker: 94/94 required pages passed.
- Headless Chrome checked all 46 blogs for HTTP 200, exact title/canonical,
  JSON-LD presence, contents link counts, unchanged figure counts, inline figure
  placement and decorative-cover suppression only on the three intended pages.
- At 1440x1000 and 390x844, the three article pilots passed overflow, keyboard
  disclosure/anchor navigation, source-date visibility, image decoding and
  intrinsic aspect-ratio checks. Miami, Tampa and Houston dates and Article
  schema metadata passed; Orlando retained the previous fallback.
- Inspected screenshots of final desktop/mobile reading layouts, map/legend,
  cone figure and city source scope. Full-size and original source links are
  present beneath the figures; the separate legend is readable on mobile.
- `git diff --check`: passed.

Local preview: `http://127.0.0.1:8796/`. These checks do not assert production
content, rankings, traffic improvement or a full editorial audit of all 46
articles. No commit, push, deploy or search-engine submission had been performed
at the local verification stage.

## Release Review

The release includes six modified source/test files, two official teaching-image
assets and this record. Original drafts, checklist/research files, session data
and the unrelated old state-tools regression remain excluded. No dependencies,
live storm facts, core routing logic, canonical rules or sitemap sources change.
Deployment uses the existing Worker configuration directly to avoid the URL
submission side effects of the package's deploy script. The deployed version
message will identify the exact Git commit; production content and version
metadata must be checked after publication.
