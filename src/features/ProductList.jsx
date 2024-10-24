import React from 'react'
import { useSelector} from 'react-redux'
export default function ProductList() {
  var products =  useSelector(state=>state.productReducer)
  console.log(products)
  return (
    <div>
     <h1>products</h1>

   {
    products ?.map((product)=>{
    return <li>{product.title}</li>
    })
   }
    </div>
  )
}
