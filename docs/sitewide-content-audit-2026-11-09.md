# Sitewide Content Audit - 2026-11-09

## Baseline and scope

- Local branch: `main`, tracking `origin/main` at `https://github.com/daniel0411-cell/hurricanetracker.git`; remote default branch verified as `main`.
- After a fresh fetch, local HEAD and remote main were both `a1e7d1edd6e030f9ce87e95c5d37a27d417cc8e9`, ahead/behind 0/0. Starting worktree was clean.
- Production: https://www.hurricanetracker.cc/ . Cloudflare deployment at `2026-11-09T08:01:30.882Z` serves Worker version `8cfdc938-a76b-484d-919a-94b6c6a124b8` at 100%.
- Cloudflare's latest deployment has no commit tag. The preceding release record ties that Worker version to `aa07e5b4523a696112f2aaa5f54536e3e7f59029`; the current local commit adds release documentation only. This mapping uses the release record, not an inference from HEAD alone.
- Registry inventory: 189 unique fixed URLs (pages 69, locations 50, blog 55, tools 15), excluding additional dynamic storm-registry URLs. Grouped by content purpose: 49 blog articles, 64 local pages, 23 topics, 9 storm archives, and 44 other tools, directories, entry and policy pages.
- Structural review covered the inventory and shared content/date/subscription implementations. Risk-based production sampling covered eight pages: season overview, disturbances, path, Orlando tracker, categories, Gulf Shores tracker, newsletter, and the below-normal season article.
- This is not a sentence-by-sentence factual certification of every page. Missing source-check metadata is a prioritization signal, not evidence that a claim is false. Raw data-object word counts were not treated as rendered article length.
- This turn changes only this audit document. No product edits, commit, push, deployment, subscription submission, or email delivery test.

## Confirmed findings and remedies

### 1. P1 - Advisory explanation excludes Potential Tropical Cyclones

Evidence: `src/pages/hurricane-tracker/tropical-disturbances.astro:30` says NHC advisories and a forecast track begin after cyclone formation. The depression panel repeats that interpretation; `public/images/guides/tropical-development-stages.svg:7` similarly says advisories begin at depression stage. The production caption matches.

NHC can issue advisory products for a Potential Tropical Cyclone before it is a tropical cyclone. The current glossary defines this as a disturbance threatening tropical storm or hurricane conditions over land within 72 hours. The existing explanation can cause readers to overlook preformation advisory products.

Remedy: explain the PTC exception in the caption, body and diagram. Preserve the distinction between an Invest identifier and a classification. Present development as possible outcomes, not mandatory sequential stages. Tie decisions to the actual official advisory and watch/warning products.

Primary source: https://www.nhc.noaa.gov/aboutgloss.shtml , accessed 2026-11-09 after browser search; revision date not visible in the extracted section. No current PTC event is asserted here.

### 2. P2 - Next-name inference lacks a complete season record

Evidence: `src/pages/2026-hurricane-season.astro:35-46` combines observed registry names with a hardcoded subset and selects the next list position. `src/lib/stormRegistry.ts:19` reads a locally accumulated feed registry, not a verified complete season history. Production labels Kyle as NEXT after the latest recorded system while also acknowledging that unrecorded names may have been used.

This audit does not establish that Kyle is wrong. It establishes that a partial observed registry cannot verify the next unused name, and the NEXT badge can imply that stronger claim despite the qualifying prose.

Remedy: either show the official naming sequence without a next-unused claim, or establish completeness against a dated NHC season record before assigning that status. An unavailable or incomplete record should produce an unknown status.

### 3. P2 - Editorial dates disagree across visible text, metadata and sitemap

Evidence: `src/data/contentDates.ts:34-42` applies a generic November 4 template date ahead of the supplied page date. Orlando's city tracker visibly says November 9, while production meta and JSON-LD say November 4. `src/lib/sitemapRoutes.ts:45` uses a September 1 fallback for local preparedness guides that have since been revised.

Programmatic comparison found eight city trackers whose supplied dates differ from the generic November 4 result: Orlando, Miami, Tampa, Houston, New Orleans, Jacksonville, Brunswick and Baton Rouge. Eight revised local preparedness guides have September 1 sitemap dates: Miami, Tampa, Orlando, Jacksonville, Houston, New Orleans, Charleston and Savannah. Differences involving earlier page dates can reflect later template revisions; they require a consistent material-change policy rather than blindly restoring older dates.

The Path topic is correctly resolved to November 6 through the shared override. The topic template's fallback alone is not evidence of an incorrect published date.

Remedy: use one editorial revision policy that accounts for both material page and template changes, then derive visible date, metadata, JSON-LD and sitemap from it. Keep live feed fetch times separate. The sitemap source is protected by AGENTS.md and requires explicit authorization before a later repair touches it.

### 4. P2 - Some city and preparedness pages lack local decision detail

Evidence: Gulf Shores (`src/data/cities.ts:1702`) has brief local hazard paragraphs, general evacuation bullets and three FAQs. It links official agencies but does not walk the reader through local zone lookup, transport/traffic checks or a sourced historical case. Norfolk (`src/data/cities.ts:1788`) mentions tides, bridges and river constraints without a corresponding zone or crossing-status workflow. Wilmington and Virginia Beach preparedness records also retain brief general guidance.

Across 33 city tracker records, 23 lack dated source-check notes. Across 22 local preparedness records, 14 lack the newer planning-record/check structure. These are review queues, not 37 confirmed defective pages; absence of the newer structure does not prove inaccuracy.

Remedy: deepen two or three locations per batch using verified local zone-finding steps, direct official transport/shelter resources, eligibility/contact questions, one sourced historical example and genuinely local FAQs. Provide a usable decision record without inventing route safety, shelter availability or staffing expertise.

### 5. P2 - Some topic hubs do not fully deliver their title promise

Evidence: `src/data/topicPages.ts:157` promises "Hurricane Categories 1-5: Wind & Damage" but provides wind thresholds and limitations rather than a damage comparison. Production includes a threshold diagram and scale caveats, so the issue is the missing promised comparison, not an absence of visuals. The landfall-forecast topic is another candidate for clearer purpose alongside existing forecast/path explanations.

Eleven topic data records contain two explanatory sections, but template-specific diagrams and cases add content to some of them. That count cannot be used to classify all eleven as thin pages.

Remedy: define each hub's distinct reader question. For categories, add a concise, appropriately qualified damage comparison with the official scale source, or narrow the title to wind thresholds. Link existing deeper explanations and remove repetition rather than expanding to a target word count or creating overlapping articles.

### 6. P2 - The dated seasonal article omits the actual forecast it discusses

Evidence: `src/data/blog.ts:1836`, `below-normal-hurricane-season-2026-real-time-tracker`, discusses a below-normal 2026 season but supplies neither the outlook issue date nor its probabilities and ranges. Production confirms the omission. Its rolling CPC source link does not preserve which forecast the article explains.

The official CPC outlook observed on November 9 is dated August 6, 2026: 75% below-normal, 20% near-normal and 5% above-normal. Each numerical range has 70% probability: 7-13 named storms (including two already recorded), 2-6 hurricanes, and 0-2 major hurricanes. These are seasonal basin forecasts, not landfall predictions. The primary source supports the below-normal description; this is an evidence/completeness problem, not a demonstrated false headline.

Remedy: add a dated outlook summary with the source and distinguish category probabilities from range confidence. Mark it as historical seasonal context and route current activity questions to the live tracker. Trim repeated generic warnings.

Verified primary source: https://www.cpc.ncep.noaa.gov/products/outlooks/hurricane.shtml , issued 2026-08-06, accessed 2026-11-09 after browser search. A linked NOAA press release was observed but its body was not independently reviewed in this audit.

### 7. P2 - Newsletter data-storage explanation understates stored fields

Evidence: `src/pages/newsletter.astro:31` says only email address and signup source are stored. `src/pages/api/subscribe.ts:41-45` also stores page, preferences and subscribedAt, with a three-year TTL. `src/pages/privacy.astro:18` already describes page and preference information. The production newsletter FAQ repeats the narrower statement.

Remedy: align the newsletter FAQ, form and privacy explanation with actual fields and retention. Separately verify the real mailing and unsubscribe workflow with the operator. Repository evidence alone does not establish whether an external mail service exists, and no delivery or unsubscribe test was performed.

## Recommended sequence

1. Correct the PTC explanation and diagram first because they teach a safety-relevant rule incorrectly.
2. Resolve next-name certainty, editorial date consistency and newsletter field disclosure in a focused maintenance batch. Obtain the required explicit authorization before changing protected sitemap files.
3. Add the dated official seasonal outlook to the existing article and make the categories hub fulfill its title.
4. Continue local-guide improvements in batches of two or three pages, verifying local primary sources before drafting. Use the candidate queues above to select pages, not as an instruction to bulk rewrite all of them.
5. For each content batch, verify factual claims, source scope, historical/current labels, internal links and date consistency; build and follow the normal publication checks only when implementation/publication is authorized.

## Positive observations and limits

- Reviewed publisher/about surfaces describe independent publishing and AI assistance; the earlier fictional team/expert framing was not found in the sampled surfaces. This is not a whole-repository certification of every identity claim.
- Recent articles and local guides more clearly distinguish historical cases from live conditions, and newer decision records provide more practical value than the older general paragraphs.
- The prior water/medication checklist corrections remain in the reviewed baseline. See `docs/content-quality-six-batch-audit-2026-11-09.md` for the prior release verification.
- No numeric AdSense acceptance prediction is justified by this audit. Content accuracy, distinct usefulness and honest disclosure are the actionable improvements.
- No build was needed for this documentation-only audit. Verification is limited to source/DOM review, inventory/date comparisons, deployment metadata and the official sources recorded above.
