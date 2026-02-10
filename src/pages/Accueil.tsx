import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Award, ChevronRight, Truck, Snowflake, HardHat, Star, CheckCircle, MapPin } from "lucide-react";
import { PHOTOS } from "@/lib/photos";
import { usePageMeta } from "@/hooks/usePageMeta";

// Déterminer la saison actuelle (pour bannière modulable)
const getCurrentSeason = () => {
  const month = new Date().getMonth();
  // Novembre à Mars = Hiver (déneigement)
  if (month >= 10 || month <= 2) return "winter";
  // Avril à Octobre = Été (excavation/terrassement)
  return "summer";
};

const season = getCurrentSeason();

const services = [
  {
    icon: HardHat,
    title: "Excavation",
    desc: "Fondations, piscines, drains français et tranchées. Équipement moderne pour tous vos projets.",
    link: "/services#excavation",
    image: PHOTOS.services.excavation,
  },
  {
    icon: Truck,
    title: "Terrassement",
    desc: "Préparation de terrain, nivellement et aménagement extérieur professionnel.",
    link: "/services#terrassement",
    image: PHOTOS.services.terrassement,
  },
  {
    icon: Snowflake,
    title: "Déneigement",
    desc: "Service résidentiel et commercial 24/7. Contrats saisonniers disponibles.",
    link: "/services#deneigement",
    image: PHOTOS.services.deneigement,
    featured: season === "winter",
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Réponse rapide",
    desc: "Soumission en moins de 24 heures, intervention urgente possible.",
  },
  {
    icon: Shield,
    title: "Assuré et licencié",
    desc: "Licence RBQ 5804-4926-01 et assurance responsabilité 2M$.",
  },
  {
    icon: Truck,
    title: "Équipement moderne",
    desc: "Flotte de machinerie récente et bien entretenue.",
  },
  {
    icon: Award,
    title: "15+ ans d'expérience",
    desc: "Plus de 500 projets réalisés dans la région de Québec.",
  },
];

const testimonials = [
  {
    name: "Marc Tremblay",
    location: "Lac-Saint-Charles",
    text: "Excellent service pour l'excavation de ma piscine. Travail propre et professionnel.",
    rating: 5,
  },
  {
    name: "Julie Gagnon",
    location: "Saint-Raymond",
    text: "Contrat de déneigement depuis 3 ans. Toujours fiables, même lors des tempêtes.",
    rating: 5,
  },
  {
    name: "Pierre Lavoie",
    location: "Stoneham",
    text: "Terrassement complet de mon terrain. Résultat impeccable!",
    rating: 5,
  },
];

export default function HomePage() {
  usePageMeta({
    title: "Excavation, déneigement et construction à Québec",
    description: "JSR Solutions offre des services d'excavation, de déneigement et de construction spécialisée à Saint-Raymond et dans la région de Québec. Service 24/7 en hiver.",
    canonicalPath: "/",
  });

  return (
    <main className="bg-bg text-textc-primary font-body">
      
      {/* BANDEAU DE RÉASSURANCE */}
      <div className="bg-industrial-gray py-3 border-b border-accent-yellow/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-textc-secondary">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-yellow" />
              <span><strong className="text-white">Licence RBQ</strong> 5804-4926-01</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-yellow" />
              <span><strong className="text-white">Assurances</strong> 2M$ couverture</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-yellow" />
              <span><strong className="text-white">15+ années</strong> d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent-yellow" />
              <span><strong className="text-white">Région</strong> de Québec</span>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Image de fond avec overlay saisonnier */}
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/webp"
              srcSet={season === "winter" ? PHOTOS.services.deneigement.webp640 : PHOTOS.parcMachines.webp640}
            />
            <img
              src={season === "winter" ? PHOTOS.services.deneigement.jpg1280 : PHOTOS.parcMachines.jpg1280}
              alt="JSR Solutions - Machinerie en action"
              className="w-full h-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/50" />
        </div>

        {/* Badge saisonnier */}
        {season === "winter" && (
          <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-industrial-gray border border-accent-yellow text-accent-yellow px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 animate-pulse">
            <Snowflake className="w-4 h-4" />
            Saison de déneigement active
          </div>
        )}

        {/* Contenu Hero */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-accent-yellow" />
              <span className="text-sm tracking-widest uppercase text-accent-yellow font-bold">
                {season === "winter" ? "❄️ Service 24/7 en hiver" : "🚜 Disponible maintenant"}
              </span>
            </div>

            {/* Titre H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">
              {season === "winter" ? (
                <>
                  Déneigement <span className="text-accent-yellow">professionnel</span>
                  <br />
                  pour l'hiver québécois
                </>
              ) : (
                <>
                  Excavation & terrassement
                  <br />
                  <span className="text-accent-yellow">dans la région de Québec</span>
                </>
              )}
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-textc-primary max-w-2xl mb-8 leading-relaxed">
              {season === "winter" ? (
                <>
                  Service résidentiel et commercial fiable. Contrats saisonniers disponibles.
                  <strong className="text-white"> Réponse en moins de 24h.</strong>
                </>
              ) : (
                <>
                  Fondations, piscines, drains français et aménagement de terrain.
                  <strong className="text-white"> Plus de 500 projets réalisés.</strong>
                </>
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="group bg-accent-yellow text-bg px-8 py-4 font-bold text-lg hover:bg-accent-yellow/80 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-accent-yellow/20"
              >
                Soumission gratuite
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+14188050063"
                className="flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white hover:border-accent-yellow hover:text-accent-yellow transition-all duration-300 font-bold"
              >
                <Phone className="w-5 h-5" />
                418-805-0063
              </a>
            </div>

            {/* Stats rapides */}
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-3xl font-heading font-black text-accent-yellow">15+</div>
                <div className="text-textc-secondary">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-accent-yellow">500+</div>
                <div className="text-textc-secondary">Projets complétés</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-accent-yellow">24/7</div>
                <div className="text-textc-secondary">Service en saison</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section className="py-20 bg-bg-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Nos <span className="text-accent-yellow">services</span>
            </h2>
            <p className="text-textc-secondary max-w-2xl mx-auto">
              Solutions complètes pour tous vos projets d'excavation, terrassement et déneigement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className={`group relative overflow-hidden bg-bg rounded-lg border transition-all duration-300 hover:border-accent-yellow hover:-translate-y-2 ${
                  service.featured ? "border-accent-yellow ring-2 ring-accent-yellow/30" : "border-white/10"
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-accent-yellow text-bg px-3 py-1 text-xs font-bold rounded-full z-10">
                    POPULAIRE
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <picture>
                    <source type="image/webp" srcSet={service.image.webp640} />
                    <img
                      src={service.image.jpg1280}
                      alt={service.image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-8 h-8 text-accent-yellow" />
                    <h3 className="text-xl font-heading font-bold">{service.title}</h3>
                  </div>
                  <p className="text-textc-secondary mb-4">{service.desc}</p>
                  <span className="text-accent-yellow font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-accent-yellow text-accent-yellow px-8 py-3 font-bold hover:bg-accent-yellow hover:text-bg transition-all duration-300"
            >
              Voir tous nos services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION POURQUOI NOUS CHOISIR */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Pourquoi choisir <span className="text-accent-yellow">JSR Solutions</span>?
            </h2>
            <p className="text-textc-secondary max-w-2xl mx-auto">
              Une entreprise locale de confiance pour tous vos travaux d'excavation et déneigement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-bg-soft border border-white/10 p-6 rounded-lg hover:border-accent-yellow/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent-yellow/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-yellow/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent-yellow" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-textc-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES / AVIS */}
      <section className="py-20 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-accent-yellow fill-accent-yellow" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Ce que nos <span className="text-accent-yellow">clients</span> disent
            </h2>
            <p className="text-textc-secondary">
              Plus de 500 clients satisfaits dans la région de Québec
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-bg p-6 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                  ))}
                </div>
                <p className="text-textc-secondary mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent-yellow/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-yellow font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-textc-secondary">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CTA FINALE */}
      <section className="py-20 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-bg mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-bg/80 mb-8 max-w-xl mx-auto">
            Obtenez une soumission gratuite en moins de 24 heures. Sans obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-bg text-white px-8 py-4 font-bold text-lg hover:bg-bg-soft transition-all duration-300 flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Demander une soumission
            </Link>
            <a
              href="tel:+14188050063"
              className="border-2 border-bg text-bg px-8 py-4 font-bold hover:bg-bg hover:text-accent-yellow transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              418-805-0063
            </a>
          </div>
        </div>
      </section>

      {/* ZONES DESSERVIES */}
      <section className="py-12 bg-bg border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-sm font-bold text-textc-secondary uppercase tracking-wider mb-4">
            Zones desservies
          </h3>
          <p className="text-textc-secondary">
            Lac-Saint-Charles • Saint-Raymond • Stoneham • Portneuf • Québec et environs
          </p>
        </div>
      </section>
    </main>
  );
}
