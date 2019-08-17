import React from 'react';
import styled from 'styled-components';
import MainCard from './MainCard';

export default function() {

    const MainCards = styled.div`
        column-count: 1;
        column-gap: 20px;
        margin: 20px;

        @media only screen and (min-width: 65.625em) {
            column-count: 2;
        }
    `

    return (
        <MainCards>
            <MainCard />
            <MainCard />
            <MainCard isRed={true}/>
        </MainCards>
    )
}
