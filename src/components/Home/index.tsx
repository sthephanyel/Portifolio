import React from "react";
import {
    Container, 
    DivUp, 
    LogoInfinit, 
    DivText, 
    DivLogoInfinit, 
    LinkText,
    Image, 
    DivTextMobile,
    DivUpMobile
} from './styles'
import INFINITY from '../../icon/INFINIT.jpeg';
import { Introduction } from "../Introduction";
import { House, User, Books, Code, ChatCenteredDots } from "phosphor-react";

export function Home(){
    const [isOpen, setIsOpen] = React.useState(false);
    const nodeRef = React.useRef(null);
    return(
        <Container>
            {/* <Image src={wallpaperCat}></Image> */}
            <DivUp>
                <DivLogoInfinit>
                    <LogoInfinit src={INFINITY} alt="infinit" />
                </DivLogoInfinit>
                <DivText>
                    <div><LinkText href="#">HOME</LinkText></div>
                    <div><LinkText href="#AboutMe">SOBRE MIM</LinkText></div>
                    <div><LinkText href="#Skills">SKILLS</LinkText></div>
                    <div><LinkText href="#Projects">PROJETOS</LinkText></div>
                    <div><LinkText href="#GeneralInformation">CONTATOS</LinkText></div>
                </DivText>
            </DivUp>
            <DivUpMobile>
                <DivTextMobile>
                    <div style={{width:'100%',justifyContent:"space-around", display: 'flex'}}>
                        <LinkText href="#"><House size={36} color="#fafafa" /></LinkText>
                        <LinkText href="#AboutMe"><User size={36} color="#fafafa" /></LinkText>
                        <LinkText href="#Skills"><Books size={36} color="#fafafa" /></LinkText>
                        <LinkText href="#Projects"><Code size={36} color="#fafafa" /></LinkText>
                        <LinkText href="#GeneralInformation"><ChatCenteredDots size={36} color="#fafafa" /></LinkText>
                    </div>
                </DivTextMobile>
            </DivUpMobile>
            <p style={{color: 'transparent'}}>...</p>
            <Introduction/>
        </Container>
    );
}