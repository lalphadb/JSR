/**
 * Service d'envoi d'emails via notre backend Nodemailer
 */

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export interface ContactFormData {
  nom: string;
  telephone: string;
  courriel: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
  messageId?: string;
}

/**
 * Envoie un email de contact via le backend
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de l\'envoi');
    }

    return data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};
