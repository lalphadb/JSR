import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/realisations", label: "Réalisations" },
    { path: "/a-propos", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-dark via-dark to-dark backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-dark-surface/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - ENTREPRISE PROFESSIONNEL */}
          <Link to="/" className="flex items-center gap-4 group relative py-2">
            {/* Logo avec fond subtil */}
            <div className="relative">
              {/* Fond blanc circulaire pour contraste */}
              <div className="absolute inset-0 bg-white/95 rounded-2xl scale-105 shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
              
              {/* Halo vert au hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand/20 via-brand/30 to-brand/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              
              <picture className="relative z-10">
                <source type="image/webp" srcSet={jsrLogoWebp} />
                <img 
                  src={jsrLogoPng}
                  alt="JSR Solutions - Logo" 
                  className="h-14 w-auto relative z-10 transition-all duration-500 group-hover:scale-105 p-2"
                />
              </picture>
            </div>
            
            {/* Nom de l'entreprise + Tagline */}
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-brand transition-colors duration-300">
                JSR Solutions
              </span>
              <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
                Excavation • Déneigement • Terrassement
              </span>
            </div>
            
            {/* Badge "Professionnel" discret */}
            <div className="hidden md:flex absolute -top-1 -right-2 bg-brand text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg">
              PRO
            </div>
          </Link>

          {/* Navigation Desktop - Design harmonieux */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg group ${
                      isActive(link.path) 
                        ? "text-brand bg-brand/10 shadow-lg" 
                        : "text-white hover:text-white hover:bg-dark-surface/50"
                    }`}
                  >
                    {link.label}
                    
                    {/* Indicateur actif moderne */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-brand to-brand/70 transition-all duration-300 ${
                      isActive(link.path) ? "w-3/4" : "w-0 group-hover:w-1/2"
                    }`} />
                    
                    {/* Effet de survol subtil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Séparateur élégant */}
            <div className="mx-6 h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {/* Bouton d'appel premium */}
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-brand to-brand/80 hover:from-brand/90 hover:to-brand/70 text-white font-bold px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <a href="tel:+14188050063" className="flex items-center gap-3 relative z-10">
                <Phone className="h-5 w-5 animate-pulse" />
                <span className="hidden xl:inline">Appelez-nous</span>
                <span className="xl:hidden">Appel</span>
                
                {/* Effet de brillance sur le bouton */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button - Design amélioré */}
          <button
            className="lg:hidden relative p-3 text-white hover:text-white hover:bg-dark-surface/50 rounded-xl transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              
              {/* Indicateur de menu ouvert */}
              <div className={`absolute -inset-1 bg-brand/20 rounded-lg transition-all duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Design harmonisé */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-4 border-t border-dark-surface/50 animate-fade-in">
            {/* Logo mobile centré */}
            <div className="flex justify-center mb-6">
              {/* Cercle blanc pour contraste */}
              <div className="absolute inset-0 bg-white rounded-full scale-90 opacity-90 -z-10 shadow-xl"></div>
              <picture>
                <source type="image/webp" srcSet={jsrLogoWebp} />
                <img 
                  src={jsrLogoPng}
                  alt="JSR Déneigement" 
                  className="h-12 w-auto opacity-90 filter brightness-110"
                />
              </picture>
            </div>
            
            {/* Menu mobile avec design premium */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 relative group ${
                    isActive(link.path) 
                      ? "text-brand bg-gradient-to-r from-brand/10 to-brand/10 shadow-lg border border-brand/20" 
                      : "text-white hover:text-white hover:bg-dark-surface/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Effet de survol mobile */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* Indicateur actif */}
                  {isActive(link.path) && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-brand to-brand/70 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Bouton d'appel mobile premium */}
            <div className="mt-8 px-2">
              <Button asChild className="w-full bg-gradient-to-r from-brand to-brand/80 hover:from-brand/90 hover:to-brand/70 text-white font-bold py-4 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group" size="lg">
                <a href="tel:+14188050063" className="flex items-center justify-center gap-3 relative z-10">
                  <Phone className="h-5 w-5 animate-pulse" />
                  <span className="text-lg">Appelez maintenant</span>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
