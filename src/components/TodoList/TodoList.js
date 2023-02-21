import React, { useState } from "react";
import "./TodoList.css"; // 引入样式文件

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
  
    // 检查输入是否为空或包含非法字符
    const pattern = /^[a-zA-Z0-9\s.,?!']+$/;
    if (!inputValue.trim()) {
      setShowError("Please enter a task name"); // 显示错误消息
      return;
    }else if (!pattern.test(inputValue)){
      setShowError("This is a task with illegal characters: @#$%"); // 显示错误消息
      return;
    }
  
    setShowError(""); // 隐藏错误消息
  
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue("");
  };  

  const handleRemoveTask = (index) => {
    if (index < 0 || index >= tasks.length) {
      setShowError("There is nothing to remove");
      return;
    }
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setShowError("");
  };  

  const handleToggleCompleted = (index) => {
    if (index < 0 || index >= tasks.length) {
      setShowError("There is nothing to complete");
      return;
    }
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    setShowError("");
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      
      {(showError !== "") && <div className="error-message">{showError}</div>}

      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Add a new task" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""} data-testid={"task-Task "+ (index+1)} >
            <div className="task-details">
              <input type="checkbox" checked={task.completed} onChange={() => handleToggleCompleted(index)} data-testid={"task-Task "+ (index+1) + "-checkbox"} />
              <span>{task.text}</span>
            </div>
            <button className="remove-button" onClick={() => handleRemoveTask(index)}>
              remove Task {index+1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;