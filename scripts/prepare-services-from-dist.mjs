#!/usr/bin/env node
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const distDir = resolve('dist/assets/img/Photo JSR');
const outDir = resolve('src/assets/photos/services');

const picks = [
  {
    name: 'deneigement',
    // Source curated by user
    src: resolve(distDir, 'deneigement-machine.webp'),
  },
  {
    name: 'excavation',
    src: resolve(distDir, 'excavatrice.jpg'),
  },
  {
    name: 'terrassement',
    src: resolve(distDir, 'terassement8.jpg'),
    srcWebp: resolve(distDir, 'terassement-focet.webp'),
  },
  {
    name: 'drains',
    src: resolve(distDir, 'drain-francais02.jpg'),
    srcWebp: resolve(distDir, 'drain-frncais.webp'),
  },
  {
    name: 'terrasse',
    src: resolve(distDir, 'Deck6.jpg'),
  },
];

async function processOne({ name, src, srcWebp }) {
  const outJpg = resolve(outDir, `${name}-1280.jpg`);
  const outWebp = resolve(outDir, `${name}-640.webp`);

  // Ensure output folder exists
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  // Create 1280 jpg from src (even if src is webp, convert to jpg)
  await sharp(src)
    .rotate()
    .resize({ width: 1280, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outJpg);

  // For 640 webp, prefer srcWebp if provided, else reuse src
  const webpInput = srcWebp || src;
  await sharp(webpInput)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outWebp);

  console.log(`✅ ${name}:\n  - ${outJpg}\n  - ${outWebp}`);
}

async function run() {
  for (const p of picks) {
    await processOne(p);
  }
}

run().catch((err) => {
  console.error('❌ Error preparing service images:', err);
  process.exit(1);
});
