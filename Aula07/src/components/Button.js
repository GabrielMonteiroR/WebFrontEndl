import './Button.css'

const Button = ({ text, OnclickButton }) => {
    return (
        <button className="buttonContainer" onClick={OnclickButton}>{text}</button>
    );
}

export default Button;