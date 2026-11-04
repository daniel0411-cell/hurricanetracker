# HurricaneHub teaching media brief

## Goal

Produce media only when it lets the reader answer a concrete question that the text cannot explain as efficiently. The first implementation already supplies a Michael radar reading exercise, Ian layer comparison, NHC fictional surge map, and model valid-time exercise. Avoid commissioning more general storm/phone/forecaster covers.

## Priority 1: Eyewall replacement concept sequence

- Destination: `/blog/hurricane-eyewall-replacement-cycle-explained/`.
- Deliverable: three clearly labeled panels: original eyewall; two concentric eyewalls; outer ring replaces the inner ring. Show the eye, inner eyewall, outer eyewall, and a shared scale or explicit conceptual/no-scale label.
- Reader question: why can maximum sustained wind decrease while the wind field expands?
- Evidence anchor: Irma discussion 28, <https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml>. The discussion describes conditional evidence; it does not by itself supply all three observed stages.
- Preferred method: a controlled vector/HTML diagram for legible labels. A raster agent can produce an unlabeled base, but labels and factual relationships require project review. The result must say "Conceptual sequence, not observations or a forecast". Do not generate a fake satellite/radar sequence or assign invented measured wind speeds.
- Sizes: 1600 x 900 master and a stacked mobile version. Labels must remain readable at a 360 px viewport. Keep panel text short and provide a text equivalent.
- Alternative: authentic official radar/microwave sequence for one identified storm, with every panel's UTC time, sensor, product, legend and source retained. Verify reuse rights individually; an agency-hosted third-party image is not automatically public domain.

## Priority 2: Read one actual spaghetti plot

- Destination: `/hurricane-tracker/spaghetti-models/`.
- The implemented invented-time exercise already teaches initialization plus lead time. A future actual example should add model identifiers, early/late guidance, official forecast distinction and track spread.
- Start from an identified NWS historical teaching plot, for example the Danny example linked in <https://www.weather.gov/media/tbw/workouts/2021feb09_ww_models.pdf#page=7>; verify the slide, timestamp and original attribution before extraction.
- Keep the complete legend and initialization time. Add only numbered callouts and a separate answer key. Do not claim that line density is an address probability or draw an "official" cone from the lines.
- Deliver a master with original labels, one mobile crop per callout, source/rights record, alt and caption. A single reduced landscape image is insufficient if its legend cannot be read.

## Priority 3: Short official-product video with a written reading task

- Choose one NHC/NWS educational clip through the official catalog: <https://www.nhc.noaa.gov/TCvideos.shtml>.
- Suitable topic: wind-arrival timing versus alert expiration, or forecast cone versus hazard area.
- Before embedding, provide the exact video URL, publisher verification, publication date, relevant start/end timestamps, checked transcript excerpt, product version and one exercise with an answer.
- Use a click-to-load embed with a direct watch link and a written equivalent. Third-party video should not slow the initial page or be required to understand the article.
- No generic livestream, autoplay, or obsolete active-storm video presented as current. Reddit can supply reader questions; it is not evidence for evacuation, water treatment, medical or insurance advice.

## Required handoff for every asset

1. Original URL and publisher; storm/year and product if applicable.
2. Rights/credit information and any third-party restrictions.
3. Issue time/timezone, units, legend and spatial/reference datum where relevant.
4. Edit log: crop, resize, compression, callouts; preserve an untouched reference.
5. Final dimensions, file size, alt, caption, written explanation and reading-check answer.
6. Desktop and mobile preview showing legible labels and a full-size link.

Project content review must approve the factual explanation before publishing. Decide whether this project or another agent makes the remaining assets after reviewing this brief; no external production task has been sent.
