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
            <SidenavListItem></SidenavListItem>
            <SidenavListItem></SidenavListItem>
            <SidenavListItem></SidenavListItem>
            <SidenavListItem></SidenavListItem>
            <SidenavListItem></SidenavListItem>
        </SidenavList>
    )
}
