import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("jsr-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("jsr-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("jsr-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg-soft border-t border-accent-yellow/30 shadow-[0_-4px_12px_rgba(0,0,0,0.4)] z-50 p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h3 className="text-lg font-semibold mb-2 text-accent-yellow">Politique de confidentialité (Loi 25)</h3>
          <p className="text-sm text-textc-secondary">
            Nous utilisons des témoins essentiels pour assurer le bon fonctionnement du site. 
            Si des témoins de mesure d'audience sont activés, votre consentement sera demandé. 
            Consultez notre <Link to="/confidentialite" className="text-accent-yellow underline hover:text-accent-yellow/80">politique de confidentialité</Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="border-white/20 text-textc-primary hover:bg-white/10"
          >
            Refuser
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-accent-yellow hover:bg-accent-yellow/90 text-bg font-bold"
          >
            Accepter
          </Button>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          aria-label="Fermer la bannière de consentement"
          className="absolute top-2 right-2 text-textc-secondary hover:text-white md:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
