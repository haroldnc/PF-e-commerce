import React from 'react'

import { ContainerDashboard, Number, Name, Usuarios, CardsDatos, Tabla, Datos } from './Dashboard.js'

import { CgProfile } from 'react-icons/cg'
import { GrUserWorker } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IconContext } from 'react-icons'


const Dasboard = () => {
    return (
        <ContainerDashboard>
            <Datos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <CgProfile/>
                        </div>
                    </IconContext.Provider>
                    <Number>30</Number>
                    <Name>Registrados</Name>
                </CardsDatos>
                <CardsDatos>
                    <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GrUserWorker/>
                        </div>
                    </IconContext.Provider>
                    <Number>30</Number>
                    <Name>Workers</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <FiUsers/>
                        </div>
                    </IconContext.Provider>
                    <Number>30</Number>
                    <Name>Usuarios</Name>
                </CardsDatos>
                <CardsDatos>
                <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiTakeMyMoney/>
                        </div>
                    </IconContext.Provider>
                    <Number>30</Number>
                    <Name>Suscriptores</Name>
                </CardsDatos>
            </Datos>
            <Tabla>
                hola
            </Tabla>

        </ContainerDashboard>
    )
}

export default Dasboard