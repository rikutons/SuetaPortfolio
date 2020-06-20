import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link className="header__text header__text--blue">Sueta Portfolio</Link>
            <Link className="header__text">About</Link>
            <Link className="header__text">Works</Link>
            <Link className="header__text">Contact</Link>
        </div>
    )
}

export default Header
