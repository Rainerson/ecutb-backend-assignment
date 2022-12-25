import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../models/ProductModel'

interface ProductCardType {
    item: ProductItem
}

const ProductCard: React.FC<ProductCardType> = ({ item }) => {


    return (
        <div>

            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img src={`${item.imageName}`} alt={item.name} />
                        <div className="featured-card-icons">
                            <button className='card-menu-link'><i className="fa-regular fa-heart"></i></button>
                            <button className='card-menu-link'><i className="fa-regular fa-repeat"></i></button>
                            <button className='card-menu-link'><i className="fa-regular fa-bag-shopping"></i></button>
                        </div>
                        <NavLink to={`/products/product/detailed/${item.articleNumber.replace(/ /gi, "-").toLowerCase()}`} className="btn-theme" end><p>SHOP NOW</p>
                            <span className="corner-topLeft"></span>
                            <span className="corner-bottomRight"></span>
                        </NavLink>
                    </div>
                    <div className="card-body">
                        <p className="card-category">{item.category}</p>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </p>
                        <p className="card-price">{item.price}$</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard

