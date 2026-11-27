import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { imageSize } from './image-metadata.mjs';
import ts from 'typescript';

const registry = JSON.parse(readFileSync('src/data/representativeImages.json', 'utf8'));
const source = readFileSync('src/data/blog.ts', 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const images = {};
function scan(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    const path = `${dir}/${e.name}`;
    if (e.isDirectory()) scan(path);
    else if (/\.(png|jpe?g|webp|svg|gif)$/i.test(path)) {
      const bytes = readFileSync(path);
      images[path.slice(6)] = { ...imageSize(bytes, path), bytes: bytes.length };
    }
  }
}
scan('public/images');
for (const [route, entry] of Object.entries(registry)) {
  if (route !== '/' && !/^\/.*\/$/.test(route)) throw new Error(`Noncanonical representative route: ${route}`);
  for (const key of ['src','alt','creator','sourceUrl','rights','rightsUrl','reviewed','context']) {
    if (!entry[key]) throw new Error(`${route}: missing ${key}`);
  }
  for (const key of ['sourceUrl','rightsUrl']) if (new URL(entry[key]).protocol !== 'https:') throw new Error(`${route}: invalid ${key}`);
  const size = images[entry.src];
  if (!size || !size.width || !size.height) throw new Error(`${route}: missing/invalid representative image`);
  if (size.bytes > 750_000) throw new Error(`${route}: representative exceeds 750 KB review budget`);
  if (entry.mobileSrc) {
    const mobile = images[entry.mobileSrc];
    if (!mobile?.width || !mobile.height || mobile.bytes > 750_000) throw new Error(`${route}: missing or oversized mobile representative`);
  }
  if (route.startsWith('/blog/')) {
    const post = blogPosts.find(p => route === `/blog/${p.slug}/`);
    const figure = post?.figures?.find(f => f.src === entry.src);
    if (!post) {
      // Independent Astro articles do not belong to blog.ts. Verify their real
      // presentation source as well; rendered acceptance checks the final HTML.
      const standalone = `src/pages${route.slice(0,-1)}.astro`;
      if (!existsSync(standalone)) throw new Error(`${route}: missing blog source`);
      const body = readFileSync(standalone, 'utf8');
      if (!body.includes(`src="${entry.src}"`) || !body.includes('caption="') || !body.includes('alt="')) throw new Error(`${route}: standalone figure absent/incomplete`);
      if (entry.mobileSrc && !body.includes(`mobileSrc="${entry.mobileSrc}"`)) throw new Error(`${route}: standalone mobile figure absent`);
    } else if (!figure && post.image !== entry.src) throw new Error(`${route}: image absent from body`);
    if (figure && !figure.caption) throw new Error(`${route}: missing context caption`);
  }
}
for (const post of blogPosts) {
  for (const figure of post.figures ?? []) {
    if (!images[figure.src] || !figure.alt?.trim() || !figure.caption?.trim()) throw new Error(`${post.slug}: incomplete figure`);
    if (figure.mobileSrc && !images[figure.mobileSrc]) throw new Error(`${post.slug}: missing mobile image`);
    if (figure.afterSection && !post.sections.some(s => s.heading === figure.afterSection)) throw new Error(`${post.slug}: figure placement does not match a section`);
  }
  if (!images[post.image]) throw new Error(`${post.slug}: missing cover`);
}
const out = `${JSON.stringify(images, null, 2)}\n`;
const target = 'src/data/imageMetadata.json';
let previous = ''; try { previous = readFileSync(target,'utf8'); } catch {}
if (out !== previous) writeFileSync(target, out);
console.log(`Content image check: ${Object.keys(images).length} measured assets; ${Object.keys(registry).length} vetted page representatives; ${blogPosts.length} blog figure sets checked. Relevance/rights still require editorial review.`);
