import React from 'react';

interface ErrorMessageProps {
  message: string;
  details?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, details }) => {
  return (
    <div 
      className="w-full max-w-md mx-auto my-4 p-4 bg-red-900/50 backdrop-blur-sm border border-red-700 rounded-lg text-white text-center shadow-lg" 
      role="alert"
    >
      <p className="font-bold">{message}</p>
      {details && <p className="text-sm mt-2 text-red-200">{details}</p>}
    </div>
  );
};

export default ErrorMessage;