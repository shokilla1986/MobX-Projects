import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import todosStore from "../../store/todosStore";
import Todo from "./Todo";
import "./todosStyles.css";

const TodosList = observer(() => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const createTodo = () => {
    setToggle(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const saveTodo = () => {
    todosStore.addTodo({ id: Math.random(), title: value, completed: false });
    setValue("");
    setToggle(false);
  };

  const pressInput = ({ code }) => {
    if (code === "Enter") {
      saveTodo();
    }
  };

  return (
    <div className="todos">
      <h1>TodosList</h1>
      <button className="btn todos-btn" disabled={toggle} onClick={createTodo}>
        Create todo
      </button>
      <button className="btn todos-btn" onClick={() => todosStore.fetchTodos()}>
        fetch todo
      </button>
      {toggle && (
        <input
          className="todos-input"
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyPress={pressInput}
        />
      )}
      <div>
        {!todosStore.todos.length && <h1>Todos not found</h1>}
        {todosStore.todos.length > 0 && (
          <h1>Todos finished : {todosStore.finishedTodos}</h1>
        )}

        {todosStore.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
});

export default TodosList;
