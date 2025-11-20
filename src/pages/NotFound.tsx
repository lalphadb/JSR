import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, Phone, Wrench } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted/20 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-12 h-12 text-yellow-600" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-foreground">Page non trouvée</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/services" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Nos services
            </Link>
          </Button>
        </div>
        
        <div className="mt-6">
          <Button asChild variant="ghost" size="lg" className="text-primary">
            <a href="tel:+14188050063" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Urgence : 418-805-0063
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
