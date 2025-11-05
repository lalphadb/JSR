# 🔍 Configuration Google Analytics pour JSR

## 📊 Mise en place

### 1️⃣ Créer un compte Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Créez un compte (si nécessaire)
3. Créez une propriété pour le site JSR
4. Obtenez votre **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2️⃣ Configurer le Measurement ID

Éditez le fichier `src/components/GoogleAnalytics.tsx` :

```typescript
// Ligne 5 - Remplacez par votre ID
const GA_MEASUREMENT_ID = 'G-VOTRE-ID-ICI';
```

### 3️⃣ Rebuild et redéployer

```bash
cd /home/lalpha/projets/developpement/JSR
./deploy.sh
```

---

## 📈 Fonctionnalités activées

### ✅ Tracking automatique
- **Pages vues** : Chaque changement de page est tracké
- **Navigation** : Suivi des routes React Router
- **Temps de chargement** : Métriques de performance

### ✅ Événements personnalisés
Utilisez le hook `useGAEvent` dans vos composants :

```tsx
import { useGAEvent } from '@/components/GoogleAnalytics';

const MonComposant = () => {
  const { trackEvent } = useGAEvent();

  const handleClick = () => {
    trackEvent('button_click', {
      button_name: 'demande_soumission',
      page: 'accueil'
    });
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
};
```

---

## 🎯 Événements recommandés à tracker

### Contact
```tsx
trackEvent('contact_form_submit', {
  form_type: 'demande_soumission',
  service: 'excavation'
});
```

### Navigation
```tsx
trackEvent('navigation_click', {
  link: 'services',
  from_page: 'accueil'
});
```

### Appel téléphonique
```tsx
trackEvent('phone_call_click', {
  button_location: 'header' // ou 'mobile_button'
});
```

### Téléchargement
```tsx
trackEvent('download', {
  file_type: 'pdf',
  file_name: 'brochure_services.pdf'
});
```

---

## 🔐 Confidentialité et RGPD

Le composant Google Analytics est déjà configuré pour :
- ✅ Respecter la politique de confidentialité
- ✅ Ne pas collecter d'IP complètes
- ✅ Tracker seulement les pages et événements essentiels

**Note** : Si vous ciblez l'Europe (RGPD), ajoutez un bandeau de consentement cookies.

---

## 📊 Métriques disponibles dans GA4

Une fois configuré, vous pourrez voir :

### 📈 Acquisition
- Sources de trafic (Google, Direct, Réseaux sociaux)
- Mots-clés de recherche
- Campagnes publicitaires

### 👥 Engagement
- Pages les plus visitées
- Temps passé sur le site
- Taux de rebond par page

### 🎯 Conversions
- Formulaires de contact soumis
- Clics sur le numéro de téléphone
- Demandes de soumission

### 📱 Technologie
- Appareils utilisés (mobile vs desktop)
- Navigateurs
- Systèmes d'exploitation

---

## 🚀 Exemple d'intégration complète

### Page Contact avec tracking

```tsx
import { useGAEvent } from '@/components/GoogleAnalytics';

const Contact = () => {
  const { trackEvent } = useGAEvent();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tracker la soumission
    trackEvent('contact_form_submit', {
      service_interest: formData.service,
      contact_method: 'form'
    });
    
    // ... reste du code
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulaire */}
    </form>
  );
};
```

---

## ✅ Vérification

### Tester le tracking en local

1. Ouvrez votre site : `http://localhost:8082`
2. Ouvrez la console développeur (F12)
3. Naviguez entre les pages
4. Vous devriez voir les appels `gtag` dans l'onglet Network

### Vérifier dans Google Analytics

1. Allez dans Rapports > Temps réel
2. Naviguez sur votre site
3. Vérifiez que les pages visitées apparaissent

---

## 🎨 Personnalisation avancée

### Désactiver en développement

```typescript
// GoogleAnalytics.tsx
const isDev = import.meta.env.DEV;

if (!isDev) {
  // Charger GA uniquement en production
}
```

### Ajouter des dimensions personnalisées

```tsx
trackEvent('page_view', {
  user_type: 'new_visitor',
  page_category: 'services',
  language: 'fr'
});
```

---

## 📚 Ressources

- [Documentation Google Analytics 4](https://support.google.com/analytics/answer/9304153)
- [Guide GA4 pour React](https://developers.google.com/analytics/devguides/collection/ga4)
- [Événements recommandés GA4](https://support.google.com/analytics/answer/9267735)

---

**🎉 Une fois configuré, Google Analytics vous permettra de mieux comprendre vos visiteurs et optimiser votre site !**
