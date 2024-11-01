import React from 'react'


export default function Statusboards({todolist,type}) {
  function handleDragStart(ev){
  
  }
  return (
    <div className='border w-25  m-2'>
      <h3 className='bg-secondary p-2'>{type.toUpperCase()}</h3>
    {
        todolist ?.todos?.filter(todo=>todo.status==type).map((todo,i)=>{
            return <li id={`${todo.task}${i}`} draggable="true" onDragStart={(event)=>{handleDragStart(event)}} className="p-2 m-2 bg-success text-light" style={{listStyle:"none"}}>{todo.task}</li>
        })
    }
    </div>
  )
}
