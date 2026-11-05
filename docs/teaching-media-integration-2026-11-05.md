# Teaching media integration: November 5, 2026

## Eyewall replacement

Destination: `/blog/hurricane-eyewall-replacement-cycle-explained/`.

Original HurricaneHub vector diagrams are in `public/images/guides/eyewall-cycle-{desktop,mobile}.svg`. Desktop is 1600 x 900; mobile is 1080 x 1800. Red retains the original eyewall's identity, teal the outer eyewall's identity. Panel 3 uses a dashed fading inner ring. Dimensions, spacing and timing are conceptual, not measurements. No observed radar, wind radii, agency logo or forecast is synthesized.

The article supplies a text equivalent and reading check, retains the separate NWS Michael radar example, and adds dated Irma context. Evidence: [NHC Irma final report, printed page 3](https://www.nhc.noaa.gov/data/tcr/AL112017_Irma.pdf#page=3) and [discussion 28](https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml). Separate passages in the report must not be represented as one observed three-frame cycle. The AOML supplementary FAQ failed access during media research and is not claimed as freshly checked evidence.

## Historical Joaquin reading exercise

Destination: `/hurricane-tracker/spaghetti-models/`.

Public assets: `public/images/guides/joaquin-2015/`. `original.png` is the unchanged 1327 x 1002 embedded chart from page 15 of [Michael J. Brennan's April 20, 2017 NHC presentation](https://www.nhc.noaa.gov/outreach/presentations/NHC2017_TrackForecasting.pdf#page=15). `reading-annotated.webp` is 1800 x 1400, with numbered outline boxes and explanatory margins only. Four PNG details preserve original pixels using nearest-neighbor enlargement. No trajectory, model code, original mark or numerical field was replaced.

Original header: `al112015 - JOAQUIN 2015100100`. The date-time group is October 1, 2015, hour 00 using the ATCF UTC convention; UTC is not printed on the raster. This chart cycle does not establish all models' native initialization. The embedded original prints EMX2/EGR2, differing from the slide's large EMXI/ERGI overlay labels. The public exercise follows the embedded original and discloses the discrepancy.

HWFI, EMX2 and TVCA are explained using [NHC's technique list](https://ftp.nhc.noaa.gov/atcf/docs/nhc_techlist.dat), [ATCF notes](https://ftp.nhc.noaa.gov/atcf/README) and [NHC early/late guidance documentation](https://www.nhc.noaa.gov/modelsummary.shtml). Later consensus definitions do not establish exact 2015 membership. Chart-generation time, per-point forecast hours, symbol intervals, point-specific valid times, native-run history and the unlabeled black-symbol series are unresolved. The reading question therefore tests identification and missing information; separate invented rows teach time arithmetic.

Credit: Original chart NOAA/NWS National Hurricane Center; numbered annotations and explanatory text HurricaneHub. ATCF/KNHC marks retained. No separate third-party credit or restrictive notice appears on the selected embedded chart. [NWS reuse policy](https://www.weather.gov/disclaimer) applies; no endorsement implied. The rejected Danny/NCAR candidate is not published.

Full source PDF SHA-256: `ddcd5617fc1263733280cd2d8d20424c863c78ef58983a7b50b832a90e87ba51`.

Editable annotation SVG, compositor, exact crop coordinates, raw source PDFs, source hashes and research logs remain in `scratch/media-handoff/spaghetti-reading/`; eyewall compositor and exports remain in `scratch/media-handoff/eyewall-cycle-codex-2026-11-05/`. Only selected public exports are included in this release. Neither image is a current forecast or a source of city landfall probabilities.
