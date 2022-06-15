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
        { postInfo && postInfo.user && userLog && userInfo ?
     <FormContainer>
        {/* <label htmlFor="idPublication">Id de Publicación</label><br />
        <input type="text" id="idPublication" name="idPublication" value={id} disabled /><br />
        <label htmlFor="idWorker">Id de Worker </label><br />
        <input type="text" id="idWorker" name="idWorker" value={postInfo.user} disabled /><br />
        <label htmlFor="idUser">Id de Usuario</label><br />
        <input type="text" id="idUser" name="idUser" value={userInfo.uid} /><br /> */}
        <div>
            <h4>Datos de Publicación</h4>
            <span>Id de Publicación: {id}</span><br />
            <span>Titulo de Publicación: {postInfo.title}</span>
        </div>
        <div>
            <h4>Datos de Trabajador</h4>
            <span>Id de trabajador: {postInfo.user}</span><br />
        
        </div>
        <div>
            <h4>Datos de tu factura</h4>
            <span>Id de usuario: {userInfo.uid}</span><br />
            <span>Nombre: {`${userInfo.firstName} ${userInfo.lastName}`}</span><br />
            <span>email: {userInfo.email}</span>
        </div>
        <Link to={"/contratar/succes"}>
        <ConfirmHire onClick={onSubmit} type="submit">Enviar contratación</ConfirmHire>
        </Link>
    </FormContainer>
    :
    <FormContainer><h1>Es necesario que inicies sesión antes de hacer contrataciones</h1></FormContainer>

    }
    </>
        )
}