import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Polygon, Marker, Autocomplete } from "@react-google-maps/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Coordonnées pour la zone de service (région de Québec - approximativement 50km de rayon)
const serviceAreaCoordinates = [
  { lat: 46.95, lng: -71.55 },  // Nord-Ouest
  { lat: 46.95, lng: -71.0 },   // Nord-Est
  { lat: 46.7, lng: -70.85 },   // Est
  { lat: 46.65, lng: -71.0 },   // Sud-Est
  { lat: 46.6, lng: -71.4 },    // Sud
  { lat: 46.65, lng: -71.65 },  // Sud-Ouest
  { lat: 46.8, lng: -71.7 },    // Ouest
];

// Centre de Québec (approximatif)
const center = {
  lat: 46.8139,
  lng: -71.2080,
};

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const polygonOptions = {
  fillColor: "#DC2626",
  fillOpacity: 0.2,
  strokeColor: "#DC2626",
  strokeOpacity: 0.8,
  strokeWeight: 3,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

// Animation de flocons de neige CSS
const snowflakeStyles = `
@keyframes snowfall {
  0% {
    transform: translateY(-10vh) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(50px);
    opacity: 0.3;
  }
}

.snowflake {
  position: absolute;
  top: -10px;
  color: white;
  font-size: 1.5em;
  pointer-events: none;
  animation: snowfall linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}
`;

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

const ServiceAreaMap = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry?.location && map) {
        map.panTo(place.geometry.location);
        map.setZoom(14);
      }
    }
  };

  const onAutocompleteLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete);
  };

  if (loadError) {
    return (
      <Card className="p-8">
        <div className="text-center text-muted-foreground">
          <p>Erreur lors du chargement de la carte.</p>
          <p className="text-sm mt-2">Veuillez vérifier votre clé API Google Maps.</p>
        </div>
      </Card>
    );
  }

  if (!isLoaded) {
    return (
      <Card className="p-8">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand" />
          <span className="ml-3 text-muted-foreground">Chargement de la carte...</span>
        </div>
      </Card>
    );
  }

  // Générer les flocons de neige
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 10}s`,
    animationDelay: `${Math.random() * 5}s`,
    fontSize: `${Math.random() * 1 + 0.5}em`,
  }));

  return (
    <>
      <style>{snowflakeStyles}</style>
      
      <div className="relative w-full">
        {/* Section avec titre et description */}
        <div className="bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-16 px-4 relative overflow-hidden">
          {/* Flocons de neige animés */}
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: flake.left,
                animationDuration: flake.animationDuration,
                animationDelay: flake.animationDelay,
                fontSize: flake.fontSize,
              }}
            >
              ❄
            </div>
          ))}
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Recevez une estimation gratuite
            </h2>
            <p className="text-lg text-center text-white/80 max-w-2xl mx-auto mb-8">
              Nous desservons la région de Québec et ses environs dans un rayon de 50 km
            </p>
          </div>
        </div>

        {/* Carte avec zone de service */}
        <div className="relative">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapOptions}
          >
            {/* Polygone de la zone de service (rouge) */}
            <Polygon paths={serviceAreaCoordinates} options={polygonOptions} />
            
            {/* Marqueur central JSR */}
            <Marker
              position={center}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#2F855A",
                fillOpacity: 1,
                strokeColor: "#FFFFFF",
                strokeWeight: 3,
              }}
              title="JSR Solutions - Zone de service"
            />
          </GoogleMap>

          {/* Champ de recherche d'adresse (positionné au-dessus de la carte) */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md px-4">
            <Card className="shadow-xl">
              <div className="p-4">
                {isLoaded && (
                  <Autocomplete
                    onLoad={onAutocompleteLoad}
                    onPlaceChanged={onPlaceChanged}
                    options={{
                      componentRestrictions: { country: "ca" },
                      bounds: new google.maps.LatLngBounds(
                        new google.maps.LatLng(46.6, -71.7),
                        new google.maps.LatLng(46.95, -70.85)
                      ),
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Entrez votre adresse..."
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-brand transition-colors"
                    />
                  </Autocomplete>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-dark text-center py-12 px-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-brand hover:bg-brand-hover text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#contact-form">
              Formulaire d'estimation en ligne
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaMap;
