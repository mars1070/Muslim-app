/**
 * Gestion des images de fond pour les captures d'écran
 * Utilise les images locales du dossier public/Images Muslim WEBP
 */

/**
 * Retourne le chemin d'une image de fond aléatoire
 * @returns {string} Chemin vers une image WEBP aléatoire
 */
export const getRandomBackground = (): string => {
  // Génère un nombre aléatoire entre 1 et 99
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  return `/Images%20Muslim%20WEBP/${randomNumber}.webp`;
};

/**
 * Prépare le cache du navigateur en préchargeant quelques images de fond
 * pour améliorer les performances lors de l'affichage
 */
export const preloadBackgrounds = (count: number = 5): void => {
  for (let i = 0; i < count; i++) {
    const img = new Image();
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    img.src = `/Images%20Muslim%20WEBP/${randomNumber}.webp`;
  }
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
