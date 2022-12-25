import React, {useEffect } from 'react'
import {ProductContextType, useProductContext } from "../contexts/ProductContext"
import ProductGridSmall from './ProductGridSmall'
import imageSeven from '../images/7.png'

const TwoForTwentynine = () => {

    const {fourTwentyProducts, getFourTwentyProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getFourTwentyProducts(4)
    }, [getFourTwentyProducts])
    
  return (
    <>
    <section className="two-for-twenty">
        <div className="container">
            <div className="two-for-div" style={{ backgroundImage: `url(${imageSeven})` }}>
                <div className='discount-text'>
                    <h1>2 FOR USD $29</h1>
                    <button className="btn-light">FLASH SALE
                        <span className="corner-topLeft"></span>
                        <span className="corner-bottomRight"></span>
                    </button>
                </div>
            </div>
            <div className="two-for-boxes">
                <ProductGridSmall title="" items={fourTwentyProducts}></ProductGridSmall>
            </div>
        </div>
    </section>
</>
  )
}

export default TwoForTwentynine

