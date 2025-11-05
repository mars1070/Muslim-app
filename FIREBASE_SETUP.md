# Guide d'installation Firebase Cloud Messaging

## Étape 1 : Obtenir la clé VAPID

1. Allez sur https://console.firebase.google.com
2. Sélectionnez votre projet : **SabrBracelet**
3. Cliquez sur l'icône d'engrenage ⚙️ en haut à gauche → **Paramètres du projet**
4. Allez dans l'onglet **Cloud Messaging**
5. Dans la section **"Certificats de clé Web"**, vous verrez soit :
   - Une clé existante (copiez-la)
   - Un bouton **"Générer une paire de clés"** (cliquez dessus et copiez la clé)

## Étape 2 : Configurer la clé VAPID dans le code

Une fois que vous avez la clé VAPID, mettez-la dans le fichier :
`services/firebaseService.ts`

Remplacez `'YOUR_VAPID_KEY'` par votre vraie clé VAPID (ligne 22).

## Étape 3 : Tester

1. Ouvrez votre application
2. Cliquez sur le bouton de notifications
3. Acceptez la permission
4. Vous devriez voir un token FCM dans la console du navigateur

## Étape 4 : Créer un backend pour envoyer les notifications (Optionnel mais recommandé)

Pour envoyer automatiquement les notifications aux heures programmées (7h, 13h, 19h), vous aurez besoin d'un backend qui :
1. Stocke les tokens FCM des utilisateurs
2. Envoie les notifications aux heures programmées via l'API Firebase Admin SDK

Options :
- **Firebase Functions** (gratuit, recommandé)
- **Node.js backend** avec Firebase Admin SDK
- **Python backend** avec Firebase Admin SDK

## Note importante

Actuellement, le code obtient le token FCM mais ne peut pas envoyer automatiquement les notifications programmées sans backend. Les notifications seront envoyées uniquement si un backend les envoie aux heures programmées.

