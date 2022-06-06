import React from "react";
import Swal from 'sweetalert2'

import { ContainerMenu, NameMenu, DivName, Menudiv, Namediv, BtnLogout } from './AdminUser'

const AdminUser = ({lateral, setLateral, setRender}) => {

    const handleClick = (dato) => {
        setRender(dato)
        setLateral({
            ...lateral,
            show: false
        })
    }

    const handleLogout = () => {
        Swal.fire({
            title: 'Estas seguro que quieres cerrar sesión?',
            text: "Tendrás que iniciar nuevamente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Su sesión ha sido cerrada correctamente!',
                '',
                'success'
              )
            }
          })
    }

    return (
        <ContainerMenu>
            <DivName>
                <NameMenu>Administrador</NameMenu>
            </DivName>  
            <BtnLogout onClick={() => handleLogout()}>Cerrar sesión</BtnLogout>
            
        
        </ContainerMenu>
    )
}

export default AdminUser