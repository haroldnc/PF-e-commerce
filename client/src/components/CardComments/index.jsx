import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getUserById } from "../../store/actions";

export default function CardComments({id, title, message, user}){
    
    const dispatch = useDispatch()
    const userDetail = useSelector((state)=>state.userDetail)


    useEffect(()=>{
        dispatch(getUserById(user))
        

    })


    return(
        <>
        <div key={id}>
            <h3>{title}</h3>
            {userDetail && userDetail.user && userDetail.user.username?
                        <span>{userDetail.user.username}</span>
                :
                <span>Sin Nombre</span>
            }
            <p>{message}</p>

        </div>
        </>
    )
}