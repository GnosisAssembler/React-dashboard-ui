import React from 'react';
import styled from 'styled-components';

export default function () {

    const HeaderSearch = styled.div`
        margin-left: 42px;
        @media only screen and (min-width: 46.875em) {
            margin-left: 0;
        }
    `

    return (
        <HeaderSearch>Search</HeaderSearch>
    )
}
