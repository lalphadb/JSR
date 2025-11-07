import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';
import { getStripe, PaymentType, formatCurrency } from '@/lib/stripe';
import { useToast } from '@/hooks/use-toast';

interface PaymentButtonProps {
  amount: number;
  description: string;
  type?: PaymentType;
  customerEmail?: string;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export const PaymentButton = ({
  amount,
  description,
  type = PaymentType.DEPOSIT,
  customerEmail,
  variant = 'default',
  className = '',
}: PaymentButtonProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // NOTE: En production, vous devrez créer un endpoint backend
      // pour créer une session Stripe Checkout
      
      // Pour l'instant, affichons juste une notification
      toast({
        title: 'Paiement Stripe',
        description: `Redirection vers le paiement de ${formatCurrency(amount * 100)} pour ${description}`,
      });

      // Code pour intégration complète Stripe (nécessite backend):
      /*
      const stripe = await getStripe();
      
      if (!stripe) {
        throw new Error('Stripe n\'a pas pu être chargé');
      }

      // Appel à votre backend pour créer une session Checkout
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convertir en cents
          type,
          description,
          customerEmail,
        }),
      });

      const { sessionId } = await response.json();

      // Rediriger vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
      */

    } catch (error) {
      console.error('Erreur de paiement:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de traiter le paiement. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isProcessing}
      variant={variant}
      className={className}
    >
      {isProcessing ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Traitement...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Payer {formatCurrency(amount * 100)}
        </>
      )}
    </Button>
  );
};
