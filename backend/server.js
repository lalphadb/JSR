const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sanitizeHtml = require('sanitize-html');
require('dotenv').config();

const app = express();

// ============================================
// MIDDLEWARE
// ============================================

app.use(cors({
  origin: ['http://localhost:5173', 'https://jsr.4lb.ca', 'http://jsr.4lb.ca'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

// Limiter taille des requêtes
app.use(express.json({ limit: '10kb' }));

// ============================================
// RATE LIMITING - Protection contre spam/DDoS
// ============================================

const contactLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Max 5 requêtes par IP par minute
  message: 'Trop de requêtes. Veuillez réessayer dans 1 minute.',
  standardHeaders: true, // Rate limit info dans headers
  legacyHeaders: false,
  skip: (req) => {
    // En développement, skip le rate limiting
    return process.env.NODE_ENV === 'development';
  },
  keyGenerator: (req) => {
    // Utiliser IP réelle derrière proxy (Traefik)
    return req.headers['x-forwarded-for'] || req.ip;
  }
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requêtes par IP par 15 min
  standardHeaders: true,
  legacyHeaders: false,
});

// Appliquer rate limiting global
app.use(generalLimiter);

// ============================================
// VALIDATION & SANITIZATION FUNCTIONS
// ============================================

const validateAndSanitize = (data) => {
  const errors = [];

  // Vérifier les champs requis
  if (!data.nom || typeof data.nom !== 'string' || data.nom.trim().length === 0) {
    errors.push('Nom est requis et doit être du texte');
  }

  if (!data.telephone || typeof data.telephone !== 'string' || data.telephone.trim().length === 0) {
    errors.push('Téléphone est requis');
  }

  if (!data.courriel || typeof data.courriel !== 'string' || data.courriel.trim().length === 0) {
    errors.push('Email est requis');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message est requis');
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.courriel && !emailRegex.test(data.courriel)) {
    errors.push('Email invalide');
  }

  // Validation téléphone (format québécois)
  const phoneRegex = /^(\+1)?[\s.-]?\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/;
  if (data.telephone && !phoneRegex.test(data.telephone)) {
    errors.push('Téléphone invalide (ex: 418-123-4567)');
  }

  // Vérifier les longueurs
  if (data.nom && data.nom.length > 100) {
    errors.push('Le nom est trop long (max 100 caractères)');
  }

  if (data.message && data.message.length > 5000) {
    errors.push('Le message est trop long (max 5000 caractères)');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Sanitizer les données
  const sanitized = {
    nom: data.nom.trim().substring(0, 100),
    telephone: data.telephone.trim(),
    courriel: data.courriel.trim().toLowerCase(),
    message: sanitizeHtml(data.message, {
      allowedTags: [], // Pas d'HTML
      allowedAttributes: {}
    }).trim().substring(0, 5000)
  };

  return { valid: true, data: sanitized };
};

// ============================================
// EMAIL CONFIGURATION
// ============================================

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Vérifier la configuration au démarrage
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Erreur de configuration email:', error);
  } else {
    console.log('✅ Serveur email prêt à envoyer des messages');
  }
});

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'JSR Backend Email',
    timestamp: new Date().toISOString()
  });
});

// Endpoint pour envoyer un email de contact avec VALIDATION COMPLÈTE
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    // ÉTAPE 1: Validation stricte
    const validation = validateAndSanitize(req.body);
    
    if (!validation.valid) {
      return res.status(400).json({ 
        success: false, 
        errors: validation.errors
      });
    }

    const { nom, telephone, courriel, message } = validation.data;

    // ÉTAPE 2: Configuration du mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Envoie à vous-même
      replyTo: courriel, // Permet de répondre directement au client
      subject: `📧 Nouveau message de ${nom} - JSR Déneigement`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #367C2B 0%, #5a9d3d 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #367C2B; border-radius: 4px; }
            .label { font-weight: bold; color: #367C2B; display: inline-block; width: 100px; }
            .message-box { background: white; padding: 20px; margin-top: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 12px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">✉️ Nouveau message de contact</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">JSR Déneigement - Site Web</p>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">👤 Nom:</span>
                <span>${nom}</span>
              </div>
              <div class="info-row">
                <span class="label">📞 Téléphone:</span>
                <span><a href="tel:${telephone}" style="color: #367C2B; text-decoration: none;">${telephone}</a></span>
              </div>
              <div class="info-row">
                <span class="label">📧 Email:</span>
                <span><a href="mailto:${courriel}" style="color: #367C2B; text-decoration: none;">${courriel}</a></span>
              </div>
              
              <div class="message-box">
                <h3 style="margin-top: 0; color: #367C2B;">💬 Message:</h3>
                <p style="white-space: pre-wrap; margin: 10px 0;">${message}</p>
              </div>

              <div class="footer">
                <p>Envoyé depuis le formulaire de contact de <strong>jsr.4lb.ca</strong></p>
                <p>⏰ ${new Date().toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}</p>
                <p style="color: #9ca3af; margin-top: 10px;">Message validé et sécurisé</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // ÉTAPE 3: Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email envoyé:', info.messageId);
    console.log(`   De: ${nom} (${courriel})`);
    console.log(`   Téléphone: ${telephone}`);
    console.log(`   IP: ${req.headers['x-forwarded-for'] || req.ip}`);
    
    // ÉTAPE 4: Réponse succès
    res.json({ 
      success: true, 
      message: 'Email envoyé avec succès. Nous vous recontacterons bientôt.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi:', error);
    
    // Ne pas exposer les détails d'erreur en production
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Erreur lors de l\'envoi de l\'email';
    
    res.status(500).json({ 
      success: false, 
      error: errorMessage
    });
  }
});

// ============================================
// ERROR HANDLING
// ============================================

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint non trouvé' 
  });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error('❌ Erreur serveur:', err);
  
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'development' 
      ? err.message 
      : 'Erreur serveur. Veuillez réessayer plus tard.'
  });
});

// ============================================
// DÉMARRAGE
// ============================================

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 Serveur JSR Backend démarré');
  console.log(`📡 Écoute sur le port ${PORT}`);
  console.log(`📧 Email configuré: ${process.env.EMAIL_USER || 'NON CONFIGURÉ'}`);
  console.log(`🌍 Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔒 Rate limiting: Actif (5 req/min pour /api/contact)`);
});
