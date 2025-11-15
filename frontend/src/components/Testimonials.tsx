import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marc Deschênes",
    role: "Propriétaire résidentiel",
    content: "Service exceptionnellement professionnel. L'équipe a complété mon projet de terrassement en temps et en heure. Je recommande vivement JSR Solutions!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie Gagnon",
    role: "Gestionnaire de propriété commerciale",
    content: "Déneigement impeccable pendant tout l'hiver. Service 24/7 fiable et équipe courtoise. Partenaire de confiance pour notre complexe commercial.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jean-Pierre Côté",
    role: "Entrepreneur en construction",
    content: "Excavation de précision pour nos fondations. Équipement moderne et équipe compétente. Travail conforme aux normes et délais respectés.",
    rating: 5,
  },
  {
    id: 4,
    name: "Martine Beaumont",
    role: "Propriétaire résidentiel",
    content: "Terrasse magnifique construite par JSR. Design personnalisé, matériaux de qualité et finition impeccable. Très satisfaite du résultat!",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Tremblay",
    role: "Gestionnaire immobilier",
    content: "Drainage de fondation professionnel. Inspection complète et solution durable. Problème d'humidité résolu définitivement.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-surface-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Cards */}
            <div className="overflow-hidden">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white border-surface-border shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star
                            className="w-5 h-5 fill-orange text-orange"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-text-primary mb-6 leading-relaxed italic">
                      "{testimonials[current].content}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="font-bold text-text-primary">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 p-2 rounded-full bg-brand text-white hover:bg-brand-hover transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 p-2 rounded-full bg-brand text-white hover:bg-brand-hover transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-brand w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
