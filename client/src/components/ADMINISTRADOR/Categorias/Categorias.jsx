import React,{useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getWorkers } from "../../../store/actions/index.js";

import CardAdminR from '../CardAdminR/CardAdminR.jsx'

import { ContainerREgistrados, NavRegistrados, User, Role, Corr, Tel } from './Categorias'

const Categorias = () => {

    const dispatch = useDispatch() 

    const allWorkers = useSelector( state => state.workers)
    console.log(allWorkers)

    useEffect( () => {
        dispatch(getWorkers())
    },[])

    return (
        <ContainerREgistrados>
            <NavRegistrados>
                <User>NOMBRE DE LA CATEGORÍA</User>
                <Corr></Corr>
                <Tel></Tel>
                <Role>CANTIDAD DE SERVICIOS</Role>
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

export default Categorias