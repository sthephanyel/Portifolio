import React from "react";
import {Container, SeparadorDiv, SeparadorDivText,SeparadorDivTextFerraments} from './styles'
import LinkDin from '../../icon/linkdin.png';
import WhatsApp from '../../icon/whatsapp.png';
import INFINITY from '../../icon/INFINIT.jpeg';
import { Introduction } from "../Introduction";

export function GeneralInformation(){
    return(
        <Container id="GeneralInformation">
            <SeparadorDivTextFerraments>
                <strong>Ferramentas</strong>
                <br/>
                <div>
                    <a href="https://vitejs.dev/" target="_blank"><p>Vite Js</p></a>
                    <a href="https://getbootstrap.com/" target="_blank"><p>Bootstrap</p></a>
                    <a href="https://styled-components.com/" target="_blank"><p>Styled-Components</p></a>
                    <a href="https://pt-br.reactjs.org/" target="_blank"><p>React Js</p></a>
                    <a href="https://www.wallpaperflare.com/" target="_blank"><p>Wallpaperflare</p></a>
                </div>
            </SeparadorDivTextFerraments>
            <SeparadorDiv>
                <img src={INFINITY} width="70rem"></img>
            </SeparadorDiv>
            <SeparadorDivText>
            <strong>Contatos</strong>
                <a href="mailto:sthephanyelsilva3@gmail.com" target="_blank"><p>E-mail</p></a>
                <a href="https://contate.me/sthephanyel" target="_blank"><img src={WhatsApp} width="50rem"></img></a>
                <a href="https://www.linkedin.com/in/sthephanyel-silva-pinheiro-a8a875183" target="_blank"><img src={LinkDin} width="50rem"></img></a>
            </SeparadorDivText>
        </Container>
    );
}