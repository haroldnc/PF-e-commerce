import React from "react";

import { ContainerMenu, NameMenu, DivName, Menudiv, Namediv } from './BuildAdmin'

import { BiCategoryAlt } from 'react-icons/bi'
import { MdOutlineCategory } from 'react-icons/md'
import { IconContext } from 'react-icons'


const BuildAdmin = ({lateral, setLateral, setRender}) => {

    const handleClick = (dato) => {
        setRender(dato)
        setLateral({
            ...lateral,
            show: false
        })
    }

    return (
        <ContainerMenu>
            <DivName>
                <NameMenu>Builder</NameMenu>
            </DivName>
            <Menudiv onClick={() => handleClick("Editar Categorías")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <BiCategoryAlt/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Categorias</Namediv>
            </Menudiv>
            <Menudiv onClick={() => handleClick("Editar Servicios")}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <MdOutlineCategory/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Servicios</Namediv>
            </Menudiv>
        
        </ContainerMenu>
    )
}

export default BuildAdmin