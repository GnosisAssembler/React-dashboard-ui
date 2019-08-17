import React from 'react';
import styled from 'styled-components';
import { 
    MdDashboard,
    MdMessage,
    MdNetworkCheck,
    MdAttachMoney,
    MdPanTool,
    MdAirlineSeatIndividualSuite,
    MdWhatshot,
    MdFitnessCenter,
    MdLocalDining 
 } from "react-icons/md";

export default function(props) {
    
    // Render item icons
    function Logo() {
        if(props.itemIcon==="MdDashboard") {
            return <MdDashboard />
        } else if(props.itemIcon==="MdMessage") {
            return <MdMessage />
        } else if(props.itemIcon==="MdNetworkCheck") {
            return <MdNetworkCheck />
        } else if(props.itemIcon==="MdAttachMoney") {
            return <MdAttachMoney />
        } else if(props.itemIcon==="MdPanTool") {
            return <MdPanTool />
        } else if(props.itemIcon==="MdAirlineSeatIndividualSuite") {
            return <MdAirlineSeatIndividualSuite />
        } else if(props.itemIcon==="MdWhatshot") {
            return <MdWhatshot />
        }  else if(props.itemIcon==="MdFitnessCenter") {
            return <MdFitnessCenter />
        }
        return <MdLocalDining />
    }

    const SidenavListItem = styled.li`
        padding: 20px 20px 20px 40px;
        color: #525f7f;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
             cursor: pointer;
             color: #11cdef;
        }
        &:active {
            color: black;
        }
    `

    return (
        <SidenavListItem>
            <span style={{color:"#5e72e4", marginRight:'10px'}}>
                <Logo />
            </span>
            {props.itemName}
        </SidenavListItem>
    )
}
