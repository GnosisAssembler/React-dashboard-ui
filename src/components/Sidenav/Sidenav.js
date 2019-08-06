import React from 'react';
import SidenavCloseIcon from './SidenavCloseIcon';
import SidenavList from './SidenavList';
import styled from 'styled-components';

export default function() {

    const Sidenav = styled.aside`
        grid-area: sidenav;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 240px;
        position: fixed;
        overflow-y: auto;
        transform: translateX(-245px);
        transition: all .6s ease-in-out;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
        z-index: 2; 
        background-color: #394263;

        @media only screen and (min-width: 46.875em) {
            position: relative;
            transform: translateX(0);
        }
  
    `

    return (
        <Sidenav>
          <SidenavCloseIcon />
          <SidenavList />
        </Sidenav>
    )
}
