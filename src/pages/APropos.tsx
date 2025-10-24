import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Truck, ThumbsUp } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useEffect } from "react";
import { PHOTOS } from "@/lib/photos";

const APropos = () => {
  const { count: yearsCount, ref: yearsRef } = useCounterAnimation(15, 2000);
  const { count: projectsCount, ref: projectsRef } = useCounterAnimation(500, 2500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCounterAnimation(100, 2000);
  
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "À propos de JSR Déneigement – Expertise depuis 15 ans | Saint-Raymond";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez JSR Déneigement : 15 ans d'expertise en excavation, déneigement et terrassement à Saint-Raymond et région. Équipe qualifiée et équipement moderne.");
    }
    
    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "À propos de JSR Déneigement");
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "15 ans d'expertise en excavation, déneigement et terrassement. Équipe professionnelle dédiée à votre satisfaction.");
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", window.location.origin + PHOTOS.hero.jpg1280);
    
    // Twitter Card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", "À propos de JSR Déneigement");
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "Expert en excavation et déneigement depuis 15 ans");
  }, []);

  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le domaine de l'excavation et du déneigement.",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Des professionnels formés et dévoués à la satisfaction client.",
    },
    {
      icon: Truck,
      title: "Équipement moderne",
      description: "Machinerie à la pointe de la technologie pour un travail efficace.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction garantie",
      description: "Votre satisfaction est notre priorité absolue.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - UPDATED WITH DARK COLOR */}
      <section className="bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">À propos de JSR Déneigement</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Votre partenaire de confiance pour tous vos projets d'excavation, déneigement et aménagement extérieur.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Notre histoire</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fondée il y a plus de 15 ans, JSR Déneigement s'est établie comme une référence dans la région de Saint-Raymond pour les services d'excavation, de déneigement et d'aménagement extérieur.
                </p>
                <p>
                  Notre entreprise familiale a grandi grâce à notre engagement envers la qualité, la fiabilité et la satisfaction client. Chaque projet est pour nous l'occasion de démontrer notre savoir-faire et notre professionnalisme.
                </p>
                <p>
                  Aujourd'hui, nous desservons fièrement les régions du Lac St-Charles et de Portneuf avec une équipe expérimentée et un équipement moderne, garantissant des résultats à la hauteur de vos attentes.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <picture>
                  <source srcSet={PHOTOS.hero.webp640} type="image/webp" media="(max-width: 768px)" />
                  <source srcSet={PHOTOS.hero.jpg1280} type="image/jpeg" />
                  <img
                    src={PHOTOS.hero.jpg1280}
                    alt={PHOTOS.hero.alt}
                    loading="lazy"
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des principes qui guident chacune de nos actions et garantissent votre satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-brand to-brand/70 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div ref={yearsRef} className="text-6xl md:text-7xl font-bold text-brand mb-4 group-hover:scale-110 transition-transform duration-300">{yearsCount}+</div>
              <p className="text-2xl font-semibold">Années d'expérience</p>
              <p className="text-muted-foreground mt-2">Dans l'industrie</p>
            </div>
            <div className="text-center group">
              <div ref={projectsRef} className="text-6xl md:text-7xl font-bold text-brand mb-4 group-hover:scale-110 transition-transform duration-300">{projectsCount}+</div>
              <p className="text-2xl font-semibold">Projets réalisés</p>
              <p className="text-muted-foreground mt-2">Avec succès</p>
            </div>
            <div className="text-center group">
              <div ref={satisfactionRef} className="text-6xl md:text-7xl font-bold text-brand mb-4 group-hover:scale-110 transition-transform duration-300">{satisfactionCount}%</div>
              <p className="text-2xl font-semibold">Clients satisfaits</p>
              <p className="text-muted-foreground mt-2">Notre priorité</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - UPDATED WITH BRAND COLORS */}
      <section className="bg-gradient-to-br from-brand via-brand to-brand/80 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold bg-white text-brand hover:bg-white/90">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold">
              <a href="tel:+14188050063">Appelez-nous</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
