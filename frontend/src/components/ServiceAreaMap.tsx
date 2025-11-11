import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Polygon, Marker, Autocomplete } from "@react-google-maps/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Coordonnées pour la zone de service générale (région du Lac St-Charles - approximativement 2km de rayon)
const serviceAreaCoordinates = [
  { lat: 46.95, lng: -71.55 },  // Nord-Ouest
  { lat: 46.95, lng: -71.0 },   // Nord-Est
  { lat: 46.7, lng: -70.85 },   // Est
  { lat: 46.65, lng: -71.0 },   // Sud-Est
  { lat: 46.6, lng: -71.4 },    // Sud
  { lat: 46.65, lng: -71.65 },  // Sud-Ouest
  { lat: 46.8, lng: -71.7 },    // Ouest
];

// Zone limitée pour le déneigement (secteur Rue Lepire, jusqu'a Rue des Merisiers)
const deneigementZoneCoordinates = [
  { lat: 46.8845, lng: -71.8370 },  // Nord-Ouest
  { lat: 46.8855, lng: -71.8310 },  // Nord-Est  
  { lat: 46.8805, lng: -71.8300 },  // Sud-Est
  { lat: 46.8795, lng: -71.8360 },  // Sud-Ouest
];

// Centre de Saint-Raymond (Rue Lepire)
const center = {
  lat: 46.8825,
  lng: -71.8335,
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

// Options pour la zone de service générale (bleu clair)
const polygonOptions = {
  fillColor: "#3B82F6",
  fillOpacity: 0.15,
  strokeColor: "#3B82F6",
  strokeOpacity: 0.6,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

// Options pour la zone de déneigement limitée (ROUGE ENCADRÉ)
const deneigementPolygonOptions = {
  fillColor: "#DC2626",
  fillOpacity: 0.25,
  strokeColor: "#DC2626",
  strokeOpacity: 1,
  strokeWeight: 4,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 2,
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

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

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
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapOptions}
          >
            {/* Polygone de la zone de service générale (bleu) */}
            <Polygon paths={serviceAreaCoordinates} options={polygonOptions} />
            
            {/* ZONE DE DÉNEIGEMENT LIMITÉE - ENCADRÉ ROUGE */}
            <Polygon paths={deneigementZoneCoordinates} options={deneigementPolygonOptions} />
            
            {/* Marqueur central JSR */}
            <Marker
              position={center}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#DC2626",
                fillOpacity: 1,
                strokeColor: "#FFFFFF",
                strokeWeight: 3,
              }}
              title="JSR Solutions - Zone de déneigement"
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

          {/* Légende des zones */}
          <div className="absolute bottom-4 right-4 z-10">
            <Card className="shadow-xl bg-white">
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-sm text-text-primary">Zones de service</h3>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 border-4 border-red-600 bg-red-600/25"></div>
                  <span className="text-xs text-text-secondary">Déneigement (zone limitée)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 border-2 border-blue-500 bg-blue-500/15"></div>
                  <span className="text-xs text-text-secondary">Autres services (50 km)</span>
                </div>
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
