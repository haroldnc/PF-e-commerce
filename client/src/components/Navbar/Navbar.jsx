import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
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

const Navbar = ({ toggle, toggleModalSignUp, toggleModalLogIn }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const history = useHistory()
  
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

  const handleClick =() => {
    history.push("/")

  }
  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <Right>
          <TitleContainer onClick={handleClick}>
            <h1>wixer</h1>
          </TitleContainer>
          <div>
            <ScrolledSearchbar isScrolled={isScrolled} />
          </div>
        </Right>
        <div>
          <HamburguerMenuIcon onClick={toggle} />
          <LinksContainer>
            
            <li>
              <button></button>
            </li>
            <li>
              <SignIn onClick={toggleModalLogIn}>Log In</SignIn>
            </li>
            <li>
              <LogIn  onClick={toggleModalSignUp}>Sign Up</LogIn>
            </li>
          </LinksContainer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
