import React from 'react'
import { Link } from 'react-scroll'

function Header() {
    const scrollMillSecond = 10000;
    return (
        <div className="header">
            <Link className="header__text header__text--blue" to="slide-show" smooth='easeOutQuint' duration={scrollMillSecond}>Sueta Portfolio</Link>
            <Link className="header__text" to="about" smooth='easeOutQuint' duration={scrollMillSecond}>About</Link>
            <Link className="header__text" to="works" smooth='easeOutQuint' duration={scrollMillSecond}>Works</Link>
            <Link className="header__text" to="contact" smooth='easeOutQuint' duration={scrollMillSecond}>Contact</Link>
        </div>
    )
}

export default Header
