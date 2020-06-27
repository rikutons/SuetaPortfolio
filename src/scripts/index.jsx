import '../sass/style.sass';
import './resources/adobe-font';
import React from "react";
import ReactDOM from 'react-dom'
import Main from './pages/main'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);