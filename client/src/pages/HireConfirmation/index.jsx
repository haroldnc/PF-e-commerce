import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById, hireButton } from "../../store/actions";
import { ConfirmHire, FormContainer } from "./styledHireConfirm";
import { Link } from "react-router-dom";

export default function HirePage(){
    const dispatch = useDispatch()
    const {id} = useParams()
    const postInfo = useSelector((state)=>state.post)
    const userLog = useSelector((state) => state.userSignIn);


    // console.log(postId)

    const {userInfo} = userLog

    const [data, setData] = useState(
        {
            idUser : userInfo.uid,
            idWorker: "",
            idPublication: id,
        }
    )

    // function handleChange(e){
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     })
    // }

    
    function onSubmit(){
        dispatch(hireButton(data))
    }

    useEffect(()=>{
        dispatch(getPostById(id))
        setData({
            ...data,
            idWorker:postInfo.user
        })
    },[dispatch, id])
    
    console.log(data)
    return(

        <>
        { postInfo && postInfo.user ?
     <FormContainer>
        <label htmlFor="idPublication">Id de Publicación</label><br />
        <input type="text" id="idPublication" name="idPublication" value={id} disabled /><br />
        <label htmlFor="idWorker">Id de Worker </label><br />
        <input type="text" id="idWorker" name="idWorker" value={postInfo.user} disabled /><br />
        <label htmlFor="idUser">Id de Usuario</label><br />
        <input type="text" id="idUser" name="idUser" value={userInfo.uid} /><br />
        <Link to={"/contratar/succes"}>
        <ConfirmHire onClick={onSubmit} type="submit">Enviar contratación</ConfirmHire>
        </Link>
    </FormContainer>
    :
    <FormContainer><h1>...cargando</h1></FormContainer>

    }
    </>
        )
}