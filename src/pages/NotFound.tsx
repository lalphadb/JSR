import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, Phone, Wrench } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="bg-accent-yellow/20 w-24 h-24 rounded-none border-2 border-accent-yellow flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-12 h-12 text-accent-yellow" />
        </div>
        
        <h1 className="text-4xl font-black mb-2 text-white uppercase">Page non trouvée</h1>
        <p className="text-gray-400 mb-8 text-lg font-medium">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg font-bold rounded-none uppercase tracking-wider">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bg bg-transparent font-bold rounded-none uppercase tracking-wider">
            <Link to="/services" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Nos services
            </Link>
          </Button>
        </div>
        
        <div className="mt-6">
          <Button asChild variant="ghost" size="lg" className="text-accent-yellow hover:text-yellow-400 hover:bg-transparent font-bold uppercase">
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
