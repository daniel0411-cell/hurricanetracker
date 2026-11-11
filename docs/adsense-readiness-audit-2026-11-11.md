# Content quality and AdSense resubmission audit

Audit date: November 11, 2026, Asia/Shanghai.

## Decision

### Follow-up implementation on November 11

The user authorized all three focused fixes and deployment. Uncurated named-storm pages now receive noindex,follow unless a validated current feed identifies the storm as active. Curated historical reports retain indexability. Dynamic locations sitemap generation no longer appends the inactive registry; fixed editorial routes remain, and dynamic additions require a fresh, validated, non-stale feed. Saved observations remain accessible and are explicitly distinguished from complete storm histories. This changes search indexing policy, not the standards AdSense may apply to accessible site content.

The three unsupported state-tracker destinations now use an accurately labeled all-basin live tracker. Nine supported state links and city-specific links remain. Shared FAQs were reduced from three to one; city templates lost repeated navigation introductions, duplicate planning notes and nearby-card prose while retaining local risks, official resources, tasks and page-specific FAQs. Dates were not advanced for copy trimming or represented as new fact checks.

Validation before release: build passed; Astro check had zero errors/warnings and seven existing hints; storm-indexing and content-trust regressions passed; metadata, schema, internal-link and FAQ audits passed; local Worker content audit covered 112/112 required pages. Browser checks passed six pages at 1440px and 360px for layout, one robots tag, visible/schema FAQs and supported/fallback links. Browser requests to Google ads/analytics were blocked for these site-owned-content checks. Original reminder/push edits remain outside this release. Deployment and production verification are recorded separately after release.

Content quality has materially improved. The current site is more useful and evidence-aware than the pre-rejection proxy and also stronger than the November 9 baseline. However, I recommend addressing the newly confirmed twenty automatically preserved historical storm pages before submitting the current version unchanged. Correct the three misleading state-tracker destinations in the same focused cleanup. This is a bounded readiness recommendation, not proof of the reason for Google's previous rejection or a prediction that Google will reject this version.

If those fixes are verified and the account permits Request review, resubmitting today is reasonable. There is no evidence-based reason to wait an arbitrary two or three weeks, reach a particular URL count, or wait for all updates to enter Google/Bing indexes. No defensible numerical approval probability can be calculated from this audit. No application was submitted.

## Version and scope

- Repository: main tracking origin/main, https://github.com/daniel0411-cell/hurricanetracker.git, remote default main confirmed using ls-remote --symref. Fresh fetch found HEAD and origin/main at efe2d26643de8750c46ee6a15a7fa5ef85c97069, 0/0. Existing ReminderSignup.astro and api/push/send.ts edits and unrelated untracked files were excluded.
- Production: https://www.hurricanetracker.cc/ . Cloudflare deployment 60950426-2804-4d4a-9401-8ae61bb32dff, created 2026-11-11T06:55:12.74954Z, serves version 9477d27d-96fb-4bf7-9faf-376e0b74b598 at 100%. The deployment annotation explicitly records the full commit and clean committed archive build.
- Comparisons: 987df4116e868b65a5bf09e7e3f2a71b64ba0015 (October 30; pre-November-2 local-code proxy) and b1bf574c1b0af6581b149794eb3f843144a8d972 (November 9, preceding the latest two-day batch). The first is not a captured copy of what AdSense actually reviewed. Google's reviewed revision, crawler logs, present account restrictions and current GSC/Bing reports were not obtained in this turn.
- Fetched 189 fixed sitemap URLs plus all 21 additional URLs in the dynamic locations sitemap: 210 distinct pages, all HTTP 200, indexable, matching canonical URLs and one H1. Fixed-page JSON-LD parsed without errors; dynamic pages were separately checked for status, robots, canonical and actual content. This is whole-inventory structural/text sampling, not 210 sentence-by-sentence factual audits.
- Editorial reading sampled home, the generator guide, water-safety guide, insurance/ALE and contractor material, kit checklist, map-reading topics, Alabama tracker/preparedness, Virginia Beach tracker/preparedness, the short watch/warning article, trust pages and the two interactive tools. Remaining data records were reviewed through comparison and structural metrics rather than a fresh primary-source certification.
- Audit artifacts: scratch/adsense-readiness-2026-11-11/{pages,snapshots,summary,dynamic}.json and captured HTML. No production code changes, build, commit, push, deployment, indexing notification or AdSense application in this turn.

## Findings

### P1 editorial priority: twenty historical snapshot pages remain automatically indexable and submitted

The locations sitemap currently contains 71 URLs: 50 fixed URLs and 21 additional storm URLs. Pena is an active Central Pacific service page at the time observed and should be assessed separately. The twenty other additional pages are preserved historical records: vance, olana, josephine, trudy, simon, rachel, nolo, nineteen-e, hanna, polo, odalys, gonzalo, norbert, lowell, marie, karina, lala, iselle, julio and moke.

All twenty have approximately 446 words of rendered main text, a retained position/classification/time and shared checklist/FAQ/tool links. None exposes a storm-specific archived public bulletin or TCR link in the sampled anchors. They lack the separately authored historicalReport section supplied to the six curated named trackers. Rachel and Vance have identical unique-word sets after normalizing their names and numbers (Jaccard 1.0); this supports template similarity, not a claim that every byte or every fact is identical. Neither 446 words nor similarity alone proves an AdSense violation; the substantive concern is little independent explanation beyond a retained public-data observation.

Evidence: src/pages/sitemap-locations.xml.ts:21 automatically adds inactive registry records; src/pages/hurricane-tracker/storm/[storm].astro:74 supplies generic trackerFocus; the curated report is gated at line 284; src/components/SEO.astro:90 unconditionally emits index,follow. The storm-archive page also promotes these retained records. The earlier 189 fixed-URL and 112-route regression counts did not include this complete dynamic population. Passing those checks was not proof that these additional pages had been editorially reviewed.

Recommended small policy: keep current active storm service pages available and assess curated archives individually. Keep unedited retained observations accessible as records, but stop automatically presenting every inactive snapshot as an indexable editorial destination. A specific implementation could exclude uncurated inactive records from the dynamic sitemap and apply noindex,follow until they receive independent content. Removing a URL from a sitemap alone does not deindex it; robots.txt blocking is not a substitute for an accessible noindex directive. This is curation of existing weak records, not a target to shrink all 210 pages to an arbitrary number, and it does not replace substantive improvement.

Implementation affects protected sitemap and shared SEO/core storm behavior and requires explicit authorization for those exact changes under AGENTS.md. This audit does not implement it. Do not mass-redirect distinct historical records to an unrelated page or remove useful curated archives.

### P2: three state-tracker labels lead to the generic tracker

The Massachusetts, New Jersey and New York preparedness pages each link twice to /tracker/{state}/ with labels promising that state's live context. All three requests follow redirects to /tracker/, HTTP 200, whose description includes an Alabama snapshot. These are not functioning state-specific tracker destinations. HTTP-status-only link checks would miss the mismatch.

Evidence: src/components/LocalPreparednessPage.astro:24 and :45 construct tracker paths for every state; the site has only nine dedicated state tracker pages. src/pages/tracker/[id].astro:44 redirects an unmatched id when the feed is available. Fix the link destination and its label according to available content; creating three new tracker pages is unnecessary.

### P2: shared guidance still occupies too much reader attention

The same three general FAQ answers appear on 43 fixed pages. One repeats a vague instruction to act earlier than a county deadline rather than teaching the actual topic. Several long city-tool and nearby-location introductions appear on all 33 city pages. A short common disclaimer is appropriate; the editorial opportunity is to shorten repeated blocks and preserve prominent local evidence and relevant questions.

Evidence: src/data/site.ts:33 supplies the common FAQ; live-crawl paragraph counts are in summary.json. These counts measure shared text, not the percentage of original content or proof of a Google penalty. The local Alabama tracker and standing guide now answer substantially different tasks despite sharing layout and some risk context; they should not be merged merely because their URLs refer to the same state.

### P3: scope notes and remaining research queue

The source/review disclosures are honest but can be dense, sometimes explaining multiple limitations before the reader reaches the answer. Preserve accountability while keeping detailed scope notes expandable or placing detail near the relevant evidence. Ten blog data records lack the optional sourceCheck field, but several contain correction notes or retained research; five topic records lack that field while some render rich historical components. Virginia/New York standing guides lack a sourceCheck object. These are inspection queues, not proof of inaccurate or low-value content. Retained historical comparisons have not all received a new original-report check.

About now accurately discloses organizational publication, AI assistance, sources and correction procedures. No invented expert identity should be added to improve appearances. Named accountable contributors or genuine specialist review can strengthen trust when real; this audit establishes neither a requirement for a named meteorologist nor a prohibition on organizational bylines.

## Evidence of improvement

Counts below are coverage indicators from production data, not quality scores, Google requirements or counts of complete fact audits.

| Indicator | October 30 proxy | November 9 | Current |
| --- | ---: | ---: | ---: |
| Blog records with bounded sourceCheck | 9/46 | 35/46 | 36/46 |
| Topic records with bounded sourceCheck | 0/23 | 4/23 | 18/23 |
| City records with bounded sourceCheck | 5/33 | 12/33 | 33/33 |
| Standing local records with bounded sourceCheck | 0/22 | 8/22 | 20/22 |
| Blog records with inline figures data | 7/46 | 9/46 | 9/46 |

Ignoring date/check/review/SEO-search fields, the latest two-day comparison changes 34 blog records, 15 topics, 22 cities, 12 standing guides and three named-tracker records. Three separate 2026 archive data/template revisions are outside those five arrays. These are changed data records, not eighty-six newly researched articles. Blog/topic/city/local array counts stayed 46/23/33/22: this effort improves existing coverage rather than enlarging the fixed inventory.

Examples of actual reader value:

- Spaghetti-model topic uses the real historical Joaquin chart, complete aid identifiers, chart-cycle conventions, enlarged details and limits on native initialization/valid-time inference. The reader can inspect the original labels rather than trust a generated chart.
- Forecast-change topic compares Irma forecasts at a shared valid time, distinguishing a forecast revision from observed intensification.
- ALE article separates ordinary and extra expenses with $350 minus $210 = $140, keeping the lodging row and the insurer's coverage decision distinct.
- Generator guide connects the official placement illustration with whether the household can actually support a safe setup; a transfer switch is not itself backup energy.
- Virginia Beach content names the distinct bridge-tunnels and conditional reversal; standing planning covers receiving/transport arrangements in more detail. Alabama's tracker and preparedness guide distinguish current product reading from county transport and assistance planning.
- The evacuation helper starts Unconfirmed and follows the entered official instruction, replacing an invented household score. The wind-mitigation tool takes insurer-confirmed inputs and computes an explicit arithmetic scenario rather than assigning unsupported feature discounts.

These are material improvements in specificity, accuracy, source usability and user tasks. They do not amount to original field reporting or independent professional meteorological review, and do not establish what Google's evaluator will decide.

## Technical and browser checks

- ads.txt on www: HTTP 200, google.com, pub-1321310404115919, DIRECT, f08c47fec0942fa0. Root host with simulated Mediapartners-Google follows to www and returns the same record. Crawled HTML exposed only ca-pub-1321310404115919; Layout matches. This confirms configuration consistency, not applicant-account ownership or dashboard status.
- Homepage with simulated Mediapartners-Google returned 200 and normal HTML. robots allows /, disallows only /api/ and /admin/, and points to the sitemap index. This does not prove actual Google crawler access at every time or absence of historical WAF events.
- About, Contact, Privacy and Terms accessible. Privacy describes advertising cookies and user choices; mailbox delivery and geographic consent configuration were not tested.
- Browser checks passed for home, spaghetti topic, generator article and the wind/evacuation tools at 1440px and 360px: single H1, no horizontal overflow and loaded main images. Manually viewed mobile home/spaghetti screenshots. Wind inputs 1000/10/150 yielded $100 annual saving and 18-month payback; tornado selection yielded immediate shelter guidance. These computations do not send application or household records.
- One Virginia Beach browser navigation exceeded 30 seconds and was not counted as passed; its HTTP content crawl succeeded. An initial browser run stalled before completing; the follow-up isolated Google advertising/analytics requests to test site-owned content and local interactions. This is not an audit of live ad delivery, Core Web Vitals or universal network performance. No broken image or overflow issue was observed in the successful sample.

## Official AdSense guidance read today

- [Make sure your site's pages are ready for AdSense](https://support.google.com/adsense/answer/7299563?hl=en): unique, original, relevant content, usable navigation and user experience; embedding outside content requires an original contribution. More images/videos alone are not a substitute.
- [Eligibility requirements](https://support.google.com/adsense/answer/9724?hl=en): policy compliance, original high-quality content, control of the site and applicant eligibility. This page states no universal numerical minimum PV threshold. A seasonal traffic decline is not a documented calendar-based loss of eligibility; traffic quality and the rest of the policies still matter.
- [What to do when your site is not ready](https://support.google.com/adsense/answer/12176698?hl=en): fix content/access/policy issues, then request review through Sites. A few days, sometimes 2-4 weeks, is the stated review duration after submission, not a mandatory waiting period before requesting review.

The current account's displayed waiting date, outstanding policy issues and publisher ID must control any actual application. This turn did not inspect the authenticated AdSense dashboard. Google/Bing search indexing and AdSense review are separate processes; there is no verified rule requiring all changes to be indexed first. No 80%-85% or other numerical approval probability is supportable.

## Recommended next action

Prioritize the uncurated inactive-record index policy, the three incorrect state links and trimming the most repeated shared FAQ. Verify deployment and bot access again after implementation, then request review if the account allows it. Further topic and historical-source refinement can continue afterward; there is no need to keep extending already useful pages to arbitrary word counts or wait for the next hurricane season.
