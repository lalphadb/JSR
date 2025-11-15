import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Offrez-vous un service de déneigement 24/7?",
    answer: "Oui, notre service de déneigement est disponible 24 heures sur 24, 7 jours sur 7 pendant la saison hivernale. Nous répondons rapidement aux urgences et assurons que vos accès restent dégagés en tout temps.",
  },
  {
    id: 2,
    question: "Quels types de projets d'excavation faites-vous?",
    answer: "Nous réalisons tous types de projets d'excavation incluant les fondations résidentielles et commerciales, les tranchées pour services publics, la démolition et le déblaiement, ainsi que le transport de matériaux.",
  },
  {
    id: 3,
    question: "Couvrez-vous toute la région de Québec?",
    answer: "Nous desservons principalement la région de Québec incluant Lévis, Beauport, Charlesbourg, Cap-Rouge et Saint-Augustin. Pour les services de déneigement, notre couverture est plus limitée. Contactez-nous pour vérifier votre zone.",
  },
  {
    id: 4,
    question: "Comment puis-je obtenir une soumission?",
    answer: "Vous pouvez demander une soumission gratuite en remplissant notre formulaire de contact en ligne ou en nous appelant directement au 418-805-0063. Nous répondons généralement dans les 24 heures.",
  },
  {
    id: 5,
    question: "Vos travaux sont-ils garantis?",
    answer: "Oui, tous nos travaux sont garantis et conformes aux normes industrielles. Nous utilisons des matériaux de qualité supérieure et notre équipe est hautement qualifiée et expérimentée.",
  },
  {
    id: 6,
    question: "Avez-vous une assurance responsabilité civile?",
    answer: "Oui, nous sommes entièrement assurés. Notre assurance responsabilité civile couvre tous les dommages potentiels. Nous pouvons fournir une preuve d'assurance sur demande.",
  },
];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Questions fréquemment posées
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            {faqItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  className="mb-4 bg-white rounded-lg border border-surface-border overflow-hidden hover:border-brand/50 transition-colors"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  <button
                    onClick={() =>
                      setOpenId(openId === item.id ? null : item.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-light transition-colors text-left"
                  >
                    <h3 className="text-lg font-semibold text-text-primary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-brand flex-shrink-0 ml-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-surface-light border-t border-surface-border">
                          <p className="text-text-secondary leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
            Vous n'avez pas trouvé votre réponse?
          </p>
          <a
            href="tel:+14188050063"
            className="inline-block px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors"
          >
            Nous contacter directement
          </a>
        </motion.div>
      </div>
    </section>
  );
};
