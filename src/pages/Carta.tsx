import React from 'react';
import Revista from '../components/Revista';
import './Carta.css';

const Carta: React.FC = () => {
  return (
    <div className="sucursales-section">
      <div className="background-overlay"></div>
      <div className="carta-container">
        <Revista />
      </div>
    </div>
  );
};

export default Carta; 