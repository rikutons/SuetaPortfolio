import React from 'react'
import MediaQuery from 'react-responsive';
import PCHeader from './pc-header';
import MobileHeader from './mobile-header';
function Header() {
    return (
        <div>
            <MediaQuery maxWidth="759px">
                <MobileHeader/>
            </MediaQuery>
            <MediaQuery minWidth="760px">
                <PCHeader/>
            </MediaQuery>
        </div>
    )
}

export default Header
