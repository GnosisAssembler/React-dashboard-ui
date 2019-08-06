import React from 'react';
import HeaderAvatar from './HeaderAvatar';
import HeaderSearch from './HeaderSearch';
import styled from 'styled-components';

export default function() {

    const Header = styled.header`
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background-color: #648ca6;
    `

    return (
        <Header>
         <HeaderSearch />
         <HeaderAvatar />
       </Header>
    )
}
