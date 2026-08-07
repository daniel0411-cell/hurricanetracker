// Canonical state tracker pages live at /tracker/{slug}/.
// The legacy /hurricane-tracker/{slug}/ routes 301-redirect here (see src/middleware.ts).
export const TRACKER_SLUGS = [
  "florida",
  "texas",
  "louisiana",
  "north-carolina",
  "south-carolina",
  "georgia",
  "alabama",
  "mississippi",
  "virginia"
] as const;

export const TRACKER_SLUG_SET = new Set<string>(TRACKER_SLUGS);
