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
      
      // Créer un nom de fichier avec la date actuelle
      const fileName = `rappel-islamique-${new Date().toISOString().split('T')[0]}.jpg`;
      
      // Vérifier si on est sur iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      // Pour iOS, utiliser une approche spécifique
      if (isIOS) {
        // Créer un nouvel objet URL pour le blob
        const blobUrl = URL.createObjectURL(blob);
        
        // Essayer d'abord avec l'API Web Share standard
        if (navigator.share) {
          try {
            // Essayer avec un fichier (iOS 13+)
            if (navigator.canShare && navigator.canShare({ files: [new File([], 'test.jpg')] })) {
              const file = new File([blob], fileName, { type: 'image/jpeg' });
              await navigator.share({
                files: [file],
                title: 'Rappel Islamique',
                text: 'Découvrez ce rappel spirituel',
              });
            } else {
              // Fallback pour iOS 12+ (sans support des fichiers)
              await navigator.share({
                title: 'Rappel Islamique',
                text: 'Découvrez ce rappel spirituel',
                url: blobUrl
              });
            }
            URL.revokeObjectURL(blobUrl);
            return;
          } catch (shareError) {
            console.log('Le partage iOS a échoué, tentative de téléchargement', shareError);
            // Continuer vers le téléchargement si le partage échoue
          }
        }
        
        // Fallback pour iOS : Créer un lien de téléchargement
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        
        // Déclencher le téléchargement
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        link.dispatchEvent(clickEvent);
        
        // Nettoyage
        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        }, 100);
        
        return;
      }
      
      // Pour les autres navigateurs (Android, Desktop)
      if (navigator.share) {
        try {
          // Essayer avec l'API Web Share standard
          if (navigator.canShare && navigator.canShare({ files: [new File([], 'test.jpg')] })) {
            const file = new File([blob], fileName, { type: 'image/jpeg' });
            await navigator.share({
              files: [file],
              title: 'Rappel Islamique',
              text: 'Découvrez ce rappel spirituel',
            });
          } else {
            await navigator.share({
              title: 'Rappel Islamique',
              text: 'Découvrez ce rappel spirituel',
              url: dataUrl
            });
          }
          return;
        } catch (shareError) {
          console.log('Le partage a échoué, tentative de téléchargement', shareError);
        }
      }
      
      // Fallback pour tous les navigateurs : Téléchargement direct
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
    } catch (error) {
      console.error('Erreur lors du partage:', error);
      // Dernier recours : ouvrir l'image dans un nouvel onglet
      window.open(dataUrl, '_blank');
    }
  };

  const captureContent = async () => {
    console.log('Début de la capture...');
    setIsSharing(true);
    
    try {
      // Récupérer l'élément à capturer (l'élément principal avec l'image de fond)
      const mainElement = document.querySelector('main');
      if (!mainElement) throw new Error("Impossible de trouver l'élément principal");
      
      // Récupérer l'URL de l'image de fond
      const backgroundImage = window.getComputedStyle(mainElement).backgroundImage;
      const backgroundUrl = backgroundImage.replace('url("', '').replace('")', '');
      
      // Créer un conteneur pour la capture
      const captureContainer = document.createElement('div');
      captureContainer.style.position = 'fixed';
      captureContainer.style.top = '0';
      captureContainer.style.left = '0';
      captureContainer.style.width = '100%';
      captureContainer.style.height = '100%';
      captureContainer.style.backgroundImage = `url(${backgroundUrl})`;
      captureContainer.style.backgroundSize = 'cover';
      captureContainer.style.backgroundPosition = 'center';
      captureContainer.style.zIndex = '9999';
      captureContainer.style.backgroundColor = '#111827'; // Couleur de fond de secours
      
      // Créer un élément image pour le fond
      const backgroundImg = new Image();
      backgroundImg.crossOrigin = 'anonymous';
      backgroundImg.src = backgroundUrl;
      
      // Attendre que l'image soit chargée
      await new Promise((resolve) => {
        if (backgroundImg.complete) {
          resolve(true);
        } else {
          backgroundImg.onload = () => resolve(true);
          backgroundImg.onerror = () => resolve(false);
        }
      });
      
      // Créer un canvas pour le fond
      const bgCanvas = document.createElement('canvas');
      bgCanvas.width = backgroundImg.width || window.innerWidth;
      bgCanvas.height = backgroundImg.height || window.innerHeight;
      const bgCtx = bgCanvas.getContext('2d');
      if (bgCtx) {
        bgCtx.drawImage(backgroundImg, 0, 0, bgCanvas.width, bgCanvas.height);
        // Appliquer un léger assombrissement si nécessaire
        bgCtx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      }
      
      // Cloner le contenu à capturer
      const contentToCapture = document.createElement('div');
      contentToCapture.style.width = '100%';
      contentToCapture.style.height = '100%';
      contentToCapture.style.display = 'flex';
      contentToCapture.style.flexDirection = 'column';
      contentToCapture.style.alignItems = 'center';
      contentToCapture.style.justifyContent = 'center';
      contentToCapture.style.padding = '1rem';
      contentToCapture.style.backgroundColor = 'transparent'; // Fond transparent
      
      // Cloner la carte de rappel
      const reminderCard = document.querySelector('.reminder-card')?.cloneNode(true) as HTMLElement;
      if (!reminderCard) throw new Error("Impossible de trouver la carte de rappel");
      
      // Ajuster les styles de la carte pour la capture
      reminderCard.style.margin = '0';
      reminderCard.style.maxWidth = '100%';
      reminderCard.style.width = '100%';
      
      // Ajouter la carte au conteneur de contenu
      contentToCapture.appendChild(reminderCard);
      
      // Ajouter le contenu au conteneur principal
      captureContainer.appendChild(contentToCapture);
      
      // Ajouter le tout au document
      document.body.appendChild(captureContainer);
      
      // Attendre que le DOM se mette à jour
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Créer un canvas pour la composition finale
      const compositionCanvas = document.createElement('canvas');
      compositionCanvas.width = window.innerWidth * 2; // Haute résolution
      compositionCanvas.height = window.innerHeight * 2;
      const compositionCtx = compositionCanvas.getContext('2d');
      
      if (!compositionCtx) throw new Error('Impossible de créer le contexte du canvas');
      
      // Dessiner le fond d'abord
      if (bgCanvas) {
        compositionCtx.drawImage(bgCanvas, 0, 0, compositionCanvas.width, compositionCanvas.height);
      } else {
        // Fallback si le chargement du fond a échoué
        compositionCtx.fillStyle = '#111827';
        compositionCtx.fillRect(0, 0, compositionCanvas.width, compositionCanvas.height);
      }
      
      // Capturer uniquement le contenu (sans le fond)
      const contentCanvas = await html2canvas(contentToCapture, {
        scale: 2, // Qualité plus élevée
        useCORS: true,
        logging: true,
        allowTaint: true,
        backgroundColor: 'transparent',
        onclone: (document, element) => {
          // S'assurer que les éléments ont un fond transparent
          const elements = element.querySelectorAll('*');
          elements.forEach(el => {
            (el as HTMLElement).style.backgroundColor = 'transparent';
          });
        }
      });
      
      // Dessiner le contenu par-dessus le fond
      compositionCtx.drawImage(contentCanvas, 0, 0, compositionCanvas.width, compositionCanvas.height);
      
      // Utiliser le canvas final
      const canvas = compositionCanvas;
      
      // Nettoyer
      document.body.removeChild(captureContainer);
      
      // Créer un nouveau canvas pour l'image finale
      const outputCanvas = document.createElement('canvas');
      outputCanvas.width = canvas.width;
      outputCanvas.height = canvas.height;
      const outputCtx = outputCanvas.getContext('2d');
      
      if (!outputCtx) throw new Error('Impossible de créer le contexte du canvas');
      
      // Remplir avec la couleur de fond
      outputCtx.fillStyle = '#111827';
      outputCtx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
      
      // Dessiner l'image capturée par-dessus
      outputCtx.drawImage(canvas, 0, 0);
      
      // Convertir en URL de données
      const dataUrl = outputCanvas.toDataURL('image/jpeg', 0.9);
      
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
