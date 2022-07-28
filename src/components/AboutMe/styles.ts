import styled from "styled-components";
import { theme } from './../../global/styles/theme';
import Stars from './stars-1.jpg';

export const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 130vh;
    display: flex;
    padding-top:5rem;
    background-image: radial-gradient(${theme.colors.basesecond});
    background-size: cover;
    background-image:url(${Stars});
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
            background-position: bottom;
            background-size: cover;
    /* flex-direction: row; */
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 550px) {
        display: block;
    }


`;
export const DescriptionDiv = styled.div`
    flex: 0 1 auto;
    width: 60%;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    transition: all 0.3s ease;
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const DescriptionDivCenter = styled.div`

`;

export const DescriptionTitleContainer = styled.div`
    justify-content: left;
    align-items: center;
    display: flex;
    text-align: center;
    margin: 1rem;
`;
export const DescriptionTitle = styled.h1`
    font-size: 4rem;
    font-family: ${theme.fonts.novaRound};
    margin-right: 1rem;
    color: ${theme.colors.white};
    font-weight: bold;

    @media (max-width: 780px) {
        font-size: 2.5rem;
    }
`;
export const DescriptionIconeComp = styled.img`
    width: 2.5rem;
`;

export const DescriptionMe = styled.p`
    text-align: left;
    font-family: ${theme.fonts.novaRound};
    font-size: 1.1rem;
    color: ${theme.colors.white};
    margin: 1rem;

    span{
        color: ${theme.colors.blue50}
    }
    @media (max-width: 780px) {
        font-size: 0.9rem;
        margin: 2rem;
    }
`;
export const DescriptionP = styled.p`
    font-family: ${theme.fonts.novaRound};
    color: ${theme.colors.white};
    font-weight: bold;
    :before{
        content:'</>';
        color: ${theme.colors.gold};
    }
    @media (max-width: 780px) {
        font-size: 0.8rem;
    }
`;

export const PhotoDiv = styled.div`
    /* position: absolute; */
    right: 0;
    /* display: inline-flex; */
    margin: 1rem;
    flex: 0 1 auto;
    width: 35%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    /* display: flex; */
    text-align: center;
    transition: all 0.3s ease;

    @media (max-width: 550px) {
        right: auto;
        width: 100%;
        margin: 0rem;
    }
`;
export const PhotoDescription = styled.img`
    width: 80%;
    height: auto;
    border: 0.3rem solid ${theme.colors.blue50};
    border-radius: 50%;
    box-shadow: 10px 40px 70px black,
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(0,0,0,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);

`;