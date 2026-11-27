// Run against an actual SSR server, not just prerendered HTML:
// node scripts/verify-rendered-images.mjs http://127.0.0.1:4321
import { readFileSync } from 'node:fs';
import { imageSize } from './image-metadata.mjs';
import ts from 'typescript';
const base = process.argv[2];
if (!base) throw new Error('Supply local preview or production origin');
const registry = JSON.parse(readFileSync('src/data/representativeImages.json'));
const metadata = JSON.parse(readFileSync('src/data/imageMetadata.json'));
function assert(value, message) { if (!value) throw new Error(message); }
function attrs(tag) { return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1],m[2]])); }
const resources = new Set();
const js = ts.transpileModule(readFileSync('src/data/blog.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
for (const [route, entry] of Object.entries(registry)) {
  const response = await fetch(new URL(route, base));
  assert(response.status === 200, `${route}: HTTP ${response.status}`);
  const html = await response.text();
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0]));
  const meta = key => metas.find(m => m.property === key || m.name === key)?.content;
  const absolute = `https://www.hurricanetracker.cc${entry.src}`;
  assert(meta('og:image') === absolute && meta('twitter:image') === absolute, `${route}: share image mismatch`);
  assert(meta('og:image:width') === String(metadata[entry.src].width) && meta('og:image:height') === String(metadata[entry.src].height), `${route}: OG intrinsic dimensions mismatch`);
  assert(meta('og:image:alt') === meta('twitter:image:alt') && meta('og:image:alt')?.length, `${route}: missing/inconsistent image description`);
  assert(meta('robots')?.includes('max-image-preview:large'), `${route}: missing large preview permission`);
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map(m => attrs(m[0]));
  assert(imgs.some(i => i.src === entry.src), `${route}: representative absent from body img`);
  if (entry.mobileSrc) {
    const sources = [...html.matchAll(/<source\b[^>]*>/g)].map(m => attrs(m[0]));
    const source = sources.find(s => s.srcset === entry.mobileSrc);
    const mobile = metadata[entry.mobileSrc];
    assert(source && +source.width === mobile.width && +source.height === mobile.height && source.media, `${route}: missing or incorrectly sized mobile source`);
    resources.add(entry.mobileSrc);
  }
  for (const img of imgs) {
    const size = metadata[img.src];
    if (!size) continue;
    assert(img.alt?.trim(), `${route}: missing alt for ${img.src}`);
    assert(+img.width === size.width && +img.height === size.height, `${route}: incorrect dimensions for ${img.src}`);
  }
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => { const v = JSON.parse(m[1]); return v['@graph'] ?? [v]; });
  assert(schemas.some(s => s['@type'] === 'WebPage' && s.primaryImageOfPage?.url === absolute), `${route}: missing primary image schema`);
  for (const s of schemas.filter(s => ['Article','BlogPosting','LiveBlogPosting'].includes(s['@type']))) assert(s.image === absolute, `${route}: Article image mismatch`);
  resources.add(entry.src);
}
// Also inspect legacy covers/figures through the real blog SSR renderer.
for (const post of blogPosts.filter(p => !registry[`/blog/${p.slug}/`])) {
  const response = await fetch(new URL(`/blog/${post.slug}/`, base));
  assert(response.status === 200, `${post.slug}: SSR failed`);
  const html = await response.text();
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const img = attrs(match[0]), size = metadata[img.src];
    if (!size) continue;
    assert(img.alt?.trim() && +img.width === size.width && +img.height === size.height, `${post.slug}: invalid body image dimensions/alt`);
  }
}
for (const src of resources) {
  const response = await fetch(new URL(src, base));
  assert(response.status === 200 && response.headers.get('content-type')?.startsWith('image/'), `${src}: resource unavailable/wrong MIME`);
  assert(!/noindex|noimageindex/i.test(response.headers.get('x-robots-tag') ?? ''), `${src}: blocked preview header`);
  const actual = imageSize(Buffer.from(await response.arrayBuffer()), src);
  assert(actual.width === metadata[src].width && actual.height === metadata[src].height, `${src}: served dimensions differ`);
}
const robots = await (await fetch(new URL('/robots.txt', base))).text();
assert(!/^Disallow:\s*\/images\/?\s*$/mi.test(robots), 'Images directory blocked by robots.txt');
const notFound = await fetch(new URL('/404/', base));
assert(/name="robots" content="noindex,follow"/.test(await notFound.text()), '404 must remain noindex');
const preview = await fetch(new URL('/design-preview/blog-article/', base));
assert(/noindex/.test(preview.headers.get('x-robots-tag') ?? ''), 'Design preview noindex header missing');
console.log(`Rendered image acceptance passed: ${Object.keys(registry).length} representative pages, all ${blogPosts.length} blog image layouts, ${resources.size} image resources, 404 and preview restrictions. Origin: ${base}`);
