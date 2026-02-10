import { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour naviguer vers une section de Services
  const navigateToService = (sectionId: string) => {
    setServicesOpen(false);
    setIsOpen(false);
    
    if (location.pathname === "/services") {
      // Déjà sur la page, scroll direct
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 160;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      // Naviguer vers /services puis scroll
      navigate("/services");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 160;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="w-full bg-bg/95 backdrop-blur-sm border-b-4 border-accent-yellow sticky top-0 z-50">
      {/* Bandeau supérieur */}
      <div className="bg-accent-yellow text-bg py-1.5 text-center text-sm font-medium hidden md:block">
        <span className="inline-flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <strong>Service rapide :</strong> Appelez maintenant{" "}
          <a href="tel:+14188050063" className="font-bold hover:underline">418-805-0063</a>
          {" "}• Soumission gratuite en 24h
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <picture>
            <source type="image/webp" srcSet={jsrLogoWebp} />
            <img src={jsrLogoPng} alt="JSR Solutions" className="h-12" width="48" height="48" />
          </picture>
          <div className="hidden sm:block">
            <span className="text-xl font-black text-white">JSR SOLUTIONS</span>
            <span className="block text-xs text-textc-secondary">Déneigement • Excavation • Terrassement</span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            Accueil
          </Link>

          {/* Menu Services avec dropdown */}
          <div 
            className="relative"
            ref={servicesMenuRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!servicesMenuRef.current?.contains(event.relatedTarget as Node)) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium flex items-center gap-1"
              onClick={() => navigate("/services")}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <div
              id="services-menu"
              role="menu"
              className={`absolute top-full left-0 bg-bg border border-accent-yellow/30 min-w-[200px] py-2 shadow-xl transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <button 
                onClick={() => navigateToService("excavation")} 
                className="block w-full text-left px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors"
                role="menuitem"
              >
                🚜 Excavation
              </button>
              <button 
                onClick={() => navigateToService("terrassement")} 
                className="block w-full text-left px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors"
                role="menuitem"
              >
                🏗️ Terrassement
              </button>
              <button 
                onClick={() => navigateToService("deneigement")} 
                className="block w-full text-left px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors"
                role="menuitem"
              >
                ❄️ Déneigement
              </button>
              <button 
                onClick={() => navigateToService("construction")} 
                className="block w-full text-left px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors"
                role="menuitem"
              >
                🔨 Construction
              </button>
              <div className="border-t border-accent-yellow/20 mt-2 pt-2">
                <Link to="/services" className="block px-4 py-2 text-accent-yellow font-medium hover:bg-accent-yellow/10 transition-colors" role="menuitem">
                  Voir tous les services →
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/realisations"
            className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            Réalisations
          </Link>
          <Link
            to="/a-propos"
            className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            À propos
          </Link>

          {/* Téléphone */}
          <a
            href="tel:+14188050063"
            className="flex items-center gap-2 px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            418-805-0063
          </a>

          {/* CTA Principal */}
          <Link
            to="/contact"
            className="ml-2 bg-accent-yellow text-bg px-6 py-3 font-bold text-base hover:bg-accent-yellow/80 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-yellow/30 animate-pulse-subtle"
          >
            SOUMISSION GRATUITE
          </Link>
        </nav>

        {/* Mobile: Téléphone + Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:+14188050063"
            className="bg-accent-yellow text-bg p-2 rounded"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-textc-primary hover:text-accent-yellow p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-bg border-t border-accent-yellow/30 py-4 px-4">
          <nav className="flex flex-col space-y-1">
            <Link to="/" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/services" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors font-medium" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <button onClick={() => navigateToService("excavation")} className="py-2 px-6 text-left text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block">
              🚜 Excavation
            </button>
            <button onClick={() => navigateToService("terrassement")} className="py-2 px-6 text-left text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block">
              🏗️ Terrassement
            </button>
            <button onClick={() => navigateToService("deneigement")} className="py-2 px-6 text-left text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block">
              ❄️ Déneigement
            </button>
            <button onClick={() => navigateToService("construction")} className="py-2 px-6 text-left text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block">
              🔨 Construction
            </button>
            <Link to="/realisations" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              Réalisations
            </Link>
            <Link to="/a-propos" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
              À propos
            </Link>
            <Link to="/contact" className="mt-4 bg-accent-yellow text-bg py-3 px-4 rounded font-bold text-center" onClick={() => setIsOpen(false)}>
              SOUMISSION GRATUITE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;

export { Navigation };
