# Content quality fixes - 2026-10-24

## Baseline and scope

- Baseline: `48ee6430d4727f2061f4d01cddb131a18b1fcad5`, main tracking origin/main.
- Implements the actionable content and shared-template fixes from `content-quality-audit-2026-10-24.md` after the user authorized fixes, commit, push, and deployment.
- Existing URLs, sitemap, dependencies, and deployment configuration are preserved.

## Changes

| Audit finding | Implemented change |
| --- | --- |
| Incorrect storm archive facts and unsupported final records | Corrected Bertha/Cristobal peak units, historical comparisons and final advisory times/status. Removed unsupported casualty/damage totals. Distinguished provisional season summaries, observations and forecasts. |
| Misleading meteorology explanations | Corrected 2026 operational versus experimental cone products, Sally's category, the construction of the official cone and wind-versus-surge comparisons. |
| Insurance overclaims | Qualified NFIP loss avoidance, receipts, waiting-period exceptions, Proof of Loss extensions, deductibles and assistance limits. Removed unsupported ranking and claim-processing promises. |
| Thin or generic answers | Added a dated NOAA 2025 outlook, warning timing, water calculations, family/evacuation records and concrete task steps across short guides. Reduced generic recommendations and removed fallback FAQ padding. |
| Local keyword strings and unrelated storm links | Replaced city search phrases with official verification steps; replaced fixed storm promotion in local preparedness pages with local/season resources. |
| Missing article references and overstated review | Added topical references to all 46 posts, clickable inline URLs, scoped correction records for selected high-risk articles and honest editorial responsibility on About. |
| Misattributed imagery | Removed the global NOAA/NASA public-domain claim. Added illustration captions and explicit AI/historical-image context where applicable. |
| ZIP precision overclaim | Described the surge tool as representative-point screening in its introduction, form, results and FAQ; clarified no-alert and timestamp limitations. |
| Missing social images | Centralized per-slug PNG mapping, generated 23 missing cards and verified all 46 article images are 1200 x 630 PNGs. Existing valid covers are retained. |
| Silently skipped SSR checks | Content audit now requires all 91 target pages, requests missing SSR output from an explicit base URL and fails on missing pages/references/assets. Removed word-padding and marketing-snippet requirements. |

## Primary-source observations

Sources were checked on 2026-10-24 unless otherwise noted. These records describe the specific corrections, not specialist certification of every sentence.

- NOAA outlook, published 2025-05-22: https://www.noaa.gov/news-release/noaa-predicts-above-normal-2025-atlantic-hurricane-season
- NOAA cone announcement, published 2026-03-24: https://www.noaa.gov/news-release/national-hurricane-center-to-issue-new-forecast-cone-graphics-for-2026-hurricane-season
- NHC 2026 season summary (displayed update 2026-10-23): https://www.nhc.noaa.gov/data/tcr/index.php?season=2026&basin=atl
- NHC historical summaries: https://www.nhc.noaa.gov/data/tcr/index.php?season=2008&basin=atl and https://www.nhc.noaa.gov/data/tcr/index.php?season=2020&basin=atl
- Bertha final public advisory 19, 2026-07-24 0300 UTC: https://www.nhc.noaa.gov/archive/2026/al02/al022026.public.019.shtml
- Cristobal final public advisory 5, 2026-08-13 1500 UTC: https://www.nhc.noaa.gov/archive/2026/al03/al032026.public.005.shtml
- NFIP loss avoidance: https://agents.floodsmart.gov/topics/flood-loss-avoidance
- Flood claim procedure: https://www.floodsmart.gov/how-do-i-start-my-flood-claim
- State insurance regulator directory (replaces a verified broken NAIC URL): https://content.naic.org/state-insurance-departments

Some official domains returned HTTP 403 or connection failures to automated reachability checks. Browser-readable sources supported the corrections above. The AOML FAQ replacement was located in search results, but its content could not be read because the domain closed the connection; it is not recorded as fact-verified here.

## Validation

- Build passed; Astro check: 0 errors, 0 warnings, 4 existing hints.
- Content audit: initial 91/91 target pages passed; final 94/94 coverage passed after adding About and both corrected storm archives, with all 46 rendered article references and OG paths still required.
- Media audit: all 46 article social images and existing static page checks passed.
- Internal links, schema and metadata audit checks passed within their reported static/source coverage.
- Desktop browser inspection covered a corrected blog and the surge tool. Mobile viewport inspection was not performed in this run.

Run the SSR audit against the built worker, preserving the canonical upstream host to avoid middleware redirects:

```sh
WRANGLER_LOG_PATH=.wrangler/logs npx wrangler dev --config wrangler.deploy.toml --port 8794 --local-upstream www.hurricanetracker.cc --log-level warn
CONTENT_AUDIT_BASE_URL=http://127.0.0.1:8794 npm run content:audit
```

## Remaining editorial work

Production read-through also found repeated legacy wording in Cristobal's FAQ and forecast explanation after the first deployment. The follow-up correction removes unsupported claims of verified dissipation, forecast accuracy, environmental specifics and disturbance naming implications. Bertha's forecast explanation now distinguishes operational advisories from formal verification as well.

- References on all posts do not establish a full sentence-by-sentence review of all 46 articles or all archive timeline claims. Only explicitly scoped correction records claim that work.
- Local pages still merit individual expansion with verified local procedures and clearer differentiation of preparedness versus live tracking tasks. This change removes shared quality defects; it does not claim every local page meets the project's original-content length target.
- Overlapping topic consolidation, redirects and sitemap changes require a separate route decision; no routes were merged here.
- Real, annotated official product diagrams would improve educational value beyond the corrected captions and social cards.
- Insurance and medical material remains general navigation and preparation guidance, not individualized professional advice. These checks cannot establish or guarantee AdSense approval.
