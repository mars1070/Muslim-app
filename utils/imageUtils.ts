// Fonction pour convertir une image en base64
export const imageToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Impossible de créer le contexte canvas'));
        return;
      }
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      try {
        ctx.drawImage(img, 0, 0);
        // Convertir en format JPEG pour réduire la taille
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = (error) => {
      console.error('Erreur de chargement de l\'image:', url, error);
      reject(new Error(`Impossible de charger l'image: ${url}`));
    };
    
    // Ajouter un cache buster pour éviter les problèmes de cache
    const cacheBusterUrl = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`;
    img.src = cacheBusterUrl;
  });
};

// Fonction pour précharger les images et les convertir en base64
export const preloadAndConvertImages = async (urls: string[]): Promise<Record<string, string>> => {
  const results: Record<string, string> = {};
  
  await Promise.all(
    urls.map(async (url) => {
      try {
        const base64 = await imageToBase64(url);
        results[url] = base64;
      } catch (error) {
        console.error(`Erreur avec l'image ${url}:`, error);
        // En cas d'erreur, on utilise une image de secours
        results[url] = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzAwMCI+SW1hZ2Ugbm90IGZvdW5kPC90ZXh0Pjwvc3ZnPg==';
      }
    })
  );
  
  return results;
};

// Fonction pour remplacer toutes les images du DOM par leur version base64
export const replaceImagesWithBase64 = async (container: HTMLElement): Promise<void> => {
  // Récupérer toutes les images
  const images = Array.from(container.querySelectorAll('img, [style*="background-image"]'));
  const urlsToConvert: string[] = [];
  const elements: { element: Element; url: string; isBg: boolean }[] = [];
  
  // Préparer la liste des URLs à convertir
  images.forEach((img) => {
    let url: string | null = null;
    let isBg = false;
    
    if (img instanceof HTMLImageElement) {
      url = img.src;
    } else {
      const style = window.getComputedStyle(img);
      const bgImage = style.backgroundImage;
      if (bgImage && bgImage !== 'none') {
        const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
        if (match && match[1]) {
          url = match[1].replace(/['"]/g, '');
          isBg = true;
        }
      }
    }
    
    if (url && (url.startsWith('http') || url.startsWith('blob:'))) {
      urlsToConvert.push(url);
      elements.push({ element: img, url, isBg });
    }
  });
  
  // Convertir les images
  const convertedImages = await preloadAndConvertImages(Array.from(new Set(urlsToConvert)));
  
  // Remplacer les images dans le DOM
  elements.forEach(({ element, url, isBg }) => {
    const base64 = convertedImages[url];
    if (!base64) return;
    
    if (isBg) {
      (element as HTMLElement).style.backgroundImage = `url(${base64})`;
    } else if (element instanceof HTMLImageElement) {
      element.src = base64;
    }
  });
};
