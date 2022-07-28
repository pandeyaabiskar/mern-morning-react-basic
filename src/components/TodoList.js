function TodoList({todoList}) {
    return (<div>
        {todoList.map((todo, index) => {
          return <h3 key={index}>{todo}</h3>;
        })}
      </div>)
}

export default TodoList
