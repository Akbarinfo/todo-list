import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [search, setSearch] = useState([])

  const searchHandlar = (e) => {
    let texts = e.target.value
    todos.forEach(item => {
      if(item.text.includes(texts)) {
        setSearch(item)
      }
    })
  }

  const filterHanler = () => {
    switch(status) {
      case "complate" :
      setFilteredTodos(todos.filter(todo => todo.complate === true))
      break;

      case "uncomplate" :
      setFilteredTodos(todos.filter(todo => todo.complate === false))
      break;

      default:
      setFilteredTodos(todos)
      break;
    }
  }

  useEffect(() => {
    filterHanler()
  },[status, todos, search])

  const statusHandler = (e) => {
    setStatus(e.target.id)
  }

  return (
    <main>
      <section className="todo">
        <div className="todo__box">
          <div className="todo__header">
            <h1 className="todo__title">Todo List
            </h1>
            <span className="todo__info">Get things done, one item at a time.</span>
          </div>
          {/* <div className="todo__search">
            <label htmlFor="text">
              <input onChange={searchHandlar} className="todo__input" type="search" name="text" id="search" placeholder="Search" required />
            </label>
          </div> */}
          <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos} />
          <div className="todo__all">
            <button onClick={statusHandler} className="todo__btns" id="all" type="button">All</button>
            <button onClick={statusHandler} className="todo__btns" id="complate" type="button">Complete</button>
            <button onClick={statusHandler} className="todo__btns" id="uncomplate" type="button">Uncomplete</button>
          </div>
          <div className="todo__main">
            <h2 className="todo__subtitle">Add to the todo list </h2>
            <Form
             setInputText={setInputText}
             todos={todos}
             setTodos={setTodos}
             />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
