import representatives from '../data/representativeImages.json';
import metadata from '../data/imageMetadata.json';

export function imageMetadata(src: string) {
  const path = src.startsWith('https:') ? new URL(src).pathname : src;
  return (metadata as Record<string, { width: number; height: number; bytes: number }>)[path];
}

export function representativeImage(url: string) {
  const path = new URL(url, 'https://www.hurricanetracker.cc').pathname;
  return (representatives as Record<string, { src: string; alt?: string }>)[path];
}
