import React, { useState } from 'react'
import { Button, Container, Input } from './StyledSearchbar'
import { useDispatch } from "react-redux"
import { getPostByQuery } from '../../store/actions'
import {Link} from "react-router-dom"


const Searchbar = () => {

  const dispatch = useDispatch()
  const [data, setData] = useState("")

  const onSearch = () =>{
    if(data.length){
      dispatch(getPostByQuery(data))
    }
    
  }

  const handleChange = (e)=>{
    setData(e.target.value)
  }

  return (
    <Container>
        <Input onChange={handleChange} placeholder="Busca aquí ..."/>
        { data?
          <Link to={"/search"}>
          <Button onClick={onSearch}>Buscar</Button>
          </Link>
          :
          <Button onClick={onSearch}>Buscar</Button>
        }
    </Container>
  )
}

export default Searchbar