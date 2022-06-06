import React,{useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getWorkers } from "../../../store/actions/index.js";

import CardAdminR from '../CardAdminR/CardAdminR.jsx'

import { ContainerREgistrados, NavRegistrados, User, Role, Corr, Tel } from './AdminWorkers'

const AdminWorkers = () => {

    const dispatch = useDispatch() 

    const allWorkers = useSelector( state => state.workers)
    console.log(allWorkers)

    useEffect( () => {
        dispatch(getWorkers())
    },[])

    return (
        <ContainerREgistrados>
            <NavRegistrados>
                <User>NOMBRE COMPLETO</User>
                <Corr>TITULO</Corr>
                <Tel>PUNTUACIÓN</Tel>
                <Role>COSTO POR HORA</Role>
            </NavRegistrados>
            {
                allWorkers && allWorkers.map( u => (
                    <CardAdminR
                        image={u.userId.image}
                        username = {`${u.userId.firstName} ${u.userId.lastName}`}
                        telefono={u.userId.punctuation}
                        email={u.title}
                        role={`${u.pricePerHour} $`}
                    />

                ))
            }
        </ContainerREgistrados>
    )
}

export default AdminWorkers