import React from 'react';
import MainOverviewCard from './MainOverviewCard';
import styled from 'styled-components';

import {AppContext} from '../../../AppProvider';

export default function() {

    const MainOverview = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
        grid-auto-rows: 94px;
        grid-gap: 20px;
        margin: 20px;
    `
    // Wrap component with AppConsumer so that we can use the context
    return (
        <AppContext.Consumer>  
            {(context) => (
                <MainOverview>
                    <MainOverviewCard weight={context.kg}/>
                    <MainOverviewCard />
                    <MainOverviewCard />
                    <MainOverviewCard />
                    </MainOverview>
            )}
        </AppContext.Consumer>
    );
}
