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
      image: PHOTOS.services.excavationFondation,
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
    <div className="min-h-screen bg-bg text-white">
      {/* Hero Section - Enhanced with Visual Effects */}
      <section className="relative bg-bg border-b-4 border-accent-yellow py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight uppercase text-white">
            Nos réalisations
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed font-medium">
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail dans la région de Québec
          </p>
        </div>
      </section>

      {/* Gallery - Modern Card Grid */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none overflow-hidden"
              >
                {/* Image with Overlay */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <picture>
                    <source type="image/webp" srcSet={project.image.webp640} />
                    <img
                      src={project.image.jpg1280}
                      alt={project.image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </picture>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-accent-yellow text-bg px-4 py-2 font-bold uppercase text-sm shadow-lg">
                    {project.category}
                  </div>
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-4 left-4 text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-md">
                    {project.emoji}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-2 text-white group-hover:text-accent-yellow transition-colors duration-300 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-accent-yellow font-bold mb-3 uppercase tracking-wide">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent-yellow text-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-bg/90 max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-wide">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir une soumission gratuite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 font-black bg-bg text-white hover:bg-black rounded-none uppercase tracking-wider">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-4 border-bg text-bg hover:bg-bg hover:text-white transition-all duration-300 font-black rounded-none uppercase tracking-wider bg-transparent">
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
