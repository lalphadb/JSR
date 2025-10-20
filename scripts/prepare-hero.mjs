#!/usr/bin/env node
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';

async function run() {
  const input = process.argv[2];
  if (!input) {
    console.error('Usage: node scripts/prepare-hero.mjs <path-to-image>');
    process.exit(1);
  }

  const outDir = resolve('src/assets/photos/real');
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  const heroJpg = resolve(outDir, 'hero-1280.jpg');
  const heroWebp = resolve(outDir, 'hero-640.webp');

  // Produce 1280w JPG
  await sharp(input)
    .rotate()
    .resize({ width: 1280, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(heroJpg);

  // Produce 640w WebP
  await sharp(input)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(heroWebp);

  console.log(`✅ Hero images written:\n - ${heroJpg}\n - ${heroWebp}`);
}

run().catch((err) => {
  console.error('❌ Error generating hero images:', err);
  process.exit(1);
});
