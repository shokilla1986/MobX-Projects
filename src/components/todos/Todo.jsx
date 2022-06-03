import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import todosStore from "../../store/todosStore";

const Todo = observer(({ todo }) => {
  const [className, setClassName] = useState("");
  const onToggleCompleted = () => {
    todosStore.completeTodo(todo.id);
    if (!todo.completed === true) {
      setClassName("span-check");
    } else {
      setClassName("");
    }
  };

  // let show = false;

  // const checkedTodo = () => {

  // };
  return (
    <div className="todo">
      <input
        className="todo-check"
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      <span className={className}>{todo.title}</span>
      <button
        className="btn todos-btn todo-btn"
        onClick={() => todosStore.removeTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
});

export default Todo;
