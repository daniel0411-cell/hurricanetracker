import { hurricaneCities } from "../data/cities";
import { coastalStates } from "../data/states";

type Coordinate = [number, number];

function distanceMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const rad = Math.PI / 180;
  const a = Math.sin((lat2 - lat1) * rad / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin((lon2 - lon1) * rad / 2) ** 2;
  return 3959 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function relevantLocations(track: Coordinate[], current?: Coordinate) {
  const points = [...track, ...(current ? [current] : [])];
  if (!points.length) return { cities: [], states: [] };
  const cities = hurricaneCities.map((city) => ({
    ...city,
    distanceMiles: Math.round(Math.min(...points.map(([lon, lat]) => distanceMiles(city.lat, city.lon, lat, lon))))
  })).filter((city) => city.distanceMiles <= 500).sort((a, b) => a.distanceMiles - b.distanceMiles).slice(0, 8);
  const stateCodes = new Set(cities.map((city) => city.stateCode));
  const states = coastalStates.filter((state) => stateCodes.has(state.code)).sort((a, b) => a.priority - b.priority);
  return { cities, states };
}
