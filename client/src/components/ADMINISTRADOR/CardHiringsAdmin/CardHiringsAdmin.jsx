import React from "react";
import { useHistory } from "react-router-dom";

import { ContainerHiring,
        DivProfile,
        ProfilePicture,
        UserName,
        Correo,
        Phone,
        Monto
        } from './CardHiringsAdmin'

const CardHiringsAdmin = ({user, worker, post, status, handleChange}) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/posts/detail/${post._id}`)
    }

    return(
        <ContainerHiring>
            <DivProfile>
                <ProfilePicture src={worker.image} alt="img" />
                <UserName>{worker.firstName} {worker.lastName}</UserName>
            </DivProfile>
            <DivProfile>
                <ProfilePicture src={user.image} alt="img" />
                <UserName>{user.firstName} {user.lastName}</UserName>
            </DivProfile>
            <Correo onClick={handleClick}>{post.title}</Correo>
            <Phone>USD {post.price}</Phone>
            <Monto onClick={() => handleChange(post._id,user._id, status )} status={status}>{status ? "Cerrada" : "Abierta"}</Monto>
        </ContainerHiring>
    )
}

export default CardHiringsAdmin