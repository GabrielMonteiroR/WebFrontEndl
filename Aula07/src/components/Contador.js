import Button from "./Button";
import { useState } from 'react';

const Contador = () => {

    const [Contador, setContador] = useState(0);

    const increaseButton = () => {
        setContador(Contador + 1)
    }

    return (
        <div className="contadorContainer">
            <h2>{Contador}</h2>
            <Button text="+1" OnclickButton={increaseButton}/>
        </div>
    );
}

export default Contador;