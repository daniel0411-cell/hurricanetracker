function isFreshFeed(fetchedAt: string | undefined, maxAgeMinutes: number) {
  const age = Date.now() - Date.parse(fetchedAt ?? "");
  return Number.isFinite(age) && age >= -15 * 60_000 && age <= maxAgeMinutes * 60_000;
}

export function isOutlookAvailable(outlook: { issuedAt?: string | null; text?: string } | null | undefined) {
  return typeof outlook?.text === "string" && outlook.text.length > 0 && isFreshFeed(outlook.issuedAt ?? undefined, 8 * 60);
}

export function isStormFeedAvailable(feed: { storms?: Array<{ id?: string; latitudeNumeric?: number; longitudeNumeric?: number }>; fetchedAt?: string; cacheStatus?: string } | null) {
  return Array.isArray(feed?.storms)
    && feed.storms.every((storm) => storm && typeof storm.id === "string" && /^[A-Z]{2}\d{6}$/i.test(storm.id)
      && Number.isFinite(storm.latitudeNumeric) && Math.abs(storm.latitudeNumeric!) <= 90
      && Number.isFinite(storm.longitudeNumeric) && Math.abs(storm.longitudeNumeric!) <= 180)
    && feed.cacheStatus !== "stale"
    && isFreshFeed(feed.fetchedAt, 15);
}

export function isAlertFeedAvailable(feed: { alerts?: Array<{ event?: string }>; decisionLevel?: string; fetchedAt?: string; cacheStatus?: string } | null) {
  return Array.isArray(feed?.alerts)
    && feed.alerts.every((alert) => alert && typeof alert.event === "string" && alert.event.length > 0)
    && ["Monitor", "Prepare", "Act", "Leave"].includes(feed.decisionLevel ?? "")
    && feed.cacheStatus !== "stale"
    && isFreshFeed(feed.fetchedAt, 10);
}


export function isSurgeFeedAvailable(feed: { zip?: string; state?: string; latitude?: number; longitude?: number; surgeLevel?: string; relevantAlerts?: Array<{ event?: string; isSurge?: boolean }>; fetchedAt?: string } | null) {
  if (!feed || !/^\d{5}$/.test(feed.zip ?? "") || !/^[A-Z]{2}$/.test(feed.state ?? "")
    || !Number.isFinite(feed.latitude) || Math.abs(feed.latitude!) > 90
    || !Number.isFinite(feed.longitude) || Math.abs(feed.longitude!) > 180
    || !Array.isArray(feed.relevantAlerts)
    || !feed.relevantAlerts.every((alert) => alert && typeof alert.event === "string" && alert.event.length > 0 && typeof alert.isSurge === "boolean")
    || !isFreshFeed(feed.fetchedAt, 10)) return false;
  const expectedLevel = feed.relevantAlerts.some((alert) => alert.event === "Storm Surge Warning") ? "warning"
    : feed.relevantAlerts.some((alert) => alert.event === "Storm Surge Watch") ? "watch" : "none";
  return feed.surgeLevel === expectedLevel;
}
