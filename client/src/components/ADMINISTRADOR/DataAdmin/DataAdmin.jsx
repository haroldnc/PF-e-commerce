import React from "react";

import { ContainerMenu, NameMenu, DivName, Menudiv, Namediv } from './DataAdmin'

import { BsFileEarmarkPostFill, BsFileEarmarkPost } from 'react-icons/bs'
import { MdPostAdd } from 'react-icons/md'
import { IconContext } from 'react-icons'

const DataAdmin = ({lateral, setLateral, setRender}) => {


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
                <NameMenu>Data</NameMenu>
            </DivName>
            <Menudiv onClick={() => handleClick("Categorías")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <BsFileEarmarkPostFill/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Categorías</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Servicios")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <BsFileEarmarkPost/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Servicios</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Publicaciones")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <MdPostAdd/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Publicaciones</Namediv>
            </Menudiv>
        </ContainerMenu>
    )
}

export default DataAdmin