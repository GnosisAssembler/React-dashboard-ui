import React from 'react';
import styled from 'styled-components';

export default function(props) {

    const MainCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: white;
        border-radius: 10px;
        margin-bottom: 20px;
        -webkit-column-break-inside: avoid;
        padding: 24px;
        box-sizing: border-box;
        color: black;

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

    const MainCardRed = styled(MainCard)`
        background: rgb(245,56,90);
        background: linear-gradient(77deg, rgba(245,56,90,1) 0%, rgba(245,79,69,1) 60%, rgba(245,95,55,1) 100%);
    `

    function RenderCard() {
        if(props.isRed) {
            return <MainCardRed>Card</MainCardRed>
        }
        return <MainCard>Card</MainCard>
    }

    return (
        <RenderCard />
    )
}
