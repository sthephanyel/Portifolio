import React from "react";
import {
    Container,
    Picks,
    ButtonGit,
    GitDiv
} from './styles'
export function Introduction(){
    return(
        <Container id="Introduction">
            {/* Utilizei props para enviar os parametros que serão usados no tamanho de cada uma das linhas */}
            {/* Dessa forma não preciso escrever um estilo individual para cada campo,  */}
            {/* Já que os parametros são definidos aqui, e aproveitados pelo css logo em seguida */}
            <Picks theme={{borderWidth:'0.1', borderWidthDistance:'0.1', height:'8'}} style={{marginRight: '-0.1rem'}}></Picks>
            <Picks theme={{borderWidth:'0.2', borderWidthDistance:'0.2', height:'9'}}></Picks>
            <Picks theme={{borderWidth:'0.3', borderWidthDistance:'0.3', height:'10'}}></Picks>
            <Picks theme={{borderWidth:'0.4', borderWidthDistance:'0.4', height:'11'}}></Picks>
            <Picks theme={{borderWidth:'0.5', borderWidthDistance:'0.4', height:'12'}}></Picks>
            <div>
                <h2>Olá meu nome é:</h2>
                <div>
                    <h1>Sthephanyel Silva Pinheiro</h1>
                </div>
                <h2>Front-End Developer</h2>
                <GitDiv>
                    <ButtonGit href="#">Ver GitHub</ButtonGit>
                </GitDiv>
            </div>
        </Container>
    );
}