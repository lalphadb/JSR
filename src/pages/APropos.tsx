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
    <div className="min-h-screen bg-bg text-textc-primary">
      {/* Hero Section - Enhanced with Visual Effects */}
      <section className="relative bg-bg border-b-4 border-accent-yellow py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight uppercase text-white">
            À propos de <span className="text-accent-yellow">JSR Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed font-medium">
            Votre partenaire de confiance pour tous vos projets d'excavation, déneigement et aménagement extérieur dans la région de Québec.
          </p>
        </div>
      </section>

      {/* Company Story - Image + Text Split */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Image - 40% */}
            <div className="lg:col-span-2">
              <div className="relative group border-4 border-accent-yellow">
                <picture>
                  <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
                  <img
                    src={PHOTOS.parcMachines.jpg1280}
                    alt={PHOTOS.parcMachines.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </picture>
              </div>
            </div>

            {/* Content - 60% */}
            <div className="lg:col-span-3">
              <div className="space-y-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Notre histoire</h2>
                <div className="h-2 w-24 bg-accent-yellow" />
              </div>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-medium">
                <p>
                  Fondée il y a plus de <strong className="text-accent-yellow">15 ans</strong>, JSR Solutions s'est établie comme une référence dans le domaine de l'excavation, du déneigement et de l'aménagement extérieur dans la région de Québec.
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
      <section className="py-20 bg-accent-yellow text-bg border-y-4 border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div ref={yearsRef} className="group">
              <div className="text-6xl font-black mb-2 text-bg">
                {yearsCount}+
              </div>
              <div className="text-xl font-bold text-bg/80 uppercase tracking-wider">Années d'expérience</div>
            </div>
            
            <div ref={projectsRef} className="group">
              <div className="text-6xl font-black mb-2 text-bg">
                {projectsCount}+
              </div>
              <div className="text-xl font-bold text-bg/80 uppercase tracking-wider">Projets réalisés</div>
            </div>
            
            <div ref={satisfactionRef} className="group">
              <div className="text-6xl font-black mb-2 text-bg">
                {satisfactionCount}%
              </div>
              <div className="text-xl font-bold text-bg/80 uppercase tracking-wider">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-white">Nos valeurs</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-accent-yellow/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-yellow transition-all duration-300 rounded-none">
                    <value.icon className="h-8 w-8 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 text-white uppercase">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 border-t-4 border-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir une soumission gratuite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg text-lg px-10 py-6 font-bold rounded-none uppercase tracking-wider">
              <Link to="/contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-bg bg-transparent font-bold rounded-none uppercase tracking-wider">
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
