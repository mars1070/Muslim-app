# Rappels Islamiques - Application Web

## 📖 Description

**Rappels Islamiques** est une application web _mobile-first_ conçue pour offrir une inspiration spirituelle quotidienne. Elle affiche des rappels islamiques (versets du Coran et hadiths) sourcés, chacun présenté sur un arrière-plan unique et esthétique pour une expérience visuelle apaisante et mémorable.

L'objectif est de fournir un outil simple et élégant pour la réflexion personnelle et de faciliter le partage de ces messages inspirants avec ses proches via une capture d'image de haute qualité.

## ✨ Fonctionnalités Clés

-   **📅 Rappel du Jour** : Commence la journée avec un rappel quotidien unique, le même pour tous les utilisateurs, créant une expérience partagée.
-   **🔀 Rappels Aléatoires** : Accédez à une vaste base de données de rappels en un clic pour une inspiration continue.
-   **🖼️ Arrière-plans Immersifs** : Chaque rappel est associé à une image de fond unique depuis Firebase Storage, rendant chaque message visuellement distinctif.
-   **📸 Partage Visuel par Image** : La fonction de partage capture une image de l'écran entier (rappel, texte arabe, et arrière-plan) pour un partage esthétique et fidèle sur les réseaux sociaux.
-   **🔔 Notifications Programmées** : Grâce à un Service Worker, recevez des rappels même lorsque l'application est fermée. La fréquence est actuellement réglée sur une minute à des fins de test et peut être ajustée.
-   **🎁 Pop-up de Promotion Exclusive** : Un bouton cadeau animé déclenche une fenêtre promotionnelle avec un code de réduction, agrémentée d'une animation de confettis pour une expérience utilisateur engageante.
-   **💯 Données Authentiques et Sourcées** : La base de données contient des rappels authentiques du Coran et des hadiths de degré *Sahih*, avec leurs sources clairement indiquées.
-   **📱 Design Responsive et Élégant** : Une interface minimaliste avec une typographie soignée (`Lato` et `Amiri`) qui s'adapte parfaitement à toutes les tailles d'écrans.

## 🛠️ Technologies Utilisées
-   **React** & **TypeScript** : Pour une interface utilisateur robuste et maintenable.
-   **TailwindCSS** : Pour un design rapide et personnalisé.
-   **Firebase Storage** : Pour l'hébergement des images de fond et des logos.
-   **HTML5 Canvas (via `html2canvas`)** : Pour la fonctionnalité de capture d'écran.
-   **Service Workers & Notification API** : Pour les notifications en arrière-plan.
-   **`canvas-confetti`** : Pour l'animation festive de la pop-up promotionnelle.

## 🚀 Démarrage Rapide
Pour lancer l'application localement, il est recommandé d'utiliser une extension de serveur web comme "Live Server" pour Visual Studio Code.

1.  Ouvrez le dossier du projet dans VS Code.
2.  Faites un clic droit sur le fichier `index.html`.
3.  Sélectionnez "Open with Live Server".

Ceci est nécessaire car les navigateurs modernes ont des restrictions de sécurité pour le chargement des modules JavaScript (ESM) directement depuis le système de fichiers (`file:///`).

## 📁 Structure du Projet

```
/
├── components/         # Contient tous les composants React réutilisables.
├── data/
│   └── reminders.ts    # La "base de données" locale des rappels.
├── services/
│   └── reminderService.ts # La logique pour récupérer les rappels.
├── types.ts            # Les définitions de types TypeScript.
├── App.tsx             # Le composant principal de l'application.
├── index.html          # Le point d'entrée HTML.
├── index.tsx           # Le point d'entrée de l'application React.
├── sw.js               # Le Service Worker pour les notifications.
└── README.md           # Ce fichier de documentation.
```

## 🧠 Fonctionnement des Données

Chaque rappel dans `data/reminders.ts` est un objet structuré pour garantir la précision et l'évolutivité. La structure utilise une **union discriminée** basée sur la propriété `type` (`'coran'` ou `'hadith'`).

### 1. Rappel de type `coran`
-   **`id`**, **`type`**, **`french`**, **`arabic`** (optionnel)
-   **`source`** (`CoranReminderSource`) : Un objet contenant `surahName`, `surahNumber`, `verseNumber`.

**Exemple :**
```json
{
  "id": 5,
  "type": "coran",
  "french": "Souvenez-vous de Moi, Je Me souviendrai de vous.",
  "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ",
  "source": { "surahName": "Al-Baqarah", "surahNumber": 2, "verseNumber": 152 }
}
```

### 2. Rappel de type `hadith`
-   **`id`**, **`type`**, **`french`**, **`arabic`** (optionnel)
-   **`source`** (`HadithReminderSource`) : Un objet contenant `collection`, `hadithNumber` (optionnel), `grading` (optionnel).

**Note sur l'authenticité** : Pour garantir la fiabilité, seuls les hadiths de degré **Sahih (authentique)** ou **Hasan (bon)** sont inclus.

**Exemple :**
```json
{
  "id": 83,
  "type": "hadith",
  "french": "Crains Allah où que tu sois, fais suivre la mauvaise action par une bonne qui l'effacera et comporte-toi avec les gens avec un bon caractère.",
  "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
  "source": { "collection": "Jami` at-Tirmidhi", "hadithNumber": 1987, "grading": "Hasan (حسن)" }
}
```

## 💡 Améliorations Futures Possibles
-   **Base de Données en Ligne** : Migrer les rappels vers une base de données comme Firebase Firestore pour une gestion dynamique et des mises à jour en temps réel.
-   **Catégories et Filtres** : Ajouter des catégories (ex: Patience, Pardon, Foi) pour permettre à l'utilisateur de filtrer les rappels par thème.
-   **Fonction "Favoris"** : Permettre aux utilisateurs de sauvegarder leurs rappels préférés via le `localStorage` du navigateur.
-   **Thèmes Visuels** : Proposer différents thèmes (clair, sombre, etc.) pour personnaliser l'apparence de l'application.
-   **Audio des Versets** : Intégrer la récitation audio pour les versets du Coran.
