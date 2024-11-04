import React from 'react'
import { useAddNewTaskMutation } from '../../services/boardApi';


export default function Statusboards({todolist,type}) {
 var [updateTodolistFn]= useAddNewTaskMutation()
  function handleDragStart(ev,tid){
  ev.dataTransfer.setData("abc",JSON.stringify({id:ev.target.id,"tid":tid}))
  }
  function handleDrop(ev,tid){
    var {id,tid}=JSON.parse(ev.dataTransfer.getData("abc"));
    console.dir(id,todolist)
// console.log(abc)
var temp=JSON.parse(JSON.stringify(todolist));
var todos=temp.todos.map((todo)=>{
  if(todo.id===tid){
    todo.status=type;
  }
  
    return todo;
})
temp.todos=todos;
updateTodolistFn(temp);
    if(ev.target.tagName==="LI"){
   ev.target.parentElement.appendChild(document.getElementById(id))
    }
    else{
      ev.target.appendChild(document.getElementById(id))

    }
  }
  // function delete(){

  // }
  return (
    <div className=' rounded border border-info w-25  m-2 '>
      <h3 className=' p-2 bg-info rounded'>{type.toUpperCase()}</h3>
      <ul onDragOver={(ev)=>{ev.preventDefault()}} onDrop={(ev)=>{handleDrop(ev)}} className='h-100 p-0'>
      {

        todolist ?.todos?.filter(todo=>todo.status==type).map((todo,i)=>{
            return <li id={`${todo.task}${i}`} draggable="true" onDragStart={(event)=>{handleDragStart(event,todo.id)}} className=" rounded p-2 m-2 border border-info" style={{listStyle:"none",overflow:"auto"}}>{todo.task}
            {/* <button onClick={()=>{}}>DELETE</button> */}
            </li>
        })
    }
      </ul>
   
    </div>
  )
}
