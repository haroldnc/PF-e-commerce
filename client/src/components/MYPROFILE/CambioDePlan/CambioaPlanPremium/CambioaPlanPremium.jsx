import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { ContainerCambio ,DivGob, Title, TextOne, TextTwo, Btn, BtnCancel, Parr  } from './CambioaPlanPemium'
import { changeSubscription, getLastTransactionById } from '../../../../store/actions/index'

const CambioaPlanPremium = ({profile, isOpenChangePremium, toggleIsOpenChangePremium}) => {

    const dispatch = useDispatch()
    
    const LastTrans = useSelector(state => state.lastTransactionById)

    // let LastTrans = "";
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
            title: '¡Cambiate ahora!',
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
                    'Tu plan cambiara a Premium inmediatamente',
                    'success'
                )
                dispatch(changeSubscription({
                    subSchedulesId: LastTrans.subSchedulesId,
                    priceId: "price_1L8o5dHq6KUjuv7Ihuith57b"
                }, profile))
                toggleIsOpenChangePremium()
                window.location.href = window.location.href
            }
        })
    }

    useEffect(() => {
        dispatch(getLastTransactionById(profile))
    },[])

    return (
        <ContainerCambio isOpenChangePremium={isOpenChangePremium}>
            <DivGob>
                <Title>Actualmente cuentas con un plan Standard</Title>
                <TextOne>¡Cambiate ahora al plan Premium!</TextOne>
                <TextTwo>Podras publicar tus servicios sin limite</TextTwo>
                <TextTwo>Aumentaran tus contrataciones, harás parte de nuestros mejores talentos</TextTwo>
                <Btn onClick={handlechange}>Cambiar Plan</Btn><BtnCancel onClick={toggleIsOpenChangePremium}>Manter mi Plan</BtnCancel>
                <Parr>En el siguiente ciclo se cobra la mensualidad más un prorrateo de los días restantes hasta antes del siguiente ciclo</Parr>
            </DivGob>
        </ContainerCambio>
    )
}

export default CambioaPlanPremium