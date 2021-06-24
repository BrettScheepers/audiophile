import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header>
            <div className="container header-nav">
                <img src="/assets/shared/tablet/icon-hamburger.svg" className="hamburger" alt="Hamburger" />
                <img src="/assets/shared/desktop/logo.svg" alt="Logo" className="logo" />
                <ul className="nav-links">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/">
                        Headphones
                    </NavLink>
                    <NavLink to="/">
                        Speakers
                    </NavLink>
                    <NavLink to="/">
                        Earphones
                    </NavLink>
                </ul>
                <img src="assets/shared/desktop/icon-cart.svg" className="cart" alt="Cart"/>
            </div>
        </header>
    )
}

export default HeaderNav
