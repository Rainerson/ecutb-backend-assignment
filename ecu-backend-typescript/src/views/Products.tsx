import React, { useContext, useEffect } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext, ProductContextType, useProductContext } from '../contexts/ProductContext'


const Products: React.FC = () => {
  
  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
    <Navbar></Navbar>
    <Breadcrumb currentPage='Products'></Breadcrumb>
    <ProductGrid title="Products" items={products}></ProductGrid>
    <Footer></Footer>
  </>
  )
}

export default Products

