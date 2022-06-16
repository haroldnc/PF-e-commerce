import React from "react";
import { DeleteUser } from '../../../store/actions/index'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

import { Container,
        Imagen,
        Name, 
        BtnBaja, 
        DivName, 
        DivOther, 
        EmailPhone,
        NameN, 
        Linea, 
        Plan ,
        PostsC
    } from './DetailWorker'

import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineEmail, MdPostAdd } from 'react-icons/md'
import { GiSmartphone, GiShakingHands } from 'react-icons/gi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiWebauthn } from 'react-icons/si'



const DetailWorker = ({UserDetail, PostById, HiringByWorker, toggleModalDetailUser}) => {

    const  dispatch = useDispatch()

    // console.log('Worer',UserDetail)
    // console.log('posts', PostById)
    // console.log('hirings',HiringByWorker )

    const handleDeleteUser = (id)=> {
        Swal.fire({
            title: 'Estas seguro?',
            text: "El usuario sera dado de baja inmediatamente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, dar baja!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Usuario eliminado correctamente!',
                'Usuario dado de baja de forma permanente',
                'success'
              )
                console.log('funca', id)
             dispatch(DeleteUser(id))
             toggleModalDetailUser(null)
            // window.location.href = window.location.href
            }
        })
    }


    return(
        <Container>
            <div style={{display:"flex", flexDirection:"row"}}>
                <Imagen src={UserDetail.user.image}/>
                <div style={{marginLeft:"80px"}}>
                <NameN>{UserDetail.user.firstName}  {UserDetail.user.lastName}</NameN>
                <DivName>
                    <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                        <div>
                            <CgProfile/>
                        </div>
                    </IconContext.Provider>
                    <EmailPhone>{UserDetail.user.username}</EmailPhone>
                </DivName>
                <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <MdOutlineEmail/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{UserDetail.user.email}</EmailPhone>
                    </DivOther>
                    <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <GiSmartphone/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{UserDetail.dataWorker.phone}</EmailPhone>
                    </DivOther>
                </div>
            </div>
            <Linea></Linea>
            <div style={{display:"flex", flexDirection:"row", padding:"10px"}}>
                <Plan>Usuario:  {UserDetail.dataWorker.subscribed? "Activo": "Inactivo"}</Plan>
                <Plan>Plan: {UserDetail.dataWorker.subscribed?UserDetail.dataWorker.subscription_type.name: null }</Plan>
            </div>

            <NameN>{UserDetail.dataWorker.title}</NameN>
            <PostsC>{UserDetail.dataWorker.aboutMe}</PostsC>
            <DivOther>
                <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                    <div>
                        <AiFillLinkedin/>
                    </div>
                </IconContext.Provider>
                <EmailPhone>{UserDetail.dataWorker.linkedin}</EmailPhone>
            </DivOther>
            <DivOther>
                <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                    <div>
                        <SiWebauthn/>
                    </div>
                </IconContext.Provider>
                <EmailPhone>{UserDetail.dataWorker.web}</EmailPhone>
            </DivOther>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <DivOther>
                    <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                        <div>
                            <MdPostAdd/>
                        </div>
                    </IconContext.Provider>
                    <EmailPhone>Publicaciones:</EmailPhone>
                </DivOther>
                    <PostsC>Totales: {PostById ? PostById.length : null}</PostsC>
                    <PostsC>Activas: {PostById ? PostById.filter(p => p.active === true).length : null}</PostsC>
                </div>
                <div style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
                <DivOther>
                    <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                        <div>
                            <GiShakingHands/>
                        </div>
                    </IconContext.Provider>
                    <EmailPhone>Contrataciones </EmailPhone>
                </DivOther>
                <PostsC>Totales: {HiringByWorker.hirings.length}</PostsC>
                </div>
            </div>
            <BtnBaja onClick={() => handleDeleteUser(UserDetail.user.uid)}>Dar baja a Worker</BtnBaja>
        </Container>
    )
}


export default DetailWorker