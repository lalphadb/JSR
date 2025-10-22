import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Truck, Mountain } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Accueil = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Déneigement",
      description: "Service rapide et fiable tout l'hiver",
    },
    {
      icon: Truck,
      title: "Excavation",
      description: "Travaux professionnels pour vos projets",
    },
    {
      icon: Mountain,
      title: "Terrassement",
      description: "Préparation de terrain experte",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - ÉPURÉ */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
            <img
              src={PHOTOS.parcMachines.jpg1280}
              alt={PHOTOS.parcMachines.alt}
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            JSR Déneigement
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-medium mb-12">
            Excavation • Déneigement • Terrassement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-12 py-7 shadow-2xl">
              <Link to="/contact">Obtenir un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-12 py-7 bg-white/10 hover:bg-white/20 border-2 border-white text-white backdrop-blur-sm">
              <Link to="/services">Nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services - SIMPLIFIÉ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Nos services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary/30 hover:border-t-primary">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="px-12 py-7 text-lg">
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - ÉPURÉ */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-2xl mb-12 opacity-95 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-12 py-7 shadow-2xl font-semibold">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-12 py-7 border-2 border-white text-white hover:bg-white/10">
              <a href="tel:+14188050063">418-805-0063</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir - SIMPLIFIÉ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Pourquoi nous choisir?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl w-28 h-28 flex items-center justify-center mx-auto mb-6 text-4xl font-bold shadow-lg">
                15+
              </div>
              <h3 className="font-bold text-2xl mb-3">Années d'expérience</h3>
              <p className="text-muted-foreground text-lg">
                Expertise reconnue
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl w-28 h-28 flex items-center justify-center mx-auto mb-6 text-4xl font-bold shadow-lg">
                24/7
              </div>
              <h3 className="font-bold text-2xl mb-3">Disponibilité</h3>
              <p className="text-muted-foreground text-lg">
                Service d'urgence
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl w-28 h-28 flex items-center justify-center mx-auto mb-6 text-4xl font-bold shadow-lg">
                100%
              </div>
              <h3 className="font-bold text-2xl mb-3">Satisfaction</h3>
              <p className="text-muted-foreground text-lg">
                Garantie qualité
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
