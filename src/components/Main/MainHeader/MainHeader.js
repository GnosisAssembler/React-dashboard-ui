import React from 'react';
import MainHeaderHeading from './MainHeaderHeading';
import MainHeaderUpdates from './MainHeaderUpdates';
import styled from 'styled-components';


export default function() {

    const MainHeader = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: 150px;
        background-color: white;
        color: slategray;
        padding: 1rem 1.5rem;
        border-radius: 10px;
    `

    return (
        <MainHeader>
            <MainHeaderHeading />
            <MainHeaderUpdates />
        </MainHeader>
    )
}
