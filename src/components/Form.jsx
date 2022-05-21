import React from "react";

export default function Form({setInputText, todos, setTodos}) {

  let sumbitTodoHandler = (e) => {
    e.preventDefault()
    setInputText(e.target[0].value)

    let intext = e.target[0].value

    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: intext,
        complate: false
      }
    ])
    e.target.reset()
  }

  return(
    <form onSubmit={sumbitTodoHandler} className="todo__form" id="form">
      <label htmlFor="text">
        <input className="todo__input" type="text" name="text" id="text" placeholder="" required />
        <button className="todo__btn" type="submit">Add Item</button>
      </label>
    </form>
  )
}