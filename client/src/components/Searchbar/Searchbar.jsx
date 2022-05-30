import React from 'react'
import { Button, Container, Input } from './StyledSearchbar'

const Searchbar = () => {
  return (
    <Container>
        <Input placeholder="Busca aquí ..."/>
        <Button>Buscar</Button>
    </Container>
  )
}

export default Searchbar