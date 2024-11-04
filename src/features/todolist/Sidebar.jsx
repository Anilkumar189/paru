import React from 'react'
import { useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery } from '../../services/boardApi'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    var {isLoading,data}=useGetAllTodoListsQuery()
   var [getAllTodolistFn]=useLazyGetAllTodoListsQuery()
   useEffect(()=>{
    getAllTodolistFn();
   })
  return (
    <div className='text-light '>
      
      <ul>
        {
            data?.map((todolist)=>{
                return <li  style={{listStyle:"none"}}>
                    
 <Link to={`/todolist/${todolist.id}`} class="btn btn-dark m-2">{todolist.title} </Link> 

                </li>
            })
        }
      </ul>
    </div>
  )
}
