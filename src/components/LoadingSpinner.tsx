import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <img src="/loadIcon.png" alt="Cargando..." className="spinner-image" />
      </div>
    </div>
  );
};

export default LoadingSpinner; 