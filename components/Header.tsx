import React from 'react';

// URL de votre logo sur Firebase Storage. 
// Mise à jour avec le lien exact fourni par l'utilisateur.
const logoUrl = "https://firebasestorage.googleapis.com/v0/b/sabrbracelet-com.firebasestorage.app/o/logo%2FSabR%20logo.png?alt=media&token=f75b7d05-8f16-43b3-8879-526cac9a25ad";

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-md mx-auto pt-8 pb-4 text-center">
      <img 
        src={logoUrl} 
        alt="Logo Sabr" 
        className="mx-auto w-44" // Augmenté pour une meilleure visibilité
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.7))' }}
      />
    </header>
  );
};

export default Header;