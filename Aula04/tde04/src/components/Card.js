import React, { useState } from 'react';
import './Card.css';

const Card = ({ titulo, texto, imagem }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      className={`card ${isClicked ? 'card-clicked' : ''}`}
      onClick={handleClick}
    >
      <img src={imagem} alt="Imagem do Card" className="card-image" />
      <h2 className="card-title">{titulo}</h2>
      <p className="card-text">{texto}</p>
    </div>
  );
};

export default Card;
