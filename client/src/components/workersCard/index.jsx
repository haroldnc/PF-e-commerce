import React from "react";
import { Container, StyledPicture, LogoImg, StyledSpan, StyledName} from "./styledCard";

export default function Card({_id, name, image, title, services}){
    
    return(
        <Container>
        <picture>
        <StyledPicture src={image} alt={`${name} portfolio`} />
        </picture>
        <div>
        <a href="#">
        <LogoImg src={image} alt={`${name}'s profile pic`} />
        </a>
        <StyledSpan>{title}</StyledSpan>
        <StyledName>{name}</StyledName>
        </div> 
        </Container>
    )
}