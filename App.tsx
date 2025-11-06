import React, { useState, useEffect, useCallback } from 'react';
import { Reminder } from './types';
import { getRandomReminder } from './services/reminderService';
import ReminderCard from './components/ReminderCard';
import ShareButton from './components/ShareButton';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import NextReminderButton from './components/NextReminderButton';
import ErrorMessage from './components/ErrorMessage';
import { reminders } from './data/reminders';
import GiftButton from './components/GiftButton';
import PromoPopup from './components/PromoPopup';
import './services/firebaseService'; // Initialiser Firebase


// Nombre d'images WEBP disponibles dans le dossier public/Images%20Muslim%20WEBP/
const TOTAL_IMAGES_AVAILABLE = 99; // Nous avons 99 images numérotées de 1 à 99


const App: React.FC = () => {
  const [reminder, setReminder] = useState<Reminder | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPromoPopupOpen, setIsPromoPopupOpen] = useState<boolean>(false);

  // Effet pour charger un rappel aléatoire au montage
  useEffect(() => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
             navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('Service Worker enregistré avec la portée :', registration.scope))
                .catch(error => console.error('Échec de l\'enregistrement du Service Worker :', error));
        });
    }

    try {
      const randomReminder = getRandomReminder();
      setReminder(randomReminder);
    } catch (err) {
      console.error("Erreur lors du chargement du rappel:", err);
      setError("Impossible de charger le rappel.");
      setIsLoading(false);
    }
  }, []); // Exécuté une seule fois au montage

  // Fonction pour obtenir une image de fond aléatoire depuis le dossier local
  const getRandomBackgroundImage = useCallback((reminderId: string): string => {
    // Utilisation de l'ID du rappel pour sélectionner une image de manière déterministe
    // Cela permet d'avoir la même image pour le même rappel
    const imageNumber = (reminderId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % TOTAL_IMAGES_AVAILABLE) + 1;
    return `/Images%20Muslim%20WEBP/${imageNumber}.webp`;
  }, []);

  // Effet pour charger l'image de fond à chaque fois que le rappel change
  useEffect(() => {
    if (!reminder) {
      return;
    }

    setIsLoading(true);
    const backgroundUrl = getRandomBackgroundImage(reminder.id.toString());

    const img = new Image();
    img.src = backgroundUrl;

    img.onload = () => {
      setBackgroundImage(backgroundUrl);
      setTimeout(() => setIsLoading(false), 300); // Léger délai pour un affichage fluide
    };

    img.onerror = () => {
      console.error("Erreur de chargement de l'image de fond:", backgroundUrl);
      setError("Impossible de charger l'image de fond. Veuillez vérifier votre connexion.");
      setBackgroundImage('');
      setIsLoading(false);
    };
  }, [reminder]);

  // Fonction pour charger un nouveau rappel aléatoire
  const loadNewReminder = useCallback(() => {
    setError(null);
    try {
      setReminder(currentReminder => {
        let newReminder: Reminder;
        do {
          newReminder = getRandomReminder();
        } while (reminders.length > 1 && newReminder.id === currentReminder?.id);
        return newReminder;
      });
    } catch (err) {
      console.error("Erreur lors du chargement d'un nouveau rappel:", err);
      setError("Une erreur est survenue lors du chargement d'un nouveau rappel.");
      setIsLoading(false);
    }
  }, []);

  return (
    <main
      id="capture-area" // ID ajouté pour le ciblage par html2canvas
      className="w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundColor: '#111827' }}
    >
      <div className="w-full h-full flex flex-col items-center p-4 sm:p-6 text-white">
        {isLoading ? (
          <div className="flex-grow flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
           <div className="flex-grow flex items-center justify-center text-center p-4">
            <ErrorMessage message={error} />
          </div>
        ) : reminder ? (
          <>
            <div className="w-full max-w-md flex-grow flex flex-col">
              <main className="w-full h-full flex items-center justify-center">
                <ReminderCard reminder={reminder} />
              </main>
              <div className="flex-grow-[1]" /> {/* Espaceur pour pousser le contenu vers le haut */}
            </div>

            <div className="fixed bottom-0 left-0 right-0 px-6 pb-3 pt-4 bg-gradient-to-t from-black/40 to-transparent">
              <div className="no-screenshot">
                <div className="flex justify-between items-center max-w-md mx-auto mb-4">
                  <NextReminderButton onClick={loadNewReminder} />
                  <div className="transform scale-110">
                    <GiftButton onClick={() => setIsPromoPopupOpen(true)} />
                  </div>
                  <ShareButton reminder={reminder} />
                </div>
              </div>
              <footer className="text-center">
                <a 
                  href="https://www.sabrbracelet.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm font-montserrat font-semibold uppercase tracking-wider no-underline hover:text-white transition-colors"
                >
                  sabrbracelet.com
                </a>
              </footer>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-center p-4">
             <ErrorMessage message="Aucun rappel n'a pu être chargé." />
          </div>
        )}
      </div>
      {isPromoPopupOpen && <PromoPopup onClose={() => setIsPromoPopupOpen(false)} />}
    </main>
  );
};

export default App;