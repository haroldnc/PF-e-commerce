import React from 'react'
import { Container } from './StyledProfileBox'

const ProfileBox = ({isOpen}) => {
  return (
    <Container isOpen={isOpen}>
        <ul>
                  <li>Profile</li>
                  <li>Sign Out</li>
                </ul>
    </Container>
  )
}

export default ProfileBox