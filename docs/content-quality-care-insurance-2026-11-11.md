# Six existing household and insurance guides - November 11, 2026

## Baseline and scope

Fresh fetch and remote HEAD lookup confirmed `main` tracks `origin/main`, default branch `main`, both at `2d74895f62e98503a8f63b8fd53ea61f8145a0bb`, 0 ahead / 0 behind. Origin fetch/push: https://github.com/daniel0411-cell/hurricanetracker.git . The existing ReminderSignup and push/send changes and untracked drafts were retained. This is a local content revision, not a new production audit or deployment.

Six existing records in `src/data/blog.ts` changed. Original publication dates, sourceCheck records, reference lists, images and FAQs remain unchanged; the November 11 review fields identify the new, limited source readings separately. Only these six modification dates advanced. No dependencies, routes, sitemap sources, layout or deployment configuration changed.

## Article changes

| Article slug | Reader task and correction |
| --- | --- |
| `hurricane-home-preparedness-room-by-room-checklist` | Reconcile one working light listed in two places and an unusable spare. Test item retrieval and separate home storage from a travel bag, without operating utility controls or simulating an outage. |
| `hurricane-safety-seniors-children-disability` | Identify why a QR code is not an independent fallback when the usual communication device is unavailable. Prepare and try the person's chosen communication card and keep replacement-device information privately. |
| `hurricane-insurance-claim-guide-documentation` | Compare a quantity discrepancy with a rate discrepancy using fictional 120/150-square-foot and $4/$5 arithmetic. Correct unsafe inspection wording, reader-assigned settlement categories and the suggestion that wet items are necessarily salvageable. Explain NFIP adjuster identification without generalizing it to all policies. |
| `hurricane-home-hardening-checklist` | Compare roof-cover work with separately specified deck attachment, edges and sealed-deck work. Missing scope becomes a question for the bidder, not an inferred inclusion or a judgment about the contractor. |
| `hurricane-medical-needs-registry-preparedness` | Match exact medicine and packaging to pharmacist guidance rather than copying a vial rule onto a pen. Reconfirm receiving care and transport when the destination changes. No dose, switching, temperature allowance or device runtime is prescribed. |
| `hurricane-flood-insurance-guide-nfip` | Sort a furnace, washer and hotel receipt into separate building, contents and temporary-housing inquiries. Explain NFIP's housing exclusion and separate deductibles without deciding any real claim. |

Examples are explicitly fictional or illustrative. They are not current orders, inspected homes, actual policies, market-price estimates, medical assessments or service confirmations. The additions use existing section and list rendering rather than a new interaction or generic page-length target.

## Sources actually read

All six URLs were fetched successfully and their HTML body text parsed and read on November 11, 2026. Reading scope below is narrower than verifying all earlier claims or linked documents. Original responses were saved temporarily at `/tmp/hh-*-20261111.html`; these are research artifacts, not public site assets.

- Ready.gov, Safety Skills: https://www.ready.gov/safety-skills . Printed update March 20, 2026. Meter-specific gas instructions, no shutoff during practice and qualified restart. No actual utility procedure was tested.
- Ready.gov, People with Disabilities: https://www.ready.gov/disability . Printed update September 9, 2026. Support networks, accessible transport, printed communication, device-replacement identity and more than one treatment facility's availability. No local registry or service capacity was checked.
- FDA, Information Regarding Insulin Storage and Switching Between Products in an Emergency: https://www.fda.gov/drugs/emergency-preparedness-drugs/information-regarding-insulin-storage-and-switching-between-products-emergency . Printed content-current date September 28, 2026. Read the storage distinctions between manufacturer containers, the special once-weekly pen and pump systems, plus the frozen-insulin warning. No treatment conversion or patient-specific storage advice was used.
- IBHS, Home Upgrades for Further Resilience Against Hurricanes: https://ibhs.org/hurricanereadyhomeupgrades/ . No publication/update date identified in the body read. The request was slow but succeeded within 30 seconds. Read roof-system measures, independent FORTIFIED evaluation, garage-door PSF labels and opening protection. No code, installation or discount eligibility determined.
- NFIP, Claims Checklist for Policyholders: https://www.floodsmart.gov/claims-checklist and What you need to know about buying flood insurance: https://www.floodsmart.gov/get-insured/buy-a-policy . No publication/update date identified in their article bodies. Read safe access and reporting before reentry, evidence and estimate review, NFIP adjuster identification, building/contents examples, separate deductibles and temporary-housing exclusion. Individual forms, extensions, waiting-period exceptions, private policies and loss-avoidance provisions were not independently rechecked.

## Validation

- Build passed, including city data and OG generation. Astro check: 0 errors, 0 warnings, six existing hints, including local scratch files.
- Metadata, schema, static-link and media audits passed. Built local Worker content audit: 112/112 required pages and 46 article source/asset records, without skips.
- Focused source comparison: exactly six changed article records; other articles, publication dates, sourceCheck records, reference lists, images and FAQs unchanged. Section headings unique and estimate arithmetic checked.
- Playwright: 12 article views at 1440px and 360px, all HTTP 200, one H1, canonical host and slash, review and dates present, images decoded, FAQ schema matched source answers, FAQ opened, no horizontal overflow or browser script errors. All 17 unique article-section internal destinations returned 200.
- Screenshots and the local verification script are under `scratch/content-care-2026-11-11/`. Desktop/mobile estimate-section screenshots were visually inspected for wrapping and readability. This is not a manual visual review of every pixel of every article.
- `git diff --check` passed. No commit, push, deployment or search submission performed for this batch.

No new artwork is needed to understand these exercises. A future estimate comparison or roof-scope comparison graphic should reproduce these explicitly fictional records and add a clear visual relationship; decorative stock imagery would not supply further evidence. Validation is not a prediction of AdSense approval.

## Release evidence

The earlier pre-release statements above describe the validation checkpoint. Subsequently committed and pushed as `45086201d807659fa6ba9b4719e9c95042165ee0`. Built independently from a clean committed archive to exclude the unrelated tracked ReminderSignup and push/send work. Worker version `b5e9645f-3a34-43e2-995d-45c791200edb`, deployment `16399b86-33a0-4257-9045-4d79ae8779ec`, created November 11, 2026 at 02:45:52 UTC, 100% traffic. All six production articles returned HTTP 200 with their new decoded review scopes; production SEO endpoint checks passed. No search submission performed.
