import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import {
  Container,
  Image,
  Left,
  LeftWrapper,
  Right,
  Title,
  Wrapper,
} from "./StyledHero";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Title>Bienvenido a <span>Wixxer</span><br />donde puedes conectar <br /> con el trabajo que necesitas</Title>
            <Searchbar />
        </Left>
        <Right>
          <Image />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
