import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Realisations = () => {
  const projects = [
    {
      title: "Déneigement résidentiel",
      location: "Lac St-Charles",
      category: "Déneigement",
      image: PHOTOS.services.deneigement,
      description: "Service de déneigement complet pour propriété résidentielle avec stationnement double",
      emoji: "❄️",
    },
    {
      title: "Excavation de fondation",
      location: "Saint Gabriel De Valcartier",
      category: "Excavation",
      image: PHOTOS.services.excavation,
      description: "Excavation complète pour nouvelle construction résidentielle avec sous-sol",
      emoji: "🚜",
    },
    {
      title: "Terrassement commercial",
      location: "Saint-Raymond",
      category: "Terrassement",
      image: PHOTOS.services.terrassement,
      description: "Préparation de terrain pour projet commercial de 5000 pi²",
      emoji: "⛏️",
    },
    {
      title: "Installation de drains",
      location: "St-Émile",
      category: "Drains de fondation",
      image: PHOTOS.services.drains,
      description: "Installation complète de système de drainage français autour d'une résidence",
      emoji: "💧",
    },
    {
      title: "Terrasse en bois",
      location: "Lac St-Charles",
      category: "Construction de terrasse",
      image: PHOTOS.services.terrasse,
      description: "Construction de terrasse sur mesure en cèdre avec pergola intégrée",
      emoji: "🏡",
    },
    {
      title: "Excavation piscine",
      location: "Stoneham",
      category: "Excavation",
      image: PHOTOS.services.excavation,
      description: "Excavation et terrassement pour installation de piscine creusée",
      emoji: "🏊",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section - Enhanced with Visual Effects */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in">
            Nos réalisations
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail dans la région de Québec
          </p>
        </div>
      </section>

      {/* Gallery - Modern Card Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 overflow-hidden"
              >
                {/* Image with Overlay */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <picture>
                    <source type="image/webp" srcSet={project.image.webp640} />
                    <img
                      src={project.image.jpg1280}
                      alt={project.image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </picture>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </div>
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-4 left-4 text-4xl group-hover:scale-125 transition-transform duration-300">
                    {project.emoji}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-brand font-semibold mb-3">
                    📍 {project.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand via-brand to-brand/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir une soumission gratuite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold bg-white text-brand hover:bg-white/90 hover:-translate-y-1">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold hover:-translate-y-1">
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

export default Realisations;
