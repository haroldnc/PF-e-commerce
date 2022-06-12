import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './styledProfileBoxUser'

const ProfileBoxWorker = ({isOpen,toggleModalSignOut, handleToggle, userInfo}) => {
  const history = useHistory()

  //62a29a4bfb1c43631f420701

  // console.log('usuario',userInfo.username)
  const handleClick = () => {
    history.push(`/profile/${userInfo.uid}?us=${userInfo.username}`);
  };
  
  return (
    <Container isOpen={isOpen}>
      <ul onClick={handleToggle}>
        <li onClick={() => handleClick()}>Perfil</li>
        <Link to="/publicar"><li>Publicar</li></Link>
        <li onClick={toggleModalSignOut} >Cerrar sesión</li>
      </ul>
    </Container>
  );
};

export default ProfileBoxWorker;