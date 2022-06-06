import React from "react";

import { ContainerCardAdminR, ProfilePicture, DivProfile, Worker, UserName, Correo, Icon } from './CardAdminR'

import { AiOutlineEye } from 'react-icons/ai'
import { IconContext } from "react-icons";

const CardAdminR = () => {
    return (
        <ContainerCardAdminR>
            <DivProfile>
                <ProfilePicture src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} alt="img" />
                <UserName>MatedsM</UserName>
            </DivProfile>
            <Correo>madime-1997@hotmail.com</Correo>
            <Correo>313634543</Correo>
            <Worker>Worker</Worker>
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