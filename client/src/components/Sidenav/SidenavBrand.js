import React from 'react';
import styled from 'styled-components';
import './SidenavBrand.css';

export default function() {

    const SidenavBrand = styled.div`
        padding:20px 45px 0 45px;
        color: #6772E5;
        font-weight: 700;
    `

    return (
        <SidenavBrand>
            <span className="sidenav__brand-name rubik">DASH</span>
        </SidenavBrand>
    )
}
