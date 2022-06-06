import React from "react";

import { ContainerCardAdminR, ProfilePicture, DivProfile, Worker, UserName, Correo, Icon,Phone } from './CardAdminR'

import { AiOutlineEye } from 'react-icons/ai'
import { IconContext } from "react-icons";

const CardAdminR = ({ image, username, telefono, email, role}) => {
    return (
        <ContainerCardAdminR>
            <DivProfile>
                <ProfilePicture src={image} alt="img" />
                <UserName>{username}</UserName>
            </DivProfile>
            <Correo>{email}</Correo>
            <Phone>{telefono}</Phone>
            <Worker role={role}>{role}</Worker>
            <Icon>
                <IconContext.Provider value={{size:"20px", color: "#05668d"}}>
                    <div>
                        <AiOutlineEye/>
                    </div>
                </IconContext.Provider>
            </Icon>
           
        </ContainerCardAdminR>
    )
}

export default CardAdminR