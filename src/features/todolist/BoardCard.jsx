import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDeleteTodolistMutation } from '../../services/boardApi'

export default function BoardCard({todolist}) {
 var[deleteTodolistFn]= useDeleteTodolistMutation();
  async function deleteTodolistFn(){
await deleteTodolistFn(todolist.id)
 }
  // console.log(todolist)
  return (
<div class="card w-25 m-4" >
  <div class="card-header d-flex justify-content-between">
    {todolist.title.toUpperCase()}
    <i class="bi bi-trash3 text-danger fs-3" onClick={()=>{deleteTodolistFn(todolist.id)}}></i>
    
    </div>
  <div class="card-body d-flex flex-column justify-content-between">
  <h5 class="card-title">Total:{todolist.todos?.length}</h5>
<ul style={{height:"100px",overflow:"auto"}}>


   {
    todolist.todos?.map(function(todo){
      return <li>{todo.task}</li>
    })
   }
   </ul>
 <Link to={`/todolist/${todolist.id}`} class="btn btn-primary">ADD/VIEW</Link>  </div>
</div>
    
  )
}
