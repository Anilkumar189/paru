import React, { useState } from 'react'

function Rapid() {
	var [word,setWord]=useState('');
	var [data, setData]=useState();

 function searchData(){
const url = `https://words-api5.p.rapidapi.com/api/v1/dict/search/${word}`
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f6a477b78amsh069351c99e33d68p1b19a3jsn6d39820c5d6a',
		'x-rapidapi-host': 'words-api5.p.rapidapi.com'
	}
};
fetch(url,options)
.then(res=>res.json())
.then((data)=>{setData(data)})
 }

  return (
   <div>
	<h1>Search Word</h1>
	<input type="text" value={word} onChange={(e)=>setWord(e.target.value)}/>
	<button onClick={searchData}>Search</button>
	<div>{JSON.stringify(data)}</div>
   </div>
  )
}

export default Rapid