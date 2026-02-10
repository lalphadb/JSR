import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://jsr-solutions.ca';

const routes = [
  {
    path: '/',
    title: 'JSR Solutions - Excavation, Déneigement & Construction Spécialisée à Québec',
    description: "JSR Solutions offre des services professionnels d'excavation, de déneigement et de construction spécialisée à Saint-Raymond et dans la région de Québec. Licence RBQ, service 24/7 en hiver.",
    noscript: '<h1>JSR Solutions - Excavation, Déneigement &amp; Construction Spécialisée</h1><p>Services professionnels d\'excavation, de déneigement et de construction spécialisée à Saint-Raymond et dans la région de Québec.</p><h2>Nos services</h2><ul><li>Excavation de fondations, drains français, piscines creusées</li><li>Déneigement résidentiel et commercial - Service 24/7</li><li>Terrassement et nivellement de terrain</li><li>Construction extérieure : terrasses, escaliers</li></ul><p>Licence RBQ 5804-4926-01 | Assurance 2M$ | Plus de 15 ans d\'expérience</p><p>Régions desservies : Saint-Raymond, Lac-Saint-Charles, Stoneham, Val-Bélair, Saint-Émile, Portneuf, Québec</p><p>Téléphone : <a href="tel:+14188050063">418-805-0063</a> | Courriel : <a href="mailto:info@jsr-solutions.ca">info@jsr-solutions.ca</a></p>'
  },
  {
    path: '/services',
    title: "Services d'excavation, déneigement et terrassement | JSR Solutions",
    description: "Découvrez nos services : excavation, terrassement, déneigement 24/7 et construction extérieure. Équipe locale, équipement moderne, réponse en 24h. Saint-Raymond et région de Québec.",
    noscript: '<h1>Services d\'excavation, déneigement et terrassement</h1><h2>Excavation</h2><p>Excavation de fondations, installation de drains français, excavation de piscines creusées.</p><h2>Déneigement</h2><p>Déneigement résidentiel et commercial. Service d\'urgence 24/7 lors des tempêtes.</p><h2>Terrassement</h2><p>Nivellement de terrain, aménagement de stationnement, préparation de terrain.</p><h2>Construction extérieure</h2><p>Construction de terrasses en bois traité ou composite, escaliers extérieurs.</p><p><a href="/contact">Demandez une soumission gratuite</a></p>'
  },
  {
    path: '/realisations',
    title: 'Réalisations et projets complétés | JSR Solutions Saint-Raymond',
    description: "Découvrez nos réalisations en excavation, terrassement, drains français et déneigement dans la région de Québec. Projets récents et savoir-faire local.",
    noscript: '<h1>Nos réalisations en excavation et déneigement</h1><p>Découvrez notre portfolio de projets complétés dans la région de Québec : excavation de fondations, installation de drains français, déneigement commercial et résidentiel.</p><p>Plus de 500 projets réalisés depuis 2010 à Saint-Raymond, Lac-Saint-Charles, Stoneham et environs.</p>'
  },
  {
    path: '/a-propos',
    title: 'À propos de JSR Solutions | Excavation à Saint-Raymond depuis 2010',
    description: "Depuis plus de 15 ans, JSR Solutions accompagne les particuliers et entreprises en excavation, déneigement et terrassement dans la région de Québec. Licence RBQ, assurance 2M$.",
    noscript: '<h1>À propos de JSR Solutions</h1><p>Depuis plus de 15 ans, JSR Solutions accompagne les particuliers et les entreprises de la région de Québec avec des services d\'excavation, de déneigement et de construction spécialisée.</p><p>Licence RBQ 5804-4926-01 | Assurance responsabilité de 2 millions de dollars.</p>'
  },
  {
    path: '/contact',
    title: 'Contactez-nous pour une soumission gratuite | JSR Solutions',
    description: "Demandez une soumission gratuite en excavation, déneigement ou terrassement. Réponse en moins de 24 heures. JSR Solutions, Saint-Raymond et région de Québec.",
    noscript: '<h1>Contactez JSR Solutions</h1><p>Demandez une soumission gratuite pour vos projets d\'excavation, de déneigement ou de terrassement.</p><p>Téléphone : <a href="tel:+14188050063">418-805-0063</a></p><p>Courriel : <a href="mailto:info@jsr-solutions.ca">info@jsr-solutions.ca</a></p><p>Adresse : 303 rue des Mélèzes, Saint-Raymond, QC G3L 4B6</p><p>Heures : Lun-Ven 7h-18h, Sam 8h-12h | Urgence déneigement : 24/7</p>'
  },
  {
    path: '/confidentialite',
    title: 'Politique de confidentialité | JSR Solutions',
    description: "Politique de confidentialité de JSR Solutions conforme à la Loi 25. Découvrez comment nous protégeons vos renseignements personnels.",
    noscript: '<h1>Politique de confidentialité - JSR Solutions</h1><p>Cette politique décrit comment JSR Solutions collecte, utilise et protège vos renseignements personnels conformément à la Loi 25 du Québec.</p>'
  }
];

const templatePath = join(DIST, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html introuvable. Exécutez npm run build d abord.');
  process.exit(1);
}
const template = readFileSync(templatePath, 'utf-8');
let count = 0;

for (const route of routes) {
  const canonicalUrl = BASE_URL + (route.path === '/' ? '/' : route.path);
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, '<title>' + route.title + '</title>');
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="' + route.description + '" />');
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, '<link rel="canonical" href="' + canonicalUrl + '" />');
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, '<meta property="og:title" content="' + route.title + '" />');
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, '<meta property="og:description" content="' + route.description + '" />');
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, '<meta property="og:url" content="' + canonicalUrl + '" />');
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, '<meta name="twitter:title" content="' + route.title + '" />');
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, '<meta name="twitter:description" content="' + route.description + '" />');
  html = html.replace('</body>', '<noscript><div style="max-width:800px;margin:40px auto;padding:20px;font-family:sans-serif;">' + route.noscript + '</div></noscript>\n</body>');

  if (route.path === '/') {
    writeFileSync(templatePath, html, 'utf-8');
    console.log('  / -> dist/index.html');
  } else {
    const dir = join(DIST, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    console.log('  ' + route.path + ' -> dist' + route.path + '/index.html');
  }
  count++;
}

console.log('\nPre-rendu SEO termine : ' + count + ' pages generees.');
