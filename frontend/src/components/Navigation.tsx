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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-surface-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Professional */}
          <Link to="/" className="flex items-center gap-3 group">
            <picture>
              <source type="image/webp" srcSet={jsrLogoWebp} />
              <img 
                src={jsrLogoPng}
                alt="JSR Solutions" 
                className="h-12 w-auto"
              />
            </picture>
            
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-text-primary">
                JSR Solutions
              </span>
              <span className="text-xs text-text-secondary">
                Excavation & Terrassement
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path) 
                        ? "text-brand" 
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-orange hover:bg-orange-hover text-white px-6"
            >
              <a href="tel:+14188050063" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="hidden xl:inline">418-805-0063</span>
                <span className="xl:hidden">Appeler</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-primary hover:bg-surface-light rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
