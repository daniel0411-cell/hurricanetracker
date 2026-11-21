import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
const compile = (s, module = ts.ModuleKind.ESNext) => ts.transpileModule(s, { compilerOptions: { target: ts.ScriptTarget.ES2022, module } }).outputText;
const load = async (path) => import(`data:text/javascript;base64,${Buffer.from(compile(await readFile(path, 'utf8'))).toString('base64')}`);
const presentation = await load('src/lib/briefPresentation.ts');
const weather = await load('src/lib/weather.ts');
const feeds = await load('src/lib/weatherFeedStatus.ts');
assert.equal(presentation.briefTime('bad'), 'time unavailable');
assert.equal(presentation.briefTime(), 'time unavailable');
assert.equal(presentation.briefTime('2026-11-21T10:00:00-05:00'), '2026-11-21 15:00:00 UTC');
for (const bad of ['javascript:alert(1)', 'https://www.nhc.noaa.gov.evil.test/x', 'https://user:pass@www.nhc.noaa.gov/x', 'http://www.nhc.noaa.gov/x']) assert.equal(presentation.officialBriefUrl(bad, ['www.nhc.noaa.gov']), '');
for (const count of [0, 1, 7]) {
  assert.match(presentation.briefCount(count, 'state alerts'), new RegExp(`Showing ${Math.min(count, 5)} of ${count}`));
  const html = presentation.briefAlertItems(Array.from({ length: count }, (_, i) => ({ event: 'Flood Warning', headline: '<img src=x onerror=alert(1)>', id: `https://api.weather.gov/alerts/${i}` })));
  assert.equal((html.match(/<li>/g) || []).length, Math.min(count, 5));
  assert.ok(!html.includes('<img'));
}
assert.equal((presentation.briefStormItems(Array.from({ length: 7 }, () => ({ id: 'AL012026', publicAdvisory: { url: 'https://www.nhc.noaa.gov/text/example.shtml' } }))).match(/<li>/g) || []).length, 5);
assert.match(presentation.briefStormItems([{ id: 'AL012026', lastUpdate: 'invalid', publicAdvisory: 'javascript:alert(1)' }]), /time unavailable/);
assert.ok(!presentation.briefStormItems([{ publicAdvisory: 'javascript:alert(1)' }]).includes('href='));
class Element {
  value = ''; handlers = {}; html = '';
  set innerHTML(s) { this.html = s; } get innerHTML() { return this.html; }
  set textContent(s) { this.html = s; } get textContent() { return this.html; }
  get innerText() { return this.html; }
  addEventListener(event, fn) { this.handlers[event] = fn; }
}
const source = await readFile('src/pages/tools/hurricane-brief.astro', 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/^\s*import .*;$/gm, '');
const elements = Object.fromEntries(['brief-form','brief-zip','brief-needs','brief-status','brief-output','brief-print','brief-copy'].map(id => [`#${id}`, new Element()]));
let mode = 'good', resolvePending;
const timestamp = new Date().toISOString();
const response = (body, stale = false) => ({ ok: true, json: async () => body, headers: { get: () => stale ? 'stale' : null } });
const context = vm.createContext({ ...presentation, ...weather, ...feeds, Date, URL, AbortSignal, console: { error() {} }, document: { querySelector: s => elements[s] }, window: { print() {} }, navigator: { clipboard: { writeText: async () => {} } }, fetch: async url => {
  if (url.startsWith('/api/location')) {
    if (mode === 'pending') return new Promise(resolve => { resolvePending = resolve; });
    return response({ zip: '33139', state: 'FL', stateName: 'Florida', city: 'Miami Beach' });
  }
  if (mode === 'fail') throw new Error('network unavailable');
  if (url.includes('/nws/')) return response({ alerts: mode === 'malformed' ? [{}] : [], decisionLevel: 'Monitor', fetchedAt: timestamp }, mode === 'stale');
  return response({ storms: [], fetchedAt: timestamp });
} });
vm.runInContext(compile(script, ts.ModuleKind.None), context);
const submit = () => elements['#brief-form'].handlers.submit({ preventDefault() {} });
elements['#brief-zip'].value = '33139';
await submit();
assert.match(elements['#brief-output'].innerHTML, /NWS feed retrieved:/);
assert.match(elements['#brief-output'].innerHTML, /NHC feed retrieved:/);
assert.match(elements['#brief-output'].innerHTML, /Showing 0 of 0/);
for (mode of ['stale', 'malformed', 'fail']) { await submit(); assert.match(elements['#brief-output'].textContent, /No current brief could be verified/); assert.ok(!elements['#brief-output'].innerHTML.includes('No active state alerts')); }
mode = 'good'; await submit();
elements['#brief-zip'].handlers.input();
assert.match(elements['#brief-output'].textContent, /previous result has been cleared/);
mode = 'pending'; const pending = submit();
elements['#brief-zip'].handlers.input();
resolvePending(response({ zip: '33139', state: 'FL', stateName: 'Florida' }));
await pending;
assert.match(elements['#brief-output'].textContent, /previous result has been cleared/);
console.log('Brief checks passed: counts, UTC/missing times, safe URLs, escaping, empty/stale/malformed/failed feeds, invalidation and request race.');
