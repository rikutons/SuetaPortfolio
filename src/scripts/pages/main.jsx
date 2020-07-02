import React, { Component } from 'react'
import SlideShow from '../components/slide-show';
import Contents from '../components/contents/contents';
import Header from '../components/header';

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