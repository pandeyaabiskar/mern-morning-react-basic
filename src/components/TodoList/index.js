import {useState, useEffect} from 'react';

function TodoList(props) {

    useEffect(() => {
        console.log("useEffect running for TodoList");

        return () => {
            console.log("Component unmounted");
        }

    }, [props.todoList])

  return (
    <div>
      {props.todoList.map((todo, index) => {
        return <h3 key={index}>{todo}</h3>;
      })}
    </div>
  );
}

export default TodoList