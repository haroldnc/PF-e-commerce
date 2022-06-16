import React from "react";
import { Container, Fecha, Monto, Metodo, NavTitle, NavRegistrados } from './CardHistorialAdmin'

import { IconContext } from 'react-icons'
import { BsFillCreditCard2BackFill} from 'react-icons/bs'

const CardHistorialAdmin = ({fecha,ultnum, amount, tarjeta}) => {

    const Date = fecha.replace('T', ' ')

    let result =  Date.substring(0,19)

    return(
        <Container>
            <Fecha>{result}</Fecha>
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
        </Container>
    )
}

export default CardHistorialAdmin