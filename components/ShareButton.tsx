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
      // Récupérer l'élément à capturer (la zone de capture définie par l'ID 'capture-area')
      const elementToCapture = document.getElementById('capture-area');
      if (!elementToCapture) throw new Error("Impossible de trouver l'élément à capturer");
      
      // Ajouter une classe pour masquer les boutons pendant la capture
      const buttons = document.querySelectorAll('.no-screenshot');
      buttons.forEach(btn => {
        btn.classList.add('hidden');
      });
      
      // Créer un conteneur temporaire pour la capture
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'fixed';
      tempDiv.style.left = '0';
      tempDiv.style.top = '0';
      tempDiv.style.width = '100%';
      tempDiv.style.height = '100%';
      tempDiv.style.backgroundColor = '#111827'; // Couleur de fond unie
      tempDiv.style.zIndex = '9999';
      tempDiv.style.display = 'flex';
      tempDiv.style.justifyContent = 'center';
      tempDiv.style.alignItems = 'center';
      tempDiv.style.opacity = '0';
      document.body.appendChild(tempDiv);
      
      // Cloner l'élément à capturer
      const clone = elementToCapture.cloneNode(true) as HTMLElement;
      clone.style.width = window.innerWidth + 'px';
      clone.style.height = 'auto';
      clone.style.position = 'relative';
      clone.style.transform = 'none';
      clone.style.margin = '0';
      clone.style.padding = '0';
      
      // Ajouter le clone au conteneur temporaire
      tempDiv.appendChild(clone);
      
      // Attendre que le DOM se mette à jour
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Créer un canvas avec html2canvas
      const canvas = await html2canvas(clone, {
        backgroundColor: '#111827', // Fond solide pour éviter la transparence
        scale: 2, // Qualité plus élevée
        useCORS: true,
        logging: true,
        allowTaint: true,
        removeContainer: true,
        onclone: (document, element) => {
          // S'assurer que les éléments ont un fond solide
          const elements = element.querySelectorAll('*');
          elements.forEach(el => {
            const style = window.getComputedStyle(el);
            if (style.backgroundColor === 'rgba(0, 0, 0, 0)' || style.backgroundColor === 'transparent') {
              (el as HTMLElement).style.backgroundColor = '#111827';
            }
          });
        }
      });
      
      // Nettoyer
      document.body.removeChild(tempDiv);
      
      // Réafficher les boutons après la capture
      buttons.forEach(btn => {
        btn.classList.remove('hidden');
      });
      
      // Créer un nouveau canvas avec un fond solide
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = canvas.width;
      finalCanvas.height = canvas.height;
      const ctx = finalCanvas.getContext('2d');
      
      if (!ctx) throw new Error('Impossible de créer le contexte du canvas');
      
      // Remplir avec la couleur de fond
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
      
      // Dessiner l'image capturée par-dessus
      ctx.drawImage(canvas, 0, 0);
      
      // Convertir en URL de données
      const dataUrl = finalCanvas.toDataURL('image/jpeg', 0.9);
      
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
