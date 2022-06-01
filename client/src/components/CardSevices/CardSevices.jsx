import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Imagen, Name } from './StyledCardSevices'

const CardSevices = ({name, img, id}) => {
    return (
        <Card>
            <Link to={`/servicios/${id}`}>
            <Imagen src={img}/>
            </Link>
            <Name>{name}</Name>
        </Card>
    )
}

export default CardSevices