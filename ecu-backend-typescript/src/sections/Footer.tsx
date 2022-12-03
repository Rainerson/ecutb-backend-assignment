import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer>
    <div className="footer-socials">
      <NavLink to="/fb"><i className='fa-brands fa-facebook-f'></i></NavLink>
      <NavLink to="/insta"><i className='fa-brands fa-instagram'></i></NavLink>
      <NavLink to="/twitter"><i className='fa-brands fa-twitter'></i></NavLink>
      <NavLink to="/google"><i className='fa-brands fa-google'></i></NavLink>
      <NavLink to="/linkedin"><i className='fa-brands fa-linkedin'></i></NavLink>
    </div>
    <p>@ 2022 Fixxo. All rights reserved</p>
  </footer>
  )
}

export default Footer
