import React from 'react'

import { ContainerSuccess, Congrats, TextPrimary, Text,  BtnProfile, BtnPublish } from './paymentSuccess'

const PaymentSuccess = () => {
    return (
        <ContainerSuccess>
            <div style={{display: "flex", flexDirection:"row"}}>
                <img src="https://i.postimg.cc/SRZJ8dny/olawale-munna-Objhzjn-Mmc-unsplash-removebg-preview.png" alt="" />
                <div>
                    <Congrats>¡FELICIDADES POR TU SUSCRIPCIÓN!</Congrats>
                    <TextPrimary>Ahora podrás ofrecer tus servicios por nuestra plataforma</TextPrimary>
                    <Text>Recuerda completar todos los campos necesarios, tener tu perfil mas atractivo y asi atraer mas clientes</Text>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
                        <BtnProfile>Completa tu perfil</BtnProfile><BtnPublish>Publica tu primer servicio</BtnPublish>
                    </div>
                </div>
            </div>
        </ContainerSuccess>
    )
}

// https://i.postimg.cc/SRZJ8dny/olawale-munna-Objhzjn-Mmc-unsplash-removebg-preview.png
// https://i.postimg.cc/8cnzsCYc/icons8-team-Fc-Lyt7l-W5wg-unsplash-removebg-preview.png

export default PaymentSuccess