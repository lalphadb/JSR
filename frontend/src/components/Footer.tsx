import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et Description - Professional */}
          <div>
            <div className="mb-6">
              <picture>
                <source type="image/webp" srcSet={jsrLogoWebp} />
                <img 
                  src={jsrLogoPng}
                  alt="JSR Déneigement" 
                  className="h-16 w-auto"
                />
              </picture>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Entrepreneur spécialisé en excavation, terrassement et déneigement commercial. Service professionnel dans la région de Portneuf depuis 2008.
            </p>

            {/* RBQ Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded text-sm border border-white/20">
              <ShieldCheck className="h-4 w-4 text-orange" />
              <span className="font-semibold">RBQ: 5804-4926-01</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-white/70 hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/70 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-white/80 hover:text-brand transition-all duration-300 inline-block hover:translate-x-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-orange flex-shrink-0" />
                <a href="tel:+14188050063" className="text-white/70 hover:text-white transition-colors">
                  418-805-0063
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-orange flex-shrink-0" />
                <a href="mailto:jsrdeneigement@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  jsrdeneigement@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-orange flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  303 rue des Mélèzes<br />
                  Saint-Raymond (QC) G3L 0E8
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} JSR Solutions. Tous droits réservés.
            </p>
            
            <div className="flex gap-6">
              <Link 
                to="/politique-confidentialite" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
