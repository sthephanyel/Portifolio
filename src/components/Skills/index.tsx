import React, { useEffect, useState } from "react";
import {
    Container,
    SkillTitleDiv,
    SkillTitle,
    SkillIconesDiv
} from './styles';

import Html from '../../assets/icons8-html-5-480.png';
import Css from '../../assets/icons8-css3-480.png';
import JS from '../../assets/icons8-javascript-480.png';
import ReactJs from '../../assets/icons8-react-480.png';
import NextJs from '../../assets/nextjs-drupal.jpg';
import ReactNative from '../../assets/icons8-react-native-480.png';
import Bootstrap from '../../assets/icons8-bootstrap-480.png';
import Git from '../../assets/icons8-git-480.png';
import './styles.css'
import { SkillsImgComponent } from "../SkillsImgComponent";

export function Skills(){
    const [valueStyle, setValueStyle]= useState('defaultStyleAnimate');

    useEffect(()=>{
        const scrollListener = ()=>{
            if(window.scrollY > 1100) {
            setValueStyle('styleTextRightSkill');
            // console.log('>400');
            }
            else{
            // console.log('400');
            setValueStyle('defaultStyleAnimate');

            }
        }
        window.addEventListener('scroll',scrollListener);
  
        return() =>{
            window.removeEventListener('scroll',scrollListener);
        }
        },[])
    return(
        <Container id="Skills">
            <SkillTitleDiv>
                <SkillTitle>Skills</SkillTitle>
            </SkillTitleDiv>
            <SkillIconesDiv>
                
                    <SkillsImgComponent className={valueStyle}  skillText='HTML' urlImg={Html}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='CSS3' urlImg={Css}/>
                
                
                  <SkillsImgComponent className={valueStyle}killText='JavaScript' urlImg={JS}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='React Js' urlImg={ReactJs}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='Next Js' urlImg={NextJs}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='Next Js' urlImg={NextJs}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='React Native' urlImg={ReactNative}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='React Native' urlImg={ReactNative}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='BootsTrap' urlImg={Bootstrap}/>
                
                
                    <SkillsImgComponent className={valueStyle} skillText='Git' urlImg={Git}/>
                
            </SkillIconesDiv>
        </Container>
    );
}