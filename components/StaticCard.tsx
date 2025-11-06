import React from 'react';
import { Reminder } from '../types';

interface StaticCardProps {
  reminder: Reminder;
  backgroundImage: string;
}

const StaticCard: React.FC<StaticCardProps> = ({ reminder, backgroundImage }) => {
  const textShadow = { textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' };
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      boxSizing: 'border-box',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }} />
      
      <div style={{
        position: 'relative',
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '2rem',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '1rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <p style={{ ...textShadow, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          {reminder.type === 'hadith' ? 'Le Prophète ﷺ a dit :' : 'Allah ﷻ a dit :'}
        </p>
        
        {reminder.arabic && (
          <p 
            dir="rtl"
            lang="ar"
            style={{
              ...textShadow,
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              lineHeight: '2.5',
              fontFamily: 'Amiri, serif'
            }}
          >
            {reminder.arabic}
          </p>
        )}

        <p style={{
          ...textShadow,
          fontSize: '1.3rem',
          marginBottom: '1rem',
          lineHeight: '1.6',
          fontStyle: 'italic',
          fontFamily: 'Amiri, serif'
        }}>
          « {reminder.french} »
        </p>

        <div style={{
          width: '100px',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          margin: '1rem auto'
        }} />
        
        <p style={{
          ...textShadow,
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 300,
          marginTop: '0.5rem'
        }}>
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
    </div>
  );
};

export default StaticCard;
