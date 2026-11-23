# Climate articles and AdSense resubmission assessment — 2026-11-22

## Version baseline

Read AGENTS.md in full before work. Detached HEAD, no upstream. Fresh origin default-branch discovery and fetch confirmed main. HEAD and origin/main were both `e91619f97e22504c24b394cb082a0e06ffd8a411`, 0 ahead / 0 behind. No tracked modifications at the start; existing untracked research notes and node_modules link preserved. This assessment uses that baseline plus the three article edits in src/data/blog.ts.

## Content changes

1. `how-el-nino-affects-hurricanes`: compare ENSO assessments, ENSO forecasts, seasonal outlooks and storm/local warning products by the actual question each answers. Consolidate repeated preparation cautions; remove the figure duplicating the hero. Retain the distinction between historical imagery and current observations.
2. `2025-atlantic-hurricane-season-outlook`: consolidate retained May forecast probabilities, nested count ranges and confidence into one table. Add a clearly fictional one-storm counting example. Preserve original publication date, explicit archive labeling, May 22 release date and the October 24 correction history. Do not invent final totals or forecast-skill results.
3. `hurricane-vs-typhoon-vs-cyclone`: replace the repeated terminology bullets with a regional comparison table; replace the unhelpful absence-of-basin-ranking discussion with a hypothetical two-bulletin comparison. Preserve distinctions between sustained wind, gusts, averaging periods, valid times and local hazards.

These are editorial improvements, not new source verification. Background browser creation failed with “Local browser access is unavailable for this chat.” No hosted-search workaround used. Existing primary-source URLs are retained; no sourceCheck added or refreshed. Inventory remains 46 articles, 43 with scoped sourceCheck metadata. That count is not a Google requirement or a quality score.

Retained references, **not newly read this session**:

- https://www.climate.gov/enso
- https://www.cpc.ncep.noaa.gov/products/outlooks/hurricane.shtml
- https://www.noaa.gov/news-release/noaa-predicts-above-normal-2025-atlantic-hurricane-season
- https://www.nhc.noaa.gov/data/tcr/index.php?season=2025&basin=atl
- https://oceanservice.noaa.gov/facts/cyclone.html

Further research should reread the exact NOAA historical release and mechanism/terminology explanations when browser access returns. Do not label an editorial review date as a new scientific fact-check date.

## Current production, independently checked

Read-only Cloudflare deployments list confirms 100% traffic on Worker version `33cbacbc-4f2d-4619-af83-257101ee9f1c`, created `2026-11-21T13:28:04.182Z`. Separate versions view confirms message `Git e91619f97e22504c24b394cb082a0e06ffd8a411: household guides and alert tools`. Production therefore matches the pre-edit baseline, not this batch's working-tree changes.

Site: https://www.hurricanetracker.cc/

Node fetch with Mozilla/5.0 from this machine on November 22:

- Homepage, /about/, /contact/, /privacy/, /terms/ and all three edited article URLs: HTTP 200. Article titles match their intended subjects, including the 2025 archive label.
- https://www.hurricanetracker.cc/ads.txt: HTTP 200, text/plain, exact record `google.com, pub-1321310404115919, DIRECT, f08c47fec0942fa0`.
- https://hurricanetracker.cc/ads.txt: HTTP 301 directly to that www endpoint.
- https://www.hurricanetracker.cc/robots.txt: HTTP 200; Allow: /; Disallow: /api/ and /admin/; sitemap references the canonical www sitemap-index.xml.

These are local public-access observations. They do not establish real Google network access, current AdSense dashboard status, publisher ownership, security-event history or the actual reason for rejection. No new Cloudflare security events were read. Prior Python-UA 403 behavior remains an unresolved client-specific observation, not evidence that Google was blocked or a confirmed rejection cause.

Logs: /tmp/hurricane-readiness-deployments-20261122.log, /tmp/hurricane-readiness-version-20261122.log and /tmp/hurricane-readiness-public-20261122.json. These temporary files may be cleared; key evidence is preserved above.

## When to resubmit

Editorial recommendation: after this batch is deployed and its production content is verified, the site can be considered for resubmission without adding another arbitrary quota of articles. This is a recommendation based on the observed fixes and public checks, not assurance of approval or a complete policy certification.

Before pressing request review, read the actual current account/site message and any allowed resubmission date. If the account imposes a waiting period or identifies an unresolved requirement, follow that requirement. This session cannot confirm whether submission is permitted today because the signed-in dashboard was unavailable. No fixed 7-day or 14-day waiting period was newly verified, and no calendar date is promised.

The highest-value remaining actions are:

- Reconcile the current account message with what was actually fixed. Do not infer the exact rejection cause from a generic email.
- Verify this batch on production after an authorized deployment; do not ask Google to review changes that only exist locally.
- When signed-in access is available, inspect actual crawl/security evidence and current ads.txt status if they remain problematic. A successful request from this machine does not settle those questions.
- Continue source-specific research and improve the article template's bulky correction presentation as a separate scoped task; neither a perfect metadata count nor an additional batch of articles is a substitute for useful content.

The previous official AdSense guidance reference retained for context is https://support.google.com/adsense/answer/7299563?hl=zh-Hans (read in the November 21 work, not reread today). No new claim about an official cooldown or approval timeline is derived from it.

## Validation and release status

Full npm run build passed, including city-data verification and OG generation. Semantic comparison confirms exactly three existing articles changed, all other blog objects unchanged, original publication dates and source lists preserved, no new sourceCheck claim, and table rows matching their column counts. git diff --check passed. npm run check passed: 0 errors, 0 warnings and 4 existing hints across 235 files. Logs: /tmp/hurricane-climate-build-20261122.log and /tmp/hurricane-climate-check-20261122.log. Browser layout inspection was unavailable; no mobile or interactive browser verification is claimed.

No commit, push, deployment, security-setting change or AdSense resubmission in this batch.
