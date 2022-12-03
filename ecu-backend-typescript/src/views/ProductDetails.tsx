import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetails: React.FC = () => {

  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.getProduct(id)
  }, [])
  

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <h1>{productContext.product.name}</h1>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductDetails