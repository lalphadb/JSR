import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Filter, MapPin, Calendar, X } from "lucide-react";
import { PHOTOS } from "@/lib/photos";
import { usePageMeta } from "@/hooks/usePageMeta";

type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: { webp640: string; jpg1280: string; alt: string };
  description: string;
  year: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Déneigement résidentiel",
    location: "Lac-Saint-Charles",
    category: "Déneigement",
    image: PHOTOS.services.deneigement,
    description: "Service de déneigement complet pour propriété résidentielle avec stationnement double et entrée de garage.",
    year: "2024",
  },
  {
    id: 2,
    title: "Excavation de fondation",
    location: "Saint-Gabriel-de-Valcartier",
    category: "Excavation",
    image: PHOTOS.services.excavationFondation,
    description: "Excavation complète pour nouvelle construction résidentielle avec sous-sol complet et drain français.",
    year: "2024",
  },
  {
    id: 3,
    title: "Terrassement commercial",
    location: "Saint-Raymond",
    category: "Terrassement",
    image: PHOTOS.services.terrassement,
    description: "Préparation de terrain pour projet commercial de 5000 pi². Nivellement et compactage professionnel.",
    year: "2024",
  },
  {
    id: 4,
    title: "Installation de drains français",
    location: "Saint-Émile",
    category: "Drains",
    image: PHOTOS.services.drains,
    description: "Installation complète de système de drainage français autour d'une résidence pour éliminer les infiltrations.",
    year: "2023",
  },
  {
    id: 5,
    title: "Terrasse en bois traité",
    location: "Lac-Saint-Charles",
    category: "Construction",
    image: PHOTOS.services.terrasse,
    description: "Construction de terrasse sur mesure en bois traité avec escalier et rampes conformes au code.",
    year: "2023",
  },
  {
    id: 6,
    title: "Excavation piscine creusée",
    location: "Stoneham",
    category: "Excavation",
    image: PHOTOS.services.excavation,
    description: "Excavation et terrassement pour installation de piscine creusée 18x36 pieds avec remblayage.",
    year: "2023",
  },
];

const categories = ["Tous", "Excavation", "Terrassement", "Déneigement", "Drains", "Construction"];

const Realisations = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  usePageMeta({
    title: "Réalisations en excavation et déneigement",
    description: "Découvrez nos réalisations en excavation, terrassement, drains et déneigement dans la région de Québec. Projets récents et savoir-faire local.",
    canonicalPath: "/realisations",
  });

  useEffect(() => {
    if (!selectedProject) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-bg text-white font-body">
      
      {/* HEADER */}
      <section className="py-16 md:py-24 bg-bg border-b border-accent-yellow/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-accent-yellow" />
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              Nos <span className="text-accent-yellow">réalisations</span>
            </h1>
            <p className="text-xl text-textc-primary leading-relaxed max-w-2xl">
              Découvrez nos projets complétés dans la région de Québec. 
              Chaque chantier reflète notre engagement envers la qualité et la satisfaction client.
            </p>
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="py-6 bg-industrial-gray border-b border-accent-yellow/20 sticky top-[104px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-accent-yellow flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all rounded ${
                    activeFilter === cat
                      ? "bg-accent-yellow text-bg"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRILLE DE PROJETS */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-bg-soft border border-white/10 overflow-hidden hover:border-accent-yellow/50 transition-all duration-300 cursor-pointer focus-within:border-accent-yellow/50"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedProject(project); } }}
                aria-label={`Voir les détails du projet : ${project.title}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <picture>
                    <source type="image/webp" srcSet={project.image.webp640} />
                    <img
                      src={project.image.jpg1280}
                      alt={project.image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 bg-accent-yellow text-bg px-3 py-1 text-xs font-bold uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent-yellow transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-textc-secondary mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-textc-secondary text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-1 text-accent-yellow font-bold text-sm group-hover:gap-2 transition-all">
                    Voir les détails
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textc-secondary">Aucun projet trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* MODAL DÉTAIL PROJET */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="bg-bg-soft max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-accent-yellow/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="relative">
              <picture>
                <source type="image/webp" srcSet={selectedProject.image.webp640} />
                <img
                  src={selectedProject.image.jpg1280}
                  alt={selectedProject.image.alt}
                  className="w-full h-64 md:h-80 object-cover"
                  decoding="async"
                />
              </picture>
              <button
                onClick={() => setSelectedProject(null)}
                ref={closeButtonRef}
                className="absolute top-4 right-4 bg-bg/80 p-2 hover:bg-accent-yellow hover:text-bg transition-colors"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4 bg-accent-yellow text-bg px-4 py-2 font-bold">
                {selectedProject.category}
              </div>
            </div>

            {/* Contenu modal */}
            <div className="p-6 md:p-8">
              <h2 id="project-modal-title" className="text-2xl md:text-3xl font-heading font-black mb-4">
                {selectedProject.title}
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-textc-secondary mb-6">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded">
                  <MapPin className="w-4 h-4 text-accent-yellow" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded">
                  <Calendar className="w-4 h-4 text-accent-yellow" />
                  {selectedProject.year}
                </span>
              </div>
              
              <p className="text-textc-primary leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-accent-yellow text-bg px-6 py-3 font-bold hover:bg-accent-yellow/80 transition-all flex items-center gap-2"
                  onClick={() => setSelectedProject(null)}
                >
                  Projet similaire? Contactez-nous
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+14188050063"
                  className="border-2 border-white/30 text-white px-6 py-3 font-bold hover:border-accent-yellow hover:text-accent-yellow transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  418-805-0063
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STATISTIQUES */}
      <section className="py-16 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-yellow mb-2">500+</div>
              <div className="text-textc-secondary">Projets complétés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-yellow mb-2">15+</div>
              <div className="text-textc-secondary">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-yellow mb-2">100%</div>
              <div className="text-textc-secondary">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-yellow mb-2">24/7</div>
              <div className="text-textc-secondary">Service en saison</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-bg mb-4">
            Votre projet pourrait être le prochain!
          </h2>
          <p className="text-bg/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour une soumission gratuite et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-bg text-white px-8 py-4 font-bold text-lg hover:bg-bg-soft transition-all flex items-center gap-2"
            >
              Demander une soumission
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+14188050063"
              className="border-2 border-bg text-bg px-8 py-4 font-bold hover:bg-bg hover:text-accent-yellow transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              418-805-0063
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
