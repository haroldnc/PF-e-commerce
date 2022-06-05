import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  HamburguerMenuIcon,
  LinksContainer,
  LogIn,
  Profile,
  Right,
  SignIn,
  TitleContainer,
  UserInfo,
  UserRole,
  Wrapper,
} from "./StyledNavbar";
import ScrolledSearchbar from "./ScrolledSearchbar/ScrolledSearchbar";
import ProfileBox from "../ProfileBox/ProfileBox";

const Navbar = ({ toggle, toggleModalSignUp, toggleModalLogIn, userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useHistory();

  const navScroll = () => {
    if (window.scrollY >= 220) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <Right>
          <TitleContainer onClick={handleClick}>
            <h1>wixxer</h1>
          </TitleContainer>
          <div>
            <ScrolledSearchbar isScrolled={isScrolled} />
          </div>
        </Right>
        <div>
          {userInfo && userInfo ? (
            <UserInfo>
              {userInfo.usuario.user_role.name === "user" && (<UserRole>Usuario</UserRole>)}
              {userInfo.usuario.user_role.name === "worker" && (<UserRole>Worker</UserRole>)}
              <Profile onClick={handleToggle}>
                
              </Profile>
              
                <ProfileBox isOpen={isOpen}/>
              
              <ProfileBox />
            </UserInfo>
          ) : (
            <LinksContainer>
              <li>
                <button></button>
              </li>
              <li>
                <SignIn onClick={toggleModalLogIn}>Iniciar sesión</SignIn>
              </li>
              <li>
                <LogIn onClick={toggleModalSignUp}>Registrarse</LogIn>
              </li>
            </LinksContainer>
          )}

          <HamburguerMenuIcon onClick={toggle} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
