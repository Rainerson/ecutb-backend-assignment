import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetails: React.FC = () => {

  const {articleNumber} = useParams<string>()
  const {product, getProduct} = useProductContext() as ProductContextType

  useEffect(() => {
    getProduct(articleNumber)
  }, [])


  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <h1>{product.name}</h1>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductDetails