import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parcMachinesImg from "@/assets/photos/parc-machines.jpg";
import excavationImg from "@/assets/photos/services/excavation-1280.jpg";
import terrassementImg from "@/assets/photos/services/terrassement-1280.jpg";

const Realisations = () => {
  useEffect(() => {
    document.title = "Réalisations - JSR Solutions";
    window.scrollTo(0, 0);
  }, []);

  // Projets avant/après - PHOTOS RÉELLES
  const avantApresProjects = [
    {
      title: "Terrassement résidentiel - Projet 1",
      avant: "/images/realisations/Terrassement_avant1_001.jpg",
      apres: "/images/realisations/Terassement_apres1_001.jpg",
      description: "Transformation complète d'une entrée avec terrassement professionnel et nivellement précis",
      categorie: "Terrassement"
    },
    {
      title: "Aménagement de terrain - Projet 2",
      avant: "/images/realisations/Terassement_avant1_002.jpg",
      apres: "/images/realisations/terassement_apres_2_002.jpg",
      description: "Nivellement et aménagement paysager avec finition de qualité supérieure",
      categorie: "Terrassement"
    },
    {
      title: "Préparation de terrain - Projet 3",
      avant: "/images/realisations/terassement_avant_2_001.jpg",
      apres: "/images/realisations/Terassement_apres_2_001.jpg",
      description: "Excavation et préparation de terrain pour construction résidentielle",
      categorie: "Excavation"
    },
    {
      title: "Terrassement avancé - Projet 4",
      avant: "/images/realisations/Realisations_terassement_1_002.jpg",
      apres: "/images/realisations/Terrassement_apres1_003.jpg",
      description: "Aménagement complexe avec gestion du drainage et nivellement de précision",
      categorie: "Terrassement"
    },
    {
      title: "Excavation et nivellement - Projet 5",
      avant: "/images/realisations/Realisations_terassement_1_004.jpg",
      apres: "/images/realisations/Terrrassement_apres1_004.jpg",
      description: "Préparation complète du site avec terrassement en profondeur et compaction",
      categorie: "Excavation"
    },
    {
      title: "Projet de terrassement - Projet 6",
      avant: "/images/realisations/Realisations_terassement_1_001.jpg",
      apres: "/images/realisations/Terrassement_apres1_003.jpg",
      description: "Transformation majeure avec excavation et préparation du terrain",
      categorie: "Terrassement"
    },
    {
      title: "Aménagement résidentiel - Projet 7",
      avant: "/images/realisations/Realisations_terasement_1_003.jpg",
      apres: "/images/realisations/Terassement_apres_2_001.jpg",
      description: "Nivellement complet et préparation pour aménagement paysager",
      categorie: "Terrassement"
    }
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % avantApresProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? avantApresProjects.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
            Nos réalisations
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Découvrez nos projets réalisés avec expertise et précision
          </p>
        </div>
      </section>

      {/* Section Avant/Après avec Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Avant / Après</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Voyez la transformation que nous apportons à vos projets
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-2 hover:border-brand transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Image Comparison */}
                  <div className="grid md:grid-cols-2 gap-4 p-8">
                    {/* AVANT */}
                    <div className="relative group">
                      <div className="absolute top-4 left-4 z-10 bg-muted text-text px-4 py-2 rounded-full font-bold text-sm shadow-lg border-2 border-border">
                        AVANT
                      </div>
                      <img 
                        src={avantApresProjects[currentIndex].avant}
                        alt={`Avant transformation - ${avantApresProjects[currentIndex].title}`}
                        loading="eager"
                        decoding="async"
                        className="w-full h-96 object-cover rounded-lg shadow-xl"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBBVkFOVDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>

                    {/* APRÈS */}
                    <div className="relative group">
                      <div className="absolute top-4 left-4 z-10 bg-brand text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        APRÈS
                      </div>
                      <img 
                        src={avantApresProjects[currentIndex].apres}
                        alt={`Après transformation - ${avantApresProjects[currentIndex].title}`}
                        loading="eager"
                        decoding="async"
                        className="w-full h-96 object-cover rounded-lg shadow-xl"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBBUFJFUzwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-8 bg-muted/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-semibold">
                        {avantApresProjects[currentIndex].categorie}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {avantApresProjects[currentIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {avantApresProjects[currentIndex].description}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {avantApresProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-brand w-8' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Aller au projet ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Équipement */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre équipement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Machinerie professionnelle pour tous types de projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-brand transition-all duration-300 overflow-hidden group">
              <img 
                src={parcMachinesImg}
                alt="Parc de machines JSR - Flotte complète d'équipements professionnels"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Parc de machines</h3>
                <p className="text-muted-foreground">
                  Flotte complète d'équipements pour tous vos projets
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-brand transition-all duration-300 overflow-hidden group">
              <img 
                src={excavationImg}
                alt="Pelle mécanique pour excavation - Équipement de précision"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pelles mécaniques</h3>
                <p className="text-muted-foreground">
                  Excavation de précision pour tous types de projets
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-brand transition-all duration-300 overflow-hidden group">
              <img 
                src={terrassementImg}
                alt="Chargeuse sur roues pour terrassement - Machinerie lourde"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Chargeuse sur roues</h3>
                <p className="text-muted-foreground">
                  Idéale pour les gros travaux de terrassement et de transport
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand via-brand to-brand/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à réaliser votre projet ?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet et obtenir une soumission gratuite
          </p>
          
          <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold bg-white text-brand hover:bg-white/90">
            <Link to="/contact" className="flex items-center gap-2">
              Demander une soumission
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
