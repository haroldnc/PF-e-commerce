import  React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTransactionById } from '../../../store/actions/index'
import { NavRegistrados, NavTitle, CancelDiv, CancelBtn, Text } from './HistorialPayProfile'
import CardHistorialPay from '../CardHistorialPay/CardHistorialPay.jsx'

const HistorialPayProfile = ({id, toggleModalPaymentCancel}) => {

    const dispatch = useDispatch()
    const transaction = useSelector(state => state.transactionById)

    
    useEffect(() => {
        dispatch(GetTransactionById(id))
    },[])

  
    const handleClickCancel = () => {
        toggleModalPaymentCancel()
    }

    return (
        <div style={{width:"100%"}}>
            <CancelDiv>
                <Text>Podrás cancelar tu membresia en cualquier momento: </Text>
                <CancelBtn onClick={handleClickCancel}>Cancelar membresia</CancelBtn>
            </CancelDiv>
            <NavRegistrados>
               <NavTitle>FECHA</NavTitle>
               <NavTitle>MEMBRESIA</NavTitle>
               <NavTitle>MONTO</NavTitle>
               <NavTitle>METODO DE PAGO</NavTitle>
            </NavRegistrados>
            {
                transaction  ?
                transaction.map( (t, index) => (
                    <div key={index}>
                        <CardHistorialPay
                            tarjeta={t.payment_method.network}
                            ultnum={t.payment_method.end_digits}
                            amount={t.amount}
                            plan={t.reason}
                            fecha={t.date}
                        />
                    </div>
                
                ))
                
                : "cargando..."
            }
        </div>
    )
}

export default HistorialPayProfile