import { Phone, Mail, MapPin, ExternalLink, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-industrial-black text-white border-t-4 border-brand">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* JSR Solutions - Logo et Info */}
          <div>
            <div className="mb-6">
              <picture>
                <source type="image/webp" srcSet={jsrLogoWebp} />
                <img
                  src={jsrLogoPng}
                  alt="JSR Solutions"
                  className="h-20 w-auto filter brightness-110"
                />
              </picture>
            </div>

            <h3 className="text-2xl font-black mb-4 text-white uppercase">JSR SOLUTIONS</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-4 font-bold">
              Excavation – Déneigement – Construction spécialisée
            </p>

            {/* Badges RBQ et Assurance */}
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://www.rbq.gouv.qc.ca/services-en-ligne/registre-des-detenteurs-de-licence/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border-2 border-brand/30 px-3 py-1.5 text-white text-sm font-bold hover:border-brand hover:bg-white/20 transition-all"
              >
                <span className="text-brand">✓</span>
                RBQ 5804-4926-01
              </a>

              <div className="inline-flex items-center gap-2 bg-white/10 border-2 border-brand/30 px-3 py-1.5 text-white text-sm font-bold">
                <span className="text-brand">✓</span>
                Assurance responsabilité
              </div>
            </div>

            <div className="bg-white/10 border-l-4 border-brand p-4">
              <p className="text-white/90 text-sm font-bold">Disponible 24/7 en saison</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base text-white/80 hover:text-brand transition-all duration-300 inline-block hover:translate-x-1">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-white/80 hover:text-brand transition-all duration-300 inline-block hover:translate-x-1">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-base text-white/80 hover:text-brand transition-all duration-300 inline-block hover:translate-x-1">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-base text-white/80 hover:text-brand transition-all duration-300 inline-block hover:translate-x-1">
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
            <h3 className="font-bold text-xl mb-6 text-white uppercase">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base group">
                <div className="bg-accent-yellow p-2 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-bg" />
                </div>
                <span className="text-white/90">
                  303 rue des Mélèzes<br />
                  Saint-Raymond (QC)
                </span>
              </li>
              <li className="flex items-center gap-3 text-base group">
                <div className="bg-accent-yellow p-2">
                  <Phone className="h-5 w-5 text-bg flex-shrink-0" />
                </div>
                <a href="tel:+14188050063" className="text-white/90 hover:text-accent-yellow transition-colors font-bold text-lg">
                  418-805-0063
                </a>
              </li>
              <li className="flex items-center gap-3 text-base group">
                <div className="bg-accent-yellow p-2">
                  <Mail className="h-5 w-5 text-bg flex-shrink-0" />
                </div>
                <a href="mailto:jsrdeneigement@gmail.com" className="text-white/90 hover:text-accent-yellow transition-colors break-all">
                  jsrdeneigement@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Vos droits - Subtile */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white/90 mb-2">Connaître vos droits</h4>
              <p className="text-xs text-white/50 leading-relaxed max-w-3xl">
                Vérifiez toujours la licence RBQ de votre entrepreneur • 
                Exigez un contrat écrit détaillé • 
                Vous êtes protégé par un cautionnement de licence • 
                Des recours existent en cas de problème
              </p>
            </div>
          </div>
          <a
            href="https://www.rbq.gouv.qc.ca/vous-etes/citoyen/travaux-de-renovation/signer-un-contrat-de-renovation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-accent-yellow transition-colors"
          >
            En savoir plus sur le site de la RBQ
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-white/90 font-bold">
              &copy; {new Date().getFullYear()} JSR Solutions. Tous droits réservés.
            </p>

            <div className="flex gap-6">
              <Link
                to="/confidentialite"
                className="text-sm text-white/70 hover:text-brand transition-colors"
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

export { Footer };
export default Footer;
