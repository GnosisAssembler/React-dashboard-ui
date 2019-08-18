import React from 'react';
import SidenavListItem from './SidenavListItem';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function() {

    const SidenavList = styled.ul`
        padding: 0;
        margin-top: 85px;
        list-style-type: none;
    `

    return (
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
    )
}
