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
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
            JSR Déneigement – Excavation | Déneigement | Terrassement
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground mb-8">
            Service rapide, professionnel et local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-background/10 hover:bg-background/20 border-secondary-foreground text-secondary-foreground">
              <Link to="/services">Nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en déneigement, excavation et aménagement extérieur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un service rapide et professionnel?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+15141234567">Appelez maintenant</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                15+
              </div>
              <h3 className="font-bold text-xl mb-2">Années d'expérience</h3>
              <p className="text-muted-foreground">
                Une expertise reconnue dans le domaine.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                24/7
              </div>
              <h3 className="font-bold text-xl mb-2">Disponibilité</h3>
              <p className="text-muted-foreground">
                Service d'urgence disponible en tout temps.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                100%
              </div>
              <h3 className="font-bold text-xl mb-2">Satisfaction garantie</h3>
              <p className="text-muted-foreground">
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
