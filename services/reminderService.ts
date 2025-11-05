
import { reminders } from '../data/reminders';
import { Reminder } from '../types';

/**
 * Retourne le "Rappel du Jour" de manière déterministe.
 * Utilise le nombre de jours écoulés depuis une date de référence (l'époque UNIX)
 * pour s'assurer que le même rappel est affiché pour tous les utilisateurs le même jour.
 * @returns {Reminder} Le rappel du jour.
 */
export const getDailyReminder = (): Reminder => {
  const totalReminders = reminders.length;
  // Calcule le nombre de jours depuis l'époque UNIX
  const daysSinceEpoch = Math.floor(Date.now() / 86400000); 
  // Utilise l'opérateur modulo pour obtenir un index cyclique et prévisible
  const dailyIndex = daysSinceEpoch % totalReminders;
  return reminders[dailyIndex];
};


/**
 * NOTE POUR LE DÉVELOPPEUR :
 * Actuellement, cette fonction récupère les rappels depuis un fichier local `reminders.ts`.
 * Pour utiliser Firebase, vous devrez remplacer le contenu de cette fonction.
 * 1. Configurez Firebase dans votre projet.
 * 2. Récupérez le nombre total de rappels dans votre base de données Firestore.
 * 3. Générez un ID aléatoire dans la plage des rappels disponibles.
 * 4. Interrogez Firestore pour obtenir le rappel correspondant à cet ID.
 * 5. Retournez le rappel récupéré.
 */

export const getRandomReminder = (): Reminder => {
  const randomIndex = Math.floor(Math.random() * reminders.length);
  return reminders[randomIndex];
};

/**
 * Retourne le nombre total de rappels disponibles.
 * C'est plus robuste que de coder en dur une valeur ailleurs.
 * @returns {number} Le nombre total de rappels.
 */
export const getTotalReminders = (): number => {
  return reminders.length;
};