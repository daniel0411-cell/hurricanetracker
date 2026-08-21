import type { StormArchive } from "../pages/storm/2026-arthur/_data/arthur";
import { arthur } from "../pages/storm/2026-arthur/_data/arthur";
import { bertha } from "../pages/storm/2026-bertha/_data/bertha";
import { cristobal } from "../pages/storm/2026-cristobal/_data/cristobal";

export interface StormArchiveIndexEntry {
  slug: string;
  url: string;
  title: string;
  description: string;
  category: string;
  body: string;
}

const archives: StormArchive[] = [arthur, bertha, cristobal];

export const stormArchivePages: StormArchiveIndexEntry[] = archives.map((storm) => ({
  slug: storm.name.toLowerCase(),
  url: `/storm/2026-${storm.name.toLowerCase()}/`,
  title: `${storm.classification} ${storm.name} 2026 NHC Archive`,
  description: storm.summary,
  category: "Storm Archive",
  body: [
    storm.name,
    storm.code,
    String(storm.year),
    storm.classification,
    storm.status,
    storm.basin,
    storm.pronunciation,
    storm.summary,
    ...storm.heroStats.map((stat) => `${stat.label} ${stat.value}`),
    storm.live.bulletin,
    ...storm.live.rows.map((row) => `${row.label} ${row.value}`),
    ...storm.timeline.map((event) => `${event.date} ${event.event}`),
    ...storm.impact.map((section) => `${section.title} ${section.body}`),
    ...storm.historical.map((entry) => `${entry.year} ${entry.classification} ${entry.summary} ${entry.comparison} ${entry.stats.map((s) => `${s.label} ${s.value}`).join(" ")}`),
    ...storm.forecast.map((section) => `${section.title} ${section.body}`),
    ...storm.preparedness.map((section) => `${section.title} ${section.body}`),
    ...storm.faqs.map((faq) => `${faq.question} ${faq.answer}`),
    ...storm.related.map((link) => `${link.title} ${link.body}`)
  ].join(" ")
}));
