# 📋 TÂCHES DE SÉCURITÉ À COMPLÉTER

## Vue d'ensemble

```
Total des tâches: 15
Critiques: 3 🔴
Importantes: 5 🟠
Recommandées: 7 🟡
```

---

## 🔴 TÂCHES CRITIQUES (À FAIRE DEMAIN)

### 1. npm audit
- [ ] Exécuter: `npm audit`
- [ ] Analyser les résultats
- [ ] Exécuter: `npm audit fix` si nécessaire
- [ ] Vérifier que build passe encore
- **Effort:** 15 min
- **Priorité:** CRITIQUE
- **Impact:** Haut

### 2. Corriger erreurs TypeScript
- [ ] Exécuter: `npm run build`
- [ ] Analyser les erreurs TypeScript
- [ ] Corriger les erreurs (if any)
- [ ] Tester que tout fonctionne
- **Effort:** 1-4h (dépend des erreurs)
- **Priorité:** CRITIQUE
- **Impact:** Haut

### 3. Redéployer le site
- [ ] Exécuter: `./update-site.sh`
- [ ] Vérifier: `curl -I https://jsr.4lb.ca` (200 OK)
- [ ] Vérifier formulaire contact (envoyer test)
- [ ] Vérifier page à propos (nouvelle image)
- **Effort:** 5 min
- **Priorité:** CRITIQUE
- **Impact:** Moyen

---

## 🟠 TÂCHES IMPORTANTES (CETTE SEMAINE)

### 4. Validation serveur des formulaires
- [ ] Créer endpoint backend `/api/contact/validate`
- [ ] Utiliser Joi ou Zod pour validation
- [ ] Implémenter sanitization
- [ ] Tester avec curl/Postman
- **Effort:** 3-4h
- **Priorité:** IMPORTANTE
- **Impact:** Haut
- **Notes:** Honeypot + client validation existants

### 5. Rate limiting
- [ ] Utiliser Cloudflare rate limiting OU
- [ ] Implémenter middleware Express.js (express-rate-limit)
- [ ] Configurer: 5 requêtes par IP par 1 minute
- [ ] Tester dépassement limite
- **Effort:** 1-2h
- **Priorité:** IMPORTANTE
- **Impact:** Haut
- **Notes:** Prévient spam formulaires

### 6. Politique de Confidentialité
- [ ] Créer page `/confidentialite`
- [ ] Couvrir: données collectées, RGPD, cookies
- [ ] Lien depuis footer
- [ ] Traduire en français/anglais si besoin
- **Effort:** 1-2h
- **Priorité:** IMPORTANTE
- **Impact:** Haut (légal)
- **Notes:** Obligatoire au Québec (PIPEDA)

### 7. Vérifier restrictions EmailJS
- [ ] Aller sur: https://dashboard.emailjs.com
- [ ] Ajouter jsr.4lb.ca aux domaines autorisés
- [ ] Limiter par IP si possible
- [ ] Tester que formulaire fonctionne
- **Effort:** 15 min
- **Priorité:** IMPORTANTE
- **Impact:** Moyen
- **Notes:** Prévient utilisation abusive clé publique

### 8. GitHub Dependabot
- [ ] Aller sur: https://github.com/lalphadb/jsr-quebec-builders
- [ ] Settings → Security → Dependabot
- [ ] Activer: Alerts, Updates
- [ ] Configurer auto-merge pour mineures
- **Effort:** 10 min
- **Priorité:** IMPORTANTE
- **Impact:** Moyen
- **Notes:** Monitoring automatique des vulnérabilités

---

## 🟡 TÂCHES RECOMMANDÉES (MOIS 1)

### 9. reCAPTCHA v3
- [ ] Créer compte Google reCAPTCHA
- [ ] Obtenir clés (site + secret)
- [ ] Ajouter à formulaire contact
- [ ] Implémenter vérification serveur
- [ ] Tester avec scores
- **Effort:** 2h
- **Priorité:** RECOMMANDÉE
- **Impact:** Moyen
- **Notes:** Plus robuste que honeypot

### 10. Error Tracking (Sentry)
- [ ] Créer compte Sentry.io
- [ ] Installer: `npm install @sentry/react`
- [ ] Initialiser dans main.tsx
- [ ] Configurer environment tags
- [ ] Tester error capture
- **Effort:** 2h
- **Priorité:** RECOMMANDÉE
- **Impact:** Moyen
- **Notes:** Voir erreurs production en temps réel

### 11. Uptime Monitoring
- [ ] Choisir service: UptimeRobot ou Pingdom
- [ ] Configurer monitoring de https://jsr.4lb.ca
- [ ] Intervalle: 5 minutes
- [ ] Notifications Slack/email si down
- **Effort:** 30 min
- **Priorité:** RECOMMANDÉE
- **Impact:** Faible
- **Notes:** Alertes si site devient indisponible

### 12. CSP Nonces
- [ ] Mettre à jour Nginx config avec nonces
- [ ] Ajouter nonce à inline scripts/styles
- [ ] Remplacer 'unsafe-inline' par nonces
- [ ] Tester que site fonctionne
- **Effort:** 3h
- **Priorité:** RECOMMANDÉE
- **Impact:** Moyen
- **Notes:** Renforce CSP, prévient XSS

### 13. Conditions d'Utilisation
- [ ] Créer page `/conditions`
- [ ] Couvrir: usage, responsabilités, limites
- [ ] Lien depuis footer
- [ ] Format français/anglais
- **Effort:** 1h
- **Priorité:** RECOMMANDÉE
- **Impact:** Moyen (légal)
- **Notes:** Complément politique confidentialité

### 14. Cookie Policy
- [ ] Audit: site utilise-t-il cookies?
- [ ] Si analytics (Google): ajouter cookie notice
- [ ] Lien depuis footer
- [ ] Consentement implicite accepte sauf opt-out
- **Effort:** 1h
- **Priorité:** RECOMMANDÉE
- **Impact:** Moyen (légal)
- **Notes:** RGPD/PIPEDA compliance

### 15. Audit de Pénétration
- [ ] Contacter: OWASP Quebec chapter
- [ ] Demander audit de pénétration
- [ ] Budget: $500-2000 CAD
- [ ] Durée: 1-2 semaines
- **Effort:** Externe
- **Priorité:** RECOMMANDÉE
- **Impact:** Haut
- **Notes:** Test professionnel de sécurité

---

## 📅 CALENDRIER D'IMPLÉMENTATION

### SEMAINE 1 (Oct 23-29)
- [x] npm audit
- [x] TypeScript strict mode
- [x] Redéployer site
- [ ] Corriger erreurs TypeScript (si any)

### SEMAINE 2-3 (Oct 30 - Nov 10)
- [ ] Validation serveur
- [ ] Rate limiting
- [ ] Vérifier EmailJS
- [ ] Politique confidentialité

### SEMAINE 4 - MOIS 1 (Nov 11 - Nov 30)
- [ ] reCAPTCHA v3
- [ ] Sentry integration
- [ ] Uptime monitoring
- [ ] Conditions d'utilisation

### MOIS 2-3 (Décembre - Janvier)
- [ ] CSP Nonces
- [ ] Cookie policy
- [ ] Audit de pénétration
- [ ] Review final

---

## ✅ CHECKLIST AVANT PRODUCTION

**Avant de considérer complètement sécurisé:**

- [ ] npm audit = 0 vulnérabilités
- [ ] TypeScript strict = 0 errors
- [ ] Tests: formulaires envoient emails
- [ ] Tests: limite de requêtes marche
- [ ] Tests: reCAPTCHA valide
- [ ] Tests: erreurs capturées par Sentry
- [ ] Tests: monitoring active
- [ ] Politique confidentialité publiée
- [ ] Conditions d'utilisation publiées
- [ ] Cookies notice visible (si needed)
- [ ] Site accessible (200 OK)
- [ ] Lighthouse score ≥ 85

---

## 🎯 MÉTRIQUES DE SUCCÈS

| Metrique | Actuel | Objectif | Timeline |
|----------|--------|----------|----------|
| npm audit vulns | ? | 0 | Semaine 1 |
| TypeScript errors | ? | 0 | Semaine 1 |
| Validation serveur | ❌ | ✅ | Semaine 2 |
| Rate limiting | ❌ | ✅ | Semaine 2 |
| reCAPTCHA | ❌ | ✅ | Mois 1 |
| Error tracking | ❌ | ✅ | Mois 1 |
| Security score | 8.5 | 9.0+ | Mois 2 |
| Compliance | 70% | 100% | Mois 2 |

---

## 🔗 LIENS UTILES

**Documentation:**
- TypeScript: https://www.typescriptlang.org/docs/
- npm audit: https://docs.npmjs.com/cli/v8/commands/npm-audit
- EmailJS: https://www.emailjs.com/docs/
- reCAPTCHA: https://developers.google.com/recaptcha
- Sentry: https://docs.sentry.io/
- OWASP: https://owasp.org/

**Services:**
- reCAPTCHA: https://www.google.com/recaptcha/admin
- Sentry: https://sentry.io
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://www.pingdom.com

---

## 💬 QUESTIONS FRÉQUENTES

**Q: Combien de temps pour tout implémenter?**  
A: ~20-30 heures sur 2-3 mois (au rythme de 2-3 heures/semaine)

**Q: Est-ce vraiment obligatoire?**  
A: Politique confidentialité + rate limiting: OUI (légal/spam)  
   Autres: RECOMMANDÉ mais pas obligatoire

**Q: Coût additionnel?**  
A: Gratuit sauf: Sentry ($29/mois), UptimeRobot (gratuit), Audit pénétration ($500-2000)

**Q: Peut-on faire progressivement?**  
A: OUI! Priorisez: audit → validation → rate limiting → monitoring

---

## 📞 SUPPORT

Pour toute question:
1. Consultez SECURITY_AUDIT.md
2. Consultez les ressources
3. Demandez à Claude/ChatGPT
4. Contactez professionnel en sécurité si besoin

---

**Généré:** October 23, 2025  
**Mis à jour:** Continuellement  
**Priorité:** HAUTE - Commencer semaine 1!
