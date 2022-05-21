import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, setTodos, filteredTodos}) {
  return(
    <ul className="todo__list" id="id-list">
      {filteredTodos.map(todo => (
        <Todo
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        key={todo.id}
        text={todo.text} />
      ))}
    </ul>
  )
}
{/* <div className="todo__itemnone" id="id-none">Your todo divst is empty.</div> */}