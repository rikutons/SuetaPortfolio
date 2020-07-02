import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Controller, Scene } from 'react-scrollmagic'

function PCHeader() {
    const scrollMillSecond = 500;
    const scrollOffset = -60;
    const [activeID, setActiveID] = useState(0)
    const classNames = []
    for (let index = 0; index < 4; index++) {
        var className = ["pc-header__text"]
        if (index == 0) {
            className.push("pc-header__text--blue")
        }
        if (index == activeID) {
            className.push("pc-header__text--active")
        }
        classNames.push(className.join(" "))
    }

    function changeActiveID(eventType, eventState, index) {
        if (eventType == 'enter') {
            console.log(eventType, index)
            setTimeout(() => {
                setActiveID(index)
            });
        }
        else if (eventType == 'start' && eventState == 'BEFORE') {
            console.log(eventType, index)
            setTimeout(() => {
                setActiveID(index - 1)
            });
        }
    }
    return (
        <div className="pc-header">
            <Controller globalSceneOptions={{ triggerHook: 0.2}}>
                <Scene triggerElement="#slide-show" indicators={true}>
                    {(progress, event) => {
                        changeActiveID(event.type, event.state, 0)
                        return <div/>
                    }}
                </Scene>
                <Scene triggerElement="#about" indicators={true}>
                    {(progress, event) => {
                        changeActiveID(event.type, event.state, 1)
                        return <div/>
                    }}
                </Scene>
                <Scene triggerElement="#works" indicators={true}>
                    {(progress, event) => {
                        changeActiveID(event.type, event.state, 2)
                        return <div/>
                    }}
                </Scene>
                <Scene triggerElement="#contact" indicators={true}>
                    {(progress, event) => {
                        changeActiveID(event.type, event.state, 3)
                        return <div/>
                    }}
                </Scene>
            </Controller>
            <div className="pc-header__wrapper">
                <Link className={classNames[0]} to="slide-show" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Sueta Portfolio</Link>
                <Link className={classNames[1]} to="about" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>About</Link>
                <Link className={classNames[2]} to="works" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Works</Link>
                <Link className={classNames[3]} to="contact" smooth='easeOutQuint' offset={scrollOffset} duration={scrollMillSecond}>Contact</Link>
            </div>
        </div>
    )
}

export default PCHeader
