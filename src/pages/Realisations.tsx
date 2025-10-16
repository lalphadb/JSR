import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import deneigementImg from "@/assets/service-deneigement.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import terrassementImg from "@/assets/service-terrassement.jpg";
import drainsImg from "@/assets/service-drains.jpg";
import terrasseImg from "@/assets/service-terrasse.jpg";

const Realisations = () => {
  const projects = [
    {
      title: "Déneigement résidentiel - Lac St-Charles",
      category: "Déneigement",
      image: deneigementImg,
      description: "Service de déneigement complet pour propriété résidentielle avec stationnement double.",
    },
    {
      title: "Excavation de fondation - Saint Gabriel De Valcartier",
      category: "Excavation",
      image: excavationImg,
      description: "Excavation complète pour nouvelle construction résidentielle avec sous-sol.",
    },
    {
      title: "Terrassement commercial - Saint-Raymond",
      category: "Terrassement",
      image: terrassementImg,
      description: "Préparation de terrain pour projet commercial de 5000 pi².",
    },
    {
      title: "Installation de drains - St-Émile",
      category: "Drains de fondation",
      image: drainsImg,
      description: "Installation complète de système de drainage français autour d'une résidence.",
    },
    {
      title: "Terrasse en bois - Lac St-Charles",
      category: "Construction de terrasse",
      image: terrasseImg,
      description: "Construction de terrasse sur mesure en cèdre avec pergola intégrée.",
    },
    {
      title: "Excavation piscine - Stoneham",
      category: "Excavation",
      image: excavationImg,
      description: "Excavation et terrassement pour installation de piscine creusée.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">Nos réalisations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-0 shadow-xl">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-muted/50 to-background py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Faites confiance à notre expertise pour mener à bien votre projet de déneigement, excavation ou aménagement.
          </p>
          <Button asChild size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact">Démarrer votre projet</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
