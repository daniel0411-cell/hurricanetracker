# Historical teaching diagrams: provenance

Both diagrams are HurricaneHub explanatory compositions transcribed from NOAA/NHC source data, not screenshots of official products, current forecasts or generated scientific observations. Editable SVGs and lossless WebP exports live in `public/images/guides/` with desktop and mobile variants. Source files are retained locally under `scratch/media-handoff/` with extraction/rendering scripts, exact rows, retrieval timestamps, metadata and validation results.

## Michael (2018), AL142018

Published in `/blog/hurricane-rapid-intensification/`.

Source: [NHC Atlantic HURDAT2, September 23, 2026 release](https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2025-092326.txt). SHA-256 of retained source: `75202780ce56c8458f16fbef5fb8a026b99b00878dbb95c458211b3e6ef125b4`.

| UTC | Maximum sustained wind |
| --- | --- |
| 2018-10-09 12:00 | 90 kt |
| 2018-10-09 18:00 | 100 kt |
| 2018-10-10 12:00 | 125 kt |

The 24-hour difference is +35 kt; the last 18 hours give +25 kt. The diagram spaces times proportionally (6h:18h = 1:3); the connecting line is a time axis, not a wind curve. Best track is post-storm analysis, not a raw instrument record. Definition: [NHC glossary](https://www.nhc.noaa.gov/aboutgloss.shtml), at least 30 kt in 24 hours.

Assets: `michael-24h-{desktop,mobile}.{svg,webp}`, 1600 x 1000 and 720 x 1480.

## Irma (2017), AL112017

Published in `/hurricane-tracker/why-hurricane-forecasts-change/`.

- [Discussion 26](https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml): public issuance September 5, 2017, 11 AM AST / 15:00 UTC. Source SHA-256: `3d7b4d6376813ad3c15a0e0f15535dacef3c202bbfa097fe78fe2413184f4287`.
- [Discussion 28](https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml): public issuance September 5, 2017, 11 PM AST / September 6, 03:00 UTC. Source SHA-256: `5e42ac0804431a041e2cd0149fae38f4796095199e085ee67f477b88adbc278f`.

```text
Discussion 26: 24H 06/1200Z 18.1N 63.0W 150 KT 175 MPH
Discussion 28: 12H 06/1200Z 18.1N 63.1W 155 KT 180 MPH
Wrong counterpart from Discussion 28:
24H 07/0000Z 19.1N 65.9W 150 KT 175 MPH
```

The matched valid time is September 6, 2017 at 12:00 UTC, 21/9 hours after the respective public issue times. Printed horizon labels are preserved, not redefined as elapsed hours after public issuance or model initialization. The update is +5 kt and 0.1 degree west at unchanged latitude. It is a forecast revision, not observed intensification, an accuracy test, or proof of an eyewall-replacement cause. The two 24H rows have target times 12 hours apart.

Assets: `irma-valid-time-{desktop,mobile}.{svg,webp}`, 1600 x 1320 and 720 x 2080. Fields are regrouped and dates expanded; numerical values and original labels are preserved. No model tracks, probability surface or official cone is invented.

## Attribution and verification

Credit: Data NOAA/NHC; diagram HurricaneHub. [NWS reuse policy](https://www.weather.gov/disclaimer) generally places NWS information in the public domain unless otherwise specified. No official logo or endorsement is implied.

Verified source hashes, time arithmetic, SVG text bounds/overlaps and 1440px/360px previews in each handoff. Each published figure retains explanatory text, alt, source links and a reading task; responsive variants contain the complete comparison. The original source downloads were not altered.
