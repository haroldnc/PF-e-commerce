import React from "react";
import {
  Container,
  StyledPicture,
  LogoImg,
  StyledSpan,
  StyledName,
  Column,
  Row
} from "./styledCard";
import { Link } from "react-router-dom";
export default function Card({
  id,
  name,
  image,
  title,
  portfolioImage,
  services,
}) {
  return (
    <Link to={`/worker/${id}`}>
      <Container>
          <StyledPicture src={portfolioImage} alt={`${name} portfolio`} />
        <Row>
          <LogoImg src={image} alt={`${name}'s profile pic`} />
          <Column>
            <StyledSpan>{title}</StyledSpan>
            <StyledName>{name}</StyledName>
          </Column>
        </Row>
      </Container>
    </Link>
  );
}
