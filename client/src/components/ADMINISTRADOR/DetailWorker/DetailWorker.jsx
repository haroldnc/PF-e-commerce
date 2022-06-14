import React from "react";

import { Container, Imagen, Name, BtnBaja } from './DetailWorker'

const DetailWorker = ({UserDetail, PostById}) => {

    console.log('Worer',UserDetail)
    console.log('posts', PostById)
    return(
        <Container>
            <div style={{display:"flex", flexDirection:"row"}}>
                <Imagen src={UserDetail.user.image}/>
                <div style={{marginLeft:"50px"}}>
                    <Name>{UserDetail.user.firstName}  {UserDetail.user.lastName}</Name>
                    <Name>{UserDetail.user.username}</Name>
                    <Name>{UserDetail.user.email}</Name>
                    <Name>{UserDetail.dataWorker.phone}</Name>
                </div>
            </div>
            <Name>{UserDetail.dataWorker.subscribed? "Activo": "Inactivo"}</Name>
            <Name>{UserDetail.dataWorker.subscribed?UserDetail.dataWorker.subscription_type.name: null }</Name>
            <Name>{UserDetail.dataWorker.title}</Name>
            <Name>{UserDetail.dataWorker.aboutMe}</Name>
            <Name>{UserDetail.dataWorker.linkedin}</Name>
            <Name>{UserDetail.dataWorker.web}</Name>
            <Name>Publicaciones:</Name>
            <Name>Totales: {PostById.length}</Name>
            <Name>Activas: {PostById.filter(p => p.active === true).length}</Name>
            <BtnBaja>Dar baja a Worker</BtnBaja>



            

        </Container>
    )
}


export default DetailWorker
