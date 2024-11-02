import React, { useEffect, useState } from 'react'

export default function Api() {
    
    var [data,setData]=useState();
useEffect(()=>{


    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{
        setData(data);
    })
},[])
 function De(i){
    var temp=[...data];
    temp.splice(i,1);
    setData(temp)
 }
  return (
<div style={{display:"flex",flexWrap:"wrap",width:"50",margin:"20px",padding:"10px" }} >
    {
        data?.map((e,i)=>{
            return <div style={{border:"2px solid",margin:"2px"}} >
                <img src={e.image} alt="" style={{width:"300px",height:"250px"}}/>
                 <h3>{e.title.substring(0,20)}</h3>
                 <h3>RS:{e.price}</h3>
                 <button onClick={()=>{De(i)}} style={{backgroundColor:"red",width:"300px",height:"50px",color:"white"}}>DELETE</button>
            </div>
        })
    }
</div>
  )
}
