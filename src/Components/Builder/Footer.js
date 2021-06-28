import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Facebook} from '../Images/icon-facebook.svg'
import { ReactComponent as Twitter} from '../Images/icon-twitter.svg'
import { ReactComponent as Instagram} from '../Images/icon-instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-logo-container">
                    <img src="\assets\shared\desktop\logo.svg" alt="" className="logo"/>
                </div>
                <div className="footer-nav">
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
                </div>
                <div className="footer-text">
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we’re open 7 days a week.
                    </p>
                </div>
                <div className="footer-copyright">
                    <p>
                        Copyright 2021. All Rights Reserved
                    </p>
                </div>
                <div className="footer-icons-container">
                    <div className="footer-icons">
                        {/* <img src="\assets\shared\desktop\icon-facebook.svg" alt="" className="footer-icon"/>
                        <img src="\assets\shared\desktop\icon-twitter.svg" alt="" className="footer-icon"/>
                        <img src="\assets\shared\desktop\icon-instagram.svg" alt="" className="footer-icon"/> */}
                        <Facebook className="footer-icon" />
                        <Twitter className="footer-icon" />
                        <Instagram className="footer-icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
