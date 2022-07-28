import { theme } from './../../global/styles/theme';
import React from "react";
import styled from 'styled-components';
import Planet from './planet-2.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    /* background-color: ${theme.colors.base}; */
    background-image: radial-gradient(${theme.colors.basesecond});
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    /* background-image:url(${Planet});
    background-repeat: no-repeat;
    background-size: cover; */

`;

export const SeparadorDiv = styled.div`

    img{
        margin-bottom: 5rem;
        /* transform: translate(50%,50%); */
    }
`;

export const SeparadorDivTextFerraments = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 30vh;
    margin-bottom: 1rem;
    max-height: 30vh;
    padding-left: 20%;

    strong{
        margin-bottom: 1rem;
    }

    div{
        margin-top: 2rem;
        a{
            text-decoration: none;
            color: ${theme.colors.white};
            :hover{
            color: ${theme.colors.silver100};
        }
        }
        p{
            margin-top: -15px
        }
    }

`;

export const SeparadorDivText = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 1rem;
    width: 50%;
    height: 28vh;
    max-height: 28vh;
    padding-right: 20%;
    img{
        padding: 5px;
    }
    a{
        text-decoration: none;
        color: ${theme.colors.white};
        :hover{
            color: ${theme.colors.silver100};
        }
    }

`;
