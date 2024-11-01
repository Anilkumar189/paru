import React from 'react'
import {  useParams } from 'react-router-dom'
import { useAddNewTaskMutation, useGetTodoListsByIdQuery, useLazyGetTodoListsByIdQuery} from '../../services/boardApi';
import { useState } from 'react';
import Statusboards from './Statusboards';
export default function Todolist() {
  var {id}=useParams();
  var [newTodo,setNewTodo]=useState("")
   var {isLoading,data}=useGetTodoListsByIdQuery(id)
   var [addTodoFn]=useAddNewTaskMutation()
   var[getTodolistFn]=useLazyGetTodoListsByIdQuery()
  
   
     async function addTodo(){
    var temp =JSON.parse(JSON.stringify(data))
    temp.todos.push({task:newTodo,status:"todo"});
     await addTodoFn(temp) 

    getTodolistFn(id);  
    
   }
  //  console.log(isLoading,data)
    async function deleteTodo(i){
    var temp=JSON.parse(JSON.stringify(data));
    temp.todos.splice(i,1)
    await addTodoFn(temp) 

    getTodolistFn(id);
   }
  return (
    <div>
      <h1>{!isLoading && data.title.toUpperCase()} Todolist</h1>
     {
      isLoading && <b>Loading</b>
     }
     <input type="text" name="" onChange={(e)=>{setNewTodo(e.target.value)}} />
     <button onClick={()=>{addTodo()}}>add new task</button>
    {/* <div>{
      !isLoading && data.todos.map((t,i)=>{
        return<li key={`${t.title}+${i}`}>{t.task}
         <button onClick={()=>{deleteTodo(i)}}>DELETE</button></li>
      })
     }</div>  */}
     <div className='d-flex justify-content-evenly m-4 '>
     <Statusboards todolist={data} type="todo"></Statusboards>
     <Statusboards todolist={data} type="doing"></Statusboards>
     <Statusboards todolist={data} type="done"></Statusboards>
     </div>
    
    </div>
  )
}
