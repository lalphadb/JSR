// Centralized manifest for real photos used across the site
// Each entry includes a WebP and JPEG fallback plus a concise alt text

export type PhotoSet = {
  webp640: string;
  jpg1280: string;
  alt: string;
};

// Hero image
import heroWebp640 from "@/assets/photos/real/hero-640.webp";
import heroJpg1280 from "@/assets/photos/real/hero-1280.jpg";

// Services images
import deneigementWebp640 from "@/assets/photos/real/deneigement-640.webp";
import deneigementJpg1280 from "@/assets/photos/real/deneigement-1280.jpg";

import excavationWebp640 from "@/assets/photos/real/excavation-640.webp";
import excavationJpg1280 from "@/assets/photos/real/excavation-1280.jpg";

import terrassementWebp640 from "@/assets/photos/real/terrassement-640.webp";
import terrassementJpg1280 from "@/assets/photos/real/terrassement-1280.jpg";

import drainsWebp640 from "@/assets/photos/real/drains-640.webp";
import drainsJpg1280 from "@/assets/photos/real/drains-1280.jpg";

import terrasseWebp640 from "@/assets/photos/real/terrasse-640.webp";
import terrasseJpg1280 from "@/assets/photos/real/terrasse-1280.jpg";

export const PHOTOS = {
  hero: {
    webp640: heroWebp640,
    jpg1280: heroJpg1280,
    alt: "JSR sur chantier – vue d’ensemble professionnelle",
  } satisfies PhotoSet,
  services: {
    deneigement: {
      webp640: deneigementWebp640,
      jpg1280: deneigementJpg1280,
      alt: "Déneigement – intervention JSR sur entrée résidentielle",
    } satisfies PhotoSet,
    excavation: {
      webp640: excavationWebp640,
      jpg1280: excavationJpg1280,
      alt: "Excavation – matériel et tranchée en cours",
    } satisfies PhotoSet,
    terrassement: {
      webp640: terrassementWebp640,
      jpg1280: terrassementJpg1280,
      alt: "Terrassement – nivellement et préparation du terrain",
    } satisfies PhotoSet,
    drains: {
      webp640: drainsWebp640,
      jpg1280: drainsJpg1280,
      alt: "Drains de fondation – pose et drainage",
    } satisfies PhotoSet,
    terrasse: {
      webp640: terrasseWebp640,
      jpg1280: terrasseJpg1280,
      alt: "Construction de terrasse – structure bois",
    } satisfies PhotoSet,
  },
};
