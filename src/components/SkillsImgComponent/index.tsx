import React from "react";
import { 
    Container,
    IMG,
    Text
} from "./styles";

type Props ={
    urlImg: string;
    skillText: string;
}
export function SkillsImgComponent({skillText, urlImg,...rest}:Props){
    return(
        <Container {...rest}>
            <IMG src={urlImg}></IMG>
            <Text>{skillText}</Text>
        </Container>
    );
}