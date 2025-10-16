import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import jsrLogo from "@/assets/jsr-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo et Description */}
          <div>
            <img src={jsrLogo} alt="JSR Déneigement" className="h-16 w-auto mb-6" />
            <p className="text-base text-secondary-foreground/80 leading-relaxed">
              Service professionnel de déneigement, excavation et terrassement à Saint-Raymond et région de Portneuf.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-secondary-foreground">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base text-secondary-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-secondary-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-base text-secondary-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-base text-secondary-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-secondary-foreground/80 hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-secondary-foreground">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-base group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <a href="tel:+14188050063" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  418-805-0063
                </a>
              </li>
              <li className="flex items-center gap-3 text-base group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <a href="mailto:jsrdeneigement@gmail.com" className="text-secondary-foreground/80 hover:text-primary transition-colors break-all">
                  jsrdeneigement@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-base group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <span className="text-secondary-foreground/80">
                  303 rue des Mélèzes<br />
                  Saint-Raymond (QC) G3L 0E8
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-base text-secondary-foreground/70">
            &copy; {new Date().getFullYear()} JSR Déneigement. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
