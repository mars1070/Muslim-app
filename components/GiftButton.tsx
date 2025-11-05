import React, { useState, useEffect } from 'react';

interface GiftButtonProps {
    onClick: () => void;
}

const GiftButton: React.FC<GiftButtonProps> = ({ onClick }) => {
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 400); // Durée de l'animation de secousse
        }, 7000); // Vibre toutes les 7 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <button
            onClick={onClick}
            aria-label="Voir la promotion"
            className={`w-11 h-11 bg-white text-gray-900 rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all transform hover:scale-105 ${isShaking ? 'shaking' : ''}`}
            title="Promotion"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
        </button>
    );
};

export default GiftButton;