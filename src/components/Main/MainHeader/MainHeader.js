import React from 'react';
import MainHeaderHeading from './MainHeaderHeading';
import MainHeaderUpdates from './MainHeaderUpdates';
import styled from 'styled-components';


export default function() {

    const MainHeader = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 20px;
        padding: 20px;
        height: 150px;
        background-color: #e3e4e6;
        color: slategray;
    `

    return (
        <MainHeader>
            <MainHeaderHeading />
            <MainHeaderUpdates />
        </MainHeader>
    )
}
