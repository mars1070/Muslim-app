import React from 'react';
import { Reminder } from '../types';

interface ReminderCardProps {
  reminder: Reminder;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder }) => {
  const textShadow = { textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' };
  
  // Tailles de police adaptatives
  const titleSize = 'text-base sm:text-lg';
  const arabicSize = 'text-lg sm:text-xl';
  const frenchSize = 'text-lg sm:text-xl';
  const sourceSize = 'text-sm sm:text-base';

  return (
    <div className="reminder-card w-full max-w-md mx-auto px-4 py-2 flex flex-col items-center relative">
      <p style={textShadow} className={`text-gray-200 mb-4 text-center ${titleSize}`}>
        {reminder.type === 'hadith' ? 'Le Prophète ﷺ a dit :' : 'Allah ﷻ a dit :'}
      </p>
      
      {reminder.arabic && (
        <p 
          dir="rtl" 
          lang="ar" 
          style={textShadow} 
          className={`font-amiri text-white mb-4 leading-[2.5] text-center ${arabicSize}`}
        >
          {reminder.arabic}
        </p>
      )}

      <p 
        style={textShadow} 
        className={`font-amiri text-white mb-2 leading-relaxed text-center ${frenchSize}`}
      >
        « {reminder.french} »
      </p>

      <div className="w-24 h-px bg-white/50 my-2"></div>
      
      <p style={textShadow} className={`text-gray-300 font-light text-center ${sourceSize} mt-1`}>
        {reminder.type === 'coran' ? (
          <span>
            Sourate {reminder.source.surahName} ({reminder.source.surahNumber}:{reminder.source.verseNumber})
          </span>
        ) : (
          <span>
            {reminder.source.collection}
            {reminder.source.hadithNumber && ` n°${reminder.source.hadithNumber}`}
            {reminder.source.grading && `, ${reminder.source.grading}`}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReminderCard;
