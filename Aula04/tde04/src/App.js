import React from 'react';
import './App.css'
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Card
        titulo="Título do Card"
        texto="Este é o texto do card. Clique para mudar a cor."
        imagem="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2023/07/DONT-MISS-THESE-5-EXPERIENCES-IN-SEOUL-Fashion-street-people-Gettyimages-HERO.renditionimage.900.600.jpg"
      />
    </div>
  );
};

export default App;
