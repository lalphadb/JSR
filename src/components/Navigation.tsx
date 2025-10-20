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
    <header className="bg-gradient-to-r from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - TRANSPARENT PREMIUM */}
          <Link to="/" className="flex items-center group relative overflow-hidden">
            <div className="relative logo-transparent-glow">
              {/* Effet de fond lumineux spécial pour transparent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl animate-pulse"></div>
              
              {/* Cercles décoratifs pour logo transparent */}
              <div className="absolute -inset-6 border border-primary/20 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-1000" style={{ animation: 'spin 20s linear infinite' }}></div>
              <div className="absolute -inset-8 border border-primary/15 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-1000" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
              
              {/* Logo transparent avec halo magique */}
              <picture>
                <source type="image/webp" srcSet={jsrLogoWebp} />
                <img 
                  src={jsrLogoPng}
                  alt="JSR Déneigement - Expert Excavation & Déneigement" 
                  className="h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 logo-halo"
                />
              </picture>
              
              {/* Particules flottantes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-2 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Reflet en bas */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Badge Premium animé avec nouveau design */}
            <div className="absolute -top-2 -right-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white text-xs px-3 py-1.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/20">
              <span className="animate-pulse">⭐ PRO</span>
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
                        ? "text-primary bg-primary/10 shadow-lg" 
                        : "text-slate-200 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {link.label}
                    
                    {/* Indicateur actif moderne */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ${
                      isActive(link.path) ? "w-3/4" : "w-0 group-hover:w-1/2"
                    }`} />
                    
                    {/* Effet de survol subtil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Séparateur élégant */}
            <div className="mx-6 h-8 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
            
            {/* Bouton d'appel premium */}
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
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
            className="lg:hidden relative p-3 text-slate-200 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              
              {/* Indicateur de menu ouvert */}
              <div className={`absolute -inset-1 bg-primary/20 rounded-lg transition-all duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Design harmonisé */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-4 border-t border-slate-700/50 animate-fade-in">
            {/* Logo mobile centré */}
            <div className="flex justify-center mb-6">
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
                      ? "text-primary bg-gradient-to-r from-primary/10 to-primary/10 shadow-lg border border-primary/20" 
                      : "text-slate-200 hover:text-white hover:bg-slate-700/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Effet de survol mobile */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* Indicateur actif */}
                  {isActive(link.path) && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primary/70 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Bouton d'appel mobile premium */}
            <div className="mt-8 px-2">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group" size="lg">
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
