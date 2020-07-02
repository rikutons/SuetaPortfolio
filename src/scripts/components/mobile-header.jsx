import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { CSSTransition } from 'react-transition-group';

function MobileHeader() {
    const [isActive, setIsActive] = useState(false)
    const scrollMillSecond = 500;
    const scrollOffset = -60;
    return (
        <div>
            <div className="mobile-header__wrapper">
                <Link className="mobile-header__text" onClick={() => setIsActive(false)} to="slide-show" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Sueta Portfolio</Link>
                <CSSTransition in={isActive} timeout={1000} classNames="mobile-header__button-">
                    <button className="mobile-header__button" onClick={() => setIsActive(!isActive)}>
                        <div className="mobile-header__button-bar" />
                        <div className="mobile-header__button-bar" />
                        <div className="mobile-header__button-bar" />
                    </button>
                </CSSTransition>
            </div>
            {isActive &&
                <div className="mobile-header__menu-wrapper">
                    <Link className="mobile-header__menu-content" onClick={() => setIsActive(false)} to="about" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>About</Link>
                    <Link className="mobile-header__menu-content" onClick={() => setIsActive(false)} to="works" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Works</Link>
                    <Link className="mobile-header__menu-content" onClick={() => setIsActive(false)} to="contact" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Contact</Link>
                </div>
            }
        </div>
    )
}

export default MobileHeader
