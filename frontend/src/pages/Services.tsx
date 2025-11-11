import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MapPin, ArrowRight } from "lucide-react";
import deneigementImg from "@/assets/photos/services/deneigement-1280.jpg";
import excavationImg from "@/assets/photos/services/excavation-1280.jpg";
import terrassementImg from "@/assets/photos/services/terrassement-1280.jpg";
import drainsImg from "@/assets/photos/services/drains-1280.jpg";
import terrasseImg from "@/assets/photos/services/terrasse-1280.jpg";

const Services = () => {
  const services = [
    {
      id: "deneigement",
      title: "Déneigement",
      image: deneigementImg,
      shortDesc: "Service 24/7",
      description: "Service de déneigement résidentiel et commercial disponible 24/7 pendant la saison hivernale pour assurer votre sécurité et votre confort.",
      features: [
        "Déneigement d'entrées résidentielles",
        "Déneigement de stationnements commerciaux",
        "Service d'urgence disponible 24/7",
        "Équipement moderne et performant",
        "Forfaits saisonniers avantageux",
      ],
      icon: "❄️",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.3!2d-71.3924!3d46.8814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89717f4ec44ed%3A0x1d8e9c1a8e9c1a8!2sRue%20Lepire%2C%20Qu%C3%A9bec%2C%20QC!5e0!3m2!1sfr!2sca!4v1730942800000!5m2!1sfr!2sca",
      zones: ["Rue Lepire", "Rue des Merisiers", "Parc de l'Épilobe", "Secteur résidentiel avoisinant"],
      hasLimitedZone: true,
    },
    {
      id: "excavation",
      title: "Excavation",
      image: excavationImg,
      shortDesc: "Tous projets",
      description: "Services d'excavation professionnels pour tous vos projets de construction et de rénovation, avec une expertise reconnue.",
      features: [
        "Excavation de fondations",
        "Creusage de sous-sols complets",
        "Tranchées pour services publics",
        "Démolition et déblaiement",
        "Transport de matériaux",
      ],
      icon: "🚜",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86971.78979890638!2d-71.35779!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f5d5d5d5d5%3A0x5d5d5d5d5d5d5d5!2sQuebec%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890",
      zones: ["Québec", "Lévis", "Beauport", "Charlesbourg", "Cap-Rouge", "Saint-Augustin"],
      hasLimitedZone: false,
    },
    {
      id: "terrassement",
      title: "Terrassement",
      image: terrassementImg,
      shortDesc: "Nivellement terrain",
      description: "Préparation et nivellement de terrain pour garantir des bases solides et durables à tous vos projets de construction.",
      features: [
        "Nivellement de terrain précis",
        "Préparation de sites de construction",
        "Aménagement paysager professionnel",
        "Remblayage et compaction",
        "Gestion optimale des eaux de surface",
      ],
      icon: "⛏️",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86971.78979890638!2d-71.28779!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f5d5d5d5d5%3A0x5d5d5d5d5d5d5d5!2sQuebec%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890",
      zones: ["Québec", "Lévis", "Beauport", "Ancienne-Lorette", "Val-Bélair"],
      hasLimitedZone: false,
    },
    {
      id: "drains",
      title: "Drains de fondation",
      image: drainsImg,
      shortDesc: "Protection humidité",
      description: "Installation et réparation de systèmes de drainage pour protéger votre propriété contre l'humidité et les infiltrations d'eau.",
      features: [
        "Installation de drains français",
        "Réparation de systèmes existants",
        "Inspection par caméra haute définition",
        "Imperméabilisation de fondations",
        "Solutions anti-infiltration durables",
      ],
      icon: "💧",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65228.84234918979!2d-71.28779!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f5d5d5d5d5%3A0x5d5d5d5d5d5d5d5!2sQuebec%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890",
      zones: ["Québec", "Lévis", "Beauport", "Charlesbourg"],
      hasLimitedZone: false,
    },
    {
      id: "terrasse",
      title: "Construction de terrasse",
      image: terrasseImg,
      shortDesc: "Bois/Composite",
      description: "Conception et construction de terrasses en bois ou composite pour embellir votre espace extérieur et augmenter la valeur de votre propriété.",
      features: [
        "Design personnalisé et sur mesure",
        "Matériaux de qualité supérieure",
        "Construction durable et solide",
        "Rampes et escaliers sécuritaires",
        "Finition professionnelle impeccable",
      ],
      icon: "🏡",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65228.84234918979!2d-71.25779!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896f5d5d5d5d5%3A0x5d5d5d5d5d5d5d5!2sQuebec%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890",
      zones: ["Québec", "Lévis", "Sainte-Foy", "Sillery", "Cap-Rouge"],
      hasLimitedZone: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services Professionnels</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Des solutions complètes pour tous vos besoins en aménagement extérieur
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="deneigement" className="max-w-7xl mx-auto">
            <TabsList className="w-full grid grid-cols-2 lg:grid-cols-5 gap-2 bg-surface p-2 rounded-xl h-auto mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center gap-2 py-4 px-2 data-[state=active]:bg-brand data-[state=active]:text-white rounded-lg transition-all"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-xs opacity-70">{service.shortDesc}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="bg-white rounded-xl shadow-xl border-2 border-border p-6 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-3">{service.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-brand text-lg">Nos services incluent :</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild size="lg" className="w-full bg-brand hover:bg-brand-hover text-white">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Obtenir un devis gratuit
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-brand/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Zone de service</h3>
                        <p className="text-muted-foreground text-sm">Secteurs desservis pour ce service</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video border-2 border-border">
                          <iframe
                            src={service.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Zone de service ${service.title}`}
                            className="w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="bg-surface rounded-xl p-4 border border-border h-full">
                          <h4 className="font-semibold mb-4 text-brand">Zones desservies</h4>
                          <div className="space-y-2">
                            {service.zones.map((zone, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand/5 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                                <span className="text-sm font-medium">{zone}</span>
                              </div>
                            ))}
                          </div>

                          {service.hasLimitedZone && (
                            <div className="mt-4 p-3 bg-amber-50 rounded-lg border-2 border-amber-200">
                              <p className="text-xs font-semibold text-amber-800 mb-1">⚠️ Zone limitée</p>
                              <p className="text-xs text-amber-700">
                                Déneigement offert UNIQUEMENT dans le secteur visible sur la carte.
                              </p>
                            </div>
                          )}

                          <div className="mt-4 p-3 bg-brand/5 rounded-lg border border-brand/20">
                            <p className="text-xs text-muted-foreground">📞 Secteur non listé ? Contactez-nous</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand via-brand to-brand/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à démarrer votre projet?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contactez-nous pour une soumission gratuite et sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand hover:bg-white/90 text-lg px-10 py-6">
              <Link to="/contact">Demander une soumission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-10 py-6">
              <a href="tel:+14188050063" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                418-805-0063
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;