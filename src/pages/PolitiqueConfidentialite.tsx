import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité - JSR Pro Solutions";
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Protection de vos données",
      emoji: "🔒",
      content: [
        "Chez JSR Pro Solutions, nous prenons très au sérieux la protection de vos renseignements personnels. Cette politique de confidentialité décrit comment nous recueillons, utilisons, divulguons et protégeons vos informations personnelles conformément aux lois québécoises et canadiennes applicables, notamment la Loi 25 modifiant la Loi sur la protection des renseignements personnels dans le secteur privé."
      ]
    },
    {
      icon: FileText,
      title: "Renseignements recueillis",
      emoji: "📋",
      content: [
        "Nous pouvons recueillir les renseignements personnels suivants :",
        "• Nom complet",
        "• Numéro de téléphone",
        "• Adresse courriel",
        "• Adresse physique (pour les services)",
        "• Informations relatives à votre projet (type de service demandé, détails du projet)",
        "• Communications avec notre entreprise"
      ]
    },
    {
      icon: Eye,
      title: "Utilisation des renseignements",
      emoji: "👁️",
      content: [
        "Nous utilisons vos renseignements personnels uniquement pour les fins suivantes :",
        "• Vous fournir les services demandés (déneigement, excavation, terrassement)",
        "• Répondre à vos demandes de soumission et questions",
        "• Communiquer avec vous concernant votre projet",
        "• Améliorer nos services",
        "• Respecter nos obligations légales",
        "",
        "Nous n'utiliserons jamais vos renseignements personnels à d'autres fins sans votre consentement préalable."
      ]
    },
    {
      icon: Lock,
      title: "Protection et conservation",
      emoji: "🛡️",
      content: [
        "JSR Pro Solutions met en œuvre des mesures de sécurité appropriées pour protéger vos renseignements personnels contre tout accès, modification, divulgation ou destruction non autorisés.",
        "",
        "Conservation des données :",
        "• Vos renseignements sont conservés uniquement le temps nécessaire pour accomplir les fins pour lesquelles ils ont été recueillis",
        "• Les données des clients actifs sont conservées pendant la durée de la relation d'affaires",
        "• Les données peuvent être conservées plus longtemps si requis par la loi",
        "• À votre demande, nous pouvons supprimer vos renseignements personnels, sous réserve de nos obligations légales"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand/20 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
            Politique de confidentialité
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Votre vie privée est importante pour nous. Découvrez comment nous protégeons vos renseignements personnels.
          </p>
          <p className="text-sm text-white/60 mt-6">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-2 hover:border-brand transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-brand/10 p-3 rounded-xl flex-shrink-0">
                      <section.icon className="h-6 w-6 text-brand" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{section.emoji}</span>
                        <h2 className="text-3xl font-bold">{section.title}</h2>
                      </div>
                      <div className="text-muted-foreground leading-relaxed space-y-3">
                        {section.content.map((paragraph, idx) => (
                          <p key={idx} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Divulgation à des tiers */}
            <Card className="border-2 hover:border-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand/10 p-3 rounded-xl flex-shrink-0">
                    <FileText className="h-6 w-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🤝</span>
                      <h2 className="text-3xl font-bold">Divulgation à des tiers</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>
                        JSR Pro Solutions ne vend, ne loue ni n'échange vos renseignements personnels avec des tiers.
                      </p>
                      <p>
                        Nous pouvons divulguer vos renseignements personnels uniquement dans les cas suivants :
                      </p>
                      <p className="ml-4">• Avec votre consentement explicite</p>
                      <p className="ml-4">• À nos sous-traitants qui nous aident à fournir nos services (ex. : fournisseurs de services de messagerie), sous réserve d'obligations de confidentialité strictes</p>
                      <p className="ml-4">• Lorsque requis par la loi ou par une ordonnance d'un tribunal</p>
                      <p className="ml-4">• Pour protéger nos droits légaux ou la sécurité de nos clients ou employés</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vos droits */}
            <Card className="border-2 hover:border-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand/10 p-3 rounded-xl flex-shrink-0">
                    <Shield className="h-6 w-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">⚖️</span>
                      <h2 className="text-3xl font-bold">Vos droits</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>
                        Conformément à la législation québécoise, vous avez les droits suivants concernant vos renseignements personnels :
                      </p>
                      <p className="ml-4">• <strong>Droit d'accès :</strong> Vous pouvez demander à consulter vos renseignements personnels que nous détenons</p>
                      <p className="ml-4">• <strong>Droit de rectification :</strong> Vous pouvez demander la correction de renseignements inexacts ou incomplets</p>
                      <p className="ml-4">• <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos renseignements personnels, sous réserve de nos obligations légales</p>
                      <p className="ml-4">• <strong>Droit à la portabilité :</strong> Vous pouvez demander de recevoir vos renseignements dans un format structuré et couramment utilisé</p>
                      <p className="ml-4">• <strong>Droit de retirer votre consentement :</strong> Vous pouvez retirer votre consentement à tout moment</p>
                      <p className="ml-4">• <strong>Droit de déposer une plainte :</strong> Vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies et technologies */}
            <Card className="border-2 hover:border-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand/10 p-3 rounded-xl flex-shrink-0">
                    <Eye className="h-6 w-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🍪</span>
                      <h2 className="text-3xl font-bold">Cookies et technologies similaires</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>
                        Notre site web peut utiliser des cookies et des technologies similaires pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
                      </p>
                      <p>
                        Types de cookies utilisés :
                      </p>
                      <p className="ml-4">• <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</p>
                      <p className="ml-4">• <strong>Cookies de performance :</strong> Pour analyser l'utilisation du site et améliorer nos services</p>
                      <p>
                        Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card className="border-2 hover:border-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand/10 p-3 rounded-xl flex-shrink-0">
                    <FileText className="h-6 w-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">📝</span>
                      <h2 className="text-3xl font-bold">Modifications de la politique</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée.
                      </p>
                      <p>
                        Nous vous encourageons à consulter régulièrement cette page pour rester informé de la façon dont nous protégeons vos renseignements personnels.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 border-2 border-brand/30 bg-gradient-to-br from-brand/5 to-transparent">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Questions ou préoccupations ?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits, n'hésitez pas à nous contacter :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg">
                    <Phone className="h-5 w-5 text-brand" />
                    <a href="tel:+14188050063" className="font-semibold hover:text-brand transition-colors">
                      418-805-0063
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg">
                    <Mail className="h-5 w-5 text-brand" />
                    <a href="mailto:info@jsrprosolutions.com" className="font-semibold hover:text-brand transition-colors">
                      info@jsrprosolutions.com
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Responsable de la protection des renseignements personnels :</strong><br />
                    JSR Pro Solutions<br />
                    303 rue des Mélèzes, Saint-Raymond (QC) G3L 0E8
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Commission d'accès à l'information du Québec :</strong><br />
                    En cas de litige, vous pouvez contacter la CAI au 1-888-528-7741 ou consulter leur site web à{' '}
                    <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                      www.cai.gouv.qc.ca
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
