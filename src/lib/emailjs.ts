import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export interface ContactFormData {
  nom: string;
  telephone: string;
  courriel: string;
  message: string;
}

/**
 * Envoie un email via EmailJS
 * @param formData - Données du formulaire
 * @returns Promise avec le résultat de l'envoi
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Vérifier que la configuration est complète
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      console.error('EmailJS configuration is incomplete');
      throw new Error('Configuration EmailJS manquante');
    }

    // Préparer les paramètres pour le template EmailJS
    const templateParams = {
      from_name: formData.nom,
      from_email: formData.courriel,
      from_phone: formData.telephone,
      message: formData.message,
      to_email: 'jsrdeneigement@gmail.com', // Votre email
    };

    // Envoyer l'email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
