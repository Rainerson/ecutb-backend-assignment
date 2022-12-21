import React from 'react'
import {IProductContext, ProductCRUDContext} from '../contexts/ProductCRUDContext'

const ProductCreateForm = () => {

    const {product, setProduct, create} = React.useContext(ProductCRUDContext) as IProductContext
    
  return (
    <form onSubmit={create} className='d-grid mb-5'>
        <h3 className='display-6 mb-4'>Create Product</h3>
    <input type='hidden' value={product.articleNumber}></input>
    <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type='text' className='form-control py-2 mb-3' placeholder='Name'></input>
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='Category'></input>
    <input value={product.price} onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})}type='number' className='form-control py-2 mb-3' placeholder='Price'></input>
    <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='Image Name'></input>
       
        <button type='submit' className='btn btn-success py-2 mt-3'>Create Product</button>
    </form>
  )
}

export default ProductCreateForm