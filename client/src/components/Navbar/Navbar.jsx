import React, { useState, useEffect } from "react";
import {
  Container,
  HamburguerMenuIcon,
  LinksContainer,
  LogIn,
  Right,
  SignIn,
  TitleContainer,
  Wrapper,
} from "./StyledNavbar";
import ScrolledSearchbar from "./ScrolledSearchbar/ScrolledSearchbar";

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 220) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <Right>
          <TitleContainer>
            <h1>wixer</h1>
          </TitleContainer>
          <div>
            <ScrolledSearchbar isScrolled={isScrolled}/>
          </div>
        </Right>
        <div>
          <HamburguerMenuIcon onClick={toggle} />
          <LinksContainer>
            <li>Home</li>
            <li>
              <button></button>
            </li>
            <li>
              <SignIn>Sign In</SignIn>
            </li>
            <li>
              <LogIn>Log In</LogIn>
            </li>
          </LinksContainer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
