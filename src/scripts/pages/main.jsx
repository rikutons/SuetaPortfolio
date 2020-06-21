import React, { Component } from 'react'
import Header from '../components/header.jsx';
import SlideShow from '../components/slide-show.jsx';

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Header/>
                <SlideShow/>
            </div>
        )
    }
}

export default Main;