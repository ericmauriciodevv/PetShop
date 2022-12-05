import { useRouter } from 'next/router'
import React from 'react'
import { items } from '../items'
import NavBar from '../components/NavBar'


const productDetails = () => {
  const router = useRouter()
  console.log("Router", router)
  const {id} = router.query

  const product = items.find(item => item.id === id)
  console.log("Product", product)
  return (
    <>
    <NavBar></NavBar>
    {product ? 
    <div className='row  p-4 border rounded-4 p-1 m-5'>
      

      <img className='col mx-3 p-0 broder-botton' src={product.img} width='100' height='300'></img>

      <div className='col w-25 border rounded mt-5'>
        <h2>{product.name}</h2>
        <p>Shipping costs are calculated on the payment screen</p>
        <p className='mb-3'>{`$${product.price}`}</p>
        <button className='mb-4 btn bg-info px-5'>Add to car</button>
        <button className='mb-4 btn bg-ligth border px-5'>Buy now</button>
        <p className='text-secondary mt-5 mb-4 h6'>{product.description}</p>
      </div>
    </div> : <p>porduct dont finded</p>}
    </>
    
  )
}

export default productDetails