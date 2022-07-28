import styled from "styled-components";
import { theme } from './../../global/styles/theme';

export const Container = styled.div`
    width:15rem;
    height:14rem;
    overflow: hidden;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0.5rem;
`;
export const IMG = styled.img`
    width: 60%;
    height: 60%;
`;
export const Text = styled.p`
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 2rem;
`;