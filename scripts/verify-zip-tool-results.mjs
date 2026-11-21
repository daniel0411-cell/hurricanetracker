import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { isAlertFeedAvailable, isSurgeFeedAvailable } from '../src/lib/weatherFeedStatus.ts';

// Exercise the actual page handlers, including out-of-order fetch completions.
function harness(kind) {
  const elements = new Map();
  const timers = new Set();
  const el = (id) => {
    if (!elements.has(id)) elements.set(id, {
      value: '', content: '', className: '', listeners: {},
      get textContent() { return this.content; }, set textContent(v) { this.content = v; },
      get innerHTML() { return this.content; }, set innerHTML(v) { this.content = v; },
      classList: { add() {} }, addEventListener(type, handler) { this.listeners[type] = handler; }
    });
    return elements.get(id);
  };
  const context = vm.createContext({
    document: { querySelector: el }, AbortController, Date, encodeURIComponent,
    console: { error() {} }, isAlertFeedAvailable, isSurgeFeedAvailable,
    fetch: (...args) => context.respond(...args),
    setTimeout: (fn) => { timers.add(fn); return fn; }, clearTimeout: (fn) => timers.delete(fn),
  });
  const page = kind === 'county' ? 'county-hurricane-risk' : 'storm-surge-checker';
  const source = fs.readFileSync(`src/pages/tools/${page}.astro`, 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/^\s*import .*;$/gm, '');
  vm.runInContext(ts.transpile(source, { target: ts.ScriptTarget.ES2022 }), context);
  return {
    el, timers,
    set responder(fn) { context.respond = fn; },
    input(zip) { el(`#${kind}-zip`).value = zip; el(`#${kind}-zip`).listeners.input(); },
    submit(zip) { el(`#${kind}-zip`).value = zip; return el(`#${kind}-form`).listeners.submit({ preventDefault() {} }); },
    title: () => el(kind === 'county' ? '#county-result-title' : '#surge-level').content,
    body: () => el(kind === 'county' ? '#county-result' : '#surge-summary').content,
  };
}
const fresh = () => new Date().toISOString();
const location = (zip) => ({ zip, city: zip === '10001' ? 'New York City' : 'Miami', state: zip === '10001' ? 'NY' : 'FL', stateName: zip === '10001' ? 'New York' : 'Florida', latitude: '25.77', longitude: '-80.19' });
const alertFeed = () => ({ alerts: [], decisionLevel: 'Monitor', fetchedAt: fresh() });
const surgeFeed = (zip) => ({ ...location(zip), latitude: 25.77, longitude: -80.19, relevantAlerts: [], surgeLevel: 'none', fetchedAt: fresh() });
const response = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), { status, headers });
for (const kind of ['county', 'surge']) {
  const h = harness(kind);
  const success = (url) => {
    const zip = new URL(url, 'https://test.invalid').searchParams.get('zip');
    return Promise.resolve(response(kind === 'surge' ? surgeFeed(zip) : zip ? location(zip) : alertFeed()));
  };
  h.responder = success;
  await h.submit('10001');
  assert.match(h.body(), kind === 'county' ? /general live hurricane tracker/ : /ZIP 10001/);
  assert.doesNotMatch(h.body(), /tracker\/new-york/);
  await h.submit('33101');
  if (kind === 'county') assert.match(h.body(), /\/tracker\/florida\//);
  h.input('0');
  assert.doesNotMatch(h.body(), /Miami|0 active|0 tropical/);
  await h.submit('0');
  assert.match(h.title(), /valid ZIP/);
  for (const bad of [null, {}, { alerts: [], relevantAlerts: [] }, { ...(kind === 'county' ? alertFeed() : surgeFeed('33101')), fetchedAt: '2000-01-01T00:00:00Z' }]) {
    h.responder = success;
    await h.submit('33101');
    h.responder = async (url) => response(kind === 'county' && url.includes('/location/') ? location('33101') : bad);
    await h.submit('33101');
    assert.match(h.title(), /unavailable/);
    assert.doesNotMatch(h.body(), /Miami|0 active|0 tropical/);
  }
  for (const responder of [async () => response({ error: 'bad ZIP' }, 502), async () => { throw new Error('offline'); }]) {
    h.responder = success; await h.submit('33101');
    h.responder = responder; await h.submit('00000');
    assert.match(h.title(), /unavailable/);
    assert.doesNotMatch(h.body(), /Miami/);
  }
  let release;
  h.responder = async (url) => url.includes('10001') ? new Promise((resolve) => { release = () => resolve(response(kind === 'county' ? location('10001') : surgeFeed('10001'))); }) : success(url);
  const old = h.submit('10001');
  await h.submit('33101');
  const newest = h.body();
  release(); await old;
  assert.equal(h.body(), newest, 'late completion must not overwrite the newest result');
  h.responder = (_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new Error('timeout'))));
  const pending = h.submit('33101');
  assert.doesNotMatch(h.body(), /Miami/);
  for (const timer of h.timers) timer();
  await pending;
  assert.match(h.title(), /unavailable/);
  assert.equal(h.timers.size, 0);
  console.log(`[${kind}] success, state links, input invalidation, malformed/stale data, failure, race and timeout passed`);
}
// Verify that a malformed official upstream is rejected by the actual surge API.
const api = fs.readFileSync('src/pages/api/nws/surge.ts', 'utf8').replace(/^import .*;$/gm, '').replace(/export /g, '');
const apiContext = vm.createContext({ Response, URL, Date, console: { error() {} }, env: {}, fetch: async (url) => response(url.includes('zippopotam') ? { places: [{ 'place name': 'Miami', 'state abbreviation': 'FL', latitude: '25.77', longitude: '-80.19' }] } : {}) });
vm.runInContext(ts.transpile(api, { target: ts.ScriptTarget.ES2022 }) + '\nglobalThis.get = GET;', apiContext);
assert.equal((await apiContext.get({ url: new URL('https://test.invalid/?zip=33101') })).status, 502);
console.log('[surge API] missing upstream features rejected instead of returning zero alerts');
