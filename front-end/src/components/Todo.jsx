import React from 'react'
import "./Todo.css"

const Todo = ({todo,onDelete}) => {

  return (
   <div className='todo-box'>
     <h3>{todo}</h3>
     <button>delete</button>
     <button>edit</button>
   </div>
  
  )
}

export default Todo
