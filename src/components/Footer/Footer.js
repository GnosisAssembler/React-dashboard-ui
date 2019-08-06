import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterSignature from './FooterSignature';
import styled from 'styled-components';

export default function() {

    const Footer = styled.footer`
        grid-area: footer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background-color: #648ca6;
    `

    return (
        <Footer>
          <FooterCopyright />
          <FooterSignature />
        </Footer>
    )
}
