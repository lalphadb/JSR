import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Award, ChevronRight } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

type Service = {
  code: string;
  title: string;
  desc: string;
  link: string;
};

const services: Service[] = [
  {
    code: "01",
    title: "Déneigement",
    desc: "Résidentiel et commercial. Service 24/7 en saison hivernale.",
    link: "/services#deneigement",
  },
  {
    code: "02",
    title: "Excavation",
    desc: "Fondations, drains français, tranchées et nivellement.",
    link: "/services#excavation",
  },
  {
    code: "03",
    title: "Terrassement",
    desc: "Préparation de terrain, pavage et aménagement extérieur.",
    link: "/services#terrassement",
  },
  {
    code: "04",
    title: "Construction",
    desc: "Terrasses, escaliers et structures extérieures durables.",
    link: "/services#construction",
  },
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "500+", label: "Projets complétés" },
  { value: "24/7", label: "Service en saison" },
];

export default function HomePage() {
  return (
    <main className="bg-bg text-textc-primary">
      {/* HERO SECTION - Plein écran immersif */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={PHOTOS.hero.jpg1280}
            alt="Machinerie JSR en action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/40" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <span className="h-[3px] w-12 bg-accent-yellow" />
              <span className="text-sm tracking-widest uppercase text-accent-yellow font-bold">
                Disponible toute l'année
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-heading mb-6">
              Votre terrain,
              <br />
              <span className="text-accent-yellow">notre expertise</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Excavation, déneigement et construction spécialisée dans la région de Québec.
              <strong className="text-white"> Réponse en moins de 24h.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/contact"
                className="group bg-accent-yellow text-bg px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
              >
                Soumission gratuite
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+14188050063"
                className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white hover:border-accent-yellow hover:text-accent-yellow transition-all duration-300 font-bold"
              >
                <Phone className="w-5 h-5" />
                418-805-0063
              </a>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-accent-yellow" />
                <span>RBQ 5804-4926-01</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-accent-yellow" />
                <span>Assuré et licencié</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-accent-yellow" />
                <span>Intervention rapide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-accent-yellow rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-accent-yellow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="py-4">
                <div className="text-3xl md:text-5xl font-black text-bg mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-bold text-bg/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
              Nos services
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Solutions complètes pour vos projets
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              De l'excavation au déneigement, nous offrons des services professionnels adaptés à vos besoins.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.code}
                to={service.link}
                className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-accent-yellow text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">
                  {service.code}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-accent-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-accent-yellow text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-zinc-900 border-y-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="border-4 border-accent-yellow overflow-hidden">
                <img
                  src={PHOTOS.hero.jpg1280}
                  alt="Équipe JSR Solutions"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent-yellow text-bg p-6 font-black text-center hidden md:block">
                <div className="text-4xl">15+</div>
                <div className="text-sm uppercase">Ans</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">
                Une équipe locale, fiable et expérimentée
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Basés à Saint-Raymond, nous connaissons le terrain et les défis de la région.
                Notre engagement : un travail de qualité, dans les délais, au juste prix.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent-yellow flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bg font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Réponse rapide</strong>
                    <p className="text-gray-400 text-sm">Retour d'appel en moins de 24 heures</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent-yellow flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bg font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Équipement moderne</strong>
                    <p className="text-gray-400 text-sm">Machinerie entretenue et adaptée à chaque projet</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent-yellow flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bg font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Soumission transparente</strong>
                    <p className="text-gray-400 text-sm">Pas de surprise, prix fixe avant les travaux</p>
                  </div>
                </li>
              </ul>

              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 text-accent-yellow font-bold hover:gap-4 transition-all"
              >
                En savoir plus sur notre entreprise
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="bg-accent-yellow p-12 md:p-16 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-bg mb-4">
              Prêt à démarrer votre projet?
            </h2>
            <p className="text-bg/80 text-lg mb-8 max-w-xl mx-auto">
              Obtenez une soumission gratuite en moins de 24 heures. Sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-bg text-white px-8 py-4 font-bold text-lg hover:bg-black transition-colors"
              >
                Demander une soumission
              </Link>
              <a
                href="tel:+14188050063"
                className="border-2 border-bg text-bg px-8 py-4 font-bold text-lg hover:bg-bg hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
