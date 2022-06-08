import React from "react";
import { ContainerNavAdmin, NameDiv, LeftDiv} from './NavAdmin'

import {FcBusinessman} from 'react-icons/fc'
import { IconContext } from "react-icons";



const NavAdmin = ({render}) => {
    return (
        <ContainerNavAdmin>
            <NameDiv>
                <h2>{render}</h2>
            </NameDiv>
            <LeftDiv>
                <IconContext.Provider value={{size:"20px"}}>
                    <div>
                        <FcBusinessman/>
                    </div>
                </IconContext.Provider>
            </LeftDiv>
        </ContainerNavAdmin>
    ) 
}

export default NavAdmin