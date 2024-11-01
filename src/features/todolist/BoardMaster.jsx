import React, { useEffect } from 'react'
import BoardCard from './BoardCard'
 import { useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery } from '../../services/boardApi'
export default function BoardMaster() {
    var {isLoading,data}=useGetAllTodoListsQuery()
   var [getAllTodolistFn]=useLazyGetAllTodoListsQuery()
   useEffect(()=>{
    getAllTodolistFn();
   })

    // console.log(data)
  return (
    <div>
        {/* <h1>BoardMaster</h1> */}
          {
        isLoading && <b>Loading...</b>
       }
      <div className='d-flex flex-wrap justify-content-evenly'>
       {
        !isLoading && data ?.map((todolist)=>{
         return <BoardCard todolist={todolist}></BoardCard>
        })
       }
       </div>
    </div>
  )
}
