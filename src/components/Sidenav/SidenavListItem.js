import React from 'react';
import styled from 'styled-components';
import { FiBox } from "react-icons/fi";

export default function() {

    const SidenavListItem = styled.li`
        padding: 20px 20px 20px 40px;
        color: #ddd;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
             cursor: pointer;
        }
    `

    return (
        <SidenavListItem>
            <FiBox /> Nav item
        </SidenavListItem>
    )
}
