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
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos réalisations</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour mener à bien votre projet de déneigement, excavation ou aménagement.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/contact">Démarrer votre projet</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
