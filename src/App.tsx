import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Loader2 } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTop";

// ✅ LAZY LOADING : On charge les pages seulement quand nécessaire
const Accueil = lazy(() => import("./pages/Accueil"));
const Services = lazy(() => import("./pages/Services"));
const Realisations = lazy(() => import("./pages/Realisations"));
const APropos = lazy(() => import("./pages/APropos"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));

// Composant de chargement simple
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

// Composant pour remonter en haut de page au changement de route
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      let attempts = 0;
      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 160;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          return;
        }
        if (attempts < 10) {
          attempts += 1;
          setTimeout(tryScroll, 100);
        }
      };
      setTimeout(tryScroll, 0);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-foreground bg-background antialiased selection:bg-primary/20 selection:text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent-yellow focus:text-bg focus:px-4 focus:py-2 focus:font-bold"
        >
          Aller au contenu principal
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/services" element={<Services />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTopButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
