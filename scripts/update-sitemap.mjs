/**
 * update-sitemap.mjs
 * Met à jour les dates lastmod dans public/sitemap.xml avec la date du build.
 * Appelé automatiquement par `npm run build`.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');

const today = new Date().toISOString().split('T')[0];
let content = readFileSync(sitemapPath, 'utf-8');

// Remplacer toutes les dates lastmod par la date du build
content = content.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

writeFileSync(sitemapPath, content, 'utf-8');
console.log(`✅ sitemap.xml mis à jour : lastmod = ${today}`);
