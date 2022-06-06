import React, {useState} from "react";
import { ContainerAdmin, Screen } from './Admin.js'

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

const Admin = () => {

    let showLateral;
    let showScreen;
    const [ render , setRender ] = useState("Dashboard") 
    const [ lateral , setLateral ] = useState({
        panel:"Menu",
        show: false
    })


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
        showScreen = <AdminRegistrados/>
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
        </ContainerAdmin>
    )
}

export default Admin 