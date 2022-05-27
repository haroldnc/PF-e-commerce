import React from 'react'
import { Button, Container, Input } from './StyledSearchbar'

const Searchbar = () => {
  return (
    <Container>
        <Input placeholder="Search here..."/>
        <Button>Search</Button>
    </Container>
  )
}

export default Searchbar