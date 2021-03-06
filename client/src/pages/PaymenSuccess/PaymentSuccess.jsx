import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { PostTransaction, workerSubscibed } from '../../store/actions/index'

import { ContainerSuccess, Congrats, TextPrimary, Text,  BtnProfile, BtnPublish } from './paymentSuccess'

const PaymentSuccess = () => {

    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let pair =[]
    for (let i=0 ; i < vars.length ; i++) {
        pair.push(vars[i].split("=")) 
     }

     const dispatch = useDispatch()

     let price=""
     if(pair[0][1].slice(-1) === "E"){
        price = "Standard"
     }else{
        price = "Premium"
     }

     console.log('price',price)

     useEffect(() => {
        dispatch(PostTransaction({
            sessionId: pair[1][1],
            reason: price,
            user: pair[2][1]
        }))
        dispatch(workerSubscibed({
            "priceId": pair[0][1],
            "subscribed": true 
        }, pair[2][1]))
     },[])


    return (
        <ContainerSuccess>
            <div style={{display: "flex", flexDirection:"row"}}>
                <img src="https://i.postimg.cc/SRZJ8dny/olawale-munna-Objhzjn-Mmc-unsplash-removebg-preview.png" alt="" />
                <div>
                    <Congrats>¡FELICIDADES POR TU SUSCRIPCIÓN!</Congrats>
                    <TextPrimary>Ahora podrás ofrecer tus servicios por nuestra plataforma</TextPrimary>
                    <Text>Recuerda completar todos los campos necesarios, tener tu perfil mas atractivo y asi atraer mas clientes</Text>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
                        <Link to={`/profile/${pair[2][1]}`}>
                            <BtnProfile>Completa tu perfil</BtnProfile>
                        </Link>
                        <Link to={`/publicar`}>
                            <BtnPublish>Publica tu primer servicio</BtnPublish>
                        </Link>
                    </div>
                </div>
            </div>
        </ContainerSuccess>
    )
}

// https://i.postimg.cc/SRZJ8dny/olawale-munna-Objhzjn-Mmc-unsplash-removebg-preview.png
// https://i.postimg.cc/8cnzsCYc/icons8-team-Fc-Lyt7l-W5wg-unsplash-removebg-preview.png

export default PaymentSuccess