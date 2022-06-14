import React, {useState} from "react";
import { ContainerAdmin, Screen } from './Admin.js'
import { useSelector } from "react-redux";
import {Route} from "react-router-dom"
import Home from "../Home/Home"

import NavAdmin from '../../components/ADMINISTRADOR/NavAdmin/NavAdmin.jsx'
import LateralNavAdmin from '../../components/ADMINISTRADOR/LateralNavAdmin/LateralNavAdmin.jsx'
import Dasboard from '../../components/ADMINISTRADOR/Dashboard/Dashboard.jsx'
import MenuAdmin from "../../components/ADMINISTRADOR/MenuAdmin/MenuAdmin.jsx";
import AdminRegistrados from '../../components/ADMINISTRADOR/AdminRegistrados/AdminRegistrados.jsx'
import BuildAdmin from '../../components/ADMINISTRADOR/BuilderAdmin/BuilderAdmin.jsx'
import FormAdminCategory from '../../components/ADMINISTRADOR/FormAdminCategory/FormAdminCategory.jsx'
import FormAdminServices from "../../components/ADMINISTRADOR/FormAdminService/FormAdminService.jsx";
import AdminWorkers from "../../components/ADMINISTRADOR/AdminWorkers/AdminWorkers.jsx";
import Categorias from "../../components/ADMINISTRADOR/Categorias/Categorias.jsx";
import DataAdmin from "../../components/ADMINISTRADOR/DataAdmin/DataAdmin.jsx";
import AdminUser from "../../components/ADMINISTRADOR/AdminUser/AdminUser.jsx";
import ModalDetailUser from '../../components/ADMINISTRADOR/ModalDetailUser/ModalDetailUser.jsx'

const Admin = () => {

    let showLateral;
    let showScreen;
    const [ isOpenDetailUser, setIsOpenDetailUser ] = useState(false)
    const [ idDetailUser, setIdDetailUser ] = useState(false)
    const [ render , setRender ] = useState("Dashboard") 
    const [ lateral , setLateral ] = useState({
        panel:"Menu",
        show: false
    })

    const toggleModalDetailUser = (id) =>{
        setIsOpenDetailUser(!isOpenDetailUser)
        setIdDetailUser(id)
    }

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    console.log(DataAdmin)

    // if(userInfo.user_role !== "628ef02d07fe8bf42fb6a5fa"){
    //     return(<p>good</p>)
    // }
  


    if(lateral.panel === "Menu" && lateral.show){
        showLateral = <MenuAdmin  lateral={lateral} setLateral={setLateral} setRender={setRender}/>
    }else if(lateral.panel === "Builder" && lateral.show){
        showLateral = <BuildAdmin lateral={lateral} setLateral={setLateral} setRender={setRender}/>
    }else if(lateral.panel === "Data" && lateral.show){
        showLateral = <DataAdmin lateral={lateral} setLateral={setLateral} setRender={setRender}/>
    }else if(lateral.panel === "Admin" && lateral.show){
        showLateral = <AdminUser lateral={lateral} setLateral={setLateral} setRender={setRender}/>
    }

    if(render === "Dashboard"){
        showScreen = <Dasboard />
    }else if(render === "Registrados"){
        showScreen = <AdminRegistrados toggleModalDetailUser={toggleModalDetailUser}/>
    }else if(render === "Editar Categorías"){
        showScreen = <FormAdminCategory/>
    }else if(render === "Editar Servicios"){
        showScreen = <FormAdminServices />
    }else if( render === "Workers"){
        showScreen = <AdminWorkers/>
    }else if(render === "Categorías"){
        showScreen = <Categorias/>
    }else if(render === "Servicios"){
        
    }

    return (
        <ContainerAdmin>
            <LateralNavAdmin lateral={lateral} setLateral={setLateral}/>
            {showLateral}
            <Screen lateral={lateral}>
                <NavAdmin render={render} />
                {showScreen}
            </Screen>
            <ModalDetailUser
            isOpenDetailUser={isOpenDetailUser}
            idDetailUser={idDetailUser}
            toggleModalDetailUser={toggleModalDetailUser}
            />
        </ContainerAdmin>
    )
}

export default Admin 