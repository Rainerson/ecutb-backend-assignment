import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ContactForm from '../sections/ContactForm'

const Contacts: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>

      <Breadcrumb currentPage='Contact'></Breadcrumb>
      <div className="map-div">
        <iframe id="map" title='mapero'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13726.681856210678!2d15.120875255465206!3d59.24136158484212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14ce5262c35d%3A0x35322003293cc49e!2sEC%20Utbildning%20%C3%96rebro!5e0!3m2!1ssv!2sse!4v1665696636768!5m2!1ssv!2sse"
          allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default Contacts