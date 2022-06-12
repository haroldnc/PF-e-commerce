import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './StyledProfileBox'

const ProfileBox = ({isOpen,toggleModalSignOut, handleToggle, userInfo}) => {
  const history = useHistory()

  //62a29a4bfb1c43631f420701

  // console.log('usuario',userInfo.username)
  const handleClick = () => {

    history.push(`/profile/${userInfo.uid}?us=${userInfo.username}`);
  };
  const handleGoFavs = () => {
    history.push(`/favoritos/${userInfo.uid}`);
  }


  return (
    <Container isOpen={isOpen}>
      <ul onClick={handleToggle}>
        <li onClick={() => handleClick()}>Perfil</li>
        <li onClick={() => handleGoFavs()}>Favoritos</li>
        <li onClick={toggleModalSignOut} >Cerrar sesión</li>
      </ul>
    </Container>
  );
};

export default ProfileBox;
