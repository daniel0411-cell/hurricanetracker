import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

async function load(file) {
  const { outputText } = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
const [{ hurricaneCities }, { nearbyStateCities, cityDistanceKm }, { blogPosts }, { getBlogActions, blogActionChoices }] = await Promise.all([
  load('src/data/cities.ts'), load('src/lib/cityRecommendations.ts'), load('src/data/blog.ts'), load('src/data/blogActions.ts')
]);

// Known geography catches degree/radian mistakes and reversed distance ordering.
const miami = hurricaneCities.find(city => city.slug === 'miami');
const originalOrder = hurricaneCities.map(city => city.slug);
const nearest = nearbyStateCities(miami, hurricaneCities);
assert.equal(nearest[0].slug, 'fort-lauderdale');
assert.ok(cityDistanceKm(miami, nearest[0]) > 30 && cityDistanceKm(miami, nearest[0]) < 50);
assert.equal(cityDistanceKm(miami, miami), 0);
for (const city of hurricaneCities) {
  const result = nearbyStateCities(city, hurricaneCities);
  assert.ok(result.length <= 6);
  assert.ok(result.every(other => other.stateCode === city.stateCode && other.slug !== city.slug));
  assert.equal(new Set(result.map(other => other.slug)).size, result.length);
  for (let i = 1; i < result.length; i++) assert.ok(cityDistanceKm(city, result[i - 1]) <= cityDistanceKm(city, result[i]));
}
assert.deepEqual(hurricaneCities.map(city => city.slug), originalOrder, 'recommendations must not mutate city data');
assert.deepEqual(nearbyStateCities(miami, [miami]), [], 'never fill an empty same-state list with distant states');

const slugs = new Set(blogPosts.map(post => post.slug));
assert.deepEqual(Object.keys(blogActionChoices).sort(), [...slugs].sort(), 'every published article must have an explicit editorial choice');
for (const post of blogPosts) {
  const choices = getBlogActions(post.slug);
  assert.equal(choices.length, 2);
  assert.equal(new Set(choices.map(action => action.href)).size, 2);
  for (const action of choices) {
    assert.notEqual(action.href, `/blog/${post.slug}/`);
    if (action.href.startsWith('/blog/')) assert.ok(slugs.has(action.href.split('/')[2]), `missing blog ${action.href}`);
    else assert.ok(['.astro', '.ts', '/index.astro'].some(suffix => fs.existsSync(`src/pages${action.href.slice(0, -1)}${suffix}`)), `missing route ${action.href}`);
  }
}
assert.ok(getBlogActions('hurricane-power-outage-food-medicine-plan').some(action => action.href === '/tools/power-outage-planner/'));
assert.ok(getBlogActions('hurricane-additional-living-expenses-ale-coverage').every(action => /insurance|nfip/.test(action.href)));
assert.ok(getBlogActions('how-far-is-a-hurricane-from-me').some(action => action.href === '/tools/storm-distance-calculator/'));
console.log(`[editorial-recommendations] OK — ${hurricaneCities.length} city recommendations and ${blogPosts.length} explicit article mappings.`);
