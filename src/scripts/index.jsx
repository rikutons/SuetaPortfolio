import '../sass/style.sass';
import './resources/adobe-font';
import React from "react";
import ReactDOM from 'react-dom'
import Main from './pages/main'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component{
    render() {
        return (
             <Main/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);