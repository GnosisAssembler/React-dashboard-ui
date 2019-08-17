import React from 'react';
import SidenavListItem from './SidenavListItem';
import styled from 'styled-components';

export default function() {

    const SidenavList = styled.ul`
        padding: 0;
        margin-top: 85px;
        list-style-type: none;
    `

    return (
        <SidenavList>
            <SidenavListItem itemName={"Dashboard"} itemIcon={"MdDashboard"}/>
            <SidenavListItem itemName={"Quotes"} itemIcon={"MdMessage"}/>
            <SidenavListItem itemName={"Weight"} itemIcon={"MdNetworkCheck"}/>
            <SidenavListItem itemName={"Budget"} itemIcon={"MdAttachMoney"}/>
            <SidenavListItem itemName={"Mast"} itemIcon={"MdPanTool"}/>
            <SidenavListItem itemName={"RoutineCounter"} itemIcon={"MdAirlineSeatIndividualSuite"}/>
            <SidenavListItem itemName={"Goals"} itemIcon={"MdWhatshot"}/>
            <SidenavListItem itemName={"Gym"} itemIcon={"MdFitnessCenter"}/>
            <SidenavListItem itemName={"Nutrition"} itemIcon={"MdLocalDining"}/>
        </SidenavList>
    )
}
