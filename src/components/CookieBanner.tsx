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
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem("jsr-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h3 className="text-lg font-semibold mb-2 text-primary">Politique de confidentialité (Loi 25)</h3>
          <p className="text-sm text-muted-foreground">
            Nous utilisons des témoins (cookies) pour analyser le trafic et améliorer votre expérience. 
            En cliquant sur « Accepter », vous consentez à l'utilisation de ces technologies. 
            Consultez notre <Link to="/confidentialite" className="text-primary underline hover:text-primary/80">politique de confidentialité</Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={handleDecline}>
            Refuser
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleAccept}>
            Accepter
          </Button>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 md:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
