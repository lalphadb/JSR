import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Truck, Mountain, Droplet, Hammer } from "lucide-react";
import heroImage from "@/assets/hero-snow-excavation.jpg";

const Accueil = () => {
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
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/70 to-secondary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badges animés */}
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
              <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                15+
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
              <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                100%
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
