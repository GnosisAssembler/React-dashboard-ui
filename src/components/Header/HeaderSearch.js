import React from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";

export default function () {

    const HeaderSearch = styled.div`
        margin-left: 42px;
        @media only screen and (min-width: 46.875em) {
            margin-left: 0;
        }
        background-color: white;
        border-radius: 15px;
        padding: 3px;
    `

    const HeaderSearchInput = styled.input`
        width: 250px;
        border: 0;
        background-color: transparent;
        padding-left: 5px;
    `

    return (
        <HeaderSearch>
            <span style={{color:'grey', fontSize:'20px'}}><MdSearch /></span>
            <HeaderSearchInput placeholder="Search"/>
        </HeaderSearch>
    )
}
