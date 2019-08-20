import React from 'react';
import styled from 'styled-components';
import { FiAlignJustify } from "react-icons/fi";

export default function() {

    const MenuIcon = styled.div`
        position: fixed; 
        display: flex;
        top: 5px;
        left: 10px;
        align-items: center;
        justify-content: center;
        background-color: #DADAE3;
        border-radius: 50%;
        z-index: 1;
        cursor: pointer;
        padding: 12px;
    `

    return (
        <MenuIcon>
            <FiAlignJustify />
        </MenuIcon>
        
    )
}
