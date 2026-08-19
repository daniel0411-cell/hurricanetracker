import { getNhcCurrentFeed } from "./nhcCurrent";
import { getNhcForecast } from "./nhcForecast";
import { relevantLocations } from "./stormRelevance";

export type StateStormMatch = {
  name: string;
  slug: string;
  distance: number;
  advisory?: string;
  updatedAt?: string;
};

export type StateCurrentStatus = {
  feedAvailable: boolean;
  activeStormCount: number;
  checkedAt: string;
  matches: StateStormMatch[];
};

export async function getStateCurrentStatus(stateCode: string): Promise<StateCurrentStatus> {
  const status: StateCurrentStatus = {
    feedAvailable: false,
    activeStormCount: 0,
    checkedAt: new Date().toISOString(),
    matches: []
  };

  try {
    const { feed } = await getNhcCurrentFeed();
    status.feedAvailable = true;
    status.activeStormCount = feed.storms.length;
    status.checkedAt = feed.updatedAt ?? feed.fetchedAt;

    for (const storm of feed.storms) {
      if (!storm.id || !storm.name) continue;
      const forecast = await getNhcForecast(storm.id);
      const current = Number.isFinite(storm.latitudeNumeric) && Number.isFinite(storm.longitudeNumeric)
        ? [storm.longitudeNumeric!, storm.latitudeNumeric!] as [number, number]
        : undefined;
      const relevance = relevantLocations(forecast?.track ?? [], current);
      const stateCities = relevance.cities.filter((city) => city.stateCode === stateCode);
      if (!stateCities.length) continue;

      status.matches.push({
        name: storm.name,
        slug: storm.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        distance: Math.min(...stateCities.map((city) => city.distanceMiles)),
        advisory: forecast?.advisoryNumber,
        updatedAt: forecast?.advisory ?? storm.lastUpdate
      });
    }
  } catch (error) {
    console.error("State current hurricane status failed", { stateCode, error });
  }

  status.matches.sort((a, b) => a.distance - b.distance);
  return status;
}

export function stateCurrentFaqs(stateName: string, status: StateCurrentStatus) {
  const nearest = status.matches[0];
  const unavailable = `The live National Hurricane Center check is temporarily unavailable. Check the NHC and local NWS alerts for the latest ${stateName} conditions.`;
  const nearby = nearest
    ? `${nearest.name} is the nearest active NHC system to monitor for ${stateName}. Its current or official forecast center path comes within approximately ${nearest.distance} miles of an established ${stateName} city tracker. This is not a landfall or impact prediction.`
    : `No active NHC system currently has a center position or official forecast path within 500 miles of this site's established ${stateName} city trackers. Forecasts can change, so continue checking official NHC and NWS updates.`;

  return [
    {
      question: `Is there a hurricane in ${stateName} right now?`,
      answer: status.feedAvailable ? nearby : unavailable
    },
    {
      question: `Is a hurricane coming to ${stateName}?`,
      answer: status.feedAvailable
        ? nearest
          ? `${nearest.name} has the nearest active center or forecast path in this check, approximately ${nearest.distance} miles from an established ${stateName} city tracker. Distance alone cannot predict landfall or impacts; use the official NHC cone, NWS alerts, and local emergency guidance.`
          : `No active NHC center or official forecast path currently meets this site's 500-mile ${stateName} relevance threshold. This does not rule out later forecast changes or hazards outside the center path.`
        : unavailable
    },
    {
      question: `Where is the nearest active hurricane to ${stateName}?`,
      answer: status.feedAvailable
        ? nearest
          ? `${nearest.name} is the nearest active NHC system in this check, with a current or forecast center-path point approximately ${nearest.distance} miles from an established ${stateName} city tracker.`
          : `There is no active NHC system with a current or official forecast center-path point within 500 miles of this site's established ${stateName} city trackers.`
        : unavailable
    }
  ];
}
