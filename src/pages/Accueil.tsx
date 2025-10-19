import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Snowflake, Truck, Mountain, Droplet, Hammer } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { PHOTOS } from "@/lib/photos";
import LogoShowcase from "@/components/LogoShowcase";

const Accueil = () => {
  const { count: yearsCount, ref: yearsRef } = useCounterAnimation(15, 2000);
  const { count: satisfactionCount, ref: satisfactionRef } = useCounterAnimation(100, 2500);

  const services = [
    {
      icon: Snowflake,
      title: "Déneigement",
      description: "Service rapide et fiable pour garder vos entrées dégagées tout l'hiver.",
    },
    {
      icon: Truck,
      title: "Excavation",
      description: "Travaux d'excavation professionnels pour tous vos projets de construction.",
    },
    {
      icon: Mountain,
      title: "Terrassement",
      description: "Préparation et nivellement de terrain pour des fondations solides.",
    },
    {
      icon: Droplet,
      title: "Drains de fondation",
      description: "Installation et réparation de systèmes de drainage pour protéger votre propriété.",
    },
    {
      icon: Hammer,
      title: "Construction de terrasse",
      description: "Conception et construction de terrasses durables et esthétiques.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] md:h-[750px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 hover:scale-105">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.hero.webp640} />
            <img
              src={PHOTOS.hero.jpg1280}
              alt={PHOTOS.hero.alt}
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/70 to-secondary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badges animés */}
          {/* Logo Hero TRANSPARENT - Spectacle ultime */}
          <div className="mb-12 animate-scale-in relative">
            {/* Effet de fond lumineux pour la page hero */}
            <div className="absolute -inset-16 bg-gradient-to-r from-primary/20 via-red-500/15 to-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            
            <LogoShowcase 
              size="hero" 
              animated={true}
              className="mx-auto relative z-10"
            />
            
            {/* Texte sous le logo */}
            <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="w-3 h-3 bg-gradient-to-r from-primary to-red-500 rounded-full animate-pulse"></span>
                <span className="text-secondary-foreground font-semibold tracking-wide">EXCAVATION • DÉNEIGEMENT • TERRASSEMENT</span>
                <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-primary rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6 animate-fade-in-down">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shimmer">
              ⚡ Service d'urgence 24/7
            </span>
            <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg pulse-glow">
              🎁 Devis gratuit
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-secondary-foreground mb-6 animate-fade-in-up leading-tight">
            JSR Déneigement
          </h1>
          <p className="text-2xl md:text-3xl text-secondary-foreground mb-3 animate-fade-in-up font-semibold" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Excavation | Déneigement | Terrassement
          </p>
          <p className="text-lg md:text-xl text-secondary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Service rapide, professionnel et local dans la région du Lac St-Charles et des Laurentides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 bg-background/10 hover:bg-background/25 border-2 border-secondary-foreground text-secondary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Link to="/services">Nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Nos services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Des solutions complètes pour tous vos besoins en déneigement, excavation et aménagement extérieur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift border-t-4 border-t-primary/20 hover:border-t-primary transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button asChild size="lg" className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in leading-tight">
            Besoin d'un service rapide et professionnel?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold">
              <a href="tel:+14188050063">Appelez maintenant</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Questions fréquentes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Retrouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-card shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Quels sont vos tarifs pour le déneigement?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Nos tarifs varient selon la taille de votre terrain et la fréquence du service. Nous offrons des forfaits saisonniers avantageux et des services à la demande. Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-card shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Offrez-vous un service d'urgence?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Oui! Nous sommes disponibles 24/7 pendant la saison hivernale pour les urgences de déneigement. Notre équipe peut intervenir rapidement pour assurer votre sécurité et maintenir l'accessibilité de votre propriété.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-card shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Quelle est votre zone de service?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Nous desservons Lac St-Charles, Saint-Raymond, Stoneham, Saint-Gabriel-de-Valcartier, Saint-Émile, Portneuf et les environs. Contactez-nous pour vérifier si nous desservons votre secteur.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-card shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Combien de temps prend un projet d'excavation?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  La durée dépend de l'ampleur du projet. Une excavation résidentielle typique prend entre 1 et 3 jours. Nous vous fournirons un calendrier précis lors de l'évaluation initiale de votre projet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-card shadow-md hover:shadow-lg transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Êtes-vous assurés et licenciés?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  Absolument. JSR Déneigement possède toutes les assurances et licences nécessaires pour exercer nos activités. Nous respectons toutes les normes de sécurité et réglementations en vigueur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Vous avez d'autres questions?
            </p>
            <Button asChild size="lg" className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Pourquoi nous choisir?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des valeurs qui font notre réputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center group">
              <div ref={yearsRef} className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                {yearsCount}+
              </div>
              <h3 className="font-bold text-2xl mb-3">Années d'expérience</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Une expertise reconnue dans le domaine.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                24/7
              </div>
              <h3 className="font-bold text-2xl mb-3">Disponibilité</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Service d'urgence disponible en tout temps.
              </p>
            </div>

            <div className="text-center group">
              <div ref={satisfactionRef} className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                {satisfactionCount}%
              </div>
              <h3 className="font-bold text-2xl mb-3">Satisfaction garantie</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Votre satisfaction est notre priorité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
