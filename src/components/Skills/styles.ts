import styled from "styled-components";
import { theme } from './../../global/styles/theme';

export const Container = styled.div`
    padding-top: 2rem;
    width: 100%;
    height: auto;
    min-height: 130vh;
    background-image: radial-gradient(${theme.colors.basesecond});
    background-size: cover;
    display: block;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SkillTitleDiv = styled.div`
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 1rem;
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
export const SkillTitle = styled.h1`
    font-size: 4rem;
`;

export const SkillIconesDiv = styled.div`
    display: flex;
    /* quebra os elementos e mantem na linha */
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
