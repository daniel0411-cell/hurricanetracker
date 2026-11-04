# Content quality implementation, November 4, 2026

## Scope and baseline

Implemented the ten findings in `content-quality-deep-audit-2026-11-04.md` on local `main`, based on `b5cb26fda3aba113b23ac730c7d3cddda5212b08`. At the start, a fresh fetch and remote-default-branch query confirmed `origin/main` at the same commit, with 0 ahead / 0 behind. Existing untracked drafts, scripts, deployment records, and scratch files were preserved.

At the implementation checkpoint this work was local, with no commit, push or deployment. The user subsequently authorized committing and deploying this batch. No AdSense account action, dependency change, or route-membership/indexing change is part of this release. Sitemap changes are limited to editorial lastmod values for identifiable revised pages, within the user-authorized audit remediation scope. Release results must be verified separately against the deployed Worker version.

## Remediation record

| Audit finding | Implemented behavior |
| --- | --- |
| 1. Unsafe automatic departure advice | Shared hazard classifier and protective instructions; Extreme Wind and Tornado Warnings mean immediate shelter in the warned area. Explicit evacuation events are separate. The decoder distinguishes surge watch from warning and no longer appends vulnerable-household travel to shelter warnings. |
| 2. Failed or stale feed shown as empty | Shared timestamp/shape validation; HTTP errors, malformed records, missing times, stale data, and successful empty responses are distinct. City, live, Gulf, tracker, storm-name pages and related tools use the checked state. Live refresh removes ended cards and replaces unverified results. Gulf status is checked on the visit instead of frozen during prerender. |
| 3. Conflicting warning definitions | Topic introduction, body and FAQ distinguish the 48/36-hour reference to tropical-storm-force onset, and surge possible/watch versus expected/warning. Added the direct NWS definition source. |
| 4. Invented action countdown | Removed automatic 24/48/72-hour task deadlines from current alert results. Results ask for the issuing authority's actual area, instruction, and deadline. |
| 5. Tool promise exceeds calculation | Existing impact-window URL now serves a clearly titled state alert/action summary. Removed the unused City/ZIP field; alert expiration is explicitly separate from wind arrival. Updated incoming links and search metadata. |
| 6. Internal SEO notes visible | Removed keyword strings/search-intent notes from affected reader interfaces and replaced category labels with real tasks. Reduced repeated city/state link modules. Internal editorial targeting fields can remain internal. |
| 7. Six weak state guides | Louisiana, Alabama, Mississippi, Georgia, South Carolina and Virginia each have three local checks, official emergency/traffic/weather links, a sourced historical comparison, and household record fields. Wind peak, landfall intensity, local gusts and water metrics remain distinct. |
| 8. Visual subjects lack evidence | Added actual Michael radar and Ian composite reading exercises, an NHC fictional Hurricane X inundation exercise, and an explicitly invented model valid-time exercise. Full-size historical images retain source, time, units, and limits. |
| 9. Generic verification prompts | Eyewall article now reads the conditional evidence in Irma discussion 28 and includes a two-advisory record task. Melissa has a separate 2019 NHC report, timeline and measurement comparison, without inventing a current storm. |
| 10. Invisible FAQ / inaccurate dates | Six state FAQs and blog FAQ are visible from the schema's data; shared current-state answers now use the same text in body/schema. Editorial dates are separate from feed check and advisory issue times. The date helper preserves dates for untouched routes. |

## Evidence used

- NWS hurricane watch/warning and immediate-shelter definitions: <https://www.weather.gov/safety/hurricane-ww>.
- Sally: <https://www.weather.gov/mob/sally>.
- Ida: <https://www.weather.gov/lix/hurricaneida2021>.
- Katrina: <https://www.weather.gov/mob/katrina>.
- Michael history and radar: <https://www.weather.gov/tae/HurricaneMichael2018>.
- Hugo: <https://www.weather.gov/chs/HurricaneHugo-Sep1989>.
- Isabel original report: <https://www.nhc.noaa.gov/data/tcr/AL132003_Isabel.pdf>, Synoptic History, PDF pages 1-2.
- Melissa original report: <https://www.nhc.noaa.gov/data/tcr/AL142019_Melissa.pdf>, PDF pages 2-4. Text was extracted with markitdown and checked against the specific claims used.
- Irma discussion 28: <https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml>.
- NHC inundation teaching image and definition: <https://www.nhc.noaa.gov/surge/inundation/>.

Sources support only the excerpts identified in the pages, not a new fact-check certification for the whole site. NWS's Michael event caption names KEOX, while the actual displayed radar image is labeled KEVX; the site identifies the printed image label and does not copy the conflicting caption. Its image is not evidence of an eyewall replacement cycle.

Virginia Know Your Zone could not be content-verified in this session: Node reported a TLS certificate-chain error; a curl retry returned an empty body. The government link is retained with an explicit city/county fallback. This is not a claim that the resource is permanently unavailable. Current road closures, shelters, evacuation orders and future storms were not inferred from historical sources.

## Verification

- `npm run check`: zero errors, zero warnings; four existing hints in unrelated code.
- `npm run build`: successful; city-data and OG asset checks included.
- `node scripts/content-trust-regression.mjs`: executes the real shared modules and compiled page scripts with simulated responses. Covers hazard differences, evacuation negation, overlapping shelter/evacuation, freshness and malformed feeds, city 503, live last-storm removal, decoder vulnerability handling, state-summary errors, and unchanged-route dates.
- `npm run media:audit` and `npm run links:audit`: pass on their stated static coverage; these do not replace SSR/browser checks.
- `CONTENT_AUDIT_BASE_URL=http://127.0.0.1:8814 npm run content:audit`: 94/94 required pages and 46 article source/asset records pass, including SSR pages.
- Chrome/Playwright: 24 page checks across 1440 px and 390 px viewports (six states, three teaching topics, eyewall article, Melissa and blog). One H1, canonical, every FAQ question/answer in the body, loaded figure images, and no horizontal page overflow. Additional interactions cover extreme-wind shelter, surge watch versus warning, vulnerable households, state-summary HTTP failure, city stale/error/empty states, and active/empty/unavailable Gulf checks. Screenshots include tables and the model-time exercise. Test browsers closed after completion.
- Local preview is <http://127.0.0.1:8814/> using the built Worker with local-only bindings and a separate temporary KV directory. Explicit local-upstream settings prevent the production-route configuration from redirecting the test to the live site. The existing port-4330 development process was left running.

Browser results: `/tmp/hh-content-quality-browser-20261104.json`; screenshots: `/tmp/hh-content-*.png`. These local temporary artifacts are not deployed. Tests use explicitly synthetic data where stated and do not verify current storm conditions, current official agency operations, or every claim across the site.

## Media decisions

Already implemented useful teaching media; no new decorative AI cover, unverified video transcript, Reddit safety claim, or fictional observed weather image was published. The remaining production brief is in `content-media-brief-2026-11-04.md`, with self-contained Chinese handoff prompts in `content-media-agent-prompts-2026-11-04.md`. Media can improve comprehension but does not establish AdSense eligibility or a probability of approval.
