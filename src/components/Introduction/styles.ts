import { theme } from './../../global/styles/theme';
import React from "react";
import styled from 'styled-components';


export const Container = styled.div`
    /* background-image: radial-gradient(${theme.colors.basesecond}); */
    width: 100%;
    height: 50vh;
    max-height:50vh;

    align-items: center;

    text-align: left;

    font-family: ${theme.fonts.laila};
    color: ${theme.colors.white};

    display: flex;
    margin-top: 10rem;

    padding-left: 2rem;

    h2{
        font-size: 2rem;
        color: ${theme.colors.silver100};
    }
    h1{
        font-size: 2.5rem;
        /* color: ${theme.colors.blue150}; */
        background: linear-gradient(251deg, ${theme.colors.blue50} 19%, ${theme.colors.blue150} 74%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;
    }

`;

export const Picks = styled.div`
    width:0.6rem;
    height:${props => props.theme.height}rem;
    border: 0 solid;
    border-color: transparent transparent transparent #fff;
    border-width: 0 ${props => props.theme.borderWidthDistance}rem 0 ${props => props.theme.borderWidth}rem;
    margin-left: -0.2rem;
`;
export const GitDiv = styled.div`

`;
export const ButtonGit = styled.a`
    background-color: ${theme.colors.blue150};
    width: 35%;
    height: 2.5rem;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    text-decoration: none;
    color: ${theme.colors.white};
    border: 2px solid white;

    position: relative;
    overflow: hidden;

    :hover{
        background-color: ${theme.colors.white};
        transition: all 0.3s ease;
        color: ${theme.colors.blue150};
        border: 2px solid ${theme.colors.blue150};
    }
`;