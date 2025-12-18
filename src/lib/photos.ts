// Centralized manifest for real photos used across the site
// Each entry includes a WebP and JPEG fallback plus a concise alt text

export type PhotoSet = {
  webp640: string;
  jpg1280: string;
  alt: string;
};

// Hero image - PARC DE MACHINES
import parcMachinesImg from "@/assets/photos/parc-machines.jpg";

// Hero image original
import heroWebp640 from "@/assets/photos/real/hero-640.webp";
import heroJpg1280 from "@/assets/photos/real/hero-1280.jpg";

// Services images
import deneigementWebp640 from "@/assets/photos/services/deneigement-640.webp";
import deneigementJpg1280 from "@/assets/photos/services/deneigement-1280.jpg";

import excavationWebp640 from "@/assets/photos/services/excavation-640.webp";
import excavationJpg1280 from "@/assets/photos/services/excavation-1280.jpg";

import excavationFondationWebp640 from "@/assets/photos/services/excavation-fondation-640.webp";
import excavationFondationJpg1280 from "@/assets/photos/services/excavation-fondation-1280.jpg";

import terrassementWebp640 from "@/assets/photos/services/terrassement-640.webp";
import terrassementJpg1280 from "@/assets/photos/services/terrassement-1280.jpg";

import drainsWebp640 from "@/assets/photos/services/drains-640.webp";
import drainsJpg1280 from "@/assets/photos/services/drains-1280.jpg";

import terrasseWebp640 from "@/assets/photos/services/terrasse-640.webp";
import terrasseJpg1280 from "@/assets/photos/services/terrasse-1280.jpg";

export const PHOTOS = {
  // NOUVELLE PHOTO HERO - Parc de machines
  parcMachines: {
    webp640: parcMachinesImg,
    jpg1280: parcMachinesImg,
    alt: "Parc de machines JSR – Flotte complète d'équipements pour excavation et déneigement",
  } satisfies PhotoSet,
  
  hero: {
    webp640: heroWebp640,
    jpg1280: heroJpg1280,
    alt: "Parc de camions et machinerie JSR – flotte prête à intervenir",
  } satisfies PhotoSet,
  
  services: {
    deneigement: {
      webp640: deneigementWebp640,
      jpg1280: deneigementJpg1280,
      alt: "Déneigement – véhicule avec lame et allée résidentielle",
    } satisfies PhotoSet,
    excavation: {
      webp640: excavationWebp640,
      jpg1280: excavationJpg1280,
      alt: "Excavation – pelle mécanique sur chantier",
    } satisfies PhotoSet,
    excavationFondation: {
      webp640: excavationFondationWebp640,
      jpg1280: excavationFondationJpg1280,
      alt: "Excavation de fondation – pelle mécanique JSR sur chantier résidentiel",
    } satisfies PhotoSet,
    terrassement: {
      webp640: terrassementWebp640,
      jpg1280: terrassementJpg1280,
      alt: "Terrassement – chargeuse et nivellement de terrain",
    } satisfies PhotoSet,
    drains: {
      webp640: drainsWebp640,
      jpg1280: drainsJpg1280,
      alt: "Drains de fondation – travaux de tranchée",
    } satisfies PhotoSet,
    terrasse: {
      webp640: terrasseWebp640,
      jpg1280: terrasseJpg1280,
      alt: "Construction de terrasse – structure en bois en cours",
    } satisfies PhotoSet,
  },
};
