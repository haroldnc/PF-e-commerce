import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";

import { ContainerType, DivGlobal, Name, BtnCancel, BtnNoCancel } from './TypeCancel'

import { cancelSubscription, GetTransactionById } from '../../../store/actions/index'

const TypeCancel = ({ isOpenType,toggleModalType, profile}) => {

    const dispatch = useDispatch()

    const Alltransaction = useSelector(state => state.transactionById)

    const LastTrans = Alltransaction.pop()
    console.log('transactions', LastTrans.sessionId)

    const handleNocancel = () =>{
        toggleModalType()
    }

    const cancelInmed = () =>{
        dispatch(cancelSubscription({
            sessionId: "el ID de sesión",
            period_end:false
        
        }))
    }
    const cancelFinalCicle = () =>{
        dispatch(cancelSubscription({

        }))
    }


    // useEffect(() => {
    //     GetTransactionById(profile)
    // },[])

    return (
        <ContainerType isOpenType={isOpenType}>
            <DivGlobal>
                <Name>¿Como deseas cancelar tu plan?</Name>
                <div style={{display:"flex", flexDirection:"row", marginTop:"25px", justifyContent:"space-between"}}>
                    <BtnCancel>Inmediatamente</BtnCancel>
                    <BtnCancel>Final ciclo de facturación</BtnCancel>
                </div>

                <BtnNoCancel onClick={handleNocancel}>No cancelar</BtnNoCancel>
            </DivGlobal>
        </ContainerType>
    )
}

export default TypeCancel