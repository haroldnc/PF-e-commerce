import React from "react";
import { useHistory } from "react-router-dom";

import { ContainerHiring, 
        DivProfile, 
        UserName,
        ProfilePicture,
        Correo,
        Phone,
        Monto
     } from './CardHiringWorker'

const CardHiringWorker = ({user, post, open, id, status}) => {

    const history = useHistory()
    console.log(user)

    const handleClick = () => {
        history.push(`/posts/detail/${id}`)
    }

    if(user){    
        return(
            <ContainerHiring>
               <DivProfile>
                <ProfilePicture src={user && user.image} alt="img" />
                <UserName>{user && user.firstName} {user && user.lastName}</UserName>
            </DivProfile>
            <Correo onClick={handleClick}>{post.title}</Correo>
            <Phone>USD {post.price}</Phone>
            <Monto>{open}</Monto>
        </ContainerHiring>
        )
    }
}

export default CardHiringWorker