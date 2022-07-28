import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import { useState, useEffect } from "react";

function App(props) {
  const [todoList, setTodoList] = useState([]);
  const [todoString, setTodoString] = useState("");
  return (
    <>
      <Counter/><br/>
      <Todo
      title="Todo for Today"
        todoList={todoList}
        setTodoList={setTodoList}
        todoString={todoString}
        setTodoString={setTodoString}
      />
    <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
