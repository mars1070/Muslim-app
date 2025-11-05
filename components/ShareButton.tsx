import React, { useState } from 'react';
import { Reminder } from '../types';

// Déclaration pour informer TypeScript de l'existence de html2canvas dans la portée globale
declare const html2canvas: any;

interface ShareButtonProps {
  reminder: Reminder;
  backgroundImage: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ reminder, backgroundImage }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    const captureElement = document.getElementById('capture-area');
    if (!captureElement) {
      console.error("L'élément à capturer est introuvable.");
      alert("Une erreur est survenue lors du partage.");
      return;
    }

    setIsSharing(true);

    try {
      // Créer un élément img temporaire avec l'image Firebase pour la capture
      let tempImg: HTMLImageElement | null = null;
      if (backgroundImage) {
        tempImg = document.createElement('img');
        tempImg.src = backgroundImage;
        tempImg.crossOrigin = 'anonymous';
        tempImg.setAttribute('data-temp-background', 'true');
        tempImg.style.position = 'absolute';
        tempImg.style.top = '0';
        tempImg.style.left = '0';
        tempImg.style.width = '100%';
        tempImg.style.height = '100%';
        tempImg.style.objectFit = 'cover';
        tempImg.style.zIndex = '0';
        tempImg.style.pointerEvents = 'none';
        captureElement.appendChild(tempImg);
        
        // Attendre que l'image soit chargée
        await new Promise((resolve, reject) => {
          if (tempImg) {
            if (tempImg.complete) {
              resolve(null);
            } else {
              tempImg.onload = () => resolve(null);
              tempImg.onerror = () => reject(new Error('Erreur de chargement de l\'image'));
              // Timeout après 5 secondes
              setTimeout(() => reject(new Error('Timeout de chargement de l\'image')), 5000);
            }
          }
        });
      }

      // Attendre un peu pour s'assurer que tout est prêt
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(captureElement, {
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#111827',
        scale: 2,
        logging: false,
        width: captureElement.scrollWidth,
        height: captureElement.scrollHeight,
        windowWidth: captureElement.scrollWidth,
        windowHeight: captureElement.scrollHeight,
      });

      // Supprimer l'élément img temporaire après la capture
      if (tempImg && tempImg.parentNode) {
        tempImg.parentNode.removeChild(tempImg);
      }

      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert("Une erreur est survenue lors de la création de l'image.");
          setIsSharing(false);
          return;
        }

        if (navigator.share && navigator.canShare) {
          try {
          const file = new File([blob], 'rappel-islamique.jpg', { type: 'image/jpeg' });
          const shareData = {
            title: 'Rappel Islamique',
            text: 'Un rappel pour toi. #Islam #Rappel',
            files: [file],
          };

            if (navigator.canShare(shareData)) {
            await navigator.share(shareData);
          } else {
              // Fallback: télécharger l'image si le partage n'est pas supporté
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'rappel-islamique.jpg';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              alert("L'image a été téléchargée. Le partage direct n'est pas supporté sur ce navigateur.");
            }
          } catch (shareError) {
            console.error('Erreur lors du partage:', shareError);
            // Fallback: télécharger l'image en cas d'erreur
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'rappel-islamique.jpg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert("L'image a été téléchargée. Vous pouvez la partager manuellement.");
          }
        } else {
          // Fallback: télécharger l'image si l'API de partage n'est pas disponible
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'rappel-islamique.jpg';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          alert("L'image a été téléchargée. Vous pouvez la partager manuellement.");
        }
        setIsSharing(false);
      }, 'image/jpeg', 0.95);

    } catch (error) {
      console.error('Erreur lors de la capture ou du partage :', error);
      // Nettoyer l'élément temporaire en cas d'erreur
      const captureElement = document.getElementById('capture-area');
      if (captureElement) {
        const tempImg = captureElement.querySelector('img[data-temp-background]');
        if (tempImg && tempImg.parentNode) {
          tempImg.parentNode.removeChild(tempImg);
        }
      }
      alert("Une erreur est survenue lors de la tentative de partage.");
      setIsSharing(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      aria-label="Partager le rappel en image"
      className="w-12 h-12 bg-black/30 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center border border-white/20 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait"
    >
      {isSharing ? (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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