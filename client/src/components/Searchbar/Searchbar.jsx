import React, { useState } from 'react'
import { Button, Container, Input } from './StyledSearchbar'
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from '../../store/actions'

const Searchbar = () => {

  const dispatch = useDispatch()
  const allPosts = useSelector((state)=>state.allPost)
  const [data, setData] = useState("")

  const onSearch = () =>{
    dispatch(getAllPosts())
  }

  const handleChange = (e)=>{
    setData(e.target.value)
  }

  return (
    <Container>
        <Input placeholder="Busca aquí ..."/>
        <Button>Buscar</Button>
    </Container>
  )
}

export default Searchbar