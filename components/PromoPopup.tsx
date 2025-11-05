import React, { useState, useEffect } from 'react';

interface PromoPopupProps {
    onClose: () => void;
}

// Déclarez la variable globale confetti pour TypeScript
declare var confetti: any;

const PromoPopup: React.FC<PromoPopupProps> = ({ onClose }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isButtonShaking, setIsButtonShaking] = useState(false);
    const promoCode = 'SABR15';

    useEffect(() => {
        // Fait vibrer les boutons toutes les 3 secondes
        const interval = setInterval(() => {
            setIsButtonShaking(true);
            setTimeout(() => setIsButtonShaking(false), 500); // Durée de l'animation de secousse
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Déclenche les confettis lorsque le code est révélé
        if (isRevealed && typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
        }
    }, [isRevealed]);

    const handleCopy = () => {
        navigator.clipboard.writeText(promoCode).then(() => {
            setIsCopied(true);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Impossible de copier le code. Veuillez le faire manuellement.");
        });
    };

    const handleRedirect = () => {
        window.open('https://sabrbracelet.com/', '_blank', 'noopener,noreferrer');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white border border-gray-200 rounded-lg shadow-xl w-full max-w-sm text-gray-900 text-center p-6 m-4 relative animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors"
                    aria-label="Fermer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/sabrbracelet-com.firebasestorage.app/o/logo%2FSabR%20logo%20(1).png?alt=media&token=0f748213-26ed-40a5-b5a4-6f8547b40209" 
                    alt="Logo Sabr"
                    className="mx-auto w-28 mb-6" // Logo légèrement agrandi et plus d'espace en dessous
                />

                <h2 className="text-2xl font-bold font-amiri mb-2 text-gray-900">Promotion Exclusive</h2>
                <p className="text-gray-600 mb-6">Profitez de 15% de réduction sur votre prochaine commande.</p>

                <div className="border-2 border-dashed border-gray-900 bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-700 tracking-widest">CODE PROMO</p>
                    <p className="text-3xl font-bold tracking-widest my-2 font-mono h-10 flex items-center justify-center text-gray-900">
                        {isRevealed ? promoCode : '**********'}
                    </p>
                </div>
                
                <div className="mt-6">
                    {!isRevealed && (
                        <button 
                            onClick={() => setIsRevealed(true)}
                            className={`w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-500 flex items-center justify-center gap-2 ${isButtonShaking ? 'shaking' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            Obtenir mon code
                        </button>
                    )}
                    {isRevealed && !isCopied && (
                         <button 
                            onClick={handleCopy}
                            className={`w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-700 flex items-center justify-center gap-2 ${isButtonShaking ? 'shaking' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copier le code
                        </button>
                    )}
                    {isCopied && (
                        <div className="text-center animate-fade-in space-y-4">
                            <p className="font-bold text-green-600">Code Copié !</p>
                             <button 
                                onClick={handleRedirect}
                                className={`w-full bg-[#c6a356] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#b08f4a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#c6a356] flex items-center justify-center gap-2 ${isButtonShaking ? 'shaking' : ''}`}
                            >
                                Visiter la boutique
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                
                <p className="text-sm text-gray-500 mt-4">Valable pour une durée limitée.</p>
            </div>
        </div>
    );
};

export default PromoPopup;