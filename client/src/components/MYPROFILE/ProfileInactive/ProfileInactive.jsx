import React from "react";

import { ContainerInactive, Title, Txtone, TxtTwo, ActivaPlan, BtnAcive } from './ProfileInactive'


const ProfileInactive = ({toggleModalPayment}) => {


    const handleClick = () =>{
        toggleModalPayment()
    }

    return (
        <ContainerInactive>
            <Title>Tu perfil actualmente se encuentra inactivo</Title>
            <Txtone>No podrás publicar ningun servicio ni ver los que hayas creado hasta el momento</Txtone>
            <TxtTwo>No pierdas la oportunidad de ofrecer tus servicios</TxtTwo>
            <ActivaPlan>¡Activa tu plan ahora! ¡Muchos usuarios estan esperandote!</ActivaPlan>
            <BtnAcive onClick={handleClick}>Pagar suscripción</BtnAcive>
        </ContainerInactive>
    )
}

export default ProfileInactive