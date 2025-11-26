import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Services = () => {
  return (
    <div className="min-h-screen bg-bg text-white">
      {/* HEADER */}
      <section className="py-20 bg-bg border-b-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="w-24 h-2 bg-accent-yellow mb-6" />
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight uppercase text-white">
            NOS SOLUTIONS<br /><span className="text-accent-yellow">SPÉCIALISÉES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            JSR Solutions intervient en excavation, déneigement et construction spécialisée.<br />
            Chaque intervention est réalisée avec une licence RBQ valide, une assurance responsabilité et une approche rigoureuse du terrain.
          </p>
        </div>
      </section>

      {/* DÉNEIGEMENT - Bloc prioritaire */}
      <section id="deneigement" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.deneigement.webp640} />
                  <img
                    src={PHOTOS.services.deneigement.jpg1280}
                    alt={PHOTOS.services.deneigement.alt}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </picture>
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2">
              <div className="w-20 h-2 bg-accent-yellow mb-4" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
                DÉNEIGEMENT
              </h2>
              <p className="text-xl text-accent-yellow mb-8 font-bold uppercase tracking-wide">
                Déneigement résidentiel, commercial et industriel
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Service 24/7 en saison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Contrats saisonniers ou interventions ponctuelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Gestion complète de l'accumulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Circulation sécurisée en tout temps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Interventions rapides, même en conditions extrêmes</span>
                </li>
              </ul>

              <div className="bg-bg p-6 mb-8 border-l-4 border-accent-yellow">
                <p className="font-bold text-white mb-2 uppercase">Zones desservies :</p>
                <p className="text-gray-400">
                  Saint-Raymond, Lac-Saint-Charles, Stoneham, Québec et environs
                </p>
              </div>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg font-bold uppercase tracking-wider rounded-none h-14 px-8">
                <Link to="/contact">Demander un contrat de déneigement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EXCAVATION */}
      <section id="excavation" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu */}
            <div>
              <div className="w-20 h-2 bg-accent-yellow mb-4" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
                EXCAVATION
              </h2>
              <p className="text-xl text-accent-yellow mb-8 font-bold uppercase tracking-wide">
                Travaux d'excavation maîtrisés, précis et sécuritaires
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Fondations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Tranchées (drains, services)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Nivellement et préparation de terrain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Murs de soutènement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Drain français</span>
                </li>
              </ul>

              <p className="text-lg text-gray-400 mb-8 italic border-l-2 border-gray-700 pl-4">
                Utilisation d'équipements adaptés à chaque type de chantier.
              </p>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg font-bold uppercase tracking-wider rounded-none h-14 px-8">
                <Link to="/contact">Décrire mon projet d'excavation</Link>
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
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SPÉCIALISÉE */}
      <section id="construction" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.services.terrasse.webp640} />
                  <img
                    src={PHOTOS.services.terrasse.jpg1280}
                    alt={PHOTOS.services.terrasse.alt}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </picture>
              </div>
            </div>

            {/* Contenu */}
            <div className="order-1 lg:order-2">
              <div className="w-20 h-2 bg-accent-yellow mb-4" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
                CONSTRUCTION<br />SPÉCIALISÉE
              </h2>
              <p className="text-xl text-accent-yellow mb-8 font-bold uppercase tracking-wide">
                Travaux extérieurs sur mesure
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Terrasses (bois et composite)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Escaliers extérieurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Aménagements structuraux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Bases pour cabanon, garage, agrandissement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow text-2xl font-bold">■</span>
                  <span className="text-lg text-gray-300 font-medium">Structures robustes pour climats nordiques</span>
                </li>
              </ul>

              <p className="text-lg text-gray-400 mb-8 italic border-l-2 border-gray-700 pl-4">
                Respect des normes, stabilité, durabilité.
              </p>

              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg font-bold uppercase tracking-wider rounded-none h-14 px-8">
                <Link to="/contact">Discuter d'un projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS DESSERVIS */}
      <section className="py-20 bg-bg text-white border-t-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-2 bg-accent-yellow mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase">
              SECTEURS DESSERVIS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Carte Google Maps */}
            <div className="bg-zinc-900 p-2 border-2 border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43032.68477485582!2d-71.41916583125!3d46.90287105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896d5ca8f8b89%3A0x50f5f2b7a8e9f0d2!2sLac-Saint-Charles%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890123!5m2!1sfr!2sca"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Secteurs desservis par JSR Solutions"
              />
            </div>

            {/* Liste des secteurs */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Saint-Raymond</h3>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Lac-Saint-Charles</h3>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Val-Bélair</h3>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Stoneham</h3>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Québec Nord</h3>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h3 className="text-2xl font-black mb-2 uppercase">Secteurs industriels</h3>
                </div>
              </div>

              <div className="mt-10 bg-zinc-900 p-6 border-l-4 border-accent-yellow">
                <p className="text-lg font-medium text-gray-300">
                  Vous ne voyez pas votre secteur ? Contactez-nous, nous évaluons chaque demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-accent-yellow text-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase">
            BESOIN D'UN SERVICE?
          </h2>
          <p className="text-2xl mb-12 font-bold uppercase tracking-wide">
            Contactez JSR Solutions dès maintenant
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-bg text-white hover:bg-black font-bold text-lg px-12 py-7 uppercase tracking-wider rounded-none"
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-4 border-bg text-bg hover:bg-bg hover:text-white font-bold text-lg px-12 py-7 uppercase tracking-wider rounded-none bg-transparent"
            >
              <a href="tel:+14188050063" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
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
