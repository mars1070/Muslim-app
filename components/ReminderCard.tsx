import React from 'react';
import { Reminder } from '../types';

interface ReminderCardProps {
  reminder: Reminder;
}

const getSourceText = (reminder: Reminder): string => {
  if (reminder.type === 'coran') {
    const { surahName, surahNumber, verseNumber } = reminder.source;
    return `Sourate ${surahName} (${surahNumber}:${verseNumber})`;
  } else {
    const { collection, hadithNumber, grading } = reminder.source;
    let sourceText = collection;
    if (hadithNumber) {
      sourceText += ` n°${hadithNumber}`;
    }
    if (grading) {
      sourceText += `, ${grading}`;
    }
    return sourceText;
  }
};

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder }) => {
  const textShadow = { textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' };

  // Utilisation d'une taille de police fixe pour une cohérence visuelle,
  // plus grande que la plus petite taille précédente, comme demandé.
  const fontSizeClass = 'text-xl md:text-2xl';
  // Taille de police arabe réduite pour un meilleur équilibre visuel.
  const arabicFontSizeClass = 'text-xl md:text-2xl';

  return (
    <div className="w-full max-w-md text-center flex flex-col items-center justify-center p-4">
      <p style={textShadow} className="text-base text-gray-200 mb-6">
        {reminder.type === 'hadith' ? 'Le Prophète ﷺ a dit :' : 'Allah ﷻ a dit :'}
      </p>
      
      {reminder.arabic && (
        <p 
          dir="rtl" 
          lang="ar" 
          style={textShadow} 
          className={`font-amiri text-white mb-4 leading-relaxed ${arabicFontSizeClass}`}
        >
          {reminder.arabic}
        </p>
      )}

      <p 
        style={textShadow} 
        className={`font-amiri leading-relaxed text-white transition-all duration-300 ${fontSizeClass}`}
      >
        « {reminder.french} »
      </p>

      <div className="w-24 h-px bg-white/50 my-6"></div>
      
      <p style={textShadow} className="text-base text-gray-300 font-light">
        {getSourceText(reminder)}
      </p>
    </div>
  );
};

export default ReminderCard;
