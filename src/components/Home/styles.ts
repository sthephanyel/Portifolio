import { theme } from './../../global/styles/theme';
import React from "react";
import styled from 'styled-components';
import Stars from './stars.jpg';

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    /* background-color: ${theme.colors.base}; */
    /* background-image: radial-gradient(${theme.colors.basesecond}); */
    background-image:url(${Stars});
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
            background-position: bottom;
            background-size: cover;
    /* flex-direction: row; */
    /* position: relative; */
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 100vh;
    position: absolute;
`;
export const DivUp = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    display: flex;
`;

export const DivLogoInfinit = styled.div`
    display: flex;
`;
export const LogoInfinit = styled.img`
    width: 3rem;
    transform: translate(1rem);
`;

export const DivText = styled.div`
    display: flex;
    
    div{
        transition: all 0.5s ease;
        transform: scale(0.9);
    :hover{
        transform: scale(1);
    }
    }
    @media (max-width: 550px) {
        display: none;
    }
`;
export const DivUpMobile = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 4rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;

    @media (min-width: 550px) {
        display: none;
    }


`;
export const DivTextMobile = styled.div`
    background-color: green;
    width: 90%;
    height:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 30px;
    border: 1px solid white;
    background-image: radial-gradient(${theme.colors.basesecond});

`;
export const LinkText = styled.a`
    text-decoration: none;
    margin: 0 1rem 0 0.5rem;
    color: ${theme.colors.silver50};
    font-size: 0.9rem;

    :hover{
        color: ${theme.colors.white};
        transition: all 0.3s ease;
    }
`;