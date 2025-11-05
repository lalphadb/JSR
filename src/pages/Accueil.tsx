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
      {/* Hero Section - DESIGN MODERNE ET PROFESSIONNEL */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Image de fond avec overlay sophistiqué */}
        <div className="absolute inset-0">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
            <img
              src={PHOTOS.parcMachines.jpg1280}
              alt={PHOTOS.parcMachines.alt}
              className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
            />
          </picture>
          {/* Overlay gradient premium */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          
          {/* Texture subtile */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        </div>

        {/* Contenu hero - Design premium */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            {/* Badge Premium */}
            <div className="inline-flex items-center gap-2 bg-brand/10 backdrop-blur-sm border border-brand/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
              </span>
              <span className="text-white/90 font-semibold text-sm tracking-wide">Service disponible 24/7</span>
            </div>
            
            {/* Titre principal - Sans répétition */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in leading-[1.1]" style={{ animationDelay: '0.1s' }}>
              Votre expert en
              <span className="block text-brand mt-2">travaux extérieurs</span>
            </h1>
            
            {/* Description moderne */}
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Excavation, déneigement et terrassement de qualité supérieure dans la région de Québec
            </p>
            
            {/* Points forts avec icônes */}
            <div className="flex flex-wrap gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-white/80">
                <div className="bg-brand/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">15+ ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="bg-brand/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Équipement professionnel</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="bg-brand/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Satisfaction garantie</span>
              </div>
            </div>
            
            {/* CTA Buttons - Design moderne */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-brand hover:bg-brand-hover text-white text-lg px-10 py-7 shadow-2xl hover:shadow-brand/50 transition-all duration-300 hover:scale-105 group font-semibold"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Obtenir un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-7 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 font-semibold"
              >
                <a href="tel:+14188050063" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  418-805-0063
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Décoration lumineuse */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZGkpIi8+PC9zdmc+')] opacity-30" />
        
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
