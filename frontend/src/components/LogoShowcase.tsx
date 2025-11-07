import React from 'react';
import jsrLogoWebp from "@/assets/jsr-logo-transparent.webp";
import jsrLogoPng from "@/assets/jsr-logo-transparent.png";

interface LogoShowcaseProps {
  size?: 'small' | 'medium' | 'large' | 'hero';
  className?: string;
  animated?: boolean;
  /**
   * If true, applies CSS blend/filter to visually knock out white backgrounds
   * on non-transparent logo assets (e.g., white PNG background over hero).
   */
  knockoutWhite?: boolean;
}

const LogoShowcase: React.FC<LogoShowcaseProps> = ({ 
  size = 'medium', 
  className = '', 
  animated = true,
  knockoutWhite = false,
}) => {
  const sizeClasses = {
    small: 'h-16 w-auto',
    medium: 'h-20 w-auto',
    large: 'h-28 w-auto',
    hero: 'h-32 md:h-40 lg:h-48 w-auto'
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Effet de fond lumineux */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
      
      {/* Cercles décoratifs animés */}
      {animated && (
        <>
          <div className="absolute -inset-8 border border-primary/20 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-1000 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -inset-6 border border-primary/30 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-1000 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </>
      )}
      
      {/* Logo principal avec effets premium */}
      <div className="relative">
        <picture>
          <source type="image/webp" srcSet={jsrLogoWebp} />
          <img 
            src={jsrLogoPng}
            alt="JSR Déneigement - Expert en Excavation & Déneigement" 
            className={`${sizeClasses[size]} relative z-10 transition-all duration-500 drop-shadow-2xl ${
              animated ? 'group-hover:scale-110 group-hover:drop-shadow-3xl' : ''
            } ${knockoutWhite ? 'mix-blend-multiply contrast-125' : 'filter brightness-110'}`}
          />
        </picture>
        
        {/* Effet de brillance traversant */}
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
        )}
        
        {/* Reflet subtil en bas */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Badge premium flottant */}
      {animated && size === 'hero' && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary/80 text-white text-sm px-3 py-1.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce shadow-xl">
          ⭐ EXPERT
        </div>
      )}
      
      {/* Particules flottantes */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-2 left-4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      )}
    </div>
  );
};

export default LogoShowcase;
