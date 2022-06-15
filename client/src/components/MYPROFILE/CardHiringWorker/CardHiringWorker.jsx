import React from "react";

import { ContainerHiring, 
        DivProfile, 
        UserName,
        ProfilePicture,
        Correo,
        Phone,
        Monto
     } from './CardHiringWorker'

const CardHiringWorker = ({user, post, open}) => {

    return(
        <ContainerHiring>
               <DivProfile>
                <ProfilePicture src={user.image} alt="img" />
                <UserName>{user.firstName} {user.lastName}</UserName>
            </DivProfile>
            <Correo>{post.title}</Correo>
            <Phone>USD {post.price}</Phone>
            <Monto>{open}</Monto>
        </ContainerHiring>
    )
}

export default CardHiringWorker