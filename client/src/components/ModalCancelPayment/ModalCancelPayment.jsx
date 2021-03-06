import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getLastTransactionById, cancelSubscription } from '../../store/actions/index'
import Swal from 'sweetalert2'

import { ContainerCancel, DivGlob, Title, Text, BtnCancel, BtnNoCancel, BtnDiv } from './ModalCancelPayment'
 
const ModalCancelPayment = ({isOpenPaymentCancel, toggleModalPaymentCancel, toggleModalType, profile}) => {

    const dispatch = useDispatch()

    const LastTrans = useSelector(state => state.lastTransactionById)

    // let LastTrans = "";
    // if(Alltransaction){
    //     if(Alltransaction.length === 1){
    //         LastTrans = Alltransaction[0]
    //     }else{
    //         LastTrans = Alltransaction.pop()
    //     }
    // } 

    //console.log('transacts', Alltransaction)
    console.log(LastTrans)
    const cancelInmed = () =>{
        //console.log('alltrans',Alltransaction.subSchedulesId)
        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu plan se cancelarĂ¡ inmediatamente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cancelar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cancelada correctamente!',
                'Tu plan serĂ¡ cancelado inmediatamente',
                'success'
              )
                dispatch(cancelSubscription({
                    subSchedulesId: LastTrans.subSchedulesId
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
        dispatch(getLastTransactionById(profile))
    },[])

    return (
        <ContainerCancel isOpenPaymentCancel={isOpenPaymentCancel}>
            <DivGlob>
                <Title>Â¿Deseas cancelar tu suscripciĂ³n?</Title>
                <Text>Si cancelas tu suscripciĂ³n no podrĂ¡s ofrecer ningun servcio en Wixxer y perderas tus clientes</Text>
                <BtnDiv>
                    <BtnCancel onClick={cancelInmed}>Si, cancelar</BtnCancel>
                    <BtnNoCancel onClick={toggleModalPaymentCancel}>Continuar como Worker Activo</BtnNoCancel>
                </BtnDiv>
            </DivGlob>
        </ContainerCancel>
    )
}

export default ModalCancelPayment