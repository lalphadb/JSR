import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle, Shield, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRateLimit } from "@/hooks/useRateLimit";
import { sendContactEmail, ContactFormData } from "@/lib/backend-email";
import { usePageMeta } from "@/hooks/usePageMeta";

const serviceTypes = [
  "Excavation",
  "Terrassement", 
  "Déneigement",
  "Drains français",
  "Construction extérieure",
  "Autre",
];

const zones = [
  "Lac-Saint-Charles",
  "Saint-Raymond",
  "Stoneham",
  "Portneuf",
  "Val-Bélair",
  "Saint-Émile",
  "Québec",
  "Saint-Gabriel-de-Valcartier",
];

const Contact = () => {
  usePageMeta({
    title: "Contact et soumission gratuite",
    description: "Demandez une soumission gratuite en excavation, déneigement ou terrassement. Réponse en moins de 24 heures. JSR Solutions, région de Québec.",
    canonicalPath: "/contact",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hp, setHp] = useState("");
  const { canSubmit, recordAttempt, remainingAttempts, resetTime } = useRateLimit({
    maxAttempts: 5,
    windowMs: 300000,
  });
  const [formData, setFormData] = useState<ContactFormData & { service: string }>({
    nom: "",
    telephone: "",
    courriel: "",
    message: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (hp) {
      return;
    }

    if (!canSubmit) {
      toast({
        title: "Trop de tentatives",
        description: `Veuillez attendre ${resetTime} secondes.`,
        variant: "destructive",
      });
      return;
    }

    if (!formData.nom || !formData.telephone || !formData.courriel || !formData.message) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.courriel)) {
      toast({
        title: "Courriel invalide",
        description: "Veuillez entrer une adresse courriel valide.",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^[\d\s\-().+]{10,}$/;
    if (!phoneRegex.test(formData.telephone)) {
      toast({
        title: "Téléphone invalide",
        description: "Veuillez entrer un numéro de téléphone valide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    recordAttempt();

    try {
      // Ajouter le type de service au message
      const messageWithService = formData.service 
        ? `[Service: ${formData.service}]\n\n${formData.message}`
        : formData.message;

      await sendContactEmail({
        nom: formData.nom,
        telephone: formData.telephone,
        courriel: formData.courriel,
        message: messageWithService,
      });

      setIsSuccess(true);
      toast({
        title: "Message envoyé!",
        description: "Nous vous répondrons dans les 24 heures.",
      });

      setFormData({ nom: "", telephone: "", courriel: "", message: "", service: "" });
    } catch (error) {
      console.error("Erreur envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Appelez-nous au 418-805-0063.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white font-body">
      
      {/* HEADER */}
      <section className="py-16 md:py-20 bg-bg border-b border-accent-yellow/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-accent-yellow" />
              <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest">
                Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              Demandez votre
              <br />
              <span className="text-accent-yellow">soumission gratuite</span>
            </h1>
            <p className="text-xl text-textc-primary leading-relaxed max-w-2xl">
              Réponse garantie en moins de 24 heures. Sans obligation de votre part.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* FORMULAIRE - 3 colonnes */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <div className="bg-accent-yellow/10 border-2 border-accent-yellow p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-accent-yellow mx-auto mb-4" />
                  <h2 className="text-2xl font-heading font-bold mb-2">Message envoyé!</h2>
                  <p className="text-textc-primary mb-6">
                    Nous avons bien reçu votre demande et vous répondrons dans les prochaines 24 heures.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-accent-yellow font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot caché */}
                  <input
                    type="text"
                    name="website"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Type de service */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-textc-primary">
                      Type de service souhaité
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceTypes.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service })}
                          className={`px-4 py-3 text-sm font-medium transition-all border ${
                            formData.service === service
                              ? "bg-accent-yellow text-bg border-accent-yellow"
                              : "bg-white/5 border-white/10 hover:border-accent-yellow/50"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Nom */}
                  <div>
                    <label htmlFor="nom" className="block text-sm font-bold mb-2 text-textc-primary">
                      Nom complet <span className="text-accent-yellow">*</span>
                    </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-accent-yellow focus:outline-none transition-colors"
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                  />
                  </div>

                  {/* Téléphone et Courriel */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-bold mb-2 text-textc-primary">
                        Téléphone <span className="text-accent-yellow">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-accent-yellow focus:outline-none transition-colors"
                        placeholder="418-555-1234"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="courriel" className="block text-sm font-bold mb-2 text-textc-primary">
                        Courriel <span className="text-accent-yellow">*</span>
                      </label>
                      <input
                        type="email"
                        id="courriel"
                        name="courriel"
                        value={formData.courriel}
                        onChange={(e) => setFormData({ ...formData, courriel: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-accent-yellow focus:outline-none transition-colors"
                        placeholder="votre@courriel.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-textc-primary">
                      Décrivez votre projet <span className="text-accent-yellow">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-accent-yellow focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet, les dimensions approximatives, l'adresse des travaux..."
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* Bouton submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !canSubmit}
                    className="w-full bg-accent-yellow text-bg py-4 font-bold text-lg hover:bg-accent-yellow/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>

                  {!canSubmit && (
                    <p className="text-sm text-accent-yellow text-center">
                      Trop de tentatives. Attendez {resetTime}s ou appelez-nous.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* INFOS CONTACT - 2 colonnes */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Téléphone */}
              <div className="bg-accent-yellow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-bg" />
                  <div>
                    <div className="text-bg/70 text-sm font-bold">Appelez-nous</div>
                    <a href="tel:+14188050063" className="text-2xl font-heading font-black text-bg">
                      418-805-0063
                    </a>
                  </div>
                </div>
                <p className="text-bg/80 text-sm">
                  Réponse rapide, estimation par téléphone possible.
                </p>
              </div>

              {/* Courriel */}
              <div className="bg-bg-soft border border-white/10 p-6">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="w-6 h-6 text-accent-yellow" />
                  <div>
                    <div className="text-textc-secondary text-sm">Courriel</div>
                    <a href="mailto:info@jsr-solutions.ca" className="text-white font-bold hover:text-accent-yellow transition-colors">
                      info@jsr-solutions.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Heures */}
              <div className="bg-bg-soft border border-white/10 p-6">
                <div className="flex items-center gap-4 mb-2">
                  <Clock className="w-6 h-6 text-accent-yellow" />
                  <div>
                    <div className="text-textc-secondary text-sm">Heures d'ouverture</div>
                    <div className="text-white font-bold">Lun-Ven: 7h-18h</div>
                    <div className="text-textc-secondary text-sm">Urgences 24/7 en hiver</div>
                  </div>
                </div>
              </div>

              {/* Zones desservies */}
              <div className="bg-bg-soft border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-accent-yellow" />
                  <div className="text-white font-bold">Zones desservies</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {zones.map((zone) => (
                    <span 
                      key={zone}
                      className="bg-white/5 px-3 py-1 text-sm text-textc-primary"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Confiance */}
              <div className="bg-industrial-gray border border-accent-yellow/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-accent-yellow" />
                  <span className="font-bold">Entreprise certifiée</span>
                </div>
                <ul className="space-y-2 text-sm text-textc-primary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-yellow" />
                    Licence RBQ 5804-4926-01
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-yellow" />
                    Assurance responsabilité 2M$
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-yellow" />
                    15+ années d'expérience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section className="py-16 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-black text-center mb-10">
            Questions <span className="text-accent-yellow">fréquentes</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-bg p-6 border border-white/10">
              <h3 className="font-bold mb-2">Délai pour une soumission?</h3>
              <p className="text-textc-secondary text-sm">
                Nous répondons généralement dans les 24 heures suivant votre demande.
              </p>
            </div>
            <div className="bg-bg p-6 border border-white/10">
              <h3 className="font-bold mb-2">La soumission est-elle gratuite?</h3>
              <p className="text-textc-secondary text-sm">
                Oui, toutes nos soumissions sont gratuites et sans obligation.
              </p>
            </div>
            <div className="bg-bg p-6 border border-white/10">
              <h3 className="font-bold mb-2">Servez-vous ma région?</h3>
              <p className="text-textc-secondary text-sm">
                Nous desservons la grande région de Québec et ses environs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
