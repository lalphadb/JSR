import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRateLimit } from "@/hooks/useRateLimit";
import { sendContactEmail, ContactFormData } from "@/lib/backend-email";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hp, setHp] = useState("");
  const { canSubmit, recordAttempt, remainingAttempts, resetTime } = useRateLimit({
    maxAttempts: 5,
    windowMs: 300000, // 5 minutes
  });
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    telephone: "",
    courriel: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (!canSubmit) {
      toast({
        title: "Trop de tentatives",
        description: `Veuillez attendre ${resetTime} secondes avant de soumettre le formulaire.`,
        variant: "destructive",
      });
      return;
    }

    if (!formData.nom || !formData.telephone || !formData.courriel || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.courriel)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse courriel valide.",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^(\+1)?[\s.-]?\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/;
    if (!phoneRegex.test(formData.telephone)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de téléphone valide (ex: 418-123-4567).",
        variant: "destructive",
      });
      return;
    }

    if (hp.trim() !== "") {
      setIsSubmitting(true);
      try {
        toast({
          title: "Message envoyé avec succès! 🎉",
          description: "Nous vous contacterons dans les plus brefs délais. Merci!",
        });
        setFormData({ nom: "", telephone: "", courriel: "", message: "" });
        setHp("");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setIsSubmitting(true);
    recordAttempt();

    try {
      await sendContactEmail(formData);

      toast({
        title: "Message envoyé avec succès!",
        description: "Nous vous contacterons dans les plus brefs délais. Merci!",
      });
      setFormData({ nom: "", telephone: "", courriel: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-bg text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-bg border-b-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-4 block">
              Contactez-nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight text-white">
              Obtenez votre soumission gratuite
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Réponse garantie en moins de 24 heures. Sans engagement, sans surprise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info - 40% */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest mb-2 block">
                  Rejoignez-nous
                </span>
                <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">Nos coordonnées</h2>
              </div>

              <div className="space-y-6">
                <Card className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-yellow/10 p-3 group-hover:bg-accent-yellow transition-colors duration-300 rounded-none">
                        <Phone className="h-6 w-6 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors">Téléphone</h3>
                        <a href="tel:+14188050063" className="text-gray-400 hover:text-accent-yellow transition-colors text-lg font-medium">
                          418-805-0063
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Service 24/7 disponible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-yellow/10 p-3 group-hover:bg-accent-yellow transition-colors duration-300 rounded-none">
                        <Mail className="h-6 w-6 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors">Courriel</h3>
                        <a href="mailto:jsrdeneigement@gmail.com" className="text-gray-400 hover:text-accent-yellow transition-colors break-all font-medium">
                          jsrdeneigement@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-yellow/10 p-3 group-hover:bg-accent-yellow transition-colors duration-300 rounded-none">
                        <MapPin className="h-6 w-6 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors">Adresse</h3>
                        <p className="text-gray-400 font-medium">
                          303 rue des Mélèzes<br />
                          Saint-Raymond (QC)
                        </p>
                        <p className="text-sm text-gray-500 mt-2">RBQ : 5804-4926-01</p>
                        <p className="text-sm text-gray-500">Assurance responsabilité ✓</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-yellow/10 p-3 group-hover:bg-accent-yellow transition-colors duration-300 rounded-none">
                        <Clock className="h-6 w-6 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors">Disponibilité</h3>
                        <div className="text-gray-400 space-y-1 font-medium">
                          <p className="text-base font-bold text-accent-yellow">24/7 en saison (déneigement)</p>
                          <p className="text-base">Lundi - Vendredi: 7h - 18h</p>
                          <p className="text-base">Samedi: Sur appel</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form - 60% */}
            <div className="lg:col-span-3">
              <Card className="border-4 border-accent-yellow bg-zinc-900 rounded-none shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-heading text-white">Demandez votre soumission</CardTitle>
                  <p className="text-gray-400 mt-2">
                    Décrivez votre projet et recevez une réponse en moins de 24h.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (hidden from real users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp">Leave this field blank</label>
                      <input
                        type="text"
                        id="hp"
                        name="hp"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium mb-2 text-white">
                        Nom complet <span className="text-accent-yellow">*</span>
                      </label>
                      <Input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="h-14 border-2 border-zinc-700 bg-bg text-white focus:border-accent-yellow rounded-none"
                        placeholder="VOTRE NOM"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium mb-2 text-white">
                          Téléphone <span className="text-accent-yellow">*</span>
                        </label>
                        <Input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          className="h-14 border-2 border-zinc-700 bg-bg text-white focus:border-accent-yellow rounded-none"
                          placeholder="418-XXX-XXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="courriel" className="block text-sm font-medium mb-2 text-white">
                          Courriel <span className="text-accent-yellow">*</span>
                        </label>
                        <Input
                          type="email"
                          id="courriel"
                          name="courriel"
                          value={formData.courriel}
                          onChange={handleChange}
                          required
                          className="h-14 border-2 border-zinc-700 bg-bg text-white focus:border-accent-yellow rounded-none"
                          placeholder="VOTRE@EMAIL.COM"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        Décrivez votre projet <span className="text-accent-yellow">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[160px] border-2 border-zinc-700 bg-bg text-white focus:border-accent-yellow resize-none rounded-none"
                        placeholder="DÉCRIVEZ VOTRE PROJET EN DÉTAIL..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !canSubmit}
                      className="w-full bg-accent-yellow hover:bg-yellow-500 text-bg h-16 text-lg font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 rounded-none disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : !canSubmit ? (
                        `Veuillez attendre ${resetTime}s`
                      ) : (
                        "Envoyer le message"
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      En soumettant ce formulaire, vous acceptez d'être contacté par JSR Solutions
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-accent-yellow">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-heading mb-4 text-bg">
            Besoin d'une intervention urgente?
          </h3>
          <p className="text-lg text-bg/80 mb-6">
            Notre équipe est disponible 24/7 en saison de déneigement.
          </p>
          <Button asChild size="lg" className="bg-bg hover:bg-black text-white text-lg px-8 py-6 font-bold">
            <a href="tel:+14188050063" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Appeler: 418-805-0063
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
