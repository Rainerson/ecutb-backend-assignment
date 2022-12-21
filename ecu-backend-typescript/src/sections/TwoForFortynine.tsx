
import React, { useEffect } from 'react'
import {ProductContextType, useProductContext } from "../contexts/ProductContext"
import ProductGridSmall from './ProductGridSmall'
import imageEight from '../images/8.png'

const TwoForFortynine: React.FC = () => {

    const {fourTwentyProducts, getFourTwentyProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getFourTwentyProducts(4)
    }, [getFourTwentyProducts])
    

    return (
        <>
            <section className="two-for-forty">
                <div className="container">

                    <div className="two-for-boxes">
                        <ProductGridSmall title="" items={fourTwentyProducts}></ProductGridSmall>
                    </div>
                    <div className="two-for-div" style={{ backgroundImage: `url(${imageEight})` }}>
                        <div className='discount-text'>
                            <h1>2 FOR USD $49</h1>
                            <button className="btn-light">FLASH SALE
                                <span className="corner-topLeft"></span>
                                <span className="corner-bottomRight"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TwoForFortynine


