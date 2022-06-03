import { makeAutoObservable } from "mobx";

class Todos {
  todos = [];
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo) {
    this.todos.push(todo);

    console.log("add");
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("remove");
  }
  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    console.log("complete");
  }

  fetchTodos() {
    let limit = 10;
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${this.count}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
    this.count === 10 ? (this.count = 1) : (this.count = this.count + 1);
    console.log(this.count);
  }

  get finishedTodos() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }
}

export default new Todos();
