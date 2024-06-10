import { useState } from 'react';
import './ToDoList.css';

const ToDoList = ({ pageTitle }) => {

    const [toDoList, setToDoList] = useState([]);

    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onClickAddTask = () => {
        if(!inputValue) return;
        setToDoList([...toDoList, inputValue]);
        setInputValue("")
    }

    return (
        <div>
            <div className='header'>
                <h1>{pageTitle}</h1>
            </div>

            <div className='inputContainer'>
                <label htmlFor='taskText' className='inputLabel'>
                    Digite sua tarefa
                </label>
                <input id='taskText' name='taskText' className='input' value={inputValue} onChange={onInputChange} />
                <button className='addButton' onClick={onClickAddTask}>+</button>
            </div>
        </div>
    );
}

export default ToDoList;