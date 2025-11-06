/**
 * Gestion des images de fond pour les captures d'écran
 * Utilise les images locales du dossier public/images
 */

// Liste des images de fond disponibles (1 à 10)
const BACKGROUND_IMAGES = [
  '/images/1.webp',
  '/images/2.webp',
  '/images/3.webp',
  '/images/4.webp',
  '/images/5.webp',
  '/images/6.webp',
  '/images/7.webp',
  '/images/8.webp',
  '/images/9.webp',
  '/images/10.webp'
];

/**
 * Retourne le chemin d'une image de fond aléatoire
 * @returns {string} Chemin vers une image WEBP aléatoire
 */
export const getRandomScreenshotBackground = (): string => {
  // Sélectionne une image aléatoire dans la liste
  const randomIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
  return BACKGROUND_IMAGES[randomIndex];
};

/**
 * Prépare le cache du navigateur en préchargeant quelques images de fond
 * pour améliorer les performances lors de l'affichage
 */
export const preloadScreenshotBackgrounds = (): void => {
  // Précharge toutes les images de fond
  BACKGROUND_IMAGES.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

/**
 * Vérifie si une image existe
 * @param url URL de l'image à vérifier
 * @returns Promise qui se résout avec true si l'image existe, false sinon
 */
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};