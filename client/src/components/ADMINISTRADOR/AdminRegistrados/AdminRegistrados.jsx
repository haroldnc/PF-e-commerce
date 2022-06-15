import React,{useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getAllUsersAllPAginate } from "../../../store/actions/index.js";

import CardAdminR from '../CardAdminR/CardAdminR.jsx'

import { ContainerREgistrados, NavRegistrados, User, Role, Corr, Tel } from './AdminRegistrados'

const AdminRegistrados = ({toggleModalDetailUser}) => {

    const dispatch = useDispatch() 

    const allUsers = useSelector( state => state.allUsersPaginate)

    useEffect( () => {
        dispatch(getAllUsersAllPAginate())
    },[])

    return (
        <ContainerREgistrados>
            <NavRegistrados>
                <User>USER NAME</User>
                <Corr>CORREO ELECTRONICO</Corr>
                <Tel>TELEFONO</Tel>
                <Role>ROLE</Role>
            </NavRegistrados>
            {
                allUsers.users && allUsers.users.map( u => (
                    <CardAdminR
                        id={u.uid}
                        image={u.image}
                        username = {u.username}
                        telefono={u.phone}
                        email={u.email}
                        role={u.user_role.name}
                        toggleModalDetailUser={toggleModalDetailUser}
                    />

                ))
            }
        </ContainerREgistrados>
    )
}

export default AdminRegistrados