type CityPoint = { slug: string; stateCode: string; lat: number; lon: number };

// Browsing proximity only: great-circle distance cannot describe a drivable route.
export function cityDistanceKm(a: CityPoint, b: CityPoint) {
  const radians = Math.PI / 180;
  const dLat = (b.lat - a.lat) * radians;
  const dLon = (b.lon - a.lon) * radians;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * radians) * Math.cos(b.lat * radians) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, Math.max(0, h))));
}

export function nearbyStateCities<T extends CityPoint>(city: CityPoint, cities: T[], limit = 6): T[] {
  return cities.filter((candidate) => candidate.stateCode === city.stateCode && candidate.slug !== city.slug)
    .sort((a, b) => cityDistanceKm(city, a) - cityDistanceKm(city, b) || a.slug.localeCompare(b.slug))
    .slice(0, limit);
}
