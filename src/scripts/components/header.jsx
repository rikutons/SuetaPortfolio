import React from 'react'
import { Link } from 'react-scroll'

function Header() {
    const scrollMillSecond = 500;
    return (
        <div className="header">
            <Link className="header__text header__text--blue" to="slide-show" smooth={true} duration={scrollMillSecond}>Sueta Portfolio</Link>
            <Link className="header__text" to="about" smooth={true} duration={scrollMillSecond}>About</Link>
            <Link className="header__text" to="works" smooth={true} duration={scrollMillSecond}>Works</Link>
            <Link className="header__text" to="contact" smooth={true} duration={scrollMillSecond}>Contact</Link>
        </div>
    )
}

export default Header
