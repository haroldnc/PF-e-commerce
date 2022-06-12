import React, { useState, useEffect } from "react";
import { useHistory , useParams } from "react-router-dom";
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

const Navbar = ({ toggle, toggleModalSignUp, toggleModalLogIn, userInfo, toggleModalSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useHistory();

  const ruta = (window.location.href).substr(-5)
  
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
    <Container isScrolled={isScrolled} ruta={ruta}>
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
          {userInfo && userInfo.confirm_email === true  ? (
            <UserInfo>
              {userInfo.user_role.name && userInfo.user_role.name  === "user"  && (<UserRole>Usuario</UserRole>)}
              {userInfo.user_role.name && userInfo.user_role.name  === "worker"  && (<UserRole>Worker</UserRole>)}
              {userInfo.user_role === "628eefd607fe8bf42fb6a5f5" && <UserRole>Usuario</UserRole>}
              {userInfo.user_role === "628ef02007fe8bf42fb6a5f8" && <UserRole>Worker</UserRole>}

              <Profile onClick={handleToggle}  img={userInfo.image}>
              </Profile>
              
                <ProfileBox isOpen={isOpen} toggleModalSignOut={toggleModalSignOut} handleToggle={handleToggle} userInfo={userInfo}/>
              
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
