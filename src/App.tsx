import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileCallButton from "./components/MobileCallButton";
import ScrollToTop from "./components/ScrollToTop";
import Accueil from "./pages/Accueil";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/services" element={<Services />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <MobileCallButton />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
