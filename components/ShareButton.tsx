import React, { useState, useEffect, useRef } from 'react';
import { Reminder } from '../types';
import html2canvas from 'html2canvas';
import { getRandomScreenshotBackground, preloadScreenshotBackgrounds } from '../utils/screenshotBackgrounds';

interface ShareButtonProps {
  reminder: Reminder;
}

const ShareButton: React.FC<ShareButtonProps> = ({ reminder }) => {
  const [isSharing, setIsSharing] = useState(false);
  
  // Précharger les images de fond au montage du composant
  useEffect(() => {
    preloadScreenshotBackgrounds();
  }, []);

  const shareImage = async (dataUrl: string) => {
    try {
      // Convertir dataUrl en blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'rappel-islamique.jpg', { type: 'image/jpeg' });

      // Vérifier si l'API Web Share est disponible
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Rappel Islamique',
          text: 'Découvrez ce rappel spirituel',
        });
      } else {
        // Fallback pour les navigateurs ne supportant pas le partage de fichiers
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `rappel-islamique-${new Date().toISOString().split('T')[0]}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Erreur lors du partage:', error);
      // Fallback en cas d'échec
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `rappel-islamique-${new Date().toISOString().split('T')[0]}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const captureContent = async () => {
    console.log('Début de la capture...');
    setIsSharing(true);
    
    try {
      // Récupérer l'élément à capturer (la zone de capture définie par l'ID 'capture-area')
      const elementToCapture = document.getElementById('capture-area');
      if (!elementToCapture) throw new Error("Impossible de trouver l'élément à capturer");
      
      // Ajouter une classe pour masquer les boutons pendant la capture
      const buttons = document.querySelectorAll('.no-screenshot');
      buttons.forEach(btn => {
        btn.classList.add('hidden');
      });
      
      // Attendre un court instant pour que le DOM se mette à jour
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Créer un canvas avec html2canvas
      const canvas = await html2canvas(elementToCapture as HTMLElement, {
        backgroundColor: null,
        scale: 2, // Qualité plus élevée
        useCORS: true,
        logging: true,
        allowTaint: true
      });
      
      // Réafficher les boutons après la capture
      buttons.forEach(btn => {
        btn.classList.remove('hidden');
      });
      
      // Convertir en URL de données
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      
      // Partager ou télécharger l'image
      await shareImage(dataUrl);
      
      console.log('Capture et partage terminés avec succès');
      
    } catch (error) {
      console.error('Erreur lors de la capture d\'écran:', {
        message: error instanceof Error ? error.message : 'Erreur inconnue',
        stack: error instanceof Error ? error.stack : undefined,
        error
      });
      alert('Erreur lors de la capture: ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <button
      onClick={captureContent}
      disabled={isSharing}
      className="w-12 h-12 bg-black/30 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center border border-white/20 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all transform hover:scale-105"
      title="Partager ce rappel"
      aria-label="Partager ce rappel"
    >
      {isSharing ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      )}
    </button>
  );
};

export default ShareButton;
