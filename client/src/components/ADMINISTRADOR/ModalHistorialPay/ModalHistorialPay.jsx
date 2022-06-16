import React, { useEffect } from "react";
import CardHistorialAdmin from '../CardHistorialAdmin/CardHistorialAdmin.jsx'

import { ContainerModal, DivGlob, BtnAtras, NavRegistrados, NavTitle, Title,Subtitle, Historial } from './ModalHistorialPay'

const ModalHistorialPay = ({isOpenHistory, toggleModalHistorial, transaction}) => {


    console.log('transaction', transaction)
  
    
    return(
        <ContainerModal isOpenHistory={isOpenHistory}>
            <DivGlob>
                <Title>HISTORIAL DE PAGOS</Title>
                <Subtitle>Total pagos realizados: {transaction && transaction.length}</Subtitle>
                <Historial>ULTIMOS PAGOS REALIZADOS</Historial>
            <NavRegistrados>
               <NavTitle>FECHA</NavTitle>
               <NavTitle>MONTO</NavTitle>
               <NavTitle>METODO DE PAGO</NavTitle>
            </NavRegistrados>
            {
                transaction && transaction.map( (t,index) => {
                    if(index < 5){
                        return (
                            <CardHistorialAdmin
                            fecha={t.date}
                            ultnum={t.payment_method.end_digits}
                            amount={t.amount}
                            tarjeta={t.payment_method.network}
                            />

                        )
                    }
                })
            }
                <BtnAtras onClick={() => toggleModalHistorial(null) }>Cerrar</BtnAtras>
            </DivGlob>
        </ContainerModal>
    )
}

export default ModalHistorialPay