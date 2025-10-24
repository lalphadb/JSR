import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
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
      shortDesc: "Service professionnel de déneigement 24/7",
      description: "Service de déneigement résidentiel et commercial disponible 24/7 pendant la saison hivernale pour assurer votre sécurité et votre confort.",
      features: [
        "Déneigement d'entrées résidentielles",
        "Déneigement de stationnements commerciaux",
        "Service d'urgence disponible 24/7",
        "Équipement moderne et performant",
        "Forfaits saisonniers avantageux",
      ],
      icon: "❄️",
    },
    {
      title: "Excavation",
      image: excavationImg,
      shortDesc: "Excavation professionnelle tous projets",
      description: "Services d'excavation professionnels pour tous vos projets de construction et de rénovation, avec une expertise reconnue.",
      features: [
        "Excavation de fondations",
        "Creusage de sous-sols complets",
        "Tranchées pour services publics",
        "Démolition et déblaiement",
        "Transport de matériaux",
      ],
      icon: "🚜",
    },
    {
      title: "Terrassement",
      image: terrassementImg,
      shortDesc: "Préparation et nivellement de terrain",
      description: "Préparation et nivellement de terrain pour garantir des bases solides et durables à tous vos projets de construction.",
      features: [
        "Nivellement de terrain précis",
        "Préparation de sites de construction",
        "Aménagement paysager professionnel",
        "Remblayage et compaction",
        "Gestion optimale des eaux de surface",
      ],
      icon: "⛏️",
    },
    {
      title: "Drains de fondation",
      image: drainsImg,
      shortDesc: "Protection contre l'humidité",
      description: "Installation et réparation de systèmes de drainage pour protéger votre propriété contre l'humidité et les infiltrations d'eau.",
      features: [
        "Installation de drains français",
        "Réparation de systèmes existants",
        "Inspection par caméra haute définition",
        "Imperméabilisation de fondations",
        "Solutions anti-infiltration durables",
      ],
      icon: "💧",
    },
    {
      title: "Construction de terrasse",
      image: terrasseImg,
      shortDesc: "Terrasses sur mesure en bois/composite",
      description: "Conception et construction de terrasses en bois ou composite pour embellir votre espace extérieur et augmenter la valeur de votre propriété.",
      features: [
        "Design personnalisé et sur mesure",
        "Matériaux de qualité supérieure",
        "Construction durable et solide",
        "Rampes et escaliers sécuritaires",
        "Finition professionnelle impeccable",
      ],
      icon: "🏡",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section - UPDATED WITH BRAND COLORS */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Nos Services Professionnels
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed mb-10">
            Des solutions complètes et sur mesure pour tous vos besoins en déneigement, excavation et aménagement extérieur dans la région de Québec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white text-lg px-8 py-6">
              <Link to="/contact">Demander une soumission gratuite</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
              <a href="tel:+14188050063"><Phone className="mr-2 h-5 w-5" /> 418-805-0063</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid - Professional Cards with Better Proportions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre expertise à votre service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos services professionnels adaptés à vos besoins spécifiques
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch group transition-all duration-500 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Section - FIXED HEIGHT FOR BETTER PROPORTIONS */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group/image h-full overflow-hidden">
                    {/* Glow Effect Background */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand via-brand/50 to-transparent rounded-2xl blur-lg opacity-0 group-hover/image:opacity-40 transition-all duration-500" />
                    
                    {/* Image Container with Fixed Aspect Ratio */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full min-h-[300px] lg:min-h-[400px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:brightness-110"
                      />
                      
                      {/* Overlay Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 bg-brand text-white rounded-full p-3 shadow-lg group-hover/image:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section - Enhanced with Effects */}
                <div className={`flex flex-col justify-between ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Title avec animation */}
                  <div className="space-y-4 mb-6 transform group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand/50 rounded-full" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Card with Hover Effect */}
                  <Card className="mb-8 border-2 border-border shadow-lg hover:shadow-2xl hover:border-brand transition-all duration-300 transform group-hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-brand flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-brand rounded-full"></span>
                        Points forts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="h-6 w-6 text-brand flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                            <span className="text-base text-foreground group-hover/item:text-brand transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* CTA Button with Premium Styling */}
                  <Button asChild size="lg" className="w-full sm:w-auto bg-brand hover:bg-brand-hover text-white font-bold py-6 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group-hover:brightness-110">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Obtenir un devis pour ce service
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi choisir JSR Pro Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expertise reconnue et un service client irréprochable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">🏆</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">Expérience Reconnue</h3>
              <p className="text-muted-foreground">
                Plus de 15 ans d'expérience dans le domaine de l'excavation et de l'aménagement
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">Rapidité d'exécution</h3>
              <p className="text-muted-foreground">
                Respect des délais et intervention rapide pour tous vos projets urgents
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">✅</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">Qualité Garantie</h3>
              <p className="text-muted-foreground">
                Matériaux de qualité supérieure et travail soigné pour des résultats durables
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - UPDATED WITH BRAND COLORS */}
      <section className="py-24 bg-gradient-to-br from-brand via-brand to-brand/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir une soumission gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold bg-white text-brand hover:bg-white/90 hover:-translate-y-1">
              <Link to="/contact">Demander une soumission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold hover:-translate-y-1">
              <a href="tel:+14188050063"><Phone className="mr-2 h-5 w-5" /> 418-805-0063</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
