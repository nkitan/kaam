import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
    return (
            // for each "todo" in todos, map to return ...
            todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })   
    )
}
