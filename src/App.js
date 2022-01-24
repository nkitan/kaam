import React , { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // use useState to store the state of page and store data, it passes an array of data
  // which can then be dereferenced
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    
    if(storedTodos){
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function keyPress(e) {
    if(e.keyCode === 13){
        AddTodo(e)
    }
  }

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function ClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function AddTodo(e){
    const name = todoNameRef.current.value
    if(name === ''){
      return
    }

    setTodos(prevTodos => {
      return[...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    // clear out input
    todoNameRef.current.value = null
  }

  return (
    <div className="container">
        <h1 className="main-heading">To-do</h1>
        <div className="todo-list">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
        
        <div className="todo-input-wrapper">
            <input className="todo-input" ref={todoNameRef} type="text" onKeyDown={keyPress}/>
        </div>
        
        <div className="bottom-container">
            <div className="buttons">
                <button className="std-button" onClick={AddTodo}> Add Todo</button>
                <button className="std-button" onClick={ClearTodos}> Clear Todo's</button>
            </div>
    
            <div className="completed-tasks">
                {todos.filter(todo => !todo.complete).length} left
            </div>
        </div>
    </div>    
  );
}

export default App;
