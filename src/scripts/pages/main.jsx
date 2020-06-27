import React, { Component } from 'react'
import Header from '../components/header';
import SlideShow from '../components/slide-show';
import Contents from '../components/contents/contents';

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