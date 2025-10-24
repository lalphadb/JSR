import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Truck, Mountain, Phone, ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Accueil = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Déneigement",
      description: "Service rapide et fiable 24/7 pour la saison hivernale",
      emoji: "❄️",
    },
    {
      icon: Truck,
      title: "Excavation",
      description: "Travaux professionnels pour tous vos projets de construction",
      emoji: "🚜",
    },
    {
      icon: Mountain,
      title: "Terrassement",
      description: "Préparation et nivellement de terrain avec expertise",
      emoji: "⛏️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section - Improved Typography & Button Fix */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
            <img
              src={PHOTOS.parcMachines.jpg1280}
              alt={PHOTOS.parcMachines.alt}
              className="w-full h-full object-cover"
            />
          </picture>
          {/* Stronger dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/85" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* REDUCED TITLE SIZE FOR BETTER BALANCE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in drop-shadow-2xl leading-tight">
            JSR Pro Solutions
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium mb-12 animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            Excavation • Déneigement • Terrassement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white text-lg px-12 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Link to="/contact">Obtenir un devis gratuit</Link>
            </Button>
            {/* FIXED BUTTON: Changed from white/10 to transparent with proper hover */}
            <Button asChild variant="outline" size="lg" className="text-lg px-12 py-7 bg-transparent hover:bg-white/20 border-2 border-white text-white backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Design */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos services professionnels</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins en aménagement extérieur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon Badge */}
                  <div className="bg-brand/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <service.icon className="h-10 w-10 text-brand group-hover:text-white transition-colors duration-300 relative z-10" />
                  </div>
                  
                  {/* Emoji Badge */}
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/services" className="flex items-center gap-2">
                Voir tous les services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Quick Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🏆</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">15+ ans d'expérience</h3>
              <p className="text-muted-foreground">Expertise reconnue dans la région</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">Service rapide 24/7</h3>
              <p className="text-muted-foreground">Disponible en tout temps</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">✅</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">Qualité garantie</h3>
              <p className="text-muted-foreground">Satisfaction client assurée</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Phone Button Fix */}
      <section className="py-24 bg-gradient-to-br from-brand via-brand to-brand/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Contactez-nous dès aujourd'hui pour une soumission gratuite et sans engagement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold bg-white text-brand hover:bg-white/90 hover:-translate-y-1">
              <Link to="/contact">Demander une soumission</Link>
            </Button>
            {/* FIXED PHONE BUTTON: transparent bg with green border, proper hover state */}
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white bg-transparent text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold hover:-translate-y-1">
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

export default Accueil;
