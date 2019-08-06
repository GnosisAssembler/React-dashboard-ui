import React from 'react';
import MainOverviewCard from './MainOverviewCard';
import styled from 'styled-components';

export default function() {

    const MainOverview = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
        grid-auto-rows: 94px;
        grid-gap: 20px;
        margin: 20px;
    `

    return (
        <MainOverview>
            <MainOverviewCard />
            <MainOverviewCard />
            <MainOverviewCard />
            <MainOverviewCard />
        </MainOverview>
    )
}
