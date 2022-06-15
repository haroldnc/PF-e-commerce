import React from "react";

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
} from './DetailUser'

import { DeleteUser } from '../../../store/actions/index'

import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineEmail, MdPostAdd } from 'react-icons/md'
import { GiSmartphone, GiShakingHands } from 'react-icons/gi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiWebauthn } from 'react-icons/si'

const DetailUser = ({ UserDetail, HiringByUser,toggleModalDetailUser }) => {


    const  dispatch = useDispatch()

    console.log('Worer',UserDetail)
    // console.log('posts', PostById)
    console.log('hirings',HiringByUser )

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
                
            </div>
        </div>
        <Linea></Linea>
        

        
        <div style={{display:"flex", flexDirection:"row"}}>
           
            <div style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
            <DivOther>
                <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                    <div>
                        <GiShakingHands/>
                    </div>
                </IconContext.Provider>
                <EmailPhone>Contrataciones </EmailPhone>
            </DivOther>
            <PostsC>Totales: {HiringByUser.length}</PostsC>
            </div>
        </div>
        <BtnBaja onClick={() => handleDeleteUser(UserDetail.user.uid)}>Dar baja a Worker</BtnBaja>
    </Container>
    )
}

export default DetailUser