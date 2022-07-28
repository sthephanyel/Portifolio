import React, { useEffect, useState } from "react";
import {
    Container,
    DescriptionDiv,
    DescriptionDivCenter,
    DescriptionTitleContainer,
    DescriptionTitle,
    DescriptionIconeComp,
    DescriptionMe,
    DescriptionP,
    PhotoDiv,
    PhotoDescription
} from './styles'

import miniPc from '../../icon/mini-pc.png'
// import EU from '../../assets/EU.jpg'
import './styles.css'

export function AboutMe(){
    const UrlGitPhoto = 'https://github.com/sthephanyel.png';

    const [valueStyle, setValueStyle]= useState('defaultStyleAnimate');
    const [valueStyleRi, setValueStyleRi]= useState('defaultStyleAnimate');

    useEffect(()=>{
        const scrollListener = ()=>{
            if(window.scrollY > 255) {
            setValueStyle('styleTextRight');
            setValueStyleRi('styleImgLeft');
            // console.log('>400');
            }
            else{
            // console.log('400');
            setValueStyle('defaultStyleAnimate');
            setValueStyleRi('defaultStyleAnimate');

            }
        }
        window.addEventListener('scroll',scrollListener);
  
        return() =>{
            window.removeEventListener('scroll',scrollListener);
        }
        },[])

    return(
        <Container id="AboutMe">
            <PhotoDiv className={valueStyleRi}>
                <PhotoDescription src={UrlGitPhoto} alt='Foto'></PhotoDescription>
            </PhotoDiv>
            <DescriptionDiv className={valueStyle}>
                <DescriptionDivCenter>
                    <DescriptionTitleContainer>
                        <DescriptionTitle>Sobre Mim</DescriptionTitle>
                        <DescriptionIconeComp src={miniPc}></DescriptionIconeComp>
                    </DescriptionTitleContainer>
                    <DescriptionMe>
                        Um Profissional apaixonado pelo que faz! Tenho experiência na parte 
                    de <span>desenvolvimento web</span>, <span>mobile</span> e <span>na área </span> 
                     de automação. <br/>
                    <br/>
                    Sou programador apaixonado pela tecnologia e sempre procurando
                    meios para me aperfeiçoar cada vez mais e transmitir esse
                    conhecimento para o próximo sempre que possível. <br/>
                    Estou sempre aberto e disposto a aprender coisas novas, <br/>
                    <br/>
                    e tenho como ambição novos desafios com algo que me faça evoluir cada vez mais !<br/>
                    </DescriptionMe>
                    <DescriptionP>Todo conhecimento é valido.</DescriptionP>
                </DescriptionDivCenter>
            </DescriptionDiv>
            
        </Container>
    );
}