import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Truck, ThumbsUp, Phone, ChevronRight, Shield, Clock } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PHOTOS } from "@/lib/photos";

const APropos = () => {
  const { count: yearsCount, ref: yearsRef } = useCounterAnimation(15, 2000);
  const { count: projectsCount, ref: projectsRef } = useCounterAnimation(500, 2500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCounterAnimation(100, 2000);

  usePageMeta({
    title: "À propos de JSR Solutions",
    description: "Depuis plus de 15 ans, JSR Solutions accompagne les particuliers et entreprises en excavation, déneigement et terrassement dans la région de Québec.",
    canonicalPath: "/a-propos",
  });

  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience sur le terrain",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Professionnels formés et dévoués",
    },
    {
      icon: Truck,
      title: "Équipement moderne",
      description: "Machinerie entretenue et performante",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction garantie",
      description: "Votre satisfaction, notre priorité",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-textc-primary">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-bg border-b-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
              Notre entreprise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight text-white">
              Une équipe locale à votre service
            </h1>
            <p className="text-xl text-textc-primary leading-relaxed">
              Depuis plus de 15 ans, JSR Solutions accompagne les particuliers et entreprises
              de la région de Québec dans leurs projets d'excavation, déneigement et construction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="border-4 border-accent-yellow overflow-hidden">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
                  <img
                    src={PHOTOS.parcMachines.jpg1280}
                    alt={PHOTOS.parcMachines.alt}
                    className="w-full h-80 object-cover"
                  />
                </picture>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent-yellow text-bg p-6 font-black text-center hidden md:block">
                <div className="text-4xl">15+</div>
                <div className="text-sm uppercase">Ans</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">
                Bâtie sur l'expérience du terrain
              </h2>

              <div className="space-y-4 text-textc-primary leading-relaxed">
                <p>
                  Fondée il y a plus de <strong className="text-accent-yellow">15 ans</strong>,
                  JSR Solutions s'est établie comme une référence dans le domaine de l'excavation,
                  du déneigement et de l'aménagement extérieur dans la région de Québec.
                </p>
                <p>
                  Notre engagement envers l'excellence et la satisfaction client nous a permis
                  de bâtir une solide réputation. Nous combinons expertise traditionnelle et
                  équipement moderne pour offrir des services de qualité supérieure.
                </p>
                <p>
                  Chaque projet est une opportunité de démontrer notre savoir-faire et notre
                  dévouement. Notre équipe travaille avec passion pour dépasser vos attentes.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-bg-soft px-4 py-2 border border-white/10">
                  <Shield className="w-5 h-5 text-accent-yellow" />
                  <span className="text-sm font-bold">RBQ 5804-4926-01</span>
                </div>
                <div className="flex items-center gap-2 bg-bg-soft px-4 py-2 border border-white/10">
                  <Award className="w-5 h-5 text-accent-yellow" />
                  <span className="text-sm font-bold">Assuré</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto text-center">
            <div ref={yearsRef} className="py-4">
              <div className="text-4xl md:text-6xl font-black text-bg mb-1">
                {yearsCount}+
              </div>
              <div className="text-sm md:text-base font-bold text-bg/80">
                Années d'expérience
              </div>
            </div>

            <div ref={projectsRef} className="py-4">
              <div className="text-4xl md:text-6xl font-black text-bg mb-1">
                {projectsCount}+
              </div>
              <div className="text-sm md:text-base font-bold text-bg/80">
                Projets réalisés
              </div>
            </div>

            <div ref={satisfactionRef} className="py-4">
              <div className="text-4xl md:text-6xl font-black text-bg mb-1">
                {satisfactionCount}%
              </div>
              <div className="text-sm md:text-base font-bold text-bg/80">
                Satisfaction client
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
              Ce qui nous distingue
            </span>
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">
              Nos valeurs
            </h2>
            <p className="text-textc-secondary max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-bg border-2 border-white/10 hover:border-accent-yellow transition-all duration-300 rounded-none"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-accent-yellow/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-yellow transition-all duration-300">
                    <value.icon className="h-8 w-8 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-yellow transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-textc-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
                Notre engagement
              </span>
              <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">
                Pourquoi travailler avec nous?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-bg-soft border border-white/10">
                <div className="w-10 h-10 bg-accent-yellow flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-bg" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Réponse rapide</h3>
                  <p className="text-textc-secondary text-sm">
                    Retour d'appel garanti en moins de 24 heures pour toute demande de soumission.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-bg-soft border border-white/10">
                <div className="w-10 h-10 bg-accent-yellow flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-bg" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Travail garanti</h3>
                  <p className="text-textc-secondary text-sm">
                    Licence RBQ, assurance responsabilité et travaux conformes aux normes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-bg-soft border border-white/10">
                <div className="w-10 h-10 bg-accent-yellow flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-bg" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Équipement adapté</h3>
                  <p className="text-textc-secondary text-sm">
                    Machinerie moderne et entretenue, adaptée à chaque type de projet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-bg-soft border border-white/10">
                <div className="w-10 h-10 bg-accent-yellow flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-5 h-5 text-bg" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Prix transparent</h3>
                  <p className="text-textc-secondary text-sm">
                    Soumission détaillée et prix fixe. Pas de mauvaise surprise à la fin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-bg mb-4">
            Prêt à travailler ensemble?
          </h2>
          <p className="text-lg text-bg/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une soumission gratuite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bg text-white hover:bg-black font-bold text-lg px-8 py-6">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-bg text-bg hover:bg-bg hover:text-white font-bold text-lg px-8 py-6 bg-transparent">
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

export default APropos;
