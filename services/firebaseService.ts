import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging';
import { firebaseConfig } from '../firebase-config';

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Variable pour stocker le token FCM
let fcmToken: string | null = null;
let messagingInstance: any = null;

// Obtenir le token FCM pour les notifications push
export const getFCMToken = async (): Promise<string | null> => {
  try {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker non supporté');
      return null;
    }

    // Vérifier si Firebase Messaging est supporté
    const isMessagingSupported = await isSupported();
    if (!isMessagingSupported) {
      console.warn('Firebase Messaging non supporté dans ce navigateur');
      return null;
    }

    // Vérifier que le service worker est enregistré
    const registration = await navigator.serviceWorker.ready;
    
    // Obtenir l'instance de messaging
    if (!messagingInstance) {
      messagingInstance = getMessaging(app);
    }
    
    // Vérifier la permission de notification
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }

    if (Notification.permission !== 'granted') {
      console.warn('Permission de notification refusée');
      return null;
    }

    // TODO: Remplacez 'YOUR_VAPID_KEY' par votre clé VAPID depuis Firebase Console
    // Pour obtenir la clé VAPID :
    // 1. Allez sur https://console.firebase.google.com
    // 2. Projet → Paramètres du projet → Cloud Messaging
    // 3. Dans "Certificats de clé Web", copiez la clé VAPID
    const vapidKey = 'BKCX23VOte9rdWnWNmKKEwjfIF5KReAKLL20GBxEBh4gI734RrY22j2RjYzhDIAz4I6lmOZcZ5OCbpoKEMUVqgM'; // ⚠️ REMPLACEZ CELLE-CI !

    // Obtenir le token FCM
    const token = await getToken(messagingInstance, {
      vapidKey: vapidKey,
      serviceWorkerRegistration: registration
    });

    if (token) {
      fcmToken = token;
      console.log('Token FCM obtenu:', token);
      return token;
    } else {
      console.warn('Aucun token FCM disponible');
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de l\'obtention du token FCM:', error);
    return null;
  }
};

// Écouter les messages push quand l'app est ouverte
export const onMessageListener = () => {
  return new Promise((resolve) => {
    try {
      if (!messagingInstance) {
        messagingInstance = getMessaging(app);
      }
      
      onMessage(messagingInstance, (payload) => {
        console.log('Message reçu quand l\'app est ouverte:', payload);
        resolve(payload);
      });
    } catch (error) {
      console.error('Erreur lors de l\'écoute des messages:', error);
    }
  });
};

// Obtenir le token actuel (si déjà obtenu)
export const getCurrentToken = (): string | null => {
  return fcmToken;
};

export default app;

// @ts-ignore
window.getFCMToken = getFCMToken;
