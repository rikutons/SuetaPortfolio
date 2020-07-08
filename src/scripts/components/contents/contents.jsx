import React from 'react'
import About from './about'
import Works from './works'
import Contact from './contact'

function Contents() {
    return (
        <div className="contents" style={{top: window.innerHeight}}>
            <About/>
            <Works/>
            <Contact/>
        </div>
    )
}

export default Contents
