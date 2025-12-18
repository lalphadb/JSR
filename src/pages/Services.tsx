import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, MapPin } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Services = () => {
  return (
    <div className="min-h-screen bg-bg text-white">
      {/* HEADER */}
      <section className="py-16 md:py-24 bg-bg border-b-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight">
              Solutions spécialisées pour tous vos projets
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Excavation, déneigement et construction avec licence RBQ,
              assurance responsabilité et une approche rigoureuse du terrain.
            </p>
          </div>
        </div>
      </section>

      {/* DÉNEIGEMENT */}
      <section id="deneigement" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.deneigement.webp640} />
                  <img
                    src={PHOTOS.services.deneigement.jpg1280}
                    alt={PHOTOS.services.deneigement.alt}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2">
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                Service hivernal
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                Déneigement
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Service complet de déneigement résidentiel, commercial et industriel.
                Disponible 24/7 durant toute la saison hivernale.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Contrats saisonniers ou interventions ponctuelles",
                  "Entrées, stationnements et trottoirs",
                  "Gestion complète de l'accumulation",
                  "Interventions rapides en conditions extrêmes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-bg/50 p-4 border-l-4 border-accent-yellow mb-8">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Zones desservies :</strong> Saint-Raymond,
                  Lac-Saint-Charles, Stoneham, Val-Bélair et environs
                </p>
              </div>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-400 text-bg font-bold">
                <Link to="/contact">Obtenir un contrat saisonnier</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EXCAVATION */}
      <section id="excavation" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Contenu */}
            <div>
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                Travaux de sol
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                Excavation
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Travaux d'excavation précis et sécuritaires avec équipement adapté
                à chaque type de chantier, du résidentiel au commercial.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Fondations résidentielles et commerciales",
                  "Drains français et systèmes de drainage",
                  "Tranchées pour services (électricité, plomberie)",
                  "Nivellement et préparation de terrain",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-400 text-bg font-bold">
                <Link to="/contact">Décrire mon projet</Link>
              </Button>
            </div>

            {/* Image */}
            <div>
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.excavation.webp640} />
                  <img
                    src={PHOTOS.services.excavation.jpg1280}
                    alt={PHOTOS.services.excavation.alt}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERRASSEMENT */}
      <section id="terrassement" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.terrassement.webp640} />
                  <img
                    src={PHOTOS.services.terrassement.jpg1280}
                    alt={PHOTOS.services.terrassement.alt}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2">
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                Aménagement extérieur
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                Terrassement
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Préparation et aménagement de terrain pour tous types de projets.
                Du nivellement à la pose de matériaux.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Nivellement de terrain",
                  "Préparation pour pavage et asphalte",
                  "Pose de gravier et matériaux",
                  "Murs de soutènement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-400 text-bg font-bold">
                <Link to="/contact">Planifier mon projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SPÉCIALISÉE */}
      <section id="construction" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Contenu */}
            <div>
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                Structures extérieures
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                Construction spécialisée
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Travaux extérieurs sur mesure, conçus pour résister aux rigueurs
                du climat québécois. Qualité et durabilité garanties.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Terrasses en bois et composite",
                  "Escaliers extérieurs",
                  "Bases pour cabanon et garage",
                  "Structures adaptées au climat nordique",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-400 text-bg font-bold">
                <Link to="/contact">Discuter de mon projet</Link>
              </Button>
            </div>

            {/* Image */}
            <div>
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.terrasse.webp640} />
                  <img
                    src={PHOTOS.services.terrasse.jpg1280}
                    alt={PHOTOS.services.terrasse.alt}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS DESSERVIS */}
      <section className="py-20 bg-zinc-900 border-t-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
                Zone de service
              </span>
              <h2 className="text-3xl md:text-4xl font-heading mb-4">
                Secteurs desservis
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nous intervenons principalement dans la région de Québec et ses environs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Carte */}
              <div className="bg-bg p-2 border-2 border-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43032.68477485582!2d-71.41916583125!3d46.90287105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896d5ca8f8b89%3A0x50f5f2b7a8e9f0d2!2sLac-Saint-Charles%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890123!5m2!1sfr!2sca"
                  width="100%"
                  height="350"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Secteurs desservis par JSR Solutions"
                />
              </div>

              {/* Liste des secteurs */}
              <div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Saint-Raymond",
                    "Lac-Saint-Charles",
                    "Val-Bélair",
                    "Stoneham",
                    "Québec Nord",
                    "Secteurs industriels",
                  ].map((secteur, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-bg border border-zinc-800">
                      <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <span className="font-bold text-white">{secteur}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-accent-yellow/10 border border-accent-yellow/30 p-4">
                  <p className="text-gray-300">
                    <strong className="text-accent-yellow">Votre secteur n'est pas listé?</strong>
                    <br />
                    Contactez-nous, nous évaluons chaque demande.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-bg mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl text-bg/80 mb-8 max-w-2xl mx-auto">
            Obtenez une soumission gratuite et sans engagement en moins de 24 heures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-bg text-white hover:bg-black font-bold text-lg px-8 py-6"
            >
              <Link to="/contact">Demander une soumission</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-bg text-bg hover:bg-bg hover:text-white font-bold text-lg px-8 py-6 bg-transparent"
            >
              <a href="tel:+14188050063" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                418-805-0063
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
