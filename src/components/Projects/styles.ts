import { theme } from './../../global/styles/theme';
import React from "react";
import styled from 'styled-components';
import Stars from './stars-1.jpg';

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    min-height: 120vh;
    background-image: radial-gradient(${theme.colors.basesecond});
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image:url(${Stars});
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
            background-position: bottom;
            background-size: cover;
    /* flex-direction: row; */
`;
export const ContainerRow = styled.div`
    padding-top: 5rem;
`;

export const RowItems = styled.div`
    display: flex;
    font-family: ${theme.fonts.novaRound};
    align-items: center;
    text-align: center;
    position:relative;
    div{
        background-color: ${theme.colors.colorContainerGit};
        color: ${theme.colors.white};
        overflow: hidden;
        text-overflow: ellipsis;
        div{
            strong{
                font-size: 1.9rem;
            }
        }
    }
`;
export const ButtonLink = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;

    div{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        /* margin: 0px 150px 0px 150px; */
        height: 3rem;
        border: 1px solid ${theme.colors.white};
        weight: bold;
        
        :hover{
            background-color: ${theme.colors.white};
            transition: all 0.3s ease;
        }

        a{  
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: ${theme.colors.white};
            :hover{
                transition: all 0.3s ease;
                color: ${theme.colors.colorContainerGit};
            }
        }
    }
`;

export const ProjectTitleDiv = styled.div`
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-top: 4rem;
    h1{
        font-size: 4rem;
    }

    :before{
        content:'< >';
        color: ${theme.colors.gold};
        font-size:1.5rem;
        font-weight:bold;
    }
    :after{
        content:'</>';
        color: ${theme.colors.gold};
        font-size:1.5rem;
        font-weight:bold;
    }
`;