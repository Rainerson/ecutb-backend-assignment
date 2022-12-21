import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {IProductContext, ProductCRUDContext} from '../contexts/ProductCRUDContext'

const ProductForm = () => {

    const { articleNumber } = useParams()
    const {product, setProduct, get, update} = React.useContext(ProductCRUDContext) as IProductContext

  
      useEffect(() => {
          get(Number(articleNumber))
      }, [get, articleNumber])    
  
      // setProduct({...product, articleNumber: Number(articleNumber)})

  return (
    <form onSubmit={update} className='d-grid mb-5'>
    <h3 className='display-6 mb-4'>Update Product</h3>
    <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type='text' className='form-control py-2 mb-3' placeholder='Name'></input>
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='Category'></input>
    <input value={product.price} onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})}type='number' className='form-control py-2 mb-3' placeholder='Price'></input>
    <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='Image Name'></input>
    
    <button type='submit' className='btn btn-success py-2 mt-3'>Update Product</button>
</form>
  )
}

export default ProductForm