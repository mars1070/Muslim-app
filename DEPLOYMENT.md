# Guide de Déploiement Firebase Hosting

## ✅ Ce qui a été fait automatiquement

1. ✅ Firebase SDK installé
2. ✅ Configuration Firebase créée (`firebase-config.ts`)
3. ✅ Service Worker configuré pour FCM (`sw.js`)
4. ✅ Build de production créé (`dist/` folder)
5. ✅ Fichiers de configuration Firebase créés :
   - `.firebaserc` (projet configuré)
   - `firebase.json` (hosting configuré)

## 📋 Étapes à faire manuellement

### Étape 1 : Connexion à Firebase

Ouvrez un terminal PowerShell ou CMD dans le dossier du projet et exécutez :

```bash
cd C:\Users\SaaS\Desktop\Muslim-Web-App-main\Muslim-Web-App-main
firebase login
```

Cela ouvrira votre navigateur pour vous connecter avec votre compte Google.

### Étape 2 : Initialiser Firebase (si nécessaire)

Si Firebase n'est pas encore initialisé, exécutez :

```bash
firebase init hosting
```

Répondez aux questions :
- **What do you want to use as your public directory?** → `dist`
- **Configure as a single-page app?** → `Yes`
- **Set up automatic builds and deploys with GitHub?** → `No`

**Note** : La configuration est déjà faite dans `firebase.json`, donc vous pouvez dire "No" si on vous demande de réécrire.

### Étape 3 : Déployer l'application

Une fois connecté, déployez avec :

```bash
firebase deploy --only hosting
```

Votre application sera disponible sur :
- **Production** : https://sabrbracelet-com.web.app
- **Alternative** : https://sabrbracelet-com.firebaseapp.com

## 🔧 Configuration automatique du build

Le script `npm run build` copie automatiquement le service worker dans le dossier `dist/`.

Pour reconstruire avant de déployer :
```bash
npm run build
firebase deploy --only hosting
```

## 📝 Notes importantes

1. **Service Worker** : Le fichier `sw.js` est automatiquement copié dans `dist/` lors du build
2. **HTTPS** : Firebase Hosting utilise HTTPS automatiquement (nécessaire pour les notifications)
3. **Mise à jour** : Après chaque modification, relancez `npm run build` puis `firebase deploy`

## 🚀 Commandes rapides

```bash
# Build de production
npm run build

# Déployer sur Firebase
firebase deploy --only hosting

# Voir les déploiements
firebase hosting:channel:list
```

