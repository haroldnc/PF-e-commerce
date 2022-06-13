import React, { useState } from 'react'
import { Button, Container, Input } from './StyledScrolledSearchbar'
import { getPostByQuery } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ScrolledSearchbar = ({isScrolled}) => {

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
    <Container isScrolled={isScrolled}>
      <Input onChange={handleChange} placeholder="Search here..." />
      {data?
        <Link to={"/search"}>
        <Button onClick={onSearch}>Search</Button>
        </Link>
        :
        <Button onClick={onSearch}>Search</Button>
      }
    </Container>
  )
}

export default ScrolledSearchbar