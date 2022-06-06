import React from "react";

import { ContainerMenu, NameMenu, DivName, Menudiv, Namediv } from './MenuAdmin.js'

import { CgProfile } from 'react-icons/cg'
import { GrUserWorker } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'
import { GiTakeMyMoney, GiIronHulledWarship } from 'react-icons/gi'
import { IconContext } from 'react-icons'

const MenuAdmin = ({lateral, setLateral, setRender}) => {


    const handleClick = (dato) => {
        setRender(dato)
        setLateral({
            ...lateral,
            show: false
        })
        console.log('cambia')
    }

    return(
        <ContainerMenu >
            <DivName>
                <NameMenu>Menu</NameMenu>
            </DivName>
            <Menudiv onClick={() => handleClick("Dashboard")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiIronHulledWarship/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Dashboard</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Registrados")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <CgProfile/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Registrados</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Workers")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GrUserWorker/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Workers</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Usuarios")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <FiUsers/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Usuarios</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Suscriptores")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <GiTakeMyMoney/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Suscriptores</Namediv>
            </Menudiv>

        </ContainerMenu>
    )
}

export default MenuAdmin