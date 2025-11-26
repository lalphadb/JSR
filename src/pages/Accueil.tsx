import { Link } from "react-router-dom";
import { PHOTOS } from "@/lib/photos";

type Service = {
  code: string;
  title: string;
  desc: string;
  link: string;
};

const services: Service[] = [
  {
    code: "01",
    title: "Déneigement",
    desc: "Résidentiel et commercial. Entrées, stationnements, trottoirs, toitures selon mandat.",
    link: "/services#deneigement"
  },
  {
    code: "02",
    title: "Excavation",
    desc: "Fondations, drains, tranchées, mini-excavation pour travaux restreints.",
    link: "/services#excavation"
  },
  {
    code: "03",
    title: "Terrassement",
    desc: "Nivellement, préparation de terrain, pavage, pose de matériaux.",
    link: "/services#terrassement"
  },
  {
    code: "04",
    title: "Transport",
    desc: "Transport de terre, gravier, matériaux en vrac pour vos chantiers.",
    link: "/services#transport"
  },
];

export default function HomePage() {
  return (
    <main className="bg-bg text-textc-primary min-h-screen">
      {/* Bloc principal */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-[2fr,1.5fr] gap-10">
        {/* Colonne gauche : identité */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent-yellow" />
            <span className="text-xs tracking-[0.2em] uppercase text-textc-secondary">
              Service 4 saisons
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl leading-tight font-heading uppercase">
            Déneigement, excavation<br />
            & terrassement<br />
            <span className="bg-accent-yellow text-bg px-2 inline-block mt-2">
              pour entreprises et particuliers
            </span>
          </h1>

          <p className="text-sm md:text-base max-w-xl text-textc-secondary font-body">
            JSR Solutions intervient rapidement pour vos entrées, stationnements,
            chantiers et aménagements extérieurs. Une équipe terrain, des machines
            entretenues, des horaires adaptés à la météo.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              to="/contact"
              className="bg-accent-yellow text-bg px-6 py-3 border-3 border-accent-yellow font-heading text-sm uppercase hover:bg-bg hover:text-accent-yellow transition-colors font-bold"
            >
              Demander une soumission
            </Link>
            <Link
              to="/realisations"
              className="px-6 py-3 border-3 border-textc-primary font-heading text-sm uppercase hover:bg-textc-primary hover:text-bg transition-colors font-bold"
            >
              Voir le terrain
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs mt-4">
            <div className="border-t border-textc-secondary/40 pt-3">
              <div className="font-heading text-sm uppercase">Interventions</div>
              <div className="text-textc-secondary">
                Zones résidentielles, commerciales et industrielles.
              </div>
            </div>
            <div className="border-t border-textc-secondary/40 pt-3">
              <div className="font-heading text-sm uppercase">Saisons</div>
              <div className="text-textc-secondary">
                Hiver (déneigement) et saison hors-neige (excavation, terrassement).
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite : bloc photo + services */}
        <div className="flex flex-col gap-4">
          <div className="border-3 border-accent-yellow bg-bg-soft text-bg relative overflow-hidden">
            <img
              src={PHOTOS.hero.jpg1280}
              alt="Machinerie JSR"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 border-t border-accent-yellow bg-bg">
              <div className="flex justify-between items-center text-xs">
                <span className="font-heading text-accent-yellow uppercase">
                  JSR SOLUTIONS
                </span>
                <span className="text-textc-secondary">
                  Déneigement • Excavation • Terrassement
                </span>
              </div>
            </div>
          </div>

          <div className="bg-bg-soft text-bg p-4 border-3 border-bg-soft">
            {services.map((s) => (
              <Link
                key={s.code}
                to={s.link}
                className="flex items-start gap-3 py-3 border-b last:border-b-0 border-gray-300/40 group hover:bg-white/50 transition-colors px-2 -mx-2"
              >
                <span className="font-heading text-sm text-accent-blue min-w-[2.5rem] font-bold">
                  {s.code}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-sm uppercase font-bold text-accent-blue">
                      {s.title}
                    </h3>
                    <span className="text-[10px] group-hover:underline text-accent-blue/70">
                      Détails
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-700 mt-1 font-body">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}