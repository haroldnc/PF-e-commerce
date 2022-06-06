import React from "react";
import { ContainerLateralNav, LateralDiv,Icons, Icon, IconMenu, IconBuilder, IconData } from './LateralNavAdmin.js'

import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { BsInbox } from 'react-icons/bs'
import { MdOutlineDynamicFeed } from 'react-icons/md'
import {FcBusinessman} from 'react-icons/fc'




const LateralNavAdmin = ({lateral, setLateral}) => {

    const handleShow = () => {
        
        if(lateral.show){
            setLateral({
                ...lateral,
                show: false
            })
            console.log('false')
        }else{
            setLateral({
                ...lateral,
                show: true
            })
            console.log('true')
        }
    }


    const handlerClick = (dato) => {
        setLateral({
            panel: dato,
            show: true
        })
    }
    return (
        <LateralDiv>

        <ContainerLateralNav>
            <Icon onClick={() => handleShow()}>
                <IconContext.Provider value={{size:"20px", color: "white"}}>
                    <div>
                        <AiOutlineMenu/>
                    </div>
                </IconContext.Provider>
            </Icon>
            <Icons>
                <IconMenu onClick={() => handlerClick("Menu")} lateral={lateral.panel}>
                    <IconContext.Provider value={{size:"20px", color: "white"}}>
                        <div>
                            <BsInbox/>
                        </div>
                    </IconContext.Provider>
                </IconMenu>
                <IconBuilder onClick={() => handlerClick("Builder")} lateral={lateral.panel}>
                    <IconContext.Provider value={{size:"20px", color: "white"}}>
                        <div>
                            <AiOutlinePlus/>
                        </div>
                    </IconContext.Provider>
                </IconBuilder>
                <IconData onClick={() => handlerClick("Data")} lateral={lateral.panel}>
                    <IconContext.Provider value={{size:"20px", color: "white"}}>
                        <div>
                            <MdOutlineDynamicFeed/>
                        </div>
                    </IconContext.Provider>
                </IconData>
                <Icon onClick={() => handlerClick("Admin")} lateral={lateral.panel}>
                    <IconContext.Provider value={{size:"20px", color: "white"}}>
                        <div>
                            <FcBusinessman/>
                        </div>
                    </IconContext.Provider>
                </Icon>
            </Icons>
        </ContainerLateralNav>
        </LateralDiv>

    )
}

export default LateralNavAdmin