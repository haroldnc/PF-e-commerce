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
            <Title>Welcome to <span>Wixer</span><br />the site where you can<br /> connect the job you need</Title>
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
