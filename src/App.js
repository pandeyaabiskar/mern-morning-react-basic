import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Todo
        title="What do you want to do today?"
        buttonText="Add Todo"
        todoList={todoList}
        setTodoList={setTodoList}
      />
      
      <TodoList todoList={todoList} />
      {/* <Todo title="What is your todo?" buttonText="Search"/>
      <Todo title="K garchas aaja?" buttonText="Add"/>

      <Todo title="K garchas aaja?" buttonText="Add">Hello</Todo> */}
    </div>
  );
}

export default App;
