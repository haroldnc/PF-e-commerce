import React from "react";

import { ContainerCard, CardImag, Title, Name, Price, Active } from './CardPublicAdmin'

const CardPublicAdmin = ({image, title, price, worker, active, id, handleChange}) => {
    return (
        <ContainerCard>
            <CardImag  src={image} alt="img"/>
            <Name>{worker}</Name>
            <Title>{title}</Title>
            <Price>USD {price}</Price>
            <Active active={active} onClick={() => handleChange(id,active )}>{active ? "Activa": "Inactiva"}</Active>
        </ContainerCard>
    )
}

export default CardPublicAdmin
