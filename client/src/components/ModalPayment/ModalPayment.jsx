import React from 'react'
import { useDispatch } from 'react-redux'
import { PostPayment } from '../../store/actions/index'

import { ContainerPayment, Payment, BtnPayment, DivPlan, CloseX, Divglob } from './ModalPayment'

const ModalPayment = ({isOpenPayment, toggleModalPayment, profile}) => {

    const dispatch = useDispatch()

    console.log(profile)
    const openTransactionStandard = (id) => {
       const response = dispatch(PostPayment({
            userId: id,
            priceId: "price_1L7x3lHq6KUjuv7INGxAtLq3"
        }))

        console.log(response)
    }


   

    return (
        <ContainerPayment isOpenPayment={isOpenPayment}>
            <Payment>
                <CloseX onClick={() => toggleModalPayment()}>X</CloseX>
                <Divglob style={{display:"flex", flexDirection:"row", height:"100%"}}>
                    <DivPlan>
                        <h1>Standard</h1>
                        <BtnPayment onClick={() => openTransactionStandard(profile)}>Suscribirme</BtnPayment>
                    </DivPlan>
                    <DivPlan>
                        <h1>Premium</h1>
                        <BtnPayment>Suscribirme</BtnPayment>
                    </DivPlan>
                </Divglob>
            </Payment>
            
        </ContainerPayment>
    )
}

export default ModalPayment