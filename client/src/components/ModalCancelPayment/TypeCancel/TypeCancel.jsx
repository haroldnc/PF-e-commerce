import React from "react";

import { ContainerType, DivGlobal, Name, BtnCancel, BtnNoCancel } from './TypeCancel'

const TypeCancel = ({ isOpenType,toggleModalType, profile}) => {

    const handleNocancel = () =>{
        toggleModalType()
    }

    return (
        <ContainerType isOpenType={isOpenType}>
            <DivGlobal>
                <Name>¿Como deseas cancelar tu plan?</Name>
                <div style={{display:"flex", flexDirection:"row", marginTop:"25px", justifyContent:"space-between"}}>
                    <BtnCancel>Inmediatamente</BtnCancel>
                    <BtnCancel>Final ciclo de facturación</BtnCancel>
                </div>

                <BtnNoCancel onClick={handleNocancel}>No cancelar</BtnNoCancel>
            </DivGlobal>
        </ContainerType>
    )
}

export default TypeCancel