 import React from 'react'
import { useAddTodolistMutation, useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery} from '../../services/boardApi'
import { Outlet } from 'react-router-dom'
import BoardCard from './BoardCard'
import Sidebar from './Sidebar'

 
 export default function Board() {
  var [newTodolistTitle,setNewTodolistTitle]=React.useState("")
  var [addTodolistFn]=useAddTodolistMutation()
  var [getAllTodolistFn]=useLazyGetAllTodoListsQuery();
   async function addTodoList(){
    var newTodolist = {
      title:newTodolistTitle,
      todos:[]
    }
   await addTodolistFn(newTodolist)
   getAllTodolistFn();
  }
 
   return (
     <div className='d-flex'>
       <div className='w-25 vh-100 p-4 border border-info'id="d3">
        <div className='d-flex justify-content-between align-item-center'>
          <div className='fs-2'>Todolists</div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        + Add Todolist
        </button>
        </div>
        
        <Sidebar></Sidebar>
      </div>
<div className='w-75 p-3'>
<Outlet></Outlet>

</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" onChange={(e)=>{setNewTodolistTitle(e.target.value)}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>{addTodoList()}}>Save changes</button>
      </div>
    </div>
  </div>
</div>
       
     
      
         
     </div>
   )
 }
 