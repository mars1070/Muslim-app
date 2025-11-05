// Import Firebase scripts (on utilise importScripts car c'est un service worker)
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzzYJtjTp9Wo05XQjxowF_w_DtU9jkZlM",
  authDomain: "sabrbracelet-com.firebaseapp.com",
  projectId: "sabrbracelet-com",
  storageBucket: "sabrbracelet-com.firebasestorage.app",
  messagingSenderId: "671598338142",
  appId: "1:671598338142:web:3718f9e5ead11a658dd4cf",
  measurementId: "G-LX1ER9RTKM"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Heures de notification (7h, 13h, 19h)
const NOTIFICATION_HOURS = [7, 13, 19];
const NOTIFICATION_TAG_PREFIX = 'rappel-islamique-';
const notificationIconUrl = "https://firebasestorage.googleapis.com/v0/b/sabrbracelet-com.firebasestorage.app/o/logo%2FSabR%20logo.png?alt=media&token=f75b7d05-8f16-43b3-8879-526cac9a25ad";

// Gérer les messages push en arrière-plan (quand l'app est fermée)
messaging.onBackgroundMessage((payload) => {
  console.log('Message reçu en arrière-plan:', payload);
  
  const notificationTitle = payload.notification?.title || 'Rappel du Jour';
  const notificationOptions = {
    body: payload.notification?.body || 'Un nouveau rappel vous attend ! Ouvrez l\'application pour le découvrir.',
    icon: payload.notification?.icon || notificationIconUrl,
    badge: notificationIconUrl,
    tag: payload.notification?.tag || NOTIFICATION_TAG_PREFIX + Date.now(),
    data: payload.data || { url: self.location.origin }
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('install', (event) => {
  // Force le service worker en attente à devenir le service worker actif.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', (event) => {
  // Ferme la notification lorsque l'utilisateur clique dessus.
  event.notification.close();

  // Ouvre l'application ou la met au premier plan si elle est déjà ouverte.
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Si une fenêtre de l'application est déjà ouverte, la focaliser.
      for (const client of clientList) {
        // L'URL peut avoir des paramètres, donc nous vérifions si elle commence par l'origine.
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      // Sinon, ouvrir une nouvelle fenêtre.
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    }),
  );
});

