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
  // Honeypot field (anti-bot). Real users won't see or fill this.
  const [hp, setHp] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    telephone: "",
    courriel: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.nom || !formData.telephone || !formData.courriel || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.courriel)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse courriel valide.",
        variant: "destructive",
      });
      return;
    }

    // Validation téléphone (format québécois)
    const phoneRegex = /^(\+1)?[\s.-]?\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/;
    if (!phoneRegex.test(formData.telephone)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de téléphone valide (ex: 418-123-4567).",
        variant: "destructive",
      });
      return;
    }

    // Honeypot: if filled, silently pretend success to mislead bots
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
      // Envoyer l'email via EmailJS
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
    <div className="min-h-screen">
      {/* Hero Section - UPDATED WITH DARK COLOR */}
      <section className="bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">Contactez-nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Nous sommes là pour répondre à vos questions et discuter de vos projets.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-10 tracking-tight">Nos coordonnées</h2>

              <div className="space-y-5 mb-10">
                <Card className="group hover-lift border-l-4 border-l-brand transition-all duration-300">
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="bg-brand/10 group-hover:bg-brand/20 text-brand p-4 rounded-xl transition-colors">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                      <a href="tel:+14188050063" className="text-brand hover:underline text-xl font-semibold block">
                        418-805-0063
                      </a>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Service d'urgence 24/7 en hiver
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover-lift border-l-4 border-l-brand transition-all duration-300">
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="bg-brand/10 group-hover:bg-brand/20 text-brand p-4 rounded-xl transition-colors">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Courriel</h3>
                      <a href="mailto:jsrdeneigement@gmail.com" className="text-brand hover:underline text-lg font-semibold block break-all">
                        jsrdeneigement@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Réponse sous 24 heures
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover-lift border-l-4 border-l-brand transition-all duration-300">
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="bg-brand/10 group-hover:bg-brand/20 text-brand p-4 rounded-xl transition-colors">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Adresse</h3>
                      <p className="text-lg leading-relaxed">303 rue des Mélèzes</p>
                      <p className="text-lg leading-relaxed">Saint-Raymond (QC) G3L 0E8</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover-lift border-l-4 border-l-brand transition-all duration-300">
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="bg-brand/10 group-hover:bg-brand/20 text-brand p-4 rounded-xl transition-colors">
                      <Clock className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Heures d'ouverture</h3>
                      <p className="text-base">Lundi - Vendredi: 7h - 18h</p>
                      <p className="text-base">Samedi: 8h - 16h</p>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Urgences: 24/7 en saison hivernale
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Call Button */}
              <Card className="bg-gradient-to-br from-brand to-brand/80 text-white shadow-2xl border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Besoin d'un service urgent?</h3>
                  <p className="mb-6 text-white/90 text-lg">Appelez-nous directement</p>
                  <Button asChild size="lg" className="w-full text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white text-brand hover:bg-white/90">
                    <a href="tel:+14188050063" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-bold tracking-tight">Demander un devis gratuit</CardTitle>
                  <p className="text-muted-foreground text-base mt-2">
                    Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field: hidden from users, visible to simple bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company">Votre entreprise</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className="block text-base font-semibold mb-3">
                        Nom complet *
                      </label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="h-12 text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-base font-semibold mb-3">
                        Téléphone *
                      </label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="(418) 123-4567"
                        className="h-12 text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="courriel" className="block text-base font-semibold mb-3">
                        Courriel *
                      </label>
                      <Input
                        id="courriel"
                        name="courriel"
                        type="email"
                        value={formData.courriel}
                        onChange={handleChange}
                        placeholder="vous@exemple.com"
                        className="h-12 text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-base font-semibold mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou vos besoins..."
                        rows={6}
                        className="text-base resize-none"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-brand hover:bg-brand-hover text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer ma demande'
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      * Champs obligatoires. Nous respectons votre vie privée.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-muted/50 to-background py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Notre zone de service</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Nous desservons fièrement Lac St-Charles, Saint-Raymond et les environs dans la région de Portneuf.
          </p>
          <div className="bg-card rounded-2xl p-12 max-w-3xl mx-auto shadow-2xl border-2 border-brand/10">
            <div className="text-6xl mb-6">🗺️</div>
            <p className="text-xl text-foreground font-semibold mb-2">
              Zones desservies
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lac St-Charles • Saint-Raymond • Stoneham • Saint-Gabriel-de-Valcartier • Saint-Émile • Portneuf et environs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
