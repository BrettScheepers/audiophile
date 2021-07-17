import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header className="header-nav">
            <div className="container header-nav-container">
                <img src="/assets/shared/tablet/icon-hamburger.svg" className="hamburger" alt="Hamburger" />
                <img src="/assets/shared/desktop/logo.svg" alt="Logo" className="logo" />
                <ul className="nav-links">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/Category/Headphones">
                        Headphones
                    </NavLink>
                    <NavLink to="/Category/Speakers">
                        Speakers
                    </NavLink>
                    <NavLink to="/Category/Earphones">
                        Earphones
                    </NavLink>
                </ul>
                <img src="assets/shared/desktop/icon-cart.svg" className="cart" alt="Cart"/>
            </div>
        </header>
    )
}

export default HeaderNav
