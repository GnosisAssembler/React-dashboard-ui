import React from 'react';
import HeaderNotifications from './HeaderNotifications';
import HeaderTitle from './HeaderTitle';
import styled from 'styled-components';

export default function() {

    const Header = styled.header`
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background: rgb(94,114,227);
        background: linear-gradient(77deg, rgba(94,114,227,1) 0%, rgba(131,148,241,1) 100%);
    `

    return (
        <Header>
         <HeaderTitle />
         <HeaderNotifications />
       </Header>
    )
}
