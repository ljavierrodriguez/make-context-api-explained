import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import inyectContext from './store/appContext';

const App = props => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/:name" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default inyectContext(App);
