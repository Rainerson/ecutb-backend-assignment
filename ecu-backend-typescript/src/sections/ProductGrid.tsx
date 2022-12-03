
import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModel'

interface ProductGridType {
    title: string,
    items: ProductItem[]
}

const ProductGrid: React.FC<ProductGridType> = ({ title, items = [] }) => {
    return (
        <>
            <section className="product-grid">
                <div className="container">
                    <h2>{title}</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductGrid
