import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/lib/backend-email";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hp, setHp] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    telephone: "",
    courriel: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

    try {
      await sendContactEmail(formData);

      toast({
        title: "Message envoyé avec succès! 🎉",
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
      {/* Hero Section - Style Industriel JSR */}
      <section className="py-20 bg-bg border-b-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <div className="w-24 h-2 bg-accent-yellow mb-6" />
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight uppercase text-white">
            CONTACT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            JSR Solutions – Excavation, déneigement et construction spécialisée
          </p>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info - 40% */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 uppercase text-white">Nos coordonnées</h2>
                <div className="h-2 w-16 bg-accent-yellow mb-8" />
              </div>

              <div className="space-y-6">
                <Card className="group bg-zinc-900 border-2 border-zinc-800 hover:border-accent-yellow transition-all duration-300 rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-yellow/10 p-3 group-hover:bg-accent-yellow transition-colors duration-300 rounded-none">
                        <Phone className="h-6 w-6 text-accent-yellow group-hover:text-bg transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors uppercase">Téléphone</h3>
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
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors uppercase">Courriel</h3>
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
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors uppercase">Adresse</h3>
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
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent-yellow transition-colors uppercase">Disponibilité</h3>
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
                  <CardTitle className="text-3xl font-black uppercase text-white">Demandez une soumission gratuite</CardTitle>
                  <p className="text-gray-400 mt-2 font-medium">
                    Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais
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
                      <label htmlFor="nom" className="block text-sm font-bold mb-2 text-white uppercase">
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
                        <label htmlFor="telephone" className="block text-sm font-bold mb-2 text-white uppercase">
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
                        <label htmlFor="courriel" className="block text-sm font-bold mb-2 text-white uppercase">
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
                      <label htmlFor="message" className="block text-sm font-bold mb-2 text-white uppercase">
                        Message <span className="text-accent-yellow">*</span>
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
                      disabled={isSubmitting}
                      className="w-full bg-accent-yellow hover:bg-yellow-500 text-bg h-16 text-lg font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 rounded-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
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
      <section className="py-20 bg-zinc-900 border-t-4 border-accent-yellow">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-zinc-800 bg-bg shadow-xl rounded-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase">
                Besoin d'une intervention urgente?
              </h3>
              <p className="text-xl text-gray-400 mb-8 font-medium">
                Notre équipe est disponible 24/7 pour les urgences
              </p>
              <Button asChild size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-bg text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-none font-bold uppercase tracking-wider">
                <a href="tel:+14188050063" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Appelez maintenant: 418-805-0063
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
