import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Login/>
      {/* <Todo
        title="What do you want to do today?"
        buttonText="Add Todo"
        todoList={todoList}
        setTodoList={setTodoList}
      />

      <TodoList todoList={todoList} /> */}
    </div>
  );
}

export default App;
