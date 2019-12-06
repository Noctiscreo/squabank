import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import NotFound from "./NotFound";

// Switch looks for 'true', if it doesn't find anything, then it will get to 'Not Found'
// 'exact' looks for an exact regex match
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import DisplayAccounts from './DisplayAccounts';
import Navbar from "./Navbar";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/accounts" component={DisplayAccounts}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));


