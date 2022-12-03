import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'


const Navbar: React.FC = () => {
    return (
        <nav className="navigation">

            <div className="logo">
                <NavLink to="/" end>
                    <img src={Logo} alt='Logo' />
                </NavLink>

            </div>
            <div className="nav-links">
                <NavLink to="/" className="m-3" end>Home</NavLink>
                <NavLink to="/categories" className="m-3" end>Categories</NavLink>
                <NavLink to="/products" className="m-3"  >Products</NavLink>
                <NavLink to="/contacts" className="m-3" end>Contact</NavLink>

            </div>
            <div className="nav-icon">
                <NavLink to="/search" end className='nav-link-icon'><i className='fa-regular fa-magnifying-glass'></i></NavLink>
                <NavLink to="/compare" end className='nav-link-icon'><i className='fa-regular fa-code-compare'></i></NavLink>
                <NavLink to="/wishlist" end className='nav-link-icon position-relative'><span className="position-absolute start-100  badge rounded-pill bg-theme">9</span><i className='fa-regular fa-heart'></i></NavLink>
                <NavLink to="/shoppingcart" end className='nav-link-icon position-relative'><span className="position-absolute start-100  badge rounded-pill bg-theme">5</span><i className='fa-regular fa-bag-shopping'></i></NavLink>
            </div>

        </nav>
    )
}

// Gör så att filen är exporterbar så att vi kan använda den på fler ställen
export default Navbar