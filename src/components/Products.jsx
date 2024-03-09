import React, { useEffect, useState } from 'react'

import MyCard from './Card'
import { useQuery } from '@tanstack/react-query'
import { fetchproducts } from '../utility/httpcodes'

function Products() {

// let [data,setdata] = useState([])
// let [ isLoading,setIsLoading] = useState(false)
// let [Error,setError] = useState('')

// useEffect(()=>{
//     setError('')
//     setIsLoading(true)
// fetch(`https://fakestoreapi.com/products`)
// .then(response=>{
//     if(!response.ok) throw new Error('Unable to fetch')
//     return response.json()
// })
// .then(val=>{
//     setIsLoading(false)
//     setdata(val)
// })
// .catch(error=>{
//     setIsLoading(false)
//     setError(error.message)
// })
// .finally(()=>setIsLoading(false))


// },[])

let {data,isLoading,isError,error} = useQuery({
    queryKey:['products'],
    queryFn:({signal})=>fetchproducts({signal}),
    staleTime:5000,
    gcTime:10000
})

// console.log(tanquery);

if(  isLoading ){
    return <h1>LOADING.....!!!!</h1>
}

  return (
    <div className='d-flex justify-content-center  align-items-center  flex-column my-4'>
        <h1>ALL PRODUCTS</h1>
      
        { 
        !data ?
         <h1>{error.message}</h1>  
          :
          
            data.map(ele=>(
                <MyCard key={ele.id} ele={ele}/>
            ))
          
        
        }
    </div>
  )
}

export default Products