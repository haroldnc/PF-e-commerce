import React from "react";

import { ContainerModal, DivGlob } from './ModalDetailUser'

const ModalDetailUser = ({isOpenDetailUser, idDetailUser, toggleModalDetailUser}) => {
    return(
        <ContainerModal isOpenDetailUser={isOpenDetailUser}>
            <DivGlob>
                <button onClick={() => toggleModalDetailUser(false) }>Cerrar</button>
                <h1>{idDetailUser}</h1>
            </DivGlob>
        </ContainerModal>
    )
}

export default ModalDetailUser