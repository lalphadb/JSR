import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-bg border-b-3 border-accent-yellow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <picture>
            <source type="image/webp" srcSet={jsrLogoWebp} />
            <img src={jsrLogoPng} alt="JSR Solutions" className="h-10" />
          </picture>
          <div className="text-xs text-textc-secondary leading-tight hidden sm:block">
            <div className="font-heading text-sm text-textc-primary">
              JSR SOLUTIONS
            </div>
            <div>Déneigement • Excavation • Terrassement</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-heading uppercase" aria-label="Navigation principale">
          <Link to="/" className="text-textc-primary hover:text-accent-yellow transition-colors">Accueil</Link>
          <Link to="/services" className="text-textc-primary hover:text-accent-yellow transition-colors">Services</Link>
          <Link to="/realisations" className="text-textc-primary hover:text-accent-yellow transition-colors">Réalisations</Link>
          <Link to="/a-propos" className="text-textc-primary hover:text-accent-yellow transition-colors">À propos</Link>
          <Link
            to="/contact"
            className="bg-accent-yellow text-bg px-4 py-2 border-3 border-accent-yellow hover:bg-bg hover:text-accent-yellow transition-colors font-bold"
          >
            Soumission
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textc-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden bg-bg border-t border-accent-yellow/20 p-4 flex flex-col gap-4 text-sm font-heading uppercase"
          aria-label="Navigation mobile"
        >
          <Link to="/" className="text-textc-primary" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/services" className="text-textc-primary" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/realisations" className="text-textc-primary" onClick={() => setIsOpen(false)}>Réalisations</Link>
          <Link to="/a-propos" className="text-textc-primary" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link
            to="/contact"
            className="bg-accent-yellow text-bg px-4 py-2 border-3 border-accent-yellow text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Soumission
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
