import React from 'react';
import { FiX } from "react-icons/fi";
import styled from 'styled-components';

export default function() {

    const SidenavCloseIcon = styled.div`
        position: absolute;
        visibility: visible;
        top: 8px;
        right: 12px;
        cursor: pointer;
        font-size: 20px;
        color: #ddd;

        @media only screen and (min-width: 46.875em) {
            visibility: hidden;
        }
    `

    return (
        <SidenavCloseIcon>
            <FiX />
        </SidenavCloseIcon>
    )
}
