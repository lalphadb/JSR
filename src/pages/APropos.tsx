import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Truck, ThumbsUp, Phone, ArrowRight } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useEffect } from "react";
import { PHOTOS } from "@/lib/photos";

const APropos = () => {
  const { count: yearsCount, ref: yearsRef } = useCounterAnimation(15, 2000);
  const { count: projectsCount, ref: projectsRef } = useCounterAnimation(500, 2500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCounterAnimation(100, 2000);
  
  useEffect(() => {
    document.title = "À propos de JSR Pro Solutions – Expertise depuis 15 ans | Québec";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez JSR Pro Solutions : 15 ans d'expertise en excavation, déneigement et terrassement à Québec. Équipe qualifiée et équipement moderne.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "À propos de JSR Pro Solutions");
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "15 ans d'expertise en excavation, déneigement et terrassement. Équipe professionnelle dédiée à votre satisfaction.");
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", window.location.origin + PHOTOS.hero.jpg1280);
  }, []);

  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le domaine de l'excavation et du déneigement",
      emoji: "🏆",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Des professionnels formés et dévoués à votre satisfaction",
      emoji: "👥",
    },
    {
      icon: Truck,
      title: "Équipement moderne",
      description: "Machinerie à la pointe de la technologie pour un travail efficace",
      emoji: "🚜",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction garantie",
      description: "Votre satisfaction est notre priorité absolue",
      emoji: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section - Enhanced with Visual Effects */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in">
            À propos de JSR Pro Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Votre partenaire de confiance pour tous vos projets d'excavation, déneigement et aménagement extérieur dans la région de Québec.
          </p>
        </div>
      </section>

      {/* Company Story - Image + Text Split */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Image - 40% */}
            <div className="lg:col-span-2">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand via-brand/50 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500" />
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
                  <img
                    src={PHOTOS.parcMachines.jpg1280}
                    alt={PHOTOS.parcMachines.alt}
                    className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              </div>
            </div>

            {/* Content - 60% */}
            <div className="lg:col-span-3">
              <div className="space-y-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-bold">Notre histoire</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand/50 rounded-full" />
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fondée il y a plus de <strong className="text-brand">15 ans</strong>, JSR Pro Solutions s'est établie comme une référence dans le domaine de l'excavation, du déneigement et de l'aménagement extérieur dans la région de Québec.
                </p>
                <p>
                  Notre engagement envers l'excellence et la satisfaction client nous a permis de bâtir une solide réputation. Nous combinons expertise traditionnelle et équipement moderne pour offrir des services de qualité supérieure.
                </p>
                <p>
                  Chaque projet est une opportunité de démontrer notre savoir-faire et notre dévouement. Notre équipe de professionnels qualifiés travaille avec passion pour dépasser vos attentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-brand via-brand to-brand/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div ref={yearsRef} className="group">
              <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {yearsCount}+
              </div>
              <div className="text-xl font-semibold text-white/90">Années d'expérience</div>
            </div>
            
            <div ref={projectsRef} className="group">
              <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {projectsCount}+
              </div>
              <div className="text-xl font-semibold text-white/90">Projets réalisés</div>
            </div>
            
            <div ref={satisfactionRef} className="group">
              <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {satisfactionCount}%
              </div>
              <div className="text-xl font-semibold text-white/90">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:border-brand transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-brand/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {value.emoji}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir une soumission gratuite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 bg-transparent hover:bg-brand/10 transition-all duration-300 hover:scale-105">
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

export default APropos;
