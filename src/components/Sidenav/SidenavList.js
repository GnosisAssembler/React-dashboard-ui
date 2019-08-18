import React from 'react';
import SidenavListItem from './SidenavListItem';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Import components for routes
import Budget from '../sections/Budget';
import Dashboard from '../sections/Dashboard';
import Goals from '../sections/Goals';
import Gym from '../sections/Gym';
import Mast from '../sections/Mast';
import Nutrition from '../sections/Nutrition';
import Quotes from '../sections/Quotes';
import Routine from '../sections/Routine';
import Weight from '../sections/Weight';

export default function() {

    const SidenavList = styled.ul`
        padding: 0;
        margin-top: 85px;
        list-style-type: none;
    `

    return (
        <Router>
            <SidenavList>
                <Link to="/dashboard">
                    <SidenavListItem itemName={"Dashboard"} itemIcon={"MdDashboard"}/>
                </Link>
                <Link to="/quotes">
                    <SidenavListItem itemName={"Quotes"} itemIcon={"MdMessage"}/>
                </Link>
                <Link to="/weight">
                    <SidenavListItem itemName={"Weight"} itemIcon={"MdNetworkCheck"}/>
                </Link>
                <Link to="/budget">
                    <SidenavListItem itemName={"Budget"} itemIcon={"MdAttachMoney"}/>
                </Link>
                <Link to="/mast">
                    <SidenavListItem itemName={"Mast"} itemIcon={"MdPanTool"}/>
                </Link>
                <Link to="/routine">
                    <SidenavListItem itemName={"Routine"} itemIcon={"MdAirlineSeatIndividualSuite"}/>
                </Link>
                <Link to="/goals">
                    <SidenavListItem itemName={"Goals"} itemIcon={"MdWhatshot"}/>
                </Link>
                <Link to="/gym">
                    <SidenavListItem itemName={"Gym"} itemIcon={"MdFitnessCenter"}/>
                </Link>
                <Link to="/nutrition">
                    <SidenavListItem itemName={"Nutrition"} itemIcon={"MdLocalDining"}/>
                </Link>
            </SidenavList>

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/quotes" component={Quotes} />
            <Route path="/weight" component={Weight} />
            <Route path="/budget" component={Budget} />
            <Route path="/mast" component={Mast} />
            <Route path="/routine" component={Routine} />
            <Route path="/goals" component={Goals} />
            <Route path="/gym" component={Gym} />
            <Route path="/nutrition" component={Nutrition} />
        </Router>
    )
}
