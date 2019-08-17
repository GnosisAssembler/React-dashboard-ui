import React from 'react';
import MainCards from './MainCards/MainCards';
import MainHeader from './MainHeader/MainHeader';
import MainOverview from './MainOverview/MainOverview';
import styled from 'styled-components';

export default function() {

    const Main = styled.main`
        grid-area: main;
        background-color: #F1F3F9;
    `
    const MainHalf = styled.div`
        background: rgb(94,114,227);
        background: linear-gradient(77deg, rgba(94,114,227,1) 0%, rgba(131,148,241,1) 100%);
        padding: 40px;
    `

    return (
        <Main>
            <MainHalf>
                <MainHeader />  
            </MainHalf>
            <MainOverview />
            <MainCards />
        </Main>
    )
}
