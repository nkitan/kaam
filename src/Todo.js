import React from 'react'
import './Todo.css'

export default function Todo({ todo , toggleTodo}) {
    function handleTodoChecked(){
        toggleTodo(todo.id)
    }

    if(todo.complete){
       return (
        <div className='striked'> 
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoChecked}/>
                {" " + todo.name}
            </label>
        </div>   
       ) 
    }

    return (
        <div className='unstriked'>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoChecked}/>
                {" " + todo.name}
            </label>
        </div>
    )
}
