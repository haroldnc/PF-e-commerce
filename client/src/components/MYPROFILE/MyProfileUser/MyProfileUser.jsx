import React from "react";

import { Container, ContainerUser, ImageProfile, Name, Correo, ProfilInfo } from './MyProfileUser'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons/lib"
import { CgProfile } from 'react-icons/cg'

const MyProfileUser = ({profile}) => {
    console.log('user', profile)
    return (
        <Container>
            <ContainerUser>
            <ImageProfile src={profile.user.image} alt="img" />
                <Name>{`${profile.user.firstName} ${profile.user.lastName}`}</Name>
                <ProfilInfo>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <CgProfile/>
                            </div>
                        </IconContext.Provider>
                        <Correo>{profile.user.username}</Correo>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <AiOutlineMail/>
                            </div>
                        </IconContext.Provider>
                        <Correo>{profile.user.email}</Correo>
                    </div>
                </ProfilInfo>
            </ContainerUser>
        </Container>
    )
}

export default MyProfileUser