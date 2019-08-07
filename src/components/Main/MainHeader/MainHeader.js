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
        background: rgb(2,0,36);
        background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
        color: slategray;
    `

    return (
        <MainHeader>
            <MainHeaderHeading />
            <MainHeaderUpdates />
        </MainHeader>
    )
}
