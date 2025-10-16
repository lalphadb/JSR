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
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Des solutions complètes et professionnelles pour tous vos besoins en déneigement, excavation et aménagement extérieur.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+15141234567">Appelez-nous</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
