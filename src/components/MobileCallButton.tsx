import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden animate-scale-in">
      <Button
        asChild
        size="lg"
        className="h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-gradient-to-br from-primary to-primary/80"
      >
        <a
          href="tel:+14188050063"
          className="flex items-center justify-center"
          aria-label="Appeler JSR Déneigement"
        >
          <Phone className="h-7 w-7 animate-pulse" />
        </a>
      </Button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  );
};

export default MobileCallButton;
