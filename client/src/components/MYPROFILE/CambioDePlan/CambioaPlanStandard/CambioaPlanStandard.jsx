import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { ContainerCambio ,DivGob, Title, TextOne, TextTwo, Btn, BtnCancel, Parr  } from './CambioaPlanStandard'
import { changeSubscription, getLastTransactionById } from '../../../../store/actions/index'

const CambioaPlanStandard = ({profile, isOpenChangeStandard, toggleIsOpenChangeStandard}) => {

    const dispatch = useDispatch()
    
    const LastTrans = useSelector(state => state.lastTransactionById)

    //let LastTrans = "";
    // if(Alltransaction){
    //     if(Alltransaction.length === 1){
    //         LastTrans = Alltransaction
    //     }else{
    //         LastTrans = Alltransaction.pop()
    //     }
    // } 
    //console.log('session', Alltransaction)


    const handlechange = () => {
        //console.log('id',profile)
        //console.log('transaction',Alltransaction.subSchedulesId)
        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu plan se cambiará inmediatamente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cambiar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Plan cambiado correctamente!',
                    'Tu plan cambiara a Standard inmediatamente',
                    'success'
                )
                dispatch(changeSubscription({
                    subSchedulesId: LastTrans.subSchedulesId,
                    priceId: "price_1L8UkLHq6KUjuv7IZqgYJUFE"
            }, profile))
                toggleIsOpenChangeStandard()
            window.location.href = window.location.href
            }
        })
    }

    useEffect(() => {
        dispatch(getLastTransactionById(profile))
    },[])

    return (
        <ContainerCambio isOpenChangeStandard={isOpenChangeStandard}>
            <DivGob>
                <Title>Actualmente cuentas con un plan Premium</Title>
                <TextOne>¿Deseas cambiarte a un plan Standart?</TextOne>
                <TextTwo>Recuerda que si tienes mas de 3 publicaciones las perderás</TextTwo>
                <TextTwo>No harás parte de nuestros mejores talentos y podrás perder reconocimiento</TextTwo>
                <Btn onClick={handlechange}>Cambiar Plan</Btn><BtnCancel onClick={toggleIsOpenChangeStandard}>Manter mi Plan</BtnCancel>
                <Parr>En el siguiente ciclo se cobra la mensualidad más un prorrateo de los días restantes hasta antes del siguiente ciclo</Parr>
            </DivGob>
        </ContainerCambio>
    )
}

export default CambioaPlanStandard