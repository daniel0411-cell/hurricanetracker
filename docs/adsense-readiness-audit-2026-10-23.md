# AdSense Readiness Audit - 2026-10-23

## Scope and version

- Production: https://www.hurricanetracker.cc/
- Branch/upstream: `main` / `origin/main`; remote default branch confirmed as `main`.
- Remote: `https://github.com/daniel0411-cell/hurricanetracker.git`.
- Fetched baseline: `62e61bbdeefef09dab49426eaf0872b52e3f5dbf`; HEAD and origin/main identical, divergence 0/0.
- Independently verified Cloudflare production deployment: `1a8d044a-5267-4be4-81bd-260c75acfe03`, 100% traffic, created `2026-10-23T13:51:11.259Z`; deployment message identifies the same full commit.
- Existing uncommitted `src/data/blog.ts` draft is excluded from committed-code findings and was not changed by this audit. Draft improvements must not be mistaken for deployed improvements.
- Method: source review, production browser reproduction, primary Google/NHC documentation, production endpoint checks. This is a sample-based audit, not a factual verification of every article or a Google approval prediction.
- No business code changes, commit, push, deployment, or AdSense review submission in this audit.

## Recommendation

Fix the confirmed safety, factual accuracy, map, and navigation defects before requesting review. Then improve the weakest named-storm pages and public-facing editorial copy. Ownership verification alone does not establish content quality or resolve a previous Site down report.

## Confirmed findings

### P1 - Mandatory evacuation can produce a Prepare recommendation

- Live URL: https://www.hurricanetracker.cc/tools/evacuation-decision-helper/
- Reproduction: select `Mandatory evacuation order`, leave the inland/site-built defaults and household checkboxes unchanged, then calculate.
- Actual: `Prepare`, with advice to finish preparations and decide where to go if conditions worsen.
- Cause: the mandatory order contributes only 3 points; the generic 2-3 score band maps to Prepare.
- References: `src/pages/tools/evacuation-decision-helper.astro:56`, `:138`, `:172`.
- This contradicts the page's own instruction to follow local evacuation orders. A disclaimer does not correct the result.
- Required outcome: mandatory orders must take precedence over additive scoring. Separate immediate warning responses, especially tornado warnings, from generic hurricane planning prompts. Verify representative combinations and no-order defaults after repair.
- Browser evidence saved at `/private/tmp/adsense-evacuation-audit-2026-10-23.jpg`.

### P1 - Arthur archive contains a demonstrably incorrect peak and a different storm's source link

- Live URL: https://www.hurricanetracker.cc/storm/2026-arthur/
- Site claims peak winds of 40 mph / 35 kt and presents its data as a final/post-season NHC record.
- NHC Arthur Special Advisory 6, issued June 17, 2026 at 11:30 AM CDT, records 45 mph maximum sustained winds. Therefore the site's 40 mph peak is too low, even without establishing the final best-track peak.
- The site's final-advisory link currently opens `Post-Tropical Cyclone Gonzalo`, advisory 8, September 26, 2026. It is a rolling product URL, not a persistent Arthur archive URL.
- References: `src/pages/storm/2026-arthur/_data/arthur.ts:73`, `:82`, `:85`, `:95`.
- Additional claims needing source-specific verification: two direct deaths, final landfall details, observed rainfall and surge. The linked Tropical Cyclone Report index does not substantiate those individual claims. The June 17 advisory's rainfall/surge amounts are forecasts, which alone cannot establish observed totals.
- Required outcome: reconcile the entire archive with storm-specific official reports or archived advisories; distinguish forecasts, observations, preliminary estimates, and final records. Do not merely replace 40 with 45 and consider the page verified. Extend this check to other storm archives.

### P2 - The live map's dark basemap displays API KEY REQUIRED

- Live URLs: https://www.hurricanetracker.cc/hurricane-tracker/live/ and its embed https://www.hurricanetracker.cc/embed/radar?layer=radar&theme=dark&view=atlantic
- Browser screenshot shows repeated `API KEY REQUIRED` tiles instead of geographic detail, while radar/forecast overlays and an updated status remain visible.
- Reference: `src/pages/embed/radar.astro:295` uses the CARTO dark tile service. Similar tile configuration exists at `src/pages/radar.astro:595` and `src/pages/compare.astro:260`; those other routes need their own visual verification after a shared remedy.
- Required outcome: restore an authorized, functioning basemap with appropriate attribution and a visible fallback for tile failures. Verify visually; HTTP 200 and a successful feed update do not prove usable map imagery.
- Browser evidence: `/private/tmp/adsense-map-audit-2026-10-23.jpg`.

### P2 - Homepage official advisory link becomes [object Object]

- Live URL: https://www.hurricanetracker.cc/
- In the populated storm list, the NHC link has literal href `[object Object]`, so it cannot take users to the intended official advisory.
- Reference: `src/components/LiveDashboard.astro:190`; its local type at `:84` assumes a string, while the supported feed type is string or URL object.
- Existing normalization helper: `src/lib/weather.ts:31`, `advisoryUrl()`.
- Required outcome: normalize/validate the advisory link before rendering and omit unavailable links; verify the object and string feed formats.
- Initial empty alert content was transient and is NOT treated as a persistent finding.

### P2 - Named-storm pages promise archives while showing generic search-oriented content

- Live example: https://www.hurricanetracker.cc/hurricane-tracker/storm/erin/
- H1: `Erin Storm Archive: Final Track and NHC History`.
- Actual content says no active Erin record is present, supplies generic checklists/links, and describes itself as a `standing search hub`; it does not provide the promised final-track history.
- Public text explains that Erin tracker queries spike around path-map searches. Homepage text refers to `high-demand storm-name searches`. Blog navigation uses `Search Intent` and `Indexable category hubs`.
- References: `src/data/stormPages.ts:24`, `:27`; `src/pages/hurricane-tracker/storm/[storm].astro:148`; `src/pages/index.astro:282`; `src/pages/blog/index.astro:172`, `:196`.
- Risk: title/content mismatch and weak distinct value align with Google's low-value/doorway guidance. This is a quality assessment, not proof that Google has classified the site as doorway content.
- Required outcome: provide source-backed storm-specific history where an archive is promised; otherwise give the page an accurate purpose/title and consolidate overlapping generic pages. Rewrite public copy around visitor questions, not keyword or indexing strategy. Do not bulk-create more pages as an approval tactic.

## Conditional preparation and owner checks

### Consent implementation

- The source loads GA immediately (`src/components/GoogleTag.astro:5`, `:11`). No consent default/update implementation or CMP integration was found in reviewed source. The observed privacy page loaded GA and Cloudflare Insights.
- A US browser observation cannot establish behavior for every jurisdiction; the AdSense account's Privacy & messaging configuration was not inspected.
- Before personalized advertising to users in the EEA, UK, or Switzerland, configure a Google-certified CMP integrated with IAB TCF. Google's own European regulations message is one supported option.
- Check consent handling for analytics as well as ads, withdrawal/privacy choices, and consistency with the actual privacy notice. A decorative cookie banner is not sufficient evidence of implementation.
- This regional advertising requirement is not a universal prerequisite for ads.txt ownership verification, and is not established as the cause of the prior Site down result.

### Publisher identity and account status

- Google permits one AdSense account per publisher. Removing a domain from the old account does not close that account or establish a distinct publisher.
- If the new account belongs to a separate registered organization, Google documents a separate organization-account option with matching organization, payee, and tax information. The audit did not inspect private identity/payment information or establish whether the two accounts are duplicates.
- Confirm the new account's actual owner, correct account type, accurate payee information, any duplicate-account notice, and site ownership/verification state. Do not treat a different pub ID as a reset of site quality or account eligibility.
- Changing to ads.txt does not erase site history or guarantee unrelated account treatment. No evidence here establishes that either account was disabled.

### Editorial and contact preparation

- About, Contact, Privacy, Terms and an official-source disclaimer already exist; they are not missing pages.
- Improve accountable operator/editor identification and the process for correcting weather facts. This supports trust, but a named individual is not presented here as a universal Google approval requirement.
- Have the owner verify that `weather-data@hurricanetracker.cc` actually receives mail. No test email was sent and delivery has not been verified.
- Review the committed/live blog content separately from the existing draft; publication and fact checking remain necessary even where a local draft already proposes changes.

### Previous Site down report

- Current successful requests show point-in-time availability from the audit environment. Spoofing a crawler User-Agent is not equivalent to a request from Google's crawler infrastructure.
- If the issue recurs, correlate the AdSense notice time with Cloudflare verified-bot/WAF/challenge/rate-limit logs and origin/Worker errors. Keep the published site and verification file consistently reachable during review.
- Do not disable site-wide security as a speculative fix. Actual Google-IP access, all-region availability, and account-side crawler history were not verified.

## Verified strengths and remaining limits

- ads.txt uses exactly `google.com, pub-2321309842883439, DIRECT, f08c47fec0942fa0`.
- The audit rerun passed all 48 homepage/ads.txt crawler-method-origin combinations plus 10 production endpoints.
- Production homepage no longer loads the old unconditional AdSense script; an ads.txt verification workflow does not require restoring the old publisher's script.
- robots.txt allows public pages; the /api/ and /admin/ exclusions are not an identified public-page crawl blocker.
- No observed browser warnings/errors on the sampled homepage/live tracker establish a clean console at those moments; they do not negate the visible broken basemap.
- The attempted viewport override did not yield the requested 390px layout, so this audit makes no claim of a completed mobile viewport pass. A real narrow-viewport visual pass remains part of post-fix validation.
- No claims about minimum traffic, a fixed Google word count/article count, or guaranteed approval are made. The project's own content-length rules are distinct from Google's published guidance.
- No full crawl, all-article factual review, regional consent test, email delivery test, or AdSense backend submission was performed.

## Suggested execution order

1. Repair evacuation behavior, Arthur source/data integrity, the map basemap, and homepage official links.
2. Correct misleading named-storm archive titles/content and remove public SEO-strategy prose from sampled entry pages; inspect related templates for the same patterns.
3. Verify editorial identity/contact and publisher-account eligibility; configure regional consent before applicable ad serving.
4. Build the intended release without accidentally including the existing blog draft; visually retest the critical tools/map at desktop and mobile sizes, repeat production endpoint checks after deployment, and inspect account-side ownership status.
5. Submit review only when the intended production version is verified; keep the site accessible during the review. Google says review can sometimes take 2-4 weeks, so repeated publisher swapping is not a substitute for resolving defects.

## Primary sources

All pages below were opened and read in the browser on 2026-10-23. Dates not displayed by the source are not inferred from search snippets.

- Google, Site not ready: https://support.google.com/adsense/answer/12176698?hl=en (publication/update date not displayed).
- Google, Content and user experience: https://support.google.com/adsense/answer/10015918?hl=en (date not displayed).
- Google, AdSense Program policies: https://support.google.com/adsense/answer/48182?hl=en (page states last updated August 4, 2026).
- Google Publisher Policies: https://support.google.com/adsense/answer/9335564?hl=en (date not displayed).
- Google, Certified CMP requirements: https://support.google.com/adsense/answer/13554116?hl=en (EEA/UK effective January 16, 2024; Switzerland July 31, 2024; publication/update date not displayed). The verified requirement concerns personalized ads in those regions.
- Google, If you want more than one AdSense account: https://support.google.com/adsense/answer/9729?hl=en (date not displayed; includes separate-organization guidance).
- NHC, Arthur Special Advisory 6: https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.006.shtml?text (issued June 17, 2026, 11:30 AM CDT; maximum winds 45 mph).
- NHC rolling URL incorrectly used by Arthur: https://www.nhc.noaa.gov/text/refresh/MIATCPAT2+shtml/171500.shtml (observed October 23 displaying Gonzalo advisory 8, issued September 26, 2026, 8 PM CVT; rolling content may change).

## Completion note

`npm run verify:seo` completed successfully on 2026-10-23: all 48 homepage/ads.txt combinations and 10 production endpoints passed. The initial sandboxed attempt failed to access the network; the authorized network-enabled rerun completed with exit code 0. `git diff --check` also passed. No build was run because this audit only added this report and made no business-code/content changes.

## Local remediation and verification - 2026-10-23

This section supersedes the unresolved code findings above for the local working tree only. The original observations remain a historical record of the production audit.

- Baseline: `main`, tracking `origin/main`, both at `62e61bbdeefef09dab49426eaf0872b52e3f5dbf` after fetching; ahead/behind 0/0. These repairs are uncommitted workspace changes. The existing `src/data/blog.ts` draft (91 added / 33 removed lines) was preserved without edits.
- Mandatory evacuation orders now always produce Leave, independent of the household score. Tornado warnings require immediate shelter; flood, surge and hurricane warnings have distinct protective actions. A household score cannot create an official evacuation order or an all-clear.
- Homepage advisory links now accept both string and object feed formats and omit invalid links. Browser verification confirmed the live Vance advisory links to the NHC rather than an object serialization.
- Embedded radar, radar and comparison maps use the existing OpenStreetMap provider for both themes, with dark styling confined to the geographic basemap. Failed tiles produce a visible notice. Loaded geographic tiles were visually confirmed on embedded radar at desktop/mobile sizes, radar in both themes, and comparison in light mode. A separate final comparison dark-mode pass was not completed.
- Mobile embedded-radar controls no longer overlap; hidden satellite controls remain hidden. The evacuation tool and shared footer wrap at narrow widths. At a 390px viewport the final evacuation page had a 375px document scroll width and returned Leave for a mandatory order. Cached development CSS initially masked the footer fix; a fresh localhost origin confirmed the final styles.
- Arthur's peak is corrected to 40 kt (about 45 mph). Unsupported death, financial-loss, precise landfall and observed-impact claims were removed. Forecast rain/surge hazards are distinguished from observations, and final public advisory 8 uses its persistent archive URL. The page explicitly distinguishes operational advisories, the season summary and the unavailable storm-specific final report.
- Inactive named-storm pages now describe NHC status and official sources rather than promise a complete archive/track that is absent. Public search-strategy prose was removed from sampled homepage, blog, live-tracker and storm entry content. The Erin heading and Arthur values/source links were verified in the browser.

### Final local validation

- `npm run build`: passed, including city-data validation and generation of 19 OG images.
- `npm run check`: passed; 0 errors, 0 warnings, 5 existing hints.
- `node --test scripts/adsense-safety.test.mjs`: 4 tests passed, covering mandatory-order precedence, hazard-specific actions, score-only planning, and advisory-link formats.
- The missing optional local workerd binary was restored from the official npm package at the already-installed version `1.20261012.1`; dependency declarations and lockfiles were not changed.
- Preview: `http://localhost:4322/`. Evidence: `/private/tmp/adsense-map-fixed-mobile-2026-10-23.png` and `/private/tmp/adsense-evacuation-fixed-mobile-2026-10-23.png`.

### Additional NHC sources checked

Observed in the browser on 2026-10-23:

- 2026 season summary: https://www.nhc.noaa.gov/data/tcr/index.php?text - Arthur June 17-18, 40 kt, 999 mb; no linked Arthur final report at observation time. Blank loss fields were not interpreted as zero.
- Public advisory 7: https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.007.shtml - issued June 17, 2026 at 2100 UTC; 45 mph, 1001 mb; forecast surge distinguished from measured impacts.
- Final public advisory 8: https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.008.shtml - issued June 18, 2026 at 0300 UTC; post-tropical, 35 mph, 1000 mb; inland flood threat remained after coastal warnings ended.
- 2014 season table: https://www.nhc.noaa.gov/data/tcr/index.php?season=2014&basin=atl - Arthur peak 85 kt, 973 mb.
- 2020 season table: https://www.nhc.noaa.gov/data/tcr/index.php?season=2020&basin=atl - Arthur May 16-19, 50 kt, 990 mb.

### Still pending

No commit, push, deployment or AdSense review submission was performed for these repairs. The prior deployment identification above is historical and was not revalidated during this local repair pass. Production must be checked again after an authorized deployment; local results do not establish that the repairs are live.

Publisher ownership/account eligibility, actual contact-mailbox delivery, accountable operator details and the AdSense Privacy & messaging configuration still require owner/backend verification. GA consent handling and a certified CMP for applicable regional personalized advertising remain unresolved. This pass did not audit every article or establish Google crawler access from Google's infrastructure. No approval guarantee is implied.

## Owner submission and release authorization - 2026-10-23

- The owner supplied an AdSense screenshot showing `hurricanetracker.cc` as Preparing with ads.txt Authorized, updated at 22:54 China Standard Time. This establishes the displayed submission status, not final approval.
- The owner subsequently authorized committing and deploying the local repairs. The release will exclude the existing `src/data/blog.ts` draft and be built from the committed snapshot in an isolated directory. The earlier no-deployment notes describe the state at the time of the repair pass.
- A fresh fetch confirmed `main` and `origin/main` at `62e61bbdeefef09dab49426eaf0872b52e3f5dbf`, ahead/behind 0/0, before preparing this release. Final deployment metadata and production checks must establish the resulting live version.
