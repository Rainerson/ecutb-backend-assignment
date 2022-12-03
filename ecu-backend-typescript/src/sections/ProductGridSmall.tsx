import React from 'react'
import ProductCard from '../components/ProductCard'

import { ProductItem } from '../models/ProductModel'

interface ProductGridSmallType {
    title: string,
    items: ProductItem[]
}

const ProductGridSmall: React.FC<ProductGridSmallType> = ({ title, items = [] }) => {
  return (
    <>

      <section className="product-grid">
        <div className="container">
          <h2>{title}</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4 g-custom">
            {
              items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductGridSmall
