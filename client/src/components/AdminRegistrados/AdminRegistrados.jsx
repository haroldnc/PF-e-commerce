import React from "react";

import CardAdminR from '../CardAdminR/CardAdminR.jsx'

import { ContainerREgistrados, NavRegistrados, User, Role, Corr } from './AdminRegistrados'

const AdminRegistrados = () => {
    return (
        <ContainerREgistrados>
            <NavRegistrados>
                <User>USER NAME</User>
                <Corr>CORREO ELECTRONICO</Corr>
                <Corr>TELEFONO</Corr>
                <Role>ROLE</Role>
            </NavRegistrados>
            <CardAdminR/>
        </ContainerREgistrados>
    )
}

export default AdminRegistrados