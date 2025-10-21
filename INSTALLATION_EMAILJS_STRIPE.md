# 📧💳 GUIDE D'INSTALLATION - EmailJS & Stripe

## 🎯 CE QUI A ÉTÉ FAIT

### ✅ Code installé:
1. **EmailJS** - Pour l'envoi d'emails du formulaire de contact
2. **Stripe** - Pour les paiements en ligne
3. **Formulaire de contact fonctionnel** - Avec validation et envoi réel
4. **Composant de paiement** - Bouton pré-configuré

---

## 📧 ÉTAPE 1: CONFIGURATION EMAILJS (GRATUIT)

### 1.1 Créer un compte EmailJS

1. Allez sur **https://www.emailjs.com/**
2. Cliquez sur "Sign Up" (c'est gratuit jusqu'à 200 emails/mois)
3. Confirmez votre email

### 1.2 Configurer le service d'email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"** (recommandé car vous utilisez jsrdeneigement@gmail.com)
4. Connectez votre compte Gmail (jsrdeneigement@gmail.com)
5. Notez le **SERVICE ID** (ex: service_abc123)

### 1.3 Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template:

```
Nouveau message de contact - JSR Déneigement
=============================================

De: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}

Message:
{{message}}

---
Envoyé depuis le formulaire de contact de jsr.4lb.ca
```

4. Dans les paramètres du template:
   - **To Email**: jsrdeneigement@gmail.com
   - **From Name**: {{from_name}}
   - **Reply To**: {{from_email}}
   - **Subject**: Nouveau message de {{from_name}} - JSR Déneigement

5. Cliquez sur "Save" et notez le **TEMPLATE ID** (ex: template_xyz789)

### 1.4 Obtenir la clé publique

1. Allez dans **"Account"** > **"General"**
2. Trouvez la section **"Public Key"**
3. Notez votre **PUBLIC KEY** (ex: aBc123XyZ)

### 1.5 Configurer les variables d'environnement

Modifiez le fichier `.env.local`:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123      # Votre SERVICE ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz789    # Votre TEMPLATE ID
VITE_EMAILJS_PUBLIC_KEY=aBc123XyZ           # Votre PUBLIC KEY

# Stripe Configuration (on va configurer ça après)
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

---

## 💳 ÉTAPE 2: CONFIGURATION STRIPE

### 2.1 Créer un compte Stripe

1. Allez sur **https://stripe.com/**
2. Cliquez sur "Start now" et créez un compte
3. **IMPORTANT**: Sélectionnez **Canada** comme pays
4. Remplissez les informations de votre entreprise:
   - Nom: JSR Déneigement
   - Adresse: 303 rue des Mélèzes, Saint-Raymond, QC G3L 0E8
   - Type d'entreprise: Sole proprietorship / Travailleur autonome
   - Numéro d'entreprise (NEQ si vous en avez un)

### 2.2 Mode Test vs Production

Stripe a deux modes:
- **Test Mode** (clés commencent par `pk_test_` et `sk_test_`) - Pour développement
- **Live Mode** (clés commencent par `pk_live_` et `sk_live_`) - Pour production

Commencez en Test Mode!

### 2.3 Obtenir les clés API

1. Dans le dashboard Stripe, allez dans **"Developers"** > **"API keys"**
2. En mode **Test** (toggle en haut à droite), notez:
   - **Publishable key** (commence par `pk_test_...`) - Pour le frontend
   - **Secret key** (commence par `sk_test_...`) - Pour le backend (NE PAS METTRE DANS LE SITE!)

3. Ajoutez la clé publique dans `.env.local`:

```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_votre_cle_ici
```

### 2.4 **IMPORTANT - Backend requis pour Stripe!**

⚠️ **Le paiement Stripe nécessite un backend** pour des raisons de sécurité.

Vous avez 3 options:

#### **Option A: Backend Node.js simple (RECOMMANDÉ)**

Créez un petit serveur API:

```bash
# Dans le dossier du projet
mkdir backend
cd backend
npm init -y
npm install express stripe cors dotenv
```

Créez `backend/server.js`:

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  const { amount, description, customerEmail } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'cad',
          product_data: {
            name: description,
          },
          unit_amount: amount, // en cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      customer_email: customerEmail,
      success_url: 'https://jsr.4lb.ca/paiement/success',
      cancel_url: 'https://jsr.4lb.ca/paiement/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Backend Stripe sur port 3001'));
```

#### **Option B: Cloudflare Workers (GRATUIT et déjà dans votre stack!)**

Utilisez Cloudflare Workers (vous avez déjà le compte):

```typescript
// worker.ts
export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'POST' && new URL(request.url).pathname === '/api/create-checkout-session') {
      const { amount, description, customerEmail } = await request.json();
      
      // Appel API Stripe ici
      // ...
    }
  }
}
```

#### **Option C: Paiements par liens Stripe (SOLUTION RAPIDE)**

Créez des liens de paiement directement dans Stripe:

1. Dashboard Stripe > **"Products"** > **"Create product"**
2. Créez des produits:
   - "Acompte JSR" - 50$
   - "Déneigement Saison - Entrée Simple" - 500$
   - "Déneigement Saison - Entrée Double" - 750$
3. Pour chaque produit, créez un **Payment Link**
4. Utilisez ces liens dans vos boutons

---

## 🚀 ÉTAPE 3: TESTER LE FORMULAIRE

### 3.1 Compiler le projet

```bash
cd /home/lalpha/projets/developpement/JSR
npm run build
```

### 3.2 Reconstruire l'image Docker

```bash
docker build -t jsr2:local .
```

### 3.3 Redémarrer le conteneur

```bash
docker stop jsr2-jsr2-1
docker rm jsr2-jsr2-1
docker run -d \
  --name jsr2-jsr2-1 \
  --restart unless-stopped \
  -p 8082:80 \
  jsr2:local
```

### 3.4 Tester

1. Allez sur **https://jsr.4lb.ca/contact**
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre email (jsrdeneigement@gmail.com)

---

## 🧪 TESTER STRIPE EN MODE TEST

Utilisez ces numéros de carte de test:

- **Succès**: `4242 4242 4242 4242`
- **Décliné**: `4000 0000 0000 0002`
- Date expiration: N'importe quelle date future
- CVC: N'importe quel 3 chiffres
- Code postal: N'importe quel code

---

## 📝 PROCHAINES ÉTAPES

1. ✅ Configurez EmailJS (15 min)
2. ✅ Testez le formulaire de contact
3. ⏳ Créez un compte Stripe
4. ⏳ Décidez de l'option backend (A, B ou C)
5. ⏳ Implémentez les paiements

---

## 🆘 BESOIN D'AIDE?

Si vous avez des questions ou problèmes:

1. Vérifiez les logs du navigateur (F12 > Console)
2. Vérifiez que les variables d'environnement sont bien définies
3. Assurez-vous que le site est bien recompilé après modification de `.env.local`

---

## 💡 EXEMPLE D'UTILISATION DU BOUTON DE PAIEMENT

Une fois Stripe configuré, vous pourrez utiliser:

```tsx
import { PaymentButton } from '@/components/PaymentButton';
import { PaymentType, SERVICE_PRICES } from '@/lib/stripe';

// Dans votre page
<PaymentButton
  amount={50}  // 50$ en dollars
  description="Acompte déneigement saison 2025-2026"
  type={PaymentType.DEPOSIT}
  customerEmail="client@example.com"
/>
```

---

**Créé le**: 21 octobre 2025  
**Dernière mise à jour**: 21 octobre 2025
