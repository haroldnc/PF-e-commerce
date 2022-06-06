import React from 'react'
import { Container } from './StyledProfileBox'

const ProfileBox = ({isOpen,toggleModalSignOut, handleToggle}) => {
  return (
    <Container isOpen={isOpen}>
        <ul onClick={handleToggle}>
                  <li>Perfil</li>
                  <li onClick={toggleModalSignOut} >Cerrar sesión</li>
                </ul>
    </Container>
  )
}

export default ProfileBox