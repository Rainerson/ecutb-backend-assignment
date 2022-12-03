import React from 'react'

const Services: React.FC = () => {
  return (
    <>
    <section className='services'>
      <div className='container'>
        <div className='support'><i className="fa-regular fa-headset"></i><h4>Customer Support</h4><p>Lorem ipsum dolor sit amet consectetur elit.</p></div>
        <div className='payment'><i className="fa-regular fa-credit-card"></i><h4>Secured Payment</h4><p>Lorem ipsum dolor sit amet consectetur elit.</p></div>
        <div className='delivery'><i className="fa-regular fa-truck"></i><h4>Free Home Delivery</h4><p>Lorem ipsum dolor sit amet consectetur elit.</p></div>
        <div className='returns'><i className="fa-regular fa-truck-arrow-right"></i><h4>30 Day returns</h4><p>Lorem ipsum dolor sit amet consectetur elit.</p></div>
      </div>
    </section>
  </>
  )
}

export default Services
