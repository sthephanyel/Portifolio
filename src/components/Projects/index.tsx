import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { FileCode, FileCss, FileJs, FileTsx, Link as IconeLink, TerminalWindow} from "phosphor-react";
import {
    Container,
    ContainerRow,
    ProjectTitleDiv,
    RowItems,
    ButtonLink
} from './styles'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

type Repository = {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    language: string;
    topics: string;
    owner:{
        received_events_url: string;
        description: string;
    }
}

export function Projects(){
    const {data, isFetching, isLength} = useApi<Repository[]>('https://api.github.com/users/sthephanyel/repos')

    const Slider = ()=>{
        const [refCallback, slider] = useKeenSlider(
            {
                breakpoints: {
                    "(min-width: 400px)": {
                      slides: { perView: 1, spacing: 5 },
                    },
                    "(min-width: 800px)": {
                        slides: { perView: 2, spacing: 5 },
                      },
                    "(min-width: 1000px)": {
                      slides: { perView: 4, spacing: 10 },
                    },
                  },
                loop: true,
                slides: {
                    spacing: 15,
                  },
            },
            []
          )
          return(
            <RowItems ref={refCallback} className="keen-slider">
                {isFetching && <p>Carregando...</p>}
                {data?.map((sli, index) => (
                    <div style={{minHeight:'60vh', maxHeight:'60vh'}} key={index} className="keen-slider__slide">
                        <div style={{margin:'2rem'}}>
                            <strong>{sli.name}</strong>
                            <p 
                                style={{marginTop: '1rem', color: '#AAAAAA', fontSize:'0.8rem'}}
                                >
                                {sli.description}
                            </p>
                            <p>
                                {sli.language=='TypeScript'&&<FileTsx size={36} color="#fafafa" />}
                                {sli.language=='JavaScript'&&<FileJs size={36} color="#fafafa" />}
                                {sli.language=='CSS'&&<FileCss size={36} color="#fafafa" />}
                                {sli.language=='Shell'&&<TerminalWindow size={36} color="#fafafa" />}
                                {sli.language==null&&<FileCode size={36} color="#fafafa" />}
                                
                                {sli.language}</p>
                        </div>
                        <ButtonLink>
                            <div>
                                <a href={sli.html_url} target="_blank"><IconeLink/>Github</a>
                            </div>
                        </ButtonLink>
                    </div>
                ))}
            </RowItems>
          );
    }

    return(
        <Container id="Projects">
            <ProjectTitleDiv>
                <h1>Projects</h1>
            </ProjectTitleDiv>
            <ContainerRow>
                <div>
                    <Slider/>
                </div>
            </ContainerRow>
        </Container>
    );
}