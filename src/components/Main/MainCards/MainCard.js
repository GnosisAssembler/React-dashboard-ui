import React from 'react';
import styled from 'styled-components';

export default function() {

    const MainCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: #82bef6;
        margin-bottom: 20px;
        -webkit-column-break-inside: avoid;
        padding: 24px;
        box-sizing: border-box;

        &:first-child {
            height: 485px;
        }

        &:nth-child(2) {
            height: 200px;
        }

        &:nth-child(3) {
            height: 265px;
        }

    `

    return (
        <MainCard>
            Card
        </MainCard>
    )
}
