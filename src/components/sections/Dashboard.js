import React from 'react';
import styled from 'styled-components';
import MainCards from '../Main/MainCards/MainCards';
import MainHeader from '../Main/MainHeader/MainHeader';
import MainOverview from '../Main/MainOverview/MainOverview';

export default function Dashboard() {

    const MainHalf = styled.div`
        background: rgb(94,114,227);
        background: linear-gradient(77deg, rgba(94,114,227,1) 0%, rgba(131,148,241,1) 100%);
        padding: 40px;
    `

    return (
        <div>
            <MainHalf>
                <MainHeader />  
            </MainHalf>
            <MainOverview />
            <MainCards />
        </div>
    )
}
