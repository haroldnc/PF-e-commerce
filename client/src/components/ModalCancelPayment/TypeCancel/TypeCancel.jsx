import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import Swal from 'sweetalert2'

import { ContainerType, DivGlobal, Name, BtnCancel, BtnNoCancel } from './TypeCancel'

import { cancelSubscription, GetTransactionById } from '../../../store/actions/index'

const TypeCancel = ({ isOpenType,toggleModalType, profile}) => {

    const dispatch = useDispatch()

    const LastTrans = useSelector(state => state.transactionById);

    const handleNocancel = () =>{
        toggleModalType()
    }

    const cancelInmed = () =>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "Si cancelas tu membresia perderas tus clientes",
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
                    subSchedulesId: LastTrans.subSchedulesId
                }, profile))
                toggleModalType()
            }
        })
        
    }
    const cancelFinalCicle = () =>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "Si cancelas tu membresia perderas tus clientes",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cancelar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cancelada correctamente!',
                'Estaras activo hasta el final del ciclo de cobro',
                'success'
              )
              dispatch(cancelSubscription({
                sessionId: LastTrans.sessionId,
                period_end: true
            },profile ))
            toggleModalType()
            }
          })
    }


    useEffect(() => {
        GetTransactionById(profile)
    },[])

    return (
        <ContainerType isOpenType={isOpenType}>
            <DivGlobal>
                <Name>¿Como deseas cancelar tu plan?</Name>
                <div style={{display:"flex", flexDirection:"row", marginTop:"25px", justifyContent:"space-between"}}>
                    <BtnCancel onClick={cancelInmed}>Inmediatamente</BtnCancel>
                    <BtnCancel onClick={cancelFinalCicle}>Final ciclo de facturación</BtnCancel>
                </div>

                <BtnNoCancel onClick={handleNocancel}>No cancelar</BtnNoCancel>
            </DivGlobal>
        </ContainerType>
    )
}

export default TypeCancel