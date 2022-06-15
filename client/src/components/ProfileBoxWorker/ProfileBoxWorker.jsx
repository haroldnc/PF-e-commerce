import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './styledProfileBoxWorker'

const ProfileBoxWorker = ({isOpen,toggleModalSignOut, handleToggle, userInfo}) => {
  const history = useHistory()

  //62a29a4bfb1c43631f420701

  // console.log('usuario',userInfo.username)
  const handleClick = () => {
<<<<<<< HEAD:client/src/components/ProfileBoxUser/ProfileBoxUser.jsx
    history.push(`/profile/${userInfo.uid}`)
  }
  const handleGoFavs = () => {
    history.push(`/favoritos/${userInfo.uid}`);
  }
=======
    history.push(`/profile/${userInfo.uid}?us=${userInfo.username}`);
  };
>>>>>>> 838c228121a898e3de3e10211b678edf6fa0b935:client/src/components/ProfileBoxWorker/ProfileBoxWorker.jsx
  
  return (
    <Container isOpen={isOpen}>
      <ul onClick={handleToggle}>
        <li onClick={() => handleClick()}>Perfil</li>
<<<<<<< HEAD:client/src/components/ProfileBoxUser/ProfileBoxUser.jsx
        <li onClick={() => handleGoFavs()}>Favoritos</li>
=======
        <Link to="/publicar"><li>Publicar</li></Link>
>>>>>>> 838c228121a898e3de3e10211b678edf6fa0b935:client/src/components/ProfileBoxWorker/ProfileBoxWorker.jsx
        <li onClick={toggleModalSignOut} >Cerrar sesión</li>
      </ul>
    </Container>
  );
};

export default ProfileBoxWorker;