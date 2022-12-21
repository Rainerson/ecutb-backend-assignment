import React, {useEffect } from 'react'
import {ProductContextType, useProductContext } from "../contexts/ProductContext"
import ProductGridSmall from './ProductGridSmall'
import imageSeven from '../images/7.png'

const TwoForTwentynine = () => {

    const {fourFortyProducts, getFourFortyProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getFourFortyProducts(4)
    }, [getFourFortyProducts])
    
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
                <ProductGridSmall title="" items={fourFortyProducts}></ProductGridSmall>
            </div>
        </div>
    </section>
</>
  )
}

export default TwoForTwentynine

