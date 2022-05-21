import React from "react";

export default function Todo({text, todos, setTodos, todo}) {

  let deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  let complateHandler = () => {
    setTodos(
      todos.map(item => {
        if(item.id === todo.id) {
          return {
            ...item,
            complate: !item.complate,
          }
        }
        return item;
      })
    )
    }
  return(
    <li className="todo__item incomplete">
      <p className={`todo__text ${todo.complate ? 'opacity' : ''}`}>{text}</p>
      <span className="todo__right">
        <button onClick={complateHandler} className="btn todo__checkbox"> <i className={`todo__iconcheck ${todo.complate ? 'bx bxs-checkbox-checked' : 'bx bx-checkbox'}`} /></button>
        <button onClick={deleteHandler} className="btn todo__delete"><i className="bx bx-trash-alt todo__icontrash" /></button>
      </span>
    </li>

    )
  }
  // <div className="todo__itemnone" id="id-none">Your todo divst is empty.</div>