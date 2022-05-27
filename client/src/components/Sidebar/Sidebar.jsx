import React from 'react'
import { CloseIcon, Container, LogIn, NavLinks, SignIn } from './StyledSidebar'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <Container isOpen={isOpen}>
        <CloseIcon onClick={toggle}/>
        <NavLinks>
          <li>Home</li>
          <SignIn>Sign In</SignIn>
          <LogIn>Log In</LogIn>
        </NavLinks>
    </Container>
  )
}

export default Sidebar