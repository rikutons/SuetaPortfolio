import React, { Component } from 'react'
import Header from '../components/header.jsx';
import SlideShow from '../components/slide-show.jsx';
import Contents from '../components/contents/contents.jsx';

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Header/>
                <SlideShow/>
                <Contents/>
            </div>
        )
    }
}

export default Main;