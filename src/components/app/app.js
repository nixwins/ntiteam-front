import React from 'react';
import LordPage from '../lord-page';
import Navigation from '../nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import PlanetPage from '../planet-page';


export default function App() {

    return (
        <div className="app">
            <Router>
                <Navigation />
                <Switch>
                    <LordPage exact path="/lord-page" />
                    <PlanetPage exact path="/planet-page" />
                    <Route exact path="/" component={LordPage} />
                </Switch>


            </Router>

        </div>
    );
}