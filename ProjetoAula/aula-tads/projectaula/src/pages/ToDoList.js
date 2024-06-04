import "./ToDoList.css"
import { useState } from 'react'



const ToDoList = ({ pageTittle }) => {
    const [ToDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState();

    const OnInputChange = (event) => {
        console.log(inputValue)
        setInputValue(event.target.value);
    }

    return (
        <div>
            <div className="header">
                <h1>{pageTittle}</h1>
            </div>
            <div className="inputContainer">
                <label htmlFor="taskText" className="inputLabel">
                    Digite sua tarefa
                </label>
                <input 
                id="taskText"
                name="taskText"
                className="input"
                onChange={OnInputChange}
                />
                <button className="addButton">+</button>
            </div>
        </div>
    );
}

export default ToDoList;