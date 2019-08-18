import React from 'react';
import './Grid.css';
import MenuIcon from './MenuIcon/MenuIcon';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidenav from './Sidenav/Sidenav';
import Main from './Main/Main';
import styled from 'styled-components';

export default function() {

    const Grid = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr 50px;
        grid-template-areas:
            'header'
            'main'
            'footer';
        height: 100vh;

        @media only screen and (min-width: 46.875em) {
            grid-template-columns: 240px 1fr;
            grid-template-areas:
            "sidenav header"
            "sidenav main"
            "sidenav footer";
        }
    `

    return (
        <Grid>
            <MenuIcon />
            <Header /> 
            <Main />
            <Footer />
        </Grid>  
    )
}
