import React from 'react';

interface NextReminderButtonProps {
  onClick: () => void;
}

const NextReminderButton: React.FC<NextReminderButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Afficher un nouveau rappel"
      className="w-12 h-12 bg-black/30 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center border border-white/20 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all transform hover:scale-105"
      title="Nouveau Rappel"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default NextReminderButton;