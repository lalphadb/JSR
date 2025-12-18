import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-bg/95 backdrop-blur-sm border-b-4 border-accent-yellow sticky top-0 z-50">
      {/* Bandeau supérieur */}
      <div className="bg-accent-yellow text-bg py-1.5 text-center text-sm font-medium hidden md:block">
        <span className="font-bold">📞 Service rapide :</span> Appelez maintenant{" "}
        <a href="tel:+14188050063" className="font-bold hover:underline">
          418-805-0063
        </a>
        {" "}• Soumission gratuite en 24h
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <picture>
            <source type="image/webp" srcSet={jsrLogoWebp} />
            <img src={jsrLogoPng} alt="JSR Solutions" className="h-12" />
          </picture>
          <div className="text-xs text-textc-secondary leading-tight hidden sm:block">
            <div className="font-heading text-base font-bold text-textc-primary tracking-wide">
              JSR SOLUTIONS
            </div>
            <div className="text-textc-secondary">Déneigement • Excavation • Terrassement</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-heading" aria-label="Navigation principale">
          <Link 
            to="/" 
            className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            Accueil
          </Link>
          
          {/* Menu Services avec dropdown */}
          <div className="relative group">
            <button 
              className="px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium flex items-center gap-1"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <div 
              className={`absolute top-full left-0 bg-bg border border-accent-yellow/30 min-w-[200px] py-2 shadow-xl transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to="/services#excavation" className="block px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors">
                🚜 Excavation
              </Link>
              <Link to="/services#terrassement" className="block px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors">
                🏗️ Terrassement
              </Link>
              <Link to="/services#deneigement" className="block px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors">
                ❄️ Déneigement
              </Link>
              <Link to="/services#construction" className="block px-4 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors">
                🔨 Construction
              </Link>
              <div className="border-t border-accent-yellow/20 mt-2 pt-2">
                <Link to="/services" className="block px-4 py-2 text-accent-yellow font-medium hover:bg-accent-yellow/10 transition-colors">
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

          {/* Numéro de téléphone */}
          <a
            href="tel:+14188050063"
            className="flex items-center gap-2 px-4 py-2 text-textc-primary hover:text-accent-yellow transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            418-805-0063
          </a>

          {/* CTA Principal - SOUMISSION GRATUITE */}
          <Link
            to="/contact"
            className="ml-2 bg-accent-yellow text-bg px-6 py-3 font-bold text-base hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-yellow/30 animate-pulse-subtle"
          >
            SOUMISSION GRATUITE
          </Link>
        </nav>

        {/* Mobile: Téléphone + Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+14188050063"
            className="bg-accent-yellow text-bg p-2 rounded"
            aria-label="Appeler"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            className="text-textc-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="lg:hidden bg-bg border-t border-accent-yellow/20 p-4 flex flex-col gap-2 text-base font-heading"
          aria-label="Navigation mobile"
        >
          <Link to="/" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <div className="border-t border-accent-yellow/10 pt-2">
            <div className="py-2 px-4 text-textc-secondary text-sm font-bold uppercase">Services</div>
            <Link to="/services#excavation" className="py-2 px-6 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block" onClick={() => setIsOpen(false)}>
              🚜 Excavation
            </Link>
            <Link to="/services#terrassement" className="py-2 px-6 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block" onClick={() => setIsOpen(false)}>
              🏗️ Terrassement
            </Link>
            <Link to="/services#deneigement" className="py-2 px-6 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors block" onClick={() => setIsOpen(false)}>
              ❄️ Déneigement
            </Link>
          </div>
          <Link to="/realisations" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
            Réalisations
          </Link>
          <Link to="/a-propos" className="py-3 px-4 text-textc-primary hover:bg-accent-yellow/10 rounded transition-colors" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
          <Link
            to="/contact"
            className="mt-4 bg-accent-yellow text-bg py-4 text-center font-bold text-lg shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            SOUMISSION GRATUITE
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
