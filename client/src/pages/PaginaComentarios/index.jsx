import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function CommentPage(){

    const {id} = useParams()
    const userLogged = useSelector((state) => state.userSignIn);

    const {userInfo} = userLogged
    
    // useEffect(()=>{

    // })
    return(
        <>
        <div>
            {
                userInfo.uid?
                <h1>Todo bien</h1>
                //renderiza formulario
                :
                <h1>logeate por favor </h1>

            }
        </div>
        </>
    )

}