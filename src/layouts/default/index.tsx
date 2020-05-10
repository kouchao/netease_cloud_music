import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '@/pages/home'
import Side from '../side'
import Header from '../header'
import './index.scss'

function Default() {
    return (<Router>
        <div className="layout">
            <div className='layout__body'>
                <Side></Side>
                <div className='layout__content'>
                    <Header></Header>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
            <div>cccccc</div>
        </div>
    </Router>)
}

export default Default;
