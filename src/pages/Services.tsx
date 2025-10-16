import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import deneigementImg from "@/assets/service-deneigement.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import terrassementImg from "@/assets/service-terrassement.jpg";
import drainsImg from "@/assets/service-drains.jpg";
import terrasseImg from "@/assets/service-terrasse.jpg";

const Services = () => {
  const services = [
    {
      title: "Déneigement",
      image: deneigementImg,
      description: "Service de déneigement résidentiel et commercial disponible 24/7 pendant la saison hivernale.",
      features: [
        "Déneigement d'entrées résidentielles",
        "Déneigement de stationnements commerciaux",
        "Service d'urgence disponible",
        "Équipement moderne et performant",
        "Forfaits saisonniers disponibles",
      ],
    },
    {
      title: "Excavation",
      image: excavationImg,
      description: "Services d'excavation professionnels pour tous vos projets de construction et de rénovation.",
      features: [
        "Excavation de fondations",
        "Creusage de sous-sols",
        "Tranchées pour services publics",
        "Démolition et déblaiement",
        "Transport de matériaux",
      ],
    },
    {
      title: "Terrassement",
      image: terrassementImg,
      description: "Préparation et nivellement de terrain pour garantir des bases solides à vos projets.",
      features: [
        "Nivellement de terrain",
        "Préparation de sites de construction",
        "Aménagement paysager",
        "Remblayage et compaction",
        "Gestion des eaux de surface",
      ],
    },
    {
      title: "Drains de fondation",
      image: drainsImg,
      description: "Installation et réparation de systèmes de drainage pour protéger votre propriété contre l'humidité.",
      features: [
        "Installation de drains français",
        "Réparation de systèmes existants",
        "Inspection par caméra",
        "Imperméabilisation de fondations",
        "Solutions anti-infiltration",
      ],
    },
    {
      title: "Construction de terrasse",
      image: terrasseImg,
      description: "Conception et construction de terrasses en bois ou composite pour embellir votre espace extérieur.",
      features: [
        "Design personnalisé",
        "Matériaux de qualité supérieure",
        "Construction durable",
        "Rampes et escaliers",
        "Finition professionnelle",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">Nos services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Des solutions complètes et professionnelles pour tous vos besoins en déneigement, excavation et aménagement extérieur.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""} group`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <div className="bg-primary/10 rounded-lg p-2 mr-3 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-lg">✓</span>
                        </div>
                        <span className="text-base text-foreground/90 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold">
              <a href="tel:+14188050063">Appelez-nous</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
