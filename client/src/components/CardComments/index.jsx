import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getUserById } from "../../store/actions";
import { ParentComment, TextP, UserSpan } from "./cardComments";

export default function CardComments({id, title, message, user}){
    
    const dispatch = useDispatch()
    const userDetail = useSelector((state)=>state.userDetail)


    useEffect(()=>{
        dispatch(getUserById(user))
        

    },[dispatch, user])


    return(
        <>
        <ParentComment key={id}>
            <h5>{title}</h5>
            {userDetail && userDetail.user && userDetail.user.username?
                        <UserSpan>{`Comentario de:  ${userDetail.user.username}`}</UserSpan>
                :
                <UserSpan>Sin Nombre</UserSpan>
            }
            <TextP>{message}</TextP>

        </ParentComment>
        </>
    )
}