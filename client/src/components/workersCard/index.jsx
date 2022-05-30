import React from "react";
import { Container, StyledPicture, LogoImg, StyledSpan, StyledName} from "./styledCard";
import {Link} from "react-router-dom"
export default function Card({id, name, image, title, portfolioImage, services}){
    
    return(
        <Link to={`/worker/${id}`}>
        <Container>
        <picture>
        <StyledPicture src={portfolioImage} alt={`${name} portfolio`} />
        </picture>
        <div>
        <a href="#">
        <LogoImg src={image} alt={`${name}'s profile pic`} />
        </a>
        <StyledSpan>{title}</StyledSpan>
        <StyledName>{name}</StyledName>
        </div> 
        </Container>
        </Link>
    )
}