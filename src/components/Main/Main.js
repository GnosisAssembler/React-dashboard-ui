import React from 'react';
import MainCards from './MainCards/MainCards';
import MainHeader from './MainHeader/MainHeader';
import MainOverview from './MainOverview/MainOverview';
import styled from 'styled-components';

export default function() {

    const Main = styled.main`
        grid-area: main;
        background-color: rgb(255, 255, 255);
    `

    return (
        <Main>
             <MainHeader />
             <MainOverview />
             <MainCards />
        </Main>
    )
}
