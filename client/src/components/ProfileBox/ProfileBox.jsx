import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './StyledProfileBox'

const ProfileBox = ({isOpen,toggleModalSignOut, handleToggle, userInfo}) => {

  const history = useHistory()

  const handleClick = () => {
    history.push(`/profile/${userInfo.uid}`)
  }
  return (
    <Container isOpen={isOpen}>
        <ul onClick={handleToggle}>
                  <li onClick={() => handleClick()}>Perfil</li>
                  <li onClick={toggleModalSignOut} >Cerrar sesión</li>
                </ul>
    </Container>
  )
}

export default ProfileBox