// Liste des images de fond pour les captures d'écran
const SCREENSHOT_BACKGROUNDS = [
  '/images/1.webp',
  '/images/2.webp',
  '/images/3.webp',
  '/images/4.webp',
  '/images/5.webp',
  '/images/6.webp',
  '/images/7.webp',
  '/images/8.webp',
  '/images/9.webp',
  '/images/10.webp',
];

// Fonction pour obtenir une image de fond aléatoire
export const getRandomScreenshotBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * SCREENSHOT_BACKGROUNDS.length);
  return SCREENSHOT_BACKGROUNDS[randomIndex];
};

// Fonction pour précharger les images de fond
export const preloadScreenshotBackgrounds = (): void => {
  SCREENSHOT_BACKGROUNDS.forEach((imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  });
};

export default {
  getRandomScreenshotBackground,
  preloadScreenshotBackgrounds
};
