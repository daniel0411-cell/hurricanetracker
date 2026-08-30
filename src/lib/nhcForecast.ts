import { env } from "cloudflare:workers";
import { unzipSync, strFromU8 } from "fflate";
import { getNhcCurrentFeed } from "./nhcCurrent";
import { knotsToMph } from "./wind-speed";

type Coordinate = [number, number];
export type NhcForecastFeed = { stormId: string; advisoryNumber: string; advisory?: string; fetchedAt: string; source: string; track: Coordinate[]; points: Array<{ coordinates: Coordinate; hour: number | null; windMph: number | null }>; cone: Coordinate[] };
export type AdvisoryHistoryItem = { advisoryNumber: string; time: string; classification?: string; intensity?: string; pressure?: string; windSpeedMph?: number | null; pressureMb?: number | null; latitude?: string; longitude?: string; movementDir?: number | string; movementSpeed?: number | string };

export async function getAdvisoryHistory(id: string): Promise<AdvisoryHistoryItem[]> {
  return (await env.HURRICANEHUB_CACHE?.get(`nhc:advisory-history:${id.toLowerCase()}`, "json") as AdvisoryHistoryItem[] | null) ?? [];
}

function coordinates(text: string): Coordinate[] {
  return text.trim().split(/\s+/).map((value) => value.split(",").map(Number) as Coordinate).filter(([lon, lat]) => Number.isFinite(lon) && Number.isFinite(lat));
}
function numeric(value?: string | number) {
  const parsed = Number.parseFloat(String(value ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}
function placemarks(kml: string) { return [...kml.matchAll(/<Placemark\b[\s\S]*?<\/Placemark>/gi)].map((match) => match[0]); }
function parseTrack(kml: string) {
  const marks = placemarks(kml);
  const lines = marks.map((mark) => {
    const value = mark.match(/<LineString\b[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>/i)?.[1];
    const period = Number(mark.match(/<Data\s+name="fcstpd">[\s\S]*?<value>(\d+)<\/value>/i)?.[1] ?? 0);
    return value ? { period, coordinates: coordinates(value) } : null;
  }).filter((value): value is NonNullable<typeof value> => Boolean(value)).sort((a, b) => b.period - a.period);
  const points = marks.map((mark) => {
    const value = mark.match(/<Point\b[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>/i)?.[1];
    const point = value ? coordinates(value)[0] : null;
    if (!point) return null;
    const description = mark.match(/<description>([\s\S]*?)<\/description>/i)?.[1] ?? "";
    const hourMatch = description.match(/(\d+)\s*hr\s*Forecast/i)?.[1];
    const wind = Number(description.match(/Maximum Wind:\s*\d+\s*knots\s*\((\d+)\s*mph\)/i)?.[1] ?? NaN);
    return { coordinates: point, hour: hourMatch ? Number(hourMatch) : (/Advisory Information/i.test(description) ? 0 : null), windMph: Number.isFinite(wind) ? wind : null };
  }).filter((value): value is NonNullable<typeof value> => Boolean(value));
  return { line: lines[0]?.coordinates ?? [], points };
}
function parseCone(kml: string) {
  const rings = [...kml.matchAll(/<Polygon\b[\s\S]*?<outerBoundaryIs>[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>[\s\S]*?<\/outerBoundaryIs>[\s\S]*?<\/Polygon>/gi)].map((match) => coordinates(match[1])).filter((ring) => ring.length >= 4).sort((a, b) => b.length - a.length);
  const ring = rings[0] ?? [];
  if (ring.length <= 320) return ring;
  const step = Math.ceil(ring.length / 320);
  const result = ring.filter((_, index) => index % step === 0);
  if (result.at(-1) !== ring.at(-1) && ring.at(-1)) result.push(ring.at(-1)!);
  return result;
}
async function readKml(url: string) {
  if (!/^https:\/\/www\.nhc\.noaa\.gov\//i.test(url)) throw new Error("Invalid NHC KMZ URL");
  const response = await fetch(url, { signal: AbortSignal.timeout(8000), headers: { "user-agent": "HurricaneHub/1.0 (https://www.hurricanetracker.cc)" } });
  if (!response.ok) throw new Error(`NHC KMZ returned ${response.status}`);
  const entry = Object.entries(unzipSync(new Uint8Array(await response.arrayBuffer()))).find(([name]) => name.toLowerCase().endsWith(".kml"));
  if (!entry) throw new Error("NHC KMZ did not contain KML");
  return strFromU8(entry[1]);
}

export async function getNhcForecast(id: string): Promise<NhcForecastFeed | null> {
  const { feed } = await getNhcCurrentFeed();
  const storm = feed.storms.find((item) => item.id?.toLowerCase() === id.toLowerCase());
  if (!storm) return null;
  const advisoryNumber = storm.forecastTrack?.advNum ?? "current";
  const cacheKey = `nhc:forecast:${id.toLowerCase()}:${advisoryNumber}`;
  const cached = await env.HURRICANEHUB_CACHE?.get(cacheKey, "json") as NhcForecastFeed | null;
  if (cached) return cached;
  if (!storm.forecastTrack?.kmzFile || !storm.trackCone?.kmzFile) return null;
  const [trackKml, coneKml] = await Promise.all([readKml(storm.forecastTrack.kmzFile), readKml(storm.trackCone.kmzFile)]);
  const parsed = parseTrack(trackKml);
  const result: NhcForecastFeed = { stormId: id.toLowerCase(), advisoryNumber, advisory: storm.forecastTrack.issuance ?? storm.lastUpdate, fetchedAt: new Date().toISOString(), source: "National Hurricane Center", track: parsed.line, points: parsed.points, cone: parseCone(coneKml) };
  await env.HURRICANEHUB_CACHE?.put(cacheKey, JSON.stringify(result), { expirationTtl: 600 });
  const historyKey = `nhc:advisory-history:${id.toLowerCase()}`;
  const history = await getAdvisoryHistory(id);
  if (!history.some((item) => item.advisoryNumber === advisoryNumber)) {
    const windKnots = numeric(storm.intensity);
    history.unshift({ advisoryNumber, time: storm.lastUpdate ?? result.fetchedAt, classification: storm.classification, intensity: storm.intensity ?? storm.windSpeed, pressure: storm.pressure, windSpeedMph: windKnots == null ? numeric(storm.windSpeed) : knotsToMph(windKnots), pressureMb: numeric(storm.pressure), latitude: storm.latitude, longitude: storm.longitude, movementDir: storm.movementDir, movementSpeed: storm.movementSpeed });
    await env.HURRICANEHUB_CACHE?.put(historyKey, JSON.stringify(history.slice(0, 12)));
  }
  return result;
}
