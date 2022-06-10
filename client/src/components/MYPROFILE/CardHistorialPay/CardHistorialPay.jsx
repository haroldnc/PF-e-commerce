import React from 'react'
import { ContainerHistorial } from './CardHistorialPay'
import { Fecha, Membresia, Monto, Metodo } from './CardHistorialPay'

import { SiVisa } from 'react-icons/si'
import { IconContext } from 'react-icons'
import { BsFillCreditCard2BackFill} from 'react-icons/bs'

const CardHistorialPay = ({ tarjeta, ultnum, amount, plan, fecha}) => {

    const Date = fecha.replace('T', ' ')

   let result =  Date.substring(0,19)

   let Tarjetas = null
   if(tarjeta[0] === "v"){
       Tarjetas = <BsFillCreditCard2BackFill/>
   }
    return(
        <ContainerHistorial>
            <Fecha>{result}</Fecha>
            <Membresia>{plan}</Membresia>
            <Monto>{`USD ${amount}`}</Monto>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center",width:"200px"}}>
                <Metodo>{tarjeta}</Metodo>
                <IconContext.Provider value={{size:"20px", color: "#79dabc"}}>
                    <div>
                        <BsFillCreditCard2BackFill/>
                    </div>
                </IconContext.Provider>
                <Metodo>{`***${ultnum}`}</Metodo>
            </div>
        </ContainerHistorial>
    )
}

export default CardHistorialPay