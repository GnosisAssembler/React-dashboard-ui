import React from 'react';
import MainHeaderHeading from './MainHeaderHeading';
import MainHeaderUpdates from './MainHeaderUpdates';
import styled from 'styled-components';

import {AppContext} from '../../../AppProvider';

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
        <AppContext.Consumer> 
             {(context) => ( 
                <MainHeader>
                    <MainHeaderHeading randomQuote={context.pickedQuote}/>
                    <MainHeaderUpdates />
                </MainHeader>
            )}
        </AppContext.Consumer>
    )
}
