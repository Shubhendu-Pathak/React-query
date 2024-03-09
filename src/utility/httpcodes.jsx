
export async function fetchproducts({signal}){
let response =  await fetch(`https://fakestoreapi.com/products`,{signal})
if(!response.ok) {
    const error = new Error('Unable to Get Data')
    error.code= response.status
    error.message= await response.json()
    throw error
}
return await response.json() 
}


// export async function fetchsingleproduct(para){
//     let response = await fetch(`https://fakestoreapi.com/products/${para}`)
//     if(!response.ok) {
//         const error = new Error('Unable to Get Data')
//         error.code= response.status
//         error.message= await response.json()
//         throw error
//     }
//     return await response.json() 
// }