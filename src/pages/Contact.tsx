import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    courriel: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulation d'envoi
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons sous peu. Merci!",
    });

    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      telephone: "",
      courriel: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Nous sommes là pour répondre à vos questions et discuter de vos projets.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Nos coordonnées</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <a href="tel:+15141234567" className="text-primary hover:underline text-lg">
                        (514) 123-4567
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Service d'urgence 24/7 en hiver
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Courriel</h3>
                      <a href="mailto:info@jsrdeneigement.ca" className="text-primary hover:underline text-lg">
                        info@jsrdeneigement.ca
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24 heures
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Zone de service</h3>
                      <p className="text-lg">Saint-Jérôme, Québec</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        et les environs (Laurentides)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Heures d'ouverture</h3>
                      <p className="text-sm">Lundi - Vendredi: 7h - 18h</p>
                      <p className="text-sm">Samedi: 8h - 16h</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Urgences: 24/7 en saison hivernale
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Call Button */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Besoin d'un service urgent?</h3>
                  <p className="mb-4 opacity-90">Appelez-nous directement</p>
                  <Button asChild size="lg" variant="secondary" className="w-full text-lg">
                    <a href="tel:+15141234567" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Demander un devis gratuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                        Téléphone *
                      </label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="(514) 123-4567"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="courriel" className="block text-sm font-medium mb-2">
                        Courriel *
                      </label>
                      <Input
                        id="courriel"
                        name="courriel"
                        type="email"
                        value={formData.courriel}
                        onChange={handleChange}
                        placeholder="vous@exemple.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou vos besoins..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg">
                      Envoyer ma demande
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
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
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Notre zone de service</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nous desservons Saint-Jérôme et les environs dans les Laurentides, incluant Prévost, Saint-Sauveur, Mirabel, Blainville, et Sainte-Adèle.
          </p>
          <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              🗺️ Carte de service: Saint-Jérôme, Québec et région des Laurentides
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
