import React from 'react'
import { Card,Imagen, Name } from './StyledCardSevices'

const CardSevices = ({name, img}) => {
    return (
        <Card>
            <Imagen src={img}/>
            <Name>{name}</Name>
        </Card>
    )
}

export default CardSevices