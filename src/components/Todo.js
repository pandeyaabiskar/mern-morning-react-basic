
function Todo({title, todoList, setTodoList, todoString, setTodoString}) {
  const addTodo = () => {
    setTodoList([...todoList, todoString]);
    setTodoString("");
    document.title = "About"
  };

  const handleText = (e) => {
    setTodoString(e.target.value);
  }

  return (
    <>
    <h1 className="heading">{title}</h1>
      {/* <input name="todo" type="text" id="todo"></input> */}
      <input
        name="todo"
        type="text"
        value={todoString}
        onChange={handleText}
      ></input>
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default Todo;
