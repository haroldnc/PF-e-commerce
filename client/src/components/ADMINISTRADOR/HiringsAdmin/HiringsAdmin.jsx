import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { putHiring } from '../../../store/actions/index'

import { ContainerHirings, 
            NavBar, 
            BtnPublic, 
            NavRegistrados,
            User,
            Corr,
            Tel,
            Role
        } from './HiringsAdmin'

import CardHiringsAdmin from '../CardHiringsAdmin/CardHiringsAdmin.jsx'

const HiringsAdmin = ({allHirings}) => {

    const dispatch = putHiring()

    const [ panelHiring, setPanelHiring] = useState("abiertas")
    const [ Activa, setActiva ]  = useState(allHirings.filter( h => h.status === false))
    const [Inactiva, setInactiva ] = useState( allHirings.filter( h => h.status === true))

    console.log('hirings', Inactiva)

    const h = {
        "_id": "62a80733f6b49f3f41d01544",
        "idUser": {
            "_id": "62a2316567125dc0fdcfee13",
            "firstName": "Luis Carlos",
            "lastName": "de Dios Rodríguez",
            "image": "https://lh3.googleusercontent.com/a-/AOh14GhHBRBtmvkFhtHpNosKV25P5f5Iz22603LIRLRWVA=s96-c"
            },
        "idWorker": {
            "_id": "62a536c735fc0fd8e1dfd47f",
            "firstName": "Brian",
            "lastName": "Sanchez",
            "image": "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        "idPublication": {
            "_id": "62a5226735fc0fd8e1dfcb3e",
            "title": "diseñador frond",
            "price": 5
        },
        "status": false
        }


        const handleChange = (idPubl,iduser, status) => {
            if(!status){
                Swal.fire({
                    title: 'Estas seguro?',
                    text: "El contrato se cerrará inmediatamente",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Cerrar!'
                  }).then((result) => {
                    if (result.isConfirmed){
                      Swal.fire(
                        'El contrato ha sido cerrado correctamente!',
                        '',
                        'success'
                      )
                      let post = Activa.filter( a => a.idUser._id === iduser)
                      setInactiva([post[0],...Inactiva])
                      setActiva(Activa.filter( a => a.idUser._id !== iduser))
                      console.log('id user', iduser)
                      console.log('id post', idPubl)
                      dispatch(putHiring({
                            idUser: iduser,
                            idPublication: idPubl
                        }))
                    }
                })
            }else{
                Swal.fire({
                icon: 'error',
                title: 'Contrato cerrado',
                text: 'No puedes cambiar estado de un contrato cerrado!',
                footer: '<a href="">Why do I have this issue?</a>'
})

            }
    
        }


    return (
        <ContainerHirings>
           <NavBar>
                <BtnPublic onClick={() => setPanelHiring("abiertas")}>Abiertas</BtnPublic>
                <BtnPublic onClick={() => setPanelHiring("cerradas")}>Cerradas</BtnPublic>
            </NavBar>
            <NavRegistrados>
                <User>WORKER</User>
                <Corr>USUARIO</Corr>
                <Tel>TITULO</Tel>
                <Role>COSTO</Role>
                <Role>ESTADO</Role>
            </NavRegistrados>

            {
                panelHiring === "abiertas" ?

                Activa && Activa.map( h => (
                <CardHiringsAdmin 
                    user={h.idUser}
                    worker={h.idWorker}
                    post={h.idPublication}
                    status={h.status}
                    handleChange={handleChange}
                />
                ))
                :
                Inactiva && Inactiva.map( h => (
                    <CardHiringsAdmin 
                        user={h.idUser}
                        worker={h.idWorker}
                        post={h.idPublication}
                        status={h.status}
                        handleChange={handleChange}
                    />  
                ))

            }
            
        </ContainerHirings>
    )
}

export default HiringsAdmin