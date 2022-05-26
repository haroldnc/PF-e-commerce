import React from 'react'
import { Button, Container, Input } from './StyledScrolledSearchbar'

const ScrolledSearchbar = ({isScrolled}) => {
  return (
    <Container isScrolled={isScrolled}>
        <Input placeholder="Search here..." />
        <Button>Search</Button>
    </Container>
  )
}

export default ScrolledSearchbar