import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsrLogo from "@/assets/jsr-logo.png";

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
    <nav className="bg-secondary/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={jsrLogo} alt="JSR Déneigement" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-secondary-foreground font-semibold text-base transition-all duration-300 hover:text-primary relative group ${
                  isActive(link.path) ? "text-primary" : ""
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <Button asChild size="lg" className="ml-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="tel:+14188050063" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Appelez-nous
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 text-secondary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-secondary-foreground/10 hover:text-primary ${
                    isActive(link.path) ? "text-primary bg-secondary-foreground/5" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button asChild className="w-full mt-5 shadow-lg" size="lg">
              <a href="tel:+14188050063" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Appelez-nous
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
