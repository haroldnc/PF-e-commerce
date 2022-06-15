import React,{useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getWorkers } from "../../../store/actions/index.js";

import CardAdminR from '../CardAdminR/CardAdminR.jsx'

import { ContainerREgistrados, NavRegistrados, User, Role, Corr, Tel } from './AdminWorkers'

const AdminWorkers = ({toggleModalDetailUser}) => {

    const dispatch = useDispatch() 

    const allWorkers = useSelector( state => state.workers)
    console.log('allwork',allWorkers)

    useEffect( () => {
        dispatch(getWorkers())
    },[])

    return (
        <ContainerREgistrados>
            <NavRegistrados>
                <User>NOMBRE COMPLETO</User>
                <Corr>TITULO</Corr>
                <Tel>ACTIVO</Tel>
                <Role>TIPO DE PLAN</Role>
            </NavRegistrados>
            {
                allWorkers && allWorkers.map( u => (
                    <CardAdminR
                        id={u.userId.uid}
                        image={u.userId.image}
                        username = {`${u.userId.firstName} ${u.userId.lastName}`}
                        telefono={u.subscribed ? "Activo": "Inactivo"}
                        email={u.title}
                        role={u.subscription_type.name}
                        toggleModalDetailUser={toggleModalDetailUser}
                    />

                ))
            }
        </ContainerREgistrados>
    )
}

export default AdminWorkers