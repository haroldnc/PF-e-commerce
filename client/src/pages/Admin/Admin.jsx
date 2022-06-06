import React, {useState} from "react";
import { ContainerAdmin, Screen } from './Admin.js'

import NavAdmin from '../../components/NavAdmin/NavAdmin.jsx'
import LateralNavAdmin from '../../components/LateralNavAdmin/LateralNavAdmin.jsx'
import Dasboard from '../../components/Dashboard/Dashboard.jsx'
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin.jsx";
import AdminRegistrados from '../../components/AdminRegistrados/AdminRegistrados.jsx'
import BuildAdmin from '../../components/BuilderAdmin/BuilderAdmin.jsx'
import FormAdminCategory from '../../components/FormAdminCategory/FormAdminCategory.jsx'
import FormAdminServices from "../../components/FormAdminService/FormAdminService.jsx";

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
    }else{
        showLateral = null
    }

    if(render === "Dashboard"){
        showScreen = <Dasboard />
    }else if(render === "Registrados"){
        showScreen = <AdminRegistrados/>
    }else if(render === "Categorías"){
        showScreen = <FormAdminCategory/>
    }else if(render === "Servicios"){
        showScreen = <FormAdminServices />
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