import React, { useState } from "react";
import "./ToDoList.css";

const ListItem = ({ toDoItem, onDelete, onToggle }) => {
  return (
    <div
      className="listItem"
      style={{ backgroundColor: toDoItem.done ? "lightPink" : "ivory" }}
    >
      <span>{toDoItem.name}</span>
      <button className="deleteButton" onClick={() => onDelete(toDoItem.id)}>Excluir</button>
      <button className="toggleButton" onClick={() => onToggle(toDoItem.id)}>Concluir</button>
    </div>
  );
};

const ToDoList = ({ pageTitle }) => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClickAddTask = () => {
    if (!inputValue) return;
    const newTask = {
      id: Date.now(),
      name: inputValue,
      done: false,
    };
    setToDoList([...toDoList, newTask]);
    setInputValue("");
  };

  const onDeleteTask = (taskId) => {
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  };

  const onToggleTask = (taskId) => {
    setToDoList(
      toDoList.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <div className="header">
        <h1>{pageTitle}</h1>
      </div>
      <div className="inputContainer">
        <label htmlFor="taskText" className="inputLabel">
          Digite a sua tarefa
        </label>
        <input
          id="taskText"
          name="taskText"
          className="input"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="addButton" onClick={onClickAddTask}>
          +
        </button>
      </div>
      <div className="list">
        {toDoList.map((toDoItem) => (
          <ListItem
            key={toDoItem.id}
            toDoItem={toDoItem}
            onDelete={onDeleteTask}
            onToggle={onToggleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
