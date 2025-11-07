import { loadStripe, Stripe } from '@stripe/stripe-js';

// Clé publique Stripe (safe to expose in frontend)
const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || '';

let stripePromise: Promise<Stripe | null> | null = null;

/**
 * Initialise et retourne l'instance Stripe
 */
export const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

/**
 * Types de paiement disponibles
 */
export enum PaymentType {
  DEPOSIT = 'deposit',           // Acompte
  FULL_PAYMENT = 'full_payment', // Paiement complet
  SUBSCRIPTION = 'subscription',  // Abonnement saisonnier
}

/**
 * Crée une session de paiement Stripe
 */
export interface PaymentSessionParams {
  amount: number;              // Montant en dollars CAD
  type: PaymentType;
  description: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

/**
 * Prix des services (en cents CAD)
 */
export const SERVICE_PRICES = {
  DEPOSIT: 5000,                    // 50$ acompte
  DENEIGEMENT_SAISON: {
    SIMPLE: 50000,                  // 500$ - Entrée simple
    DOUBLE: 75000,                  // 750$ - Entrée double
    COMMERCIAL: 200000,             // 2000$ - Commercial
  },
  EVALUATION_URGENTE: 10000,        // 100$ - Évaluation urgente sur place
};

/**
 * Formatte un montant en dollars
 */
export const formatCurrency = (amountInCents: number): string => {
  return new Intl.NumberFormat('fr-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amountInCents / 100);
};
