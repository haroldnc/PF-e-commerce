import React from "react";
import {
  CloseIcon,
  Container,
  LogIn,
  NavLinks,
  SignIn,
  InfoUser,
  UserRole,
  Profile,
  InfoUserLinks,
} from "./StyledSidebar";
import { Link, useHistory } from "react-router-dom";

const Sidebar = ({ isOpen, toggle, userInfo, isOpenModalSignOut, toggleModalSignOut, toggleModalLogIn, toggleModalSignUp }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/profile/${userInfo.uid}`);
  };
  const handleGoFavs = () => {
    history.push(`/favoritos/${userInfo.uid}`);
  };
  return (
    <Container isOpen={isOpen}>
      <CloseIcon onClick={toggle} />
      {userInfo && userInfo.confirm_email === true ? (
        <InfoUser>
          {/* {userInfo.user_role.name === "admin" && <Link to="/admin"><p>Administrar</p></Link>}
              {userInfo.user_role === "628ef02d07fe8bf42fb6a5fa" && <Link to="/admin"><p>Administrar</p></Link>} */}
          <Profile img={userInfo.image} />
          {userInfo.user_role.name && userInfo.user_role.name === "user" && (
            <UserRole>Usuario</UserRole>
          )}
          {userInfo.user_role.name && userInfo.user_role.name === "worker" && (
            <UserRole>Worker</UserRole>
          )}
          {userInfo.user_role === "628ef02007fe8bf42fb6a5f8" && (
            <UserRole>Usuario</UserRole>
          )}
          {userInfo.user_role === "628eefd607fe8bf42fb6a5f5" && (
            <UserRole>Worker</UserRole>
          )}
          {userInfo.user_role.name === "user" && (
            <InfoUserLinks>
              <ul>
                <li onClick={() => handleClick()}>Perfil</li>
                <li onClick={() => handleGoFavs()}>Favoritos</li>
                <li onClick={toggleModalSignOut}>Cerrar sesión</li>
              </ul>
            </InfoUserLinks>
          )}
          {userInfo.user_role === "628eefd607fe8bf42fb6a5f5" && (
            <InfoUserLinks>
              <ul>
                <li onClick={() => handleClick()}>Perfil</li>
                <li onClick={() => handleGoFavs()}>Favoritos</li>
                <li onClick={toggleModalSignOut}>Cerrar sesión</li>
              </ul>
            </InfoUserLinks>
          )}
          {userInfo.user_role.name === "worker" && (
            <InfoUserLinks>
              <ul>
                <li onClick={() => handleClick()}>Perfil</li>
                <li onClick={() => handleGoFavs()}>Favoritos</li>
                <Link to="/publicar">
                  <li>Publicar</li>
                </Link>
                <li onClick={toggleModalSignOut}>Cerrar sesión</li>
              </ul>
            </InfoUserLinks>
          )}
          {userInfo.user_role === "628ef02007fe8bf42fb6a5f8" && (
            <InfoUserLinks>
              <ul>
                <li onClick={() => handleClick()}>Perfil</li>
                <li onClick={() => handleGoFavs()}>Favoritos</li>
                <Link to="/publicar">
                  <li>Publicar</li>
                </Link>
                <li onClick={toggleModalSignOut}>Cerrar sesión</li>
              </ul>
            </InfoUserLinks>
          )}
        </InfoUser>
      ) : (
        <NavLinks>
          <SignIn onClick={toggleModalSignUp}>Registrarse</SignIn>
          <LogIn onClick={toggleModalLogIn}>Iniciar sesión</LogIn>
        </NavLinks>
      )}
    </Container>
  );
};

export default Sidebar;
