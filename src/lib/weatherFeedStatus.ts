function isFreshFeed(fetchedAt: string | undefined, maxAgeMinutes: number) {
  const age = Date.now() - Date.parse(fetchedAt ?? "");
  return Number.isFinite(age) && age >= -15 * 60_000 && age <= maxAgeMinutes * 60_000;
}

export function isStormFeedAvailable(feed: { storms?: Array<{ id?: string }>; fetchedAt?: string } | null) {
  return Array.isArray(feed?.storms)
    && feed.storms.every((storm) => storm && typeof storm.id === "string" && storm.id.length > 0)
    && isFreshFeed(feed.fetchedAt, 15);
}

export function isAlertFeedAvailable(feed: { alerts?: Array<{ event?: string }>; decisionLevel?: string; fetchedAt?: string } | null) {
  return Array.isArray(feed?.alerts)
    && feed.alerts.every((alert) => alert && typeof alert.event === "string" && alert.event.length > 0)
    && ["Monitor", "Prepare", "Act", "Leave"].includes(feed.decisionLevel ?? "")
    && isFreshFeed(feed.fetchedAt, 10);
}
