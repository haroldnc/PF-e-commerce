import  React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTransactionById } from '../../../store/actions/index'
import { NavRegistrados, NavTitle, CancelDiv, CancelBtn, Text } from './HistorialPayProfile'
import CardHistorialPay from '../CardHistorialPay/CardHistorialPay.jsx'

const HistorialPayProfile = ({id}) => {

    const dispatch = useDispatch()
    const transaction = useSelector(state => state.transactionById)

    
    useEffect(() => {
        dispatch(GetTransactionById(id))
    },[])

    const transactionHARD = {
        "payment_method": {
        "network": "visa",
        "end_digits": "4242"
        },
        "_id": "62a292b93f53f7ffd5311958",
        "sessionId": "cs_test_a1lSQ6kF6EEmGiXYs65V4Pvk2eiRPQTD56K0Qu6l2Eo80nAi88JUebC8Fu",
        "amount": 10,
        "reason": "Standard",
        "date": "1970-01-20T03:40:00.382Z",
        "expiration": "1970-01-20T03:41:26.782Z",
        "user": "62926fb4a8415ffb1bf2a4bc"
        }
    console.log('tansaction', transaction )

    return (
        <div style={{width:"100%"}}>
            <CancelDiv>
                <Text>Podrás cancelar tu membresia en cualquier momento: </Text>
                <CancelBtn>Cancelar membresia</CancelBtn>
            </CancelDiv>
            <NavRegistrados>
               <NavTitle>FECHA</NavTitle>
               <NavTitle>MEMBRESIA</NavTitle>
               <NavTitle>MONTO</NavTitle>
               <NavTitle>METODO DE PAGO</NavTitle>
            </NavRegistrados>
            {
                transaction !== undefined ?
                transaction.map( t => (
                    <div key={t.payment_method._id}>
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