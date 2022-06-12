import React from 'react'
import { useDispatch } from 'react-redux'
import { PostPayment } from '../../store/actions/index'

import { ContainerPayment, Payment, BtnPayment, DivPlan, CloseX, Divglob, Title, TitlelGlobal, Price,Linea, Benefit } from './ModalPayment'

const ModalPayment = ({isOpenPayment, toggleModalPayment, profile}) => {

    const dispatch = useDispatch()

    console.log(profile)
    const openTransactionStandard = (id) => {
        dispatch(PostPayment({
            userId: id,
            priceId: "price_1L8UkLHq6KUjuv7IZqgYJUFE"
        }))

    }

    const openTransactionPremium = (id) => {
        dispatch(PostPayment({
            userId: id,
            priceId: "price_1L8o5dHq6KUjuv7Ihuith57b"
        }))
    }


   

    return (
        <ContainerPayment isOpenPayment={isOpenPayment}>
            <Payment>
                <TitlelGlobal>Elige tu plan de precios</TitlelGlobal>
                <Divglob>
                    <DivPlan>
                        <Title>Standard</Title>
                        <div style={{display:"flex", flexDirection:"row", marginTop:"20px"}}>
                            <Price>10</Price>
                            <p style={{fontSize:"13px"}}>USD</p>
                        </div>
                        <p>por mes</p>
                        <br></br>
                        <br></br>
                        <BtnPayment onClick={() => openTransactionStandard(profile)}>Elegir</BtnPayment>
                        <br></br>
                        <Linea></Linea>
                        <Benefit>Max 3 publicaciones activas</Benefit>
                        <Linea></Linea>
                        <Benefit>Chat con tus clientes</Benefit>
                        <Linea></Linea>
                        <Benefit>Alerta de contrato por email</Benefit>
                    </DivPlan>
                    <DivPlan>
                        <Title>Premium</Title>
                        <div style={{display:"flex", flexDirection:"row", marginTop:"20px"}}>
                            <Price>15</Price>
                            <p style={{fontSize:"13px"}}>USD</p>
                        </div>
                        <p>por mes</p>
                        <br></br>
                        <br></br>
                        <BtnPayment onClick={() => openTransactionPremium(profile)}>Elegir</BtnPayment>
                        <br></br>
                        <Linea></Linea>
                        <Benefit>Publicaciones activas sin maximo</Benefit>
                        <Linea></Linea>
                        <Benefit>Chat con tus clientes</Benefit>
                        <Linea></Linea>
                        <Benefit>Alerta de contrato por email</Benefit>
                        <Linea></Linea>
                        <Benefit>Perfil en mejores talentos</Benefit>
                    </DivPlan>
                </Divglob>
                <CloseX onClick={() => toggleModalPayment()}>CANCELAR</CloseX>

            </Payment>
            
        </ContainerPayment>
    )
}

export default ModalPayment