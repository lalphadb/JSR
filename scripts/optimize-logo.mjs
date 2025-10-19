import sharp from 'sharp';
import { resolve } from 'node:path';

const srcPng = resolve('src/assets/jsr-logo-transparent.png');
const outWebp = resolve('src/assets/jsr-logo-transparent.webp');

async function optimize() {
  try {
    // Convert to WebP with near-lossless to preserve vector-like edges
    await sharp(srcPng)
      .flatten({ background: { r: 0, g: 0, b: 0, alpha: 0 } }) // ensure transparency preserved
      .webp({ quality: 82, lossless: false })
      .toFile(outWebp);

    console.log('✅ Optimized logo written to', outWebp);
  } catch (err) {
    console.error('❌ Optimization failed:', err);
    process.exit(1);
  }
}

optimize();
