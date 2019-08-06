import React from 'react';
import { FiAperture } from "react-icons/fi";
import styled from 'styled-components';
import './SidenavBrand.css';

export default function() {

    const SidenavBrand = styled.div`
        padding:20px 45px 0 45px;
    `

    return (
        <SidenavBrand>
            <FiAperture className="sidenav__brand-logo"/> 
            <span className="sidenav__brand-name">Dash</span>
        </SidenavBrand>
    )
}
