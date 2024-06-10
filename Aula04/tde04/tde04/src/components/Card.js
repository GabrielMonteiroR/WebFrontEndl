import './Card.css';
import { useState } from 'react'

const Card = ({ title, text, imagesrc }) => {

const [CardColor, setCardColor] = useState('white')

    const ChangeColorOnClick = () => {
        if(CardColor === 'white') setCardColor('coral')
        else setCardColor('white')
    }

    return (
        <div className="cardContainer">
            <div className="cardBody" style={{backgroundColor: CardColor}} onClick={ChangeColorOnClick}>
                <img src={imagesrc} alt="card" />
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Card;