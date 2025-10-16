import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import jsrLogo from "@/assets/jsr-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div>
            <img src={jsrLogo} alt="JSR Déneigement" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Service professionnel de déneigement, excavation et terrassement à Saint-Raymond et région de Portneuf.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-sm hover:text-primary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+14188050063" className="hover:text-primary transition-colors">
                  418-805-0063
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:jsrdeneigement@gmail.com" className="hover:text-primary transition-colors">
                  jsrdeneigement@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>303 rue des Mélèzes<br />Saint-Raymond (QC) G3L 0E8</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JSR Déneigement. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
