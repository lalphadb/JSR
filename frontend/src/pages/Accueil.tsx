import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Truck, Mountain, Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const Accueil = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Déneigement Commercial",
      description: "Services de déneigement professionnel disponibles 24h/24 pour maintenir vos accès dégagés",
    },
    {
      icon: Truck,
      title: "Excavation & Fondation",
      description: "Travaux d'excavation précis pour fondations résidentielles et commerciales",
    },
    {
      icon: Mountain,
      title: "Terrassement & Nivellement",
      description: "Préparation et aménagement de terrain selon les normes industrielles",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimalist avec photo visible */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        {/* Background Image - Plus visible */}
        <div className="absolute inset-0">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
            <img
              src={PHOTOS.parcMachines.jpg1280}
              alt={PHOTOS.parcMachines.alt}
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Overlay léger en bas seulement */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
        </div>

        {/* Content - Compact en bas */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Excellence en
              <span className="block text-orange mt-2">Excavation • Terrassement • Déneigement</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 mb-6">
              Plus de 15 ans d'expertise au service de votre projet
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-orange hover:bg-orange-hover text-white px-8">
                <Link to="/contact">Obtenir une soumission</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-dark px-8">
                <a href="tel:+14188050063" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  418-805-0063
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Professional Grid */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Nos Services Spécialisés</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Solutions complètes pour projets résidentiels et commerciaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border border-surface-border bg-white"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand transition-all duration-300">
                    <service.icon className="h-8 w-8 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white px-8 py-6">
              <Link to="/services" className="flex items-center gap-2">
                Tous nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional Stats */}
      <section className="py-20 bg-white border-y border-surface-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">15+ Années</h3>
              <p className="text-text-secondary">D'expérience dans l'industrie</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Service 24/7</h3>
              <p className="text-text-secondary">Disponibilité pour urgences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Qualité Assurée</h3>
              <p className="text-text-secondary">Travaux garantis et conformes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Démarrez Votre Projet Aujourd'hui
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Demandez une soumission gratuite et détaillée pour votre projet d'excavation ou de terrassement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange hover:bg-orange-hover text-white text-lg px-8 py-6">
              <Link to="/contact">Demander une soumission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-6">
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
