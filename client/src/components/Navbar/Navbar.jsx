import React from "react";
import {
  Container,
  HamburguerMenuIcon,
  LinksContainer,
  LogIn,
  SignIn,
  Wrapper,
} from "./StyledNavbar";

const Navbar = ({toggle}) => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>wixer</h1>
        </div>
        <div>
          <HamburguerMenuIcon onClick={toggle}/>
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
