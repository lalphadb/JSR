import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import parcMachinesImg from "@/assets/photos/parc-machines.jpg";
import excavationImg from "@/assets/photos/services/excavation-1280.jpg";
import terrassementImg from "@/assets/photos/services/terrassement-1280.jpg";

const Realisations = () => {
  useEffect(() => {
    document.title = "Réalisations - JSR Solutions";
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Projets avant/après
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
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % avantApresProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? avantApresProjects.length - 1 : prev - 1
    );
  };

  // Galerie de projets
  const galleryItems = [
    {
      id: 1,
      image: excavationImg,
      title: "Excavation de fondation",
      category: "Excavation",
      description: "Excavation professionnelle pour fondations résidentielles"
    },
    {
      id: 2,
      image: terrassementImg,
      title: "Terrassement de terrain",
      category: "Terrassement",
      description: "Nivellement et préparation de terrain pour construction"
    },
    {
      id: 3,
      image: parcMachinesImg,
      title: "Parc de machines",
      category: "Infrastructure",
      description: "Équipement moderne pour tous types de projets"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Nos réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed"
          >
            Découvrez nos projets réalisés avec expertise et précision
          </motion.p>
        </div>
      </section>

      {/* Avant/Après Carousel */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Avant / Après</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Voyez la transformation que nous apportons à vos projets
            </p>
          </FadeInUp>

          <div className="max-w-6xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-surface-border hover:border-brand transition-all duration-300 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-4 p-8">
                    {/* AVANT */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute top-4 left-4 z-10 bg-gray-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        AVANT
                      </div>
                      <img
                        src={avantApresProjects[currentIndex].avant}
                        alt="Avant"
                        className="w-full h-96 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                        onError={(e) => {
                          e.currentTarget.src = excavationImg;
                        }}
                      />
                    </motion.div>

                    {/* APRÈS */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute top-4 left-4 z-10 bg-brand text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        APRÈS
                      </div>
                      <img
                        src={avantApresProjects[currentIndex].apres}
                        alt="Après"
                        className="w-full h-96 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                        onError={(e) => {
                          e.currentTarget.src = terrassementImg;
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="bg-white px-8 py-6 border-t border-surface-border">
                    <p className="text-sm text-brand font-semibold mb-2">
                      {avantApresProjects[currentIndex].categorie}
                    </p>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {avantApresProjects[currentIndex].title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {avantApresProjects[currentIndex].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-brand text-white hover:bg-brand-hover transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-2">
                {avantApresProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-brand w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-brand text-white hover:bg-brand-hover transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Galerie de projets</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explorez notre portfolio complet de réalisations
            </p>
          </FadeInUp>

          <div className="max-w-6xl mx-auto">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour votre prochain projet?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une soumission gratuite
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-orange hover:bg-orange-hover text-white text-lg px-8 py-6">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Realisations;
