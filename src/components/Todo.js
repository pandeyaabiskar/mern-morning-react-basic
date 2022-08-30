import { useState } from "react";

function Todo(props) {
    console.log(props.children)
  //State to hold todo list
  const [todoInput, setTodoInput] = useState("");

  //Function to add new todo
  const addTodo = () => {
    props.setTodoList([...props.todoList, todoInput]);
    setTodoInput("");
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <input
        id="todo"
        type="text"
        name="todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>{props.buttonText}</button>

    </div>
  );
}

export default Todo;
