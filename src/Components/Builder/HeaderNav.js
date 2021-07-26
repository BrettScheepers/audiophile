import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const HeaderNav = () => {
    const history = useHistory()

    const { setOpenCartModal, setOpenImageNavModal, openCartModal, openImageNavModal, closeAllModals } = useGlobalContext()

    return (
        <header className="header-nav">
            <div className="container header-nav-container">
                <img onClick={() => {
                        setOpenCartModal(false);
                        setOpenImageNavModal(!openImageNavModal)
                    }}
                    src="/assets/shared/tablet/icon-hamburger.svg" className="hamburger" alt="Hamburger" />
                <img onClick={() => {history.push('/'); setOpenImageNavModal(false); setOpenCartModal(false)}}
                    src="/assets/shared/desktop/logo.svg" alt="Logo" className="logo" />
                <ul className="nav-links">
                    <NavLink to="/" onClick={() => closeAllModals()}>
                        Home
                    </NavLink>
                    <NavLink to="/Category/Headphones" onClick={() => closeAllModals()}>
                        Headphones
                    </NavLink>
                    <NavLink to="/Category/Speakers" onClick={() => closeAllModals()}>
                        Speakers
                    </NavLink>
                    <NavLink to="/Category/Earphones" onClick={() => closeAllModals()}>
                        Earphones
                    </NavLink>
                </ul>
                <img onClick={() => { 
                        setOpenImageNavModal(false)
                        setOpenCartModal(!openCartModal);
                    }}
                    src="/assets/shared/desktop/icon-cart.svg" className="cart" alt="Cart"/>
            </div>
        </header>
    )
}

export default HeaderNav
