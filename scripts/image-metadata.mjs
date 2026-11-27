// Intrinsic dimensions, with no resizing or guessed 16:9 defaults.
export function imageSize(bytes, file) {
  if (file.endsWith('.svg')) {
    const svg = bytes.toString();
    const w = svg.match(/<svg[^>]*\bwidth="([\d.]+)(?:px)?"/);
    const h = svg.match(/<svg[^>]*\bheight="([\d.]+)(?:px)?"/);
    if (w && h) return { width: +w[1], height: +h[1] };
    const vb = svg.match(/viewBox="([\d.\s-]+)"/);
    if (vb) { const v = vb[1].trim().split(/\s+/).map(Number); return { width: v[2], height: v[3] }; }
  }
  if (bytes.toString('hex', 0, 8) === '89504e470d0a1a0a') return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  if (bytes[0] === 255 && bytes[1] === 216) {
    let i = 2;
    while (i < bytes.length) {
      if (bytes[i++] !== 255) continue;
      while (bytes[i] === 255) i++;
      const marker = bytes[i++];
      if (marker === 0xD9 || marker === 0xDA) break;
      if (marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) continue;
      const length = bytes.readUInt16BE(i);
      if ([0xC0,0xC1,0xC2,0xC3,0xC5,0xC6,0xC7,0xC9,0xCA,0xCB,0xCD,0xCE,0xCF].includes(marker)) return { width: bytes.readUInt16BE(i + 5), height: bytes.readUInt16BE(i + 3) };
      i += length;
    }
  }
  if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP') {
    for (let i = 12; i + 8 < bytes.length;) {
      const kind = bytes.toString('ascii', i, i + 4), n = bytes.readUInt32LE(i + 4), j = i + 8;
      if (kind === 'VP8X') return { width: bytes.readUIntLE(j + 4, 3) + 1, height: bytes.readUIntLE(j + 7, 3) + 1 };
      if (kind === 'VP8 ') return { width: bytes.readUInt16LE(j + 6) & 0x3fff, height: bytes.readUInt16LE(j + 8) & 0x3fff };
      if (kind === 'VP8L') { const n = bytes.readUInt32LE(j + 1); return { width: (n & 0x3fff) + 1, height: ((n >>> 14) & 0x3fff) + 1 }; }
      i = j + n + (n % 2);
    }
  }
  if (bytes.toString('ascii', 0, 3) === 'GIF') return { width: bytes.readUInt16LE(6), height: bytes.readUInt16LE(8) };
  throw new Error(`Cannot read intrinsic dimensions: ${file}`);
}
