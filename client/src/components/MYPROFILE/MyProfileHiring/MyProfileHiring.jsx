import React, {useState}from "react";
import CardHiringWorker from '../CardHiringWorker/CardHiringWorker.jsx'


import { NavBar, 
        BtnPublic, 
        ContainerCards, 
        NavHiring, 
        NavTitle,
        NavUsuario,
        NavPublicacion,
        NavMonto,
        NoData
    } from './MyProfileHiring'

const MyProfileHiring = ({allHirings}) => {

    const [ panelHiring, setPanelHiring ] = useState("activas")

    
    let Abiertas = allHirings.hirings.filter( h => h.status === false)
    let Cerradas = allHirings.hirings.filter( h => h.status === true)


    return(
        <div style={{ width:"100%"}}>
            <NavBar>
                <BtnPublic onClick={() => setPanelHiring("activas")}>Activas</BtnPublic>
                <BtnPublic onClick={() => setPanelHiring("historial")}>Historial </BtnPublic>
            </NavBar>
            <NavHiring>
               <NavUsuario>USUARIO</NavUsuario>
               <NavPublicacion>PUBLICACIÓN</NavPublicacion>
               <NavMonto>MONTO</NavMonto>
               <NavTitle>ESTADO</NavTitle>
            </NavHiring>

            {
             panelHiring === "activas" ?
                <ContainerCards>
                    {
                        Abiertas.length > 0 ? Abiertas.map( h => (
                            <CardHiringWorker
                            user={h.idUser}
                            post={h.idPublication}
                            open="Abierta"
                            key={h._id}
                            />
                        )):
                        <div style={{width:"100%"}}>
                            <NoData>Actualmente no tienes contratos abiertos</NoData>
                        </div>
                    }
                    
                </ContainerCards>
             : 
                <ContainerCards>
                    {
                        Cerradas.length > 0 ? Cerradas.map( h => (
                            <CardHiringWorker
                            user={h.idUser}
                            post={h.idPublication}
                            open= "Cerrada"
                            key={h._id}
                            />
                        )):
                        <div style={{width:"100%"}}>
                        <NoData>Actualmente no tienes contratos en el historial</NoData>
                        </div>

                    }
                </ContainerCards>
            }
             
        </div>
    )
}

export default MyProfileHiring