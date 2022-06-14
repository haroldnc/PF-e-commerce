import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GetTransactionById, cancelSubscription } from '../../store/actions/index'
import Swal from 'sweetalert2'

import { ContainerCancel, DivGlob, Title, Text, BtnCancel, BtnNoCancel, BtnDiv } from './ModalCancelPayment'
 
const ModalCancelPayment = ({isOpenPaymentCancel, toggleModalPaymentCancel, toggleModalType, profile}) => {

    const dispatch = useDispatch()

    const Alltransaction = useSelector(state => state.transactionById)

    let LastTrans = "";
    if(Alltransaction){
        if(Alltransaction.length === 1){
            LastTrans = Alltransaction
        }else{
            LastTrans = Alltransaction.pop()
        }
    } 


    const cancelInmed = () =>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu plan se cancelará inmediatamente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cancelar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cancelada correctamente!',
                'Tu plan será cancelado inmediatamente',
                'success'
              )
                dispatch(cancelSubscription({
                    sessionId: LastTrans[0].sessionId,
                    period_end: false
                },profile))
                toggleModalPaymentCancel()
            window.location.href = window.location.href
            }
        })
    }

    // const handleclickCancel = () => {
    //     toggleModalType()
    //     toggleModalPaymentCancel()
    // }

    useEffect(() => {
        GetTransactionById(profile)
    },[])

    return (
        <ContainerCancel isOpenPaymentCancel={isOpenPaymentCancel}>
            <DivGlob>
                <Title>¿Deseas cancelar tu suscripción?</Title>
                <Text>Si cancelas tu suscripción no podrás ofrecer ningun servcio en Wixxer y perderas tus clientes</Text>
                <BtnDiv>
                    <BtnCancel onClick={cancelInmed}>Si, cancelar</BtnCancel>
                    <BtnNoCancel onClick={toggleModalPaymentCancel}>Continuar como Worker Activo</BtnNoCancel>
                </BtnDiv>
            </DivGlob>
        </ContainerCancel>
    )
}

export default ModalCancelPayment