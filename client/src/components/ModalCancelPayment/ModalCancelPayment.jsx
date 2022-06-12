import React, { useState } from "react";

import { ContainerCancel, DivGlob, Title, Text, BtnCancel, BtnNoCancel, BtnDiv } from './ModalCancelPayment'
 
const ModalCancelPayment = ({isOpenPaymentCancel, toggleModalPaymentCancel, toggleModalType}) => {

    const handleclickCancel = () => {
        toggleModalType()
        toggleModalPaymentCancel()
    }

    return (
        <ContainerCancel isOpenPaymentCancel={isOpenPaymentCancel}>
            <DivGlob>
                <Title>¿Deseas cancelar tu suscripción?</Title>
                <Text>Si cancelas tu suscripción no podrás ofrecer ningun servcio en Wixxer y perderas tus clientes</Text>
                <BtnDiv>
                    <BtnCancel onClick={handleclickCancel}>Si, cancelar</BtnCancel>
                    <BtnNoCancel onClick={toggleModalPaymentCancel}>Continuar como Worker Activo</BtnNoCancel>
                </BtnDiv>
            </DivGlob>
        </ContainerCancel>
    )
}

export default ModalCancelPayment