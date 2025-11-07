import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/lib/backend-email";
import { useGAEvent } from "@/components/GoogleAnalytics";
import ServiceAreaMap from "@/components/ServiceAreaMap";

const Contact = () => {
  const { toast } = useToast();
  const { trackEvent } = useGAEvent();
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

      // Track successful form submission
      trackEvent('contact_form_submit', {
        form_type: 'demande_soumission',
        contact_method: 'form'
      });

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section - Enhanced with Visual Effects */}
      <section className="relative bg-gradient-to-br from-dark via-dark-surface to-dark text-white py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand/15 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Nous sommes à votre écoute pour tous vos projets d'excavation, déneigement et aménagement extérieur
          </p>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info - 40% */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Nos coordonnées</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand/50 rounded-full mb-8" />
              </div>

              <div className="space-y-6">
                <Card className="group hover:shadow-xl hover:border-brand transition-all duration-300 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand/10 p-3 rounded-xl group-hover:bg-brand transition-colors duration-300">
                        <Phone className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-brand transition-colors">Téléphone</h3>
                        <a href="tel:+14188050063" className="text-muted-foreground hover:text-brand transition-colors text-lg">
                          418-805-0063
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Service 24/7 disponible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl hover:border-brand transition-all duration-300 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand/10 p-3 rounded-xl group-hover:bg-brand transition-colors duration-300">
                        <Mail className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-brand transition-colors">Courriel</h3>
                        <a href="mailto:info@jsrprosolutions.com" className="text-muted-foreground hover:text-brand transition-colors break-all">
                          info@jsrprosolutions.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl hover:border-brand transition-all duration-300 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand/10 p-3 rounded-xl group-hover:bg-brand transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-brand transition-colors">Zone de service</h3>
                        <p className="text-muted-foreground">
                          Québec et ses environs
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Rayon de 50 km</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl hover:border-brand transition-all duration-300 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand/10 p-3 rounded-xl group-hover:bg-brand transition-colors duration-300">
                        <Clock className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-brand transition-colors">Heures d'ouverture</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p className="text-base">Lundi - Vendredi: 7h - 18h</p>
                          <p className="text-base">Samedi: 8h - 16h</p>
                          <p className="text-base">Dimanche: Sur appel</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form - 60% */}
            <div className="lg:col-span-3">
              <Card className="border-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Demandez une soumission gratuite</CardTitle>
                  <p className="text-muted-foreground mt-2">
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
                      <label htmlFor="nom" className="block text-sm font-semibold mb-2">
                        Nom complet <span className="text-brand">*</span>
                      </label>
                      <Input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="h-12 border-2 focus:border-brand"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-semibold mb-2">
                          Téléphone <span className="text-brand">*</span>
                        </label>
                        <Input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          className="h-12 border-2 focus:border-brand"
                          placeholder="418-XXX-XXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="courriel" className="block text-sm font-semibold mb-2">
                          Courriel <span className="text-brand">*</span>
                        </label>
                        <Input
                          type="email"
                          id="courriel"
                          name="courriel"
                          value={formData.courriel}
                          onChange={handleChange}
                          required
                          className="h-12 border-2 focus:border-brand"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message <span className="text-brand">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[160px] border-2 focus:border-brand resize-none"
                        placeholder="Décrivez votre projet en détail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-brand hover:bg-brand-hover text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      En soumettant ce formulaire, vous acceptez d'être contacté par JSR Solutions
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <ServiceAreaMap />

      {/* Quick Contact CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-brand/20 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Besoin d'une intervention urgente?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Notre équipe est disponible 24/7 pour les urgences
              </p>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <a 
                  href="tel:+14188050063" 
                  className="flex items-center gap-2"
                  onClick={() => trackEvent('phone_call_click', { button_location: 'urgence_section' })}
                >
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
