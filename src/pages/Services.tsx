import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, Snowflake, HardHat, Truck, Wrench, Clock, Shield, MapPin } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

// Configuration des services avec processus
const servicesData = [
  {
    id: "excavation",
    icon: HardHat,
    title: "Excavation",
    subtitle: "Fondations, piscines et tranchées",
    description: "Service complet d'excavation pour tous types de projets résidentiels et commerciaux. Équipement moderne et opérateurs expérimentés.",
    image: PHOTOS.services.excavation.jpg1280,
    imageAlt: PHOTOS.services.excavation.alt,
    features: [
      "Excavation de fondations résidentielles",
      "Creusage de piscines creusées",
      "Installation de drains français",
      "Tranchées pour services (électricité, eau, gaz)",
      "Excavation pour agrandissements",
    ],
    process: [
      { step: "1", title: "Évaluation", desc: "Visite sur place et analyse du terrain" },
      { step: "2", title: "Soumission", desc: "Devis détaillé sans engagement" },
      { step: "3", title: "Excavation", desc: "Travaux avec équipement adapté" },
      { step: "4", title: "Finition", desc: "Nettoyage et remise en état" },
    ],
    cta: "Demander une soumission excavation",
    bgColor: "bg-bg",
  },
  {
    id: "terrassement",
    icon: Truck,
    title: "Terrassement",
    subtitle: "Préparation et aménagement de terrain",
    description: "Préparation complète de votre terrain pour construction, aménagement paysager ou stationnement. Nivellement précis et drainage optimal.",
    image: PHOTOS.services.terrassement.jpg1280,
    imageAlt: PHOTOS.services.terrassement.alt,
    features: [
      "Nivellement et préparation de terrain",
      "Aménagement de stationnements",
      "Pose de concassé et gravier",
      "Préparation pour pavage",
      "Gestion des eaux de ruissellement",
    ],
    process: [
      { step: "1", title: "Analyse", desc: "Étude du terrain et pentes" },
      { step: "2", title: "Planification", desc: "Plan de nivellement détaillé" },
      { step: "3", title: "Exécution", desc: "Travaux de terrassement" },
      { step: "4", title: "Compactage", desc: "Finition et compactage" },
    ],
    cta: "Demander une soumission terrassement",
    bgColor: "bg-bg-soft",
  },
  {
    id: "deneigement",
    icon: Snowflake,
    title: "Déneigement",
    subtitle: "Service 24/7 en saison hivernale",
    description: "Service fiable de déneigement résidentiel et commercial. Contrats saisonniers disponibles pour une tranquillité d'esprit tout l'hiver.",
    image: PHOTOS.services.deneigement.jpg1280,
    imageAlt: PHOTOS.services.deneigement.alt,
    features: [
      "Contrats saisonniers ou à la visite",
      "Résidentiel et commercial",
      "Entrées, stationnements, trottoirs",
      "Épandage de sel et abrasifs",
      "Interventions d'urgence 24/7",
    ],
    process: [
      { step: "1", title: "Contrat", desc: "Signature avant la saison" },
      { step: "2", title: "Surveillance", desc: "Suivi météo continu" },
      { step: "3", title: "Intervention", desc: "Déneigement selon accumulation" },
      { step: "4", title: "Finition", desc: "Épandage et nettoyage" },
    ],
    cta: "Réserver mon contrat saisonnier",
    bgColor: "bg-bg",
    featured: true,
  },
  {
    id: "construction",
    icon: Wrench,
    title: "Construction extérieure",
    subtitle: "Terrasses, escaliers et structures",
    description: "Construction de structures extérieures durables : terrasses en bois, escaliers, murets de soutènement et aménagements sur mesure.",
    image: PHOTOS.services.terrasse.jpg1280,
    imageAlt: PHOTOS.services.terrasse.alt,
    features: [
      "Terrasses en bois traité ou composite",
      "Escaliers extérieurs",
      "Murets de soutènement",
      "Clôtures et pergolas",
      "Aménagements personnalisés",
    ],
    process: [
      { step: "1", title: "Conception", desc: "Plans et design sur mesure" },
      { step: "2", title: "Matériaux", desc: "Sélection des matériaux" },
      { step: "3", title: "Construction", desc: "Réalisation par nos équipes" },
      { step: "4", title: "Inspection", desc: "Vérification qualité finale" },
    ],
    cta: "Demander une soumission construction",
    bgColor: "bg-bg-soft",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-bg text-white font-body">
      
      {/* HEADER HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.parcMachines.jpg1280}
            alt="Équipement JSR Solutions"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-accent-yellow" />
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest">
                Nos services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              Solutions complètes pour
              <br />
              <span className="text-accent-yellow">tous vos projets</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              De l'excavation au déneigement, nous offrons des services professionnels
              avec équipement moderne et équipe expérimentée.
            </p>
            
            {/* Badges de confiance */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded">
                <Shield className="w-5 h-5 text-accent-yellow" />
                <span>Licence RBQ 5804-4926-01</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded">
                <Shield className="w-5 h-5 text-accent-yellow" />
                <span>Assurances 2M$</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded">
                <Clock className="w-5 h-5 text-accent-yellow" />
                <span>Réponse en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION RAPIDE */}
      <section className="py-6 bg-industrial-gray border-y border-accent-yellow/20 sticky top-[60px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {servicesData.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:bg-accent-yellow hover:text-bg rounded ${
                  service.featured ? "bg-accent-yellow/20 text-accent-yellow" : "bg-white/5"
                }`}
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS DE SERVICES */}
      {servicesData.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${service.bgColor} scroll-mt-32`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative">
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-accent-yellow text-bg px-4 py-1 text-sm font-bold z-10">
                      POPULAIRE
                    </div>
                  )}
                  <div className="overflow-hidden border-4 border-accent-yellow/50 hover:border-accent-yellow transition-colors">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Processus */}
                <div className="mt-8 grid grid-cols-4 gap-2">
                  {service.process.map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-10 h-10 mx-auto bg-accent-yellow text-bg rounded-full flex items-center justify-center font-bold text-lg mb-2">
                        {step.step}
                      </div>
                      <div className="text-xs font-bold text-white">{step.title}</div>
                      <div className="text-xs text-gray-500 hidden md:block">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-10 h-10 text-accent-yellow" />
                  <div>
                    <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest block">
                      {service.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-accent-yellow text-bg px-6 py-3 font-bold hover:bg-yellow-400 transition-all flex items-center gap-2"
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+14188050063"
                    className="border-2 border-white/30 text-white px-6 py-3 font-bold hover:border-accent-yellow hover:text-accent-yellow transition-all flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    418-805-0063
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION DRAINS */}
      <section id="drains" className="py-20 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              <span className="text-accent-yellow">Drains français</span> et drainage
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Installation et réparation de systèmes de drainage pour protéger vos fondations
              contre les infiltrations d'eau.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="overflow-hidden border-2 border-accent-yellow/30">
                <img
                  src={PHOTOS.services.drains.jpg1280}
                  alt={PHOTOS.services.drains.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-left flex flex-col justify-center">
                <ul className="space-y-3">
                  {[
                    "Installation de drains français neufs",
                    "Réparation de systèmes existants",
                    "Imperméabilisation des fondations",
                    "Installation de pompes de puisard",
                    "Garantie sur les travaux",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-yellow text-bg px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all"
            >
              Évaluation gratuite de vos drains
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-bg mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-bg/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour une soumission gratuite. Réponse garantie en moins de 24 heures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-bg text-white px-8 py-4 font-bold text-lg hover:bg-bg-soft transition-all flex items-center gap-2"
            >
              Demander une soumission
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+14188050063"
              className="border-2 border-bg text-bg px-8 py-4 font-bold hover:bg-bg hover:text-accent-yellow transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-bg/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lac-Saint-Charles
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Saint-Raymond
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Stoneham
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Portneuf
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Québec
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
