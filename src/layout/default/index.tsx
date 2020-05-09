import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '@/pages/home'
import Side from '../side'

function Default() {
    return (<Router>
        <div>
            <Side></Side>
            <div>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>

    </Router>)
}

export default Default;
