import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Truck, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-snow-excavation.jpg";

const APropos = () => {
  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le domaine de l'excavation et du déneigement.",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Des professionnels formés et dévoués à la satisfaction client.",
    },
    {
      icon: Truck,
      title: "Équipement moderne",
      description: "Machinerie à la pointe de la technologie pour un travail efficace.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction garantie",
      description: "Votre satisfaction est notre priorité absolue.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de JSR Déneigement</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Votre partenaire de confiance pour tous vos projets d'excavation, déneigement et aménagement extérieur.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Fondée il y a plus de 15 ans, JSR Déneigement s'est établie comme une référence dans la région de Saint-Jérôme pour les services d'excavation, de déneigement et d'aménagement extérieur.
                </p>
                <p>
                  Notre entreprise familiale a grandi grâce à notre engagement envers la qualité, la fiabilité et la satisfaction client. Chaque projet est pour nous l'occasion de démontrer notre savoir-faire et notre professionnalisme.
                </p>
                <p>
                  Aujourd'hui, nous desservons fièrement les régions des Laurentides avec une équipe expérimentée et un équipement moderne, garantissant des résultats à la hauteur de vos attentes.
                </p>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="JSR Déneigement équipement"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des principes qui guident chacune de nos actions et garantissent votre satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-xl font-medium">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-xl font-medium">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-xl font-medium">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+15141234567">Appelez-nous</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
