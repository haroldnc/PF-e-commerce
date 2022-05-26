import React from "react";
import { Container, StyledPicture, LogoImg, StyledSpan, StyledName} from "./styledCard";

export default function Card({id, name, profile_photo, profession, services, porfolio_pic}){
    
    return(
        <Container>
        <picture>
        <StyledPicture src={porfolio_pic} alt={`${name} portfolio`} />
        </picture>
        <div>
        <a href="#">
        <LogoImg src={profile_photo} alt={`${name}'s profile pic`} />
        </a>
        <StyledSpan>{profession}</StyledSpan>
        <StyledName>{name}</StyledName>
        </div>
        </Container>
    )
}