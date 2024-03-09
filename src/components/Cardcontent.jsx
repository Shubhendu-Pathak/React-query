import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'



function Cardcontent() {

    let {productid} = useParams()

    // mutation

    let mutation = useMutation({
        // mutationFn:(para)=>{
        //     return axios.post(`https://fakestoreapi.com/products`,para)
        // },
        mutationFn:(para)=>{
            return axios.put(`https://fakestoreapi.com/products/${productid}`,para)
        },
        onSuccess:()=>{
            alert('Succesfully UPDATED DATA')
        }
    })

    // mutation

    let fetchsingle = async() =>{
        let response = await fetch(`https://fakestoreapi.com/products/${productid}`)
        let responsebody = await response.json()
        return responsebody
    }


const {isLoading,data,error} = useQuery({
    queryKey:['product',productid],
    queryFn:fetchsingle,
    staleTime:5000
})

if(  isLoading ){
    return <h1>LOADING.....!!!!</h1>
}

console.log(data);

  return (
    <div>
        <h1>Card-Content</h1>
        <h3>{data.title}</h3>
        <button
        onClick={()=>{
            mutation.mutate({id:new Date(),title:'Tissot Watches',price:"$456.67"})
        }}
        className='btn btn-info text-light'>POST</button>
   <button
        onClick={()=>{
            mutation.mutate({id:new Date(),title:'Tissot Watches'})
        }}
        className='btn btn-info text-light'>Update</button>

    </div>
  )
}

export default Cardcontent