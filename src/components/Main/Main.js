/**
 * Routing Component
 * Sidenav should not be here, but it is for "routing's shake" lol
 */
import React from 'react';
import styled from 'styled-components';
import Dashboard from '../sections/Dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidenav from '../Sidenav/Sidenav';

// Import components for routes
import Budget from '../sections/Budget';
import Goals from '../sections/Goals';
import Gym from '../sections/Gym';
import Mast from '../sections/Mast';
import Nutrition from '../sections/Nutrition';
import Quotes from '../sections/Quotes';
import Routine from '../sections/Routine';
import Weight from '../sections/Weight';

export default function() {

    const Main = styled.main`
        grid-area: main;
        background-color: #F1F3F9;
    `

    return (
        <Router>
            <Sidenav />
            <Main>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/quotes" exact component={Quotes} />
                    <Route path="/weight" exact component={Weight} />
                    <Route path="/budget" exact component={Budget} />
                    <Route path="/mast" exact component={Mast} />
                    <Route path="/routine" exact component={Routine} />
                    <Route path="/goals" exact component={Goals} />
                    <Route path="/gym" exact component={Gym} />
                    <Route path="/nutrition" exact component={Nutrition} />
                </Switch>
            </Main>
        </Router>
    )
}
