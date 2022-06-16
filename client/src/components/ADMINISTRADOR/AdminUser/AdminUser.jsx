import React from "react";
import { useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import { IconContext } from 'react-icons'
import { IoMdRadioButtonOn } from 'react-icons/io'


import { ContainerMenu, NameMenu, DivName, Menudiv, Namediv, BtnLogout } from './AdminUser'

const AdminUser = ({lateral, setLateral, setRender}) => {

  const history = useHistory()

    const handleClick = (dato) => {
      history.push("/")
    }

  
    return (
        <ContainerMenu>
            <DivName>
                <NameMenu>Administrador</NameMenu>
            </DivName>  
            {/* <BtnLogout onClick={() => handleLogout()}>Pagina de inicio</BtnLogout> */}
            <Menudiv onClick={() => handleClick()}>
            <IconContext.Provider value={{size:"20px"}}>
                        <div>
                            <IoMdRadioButtonOn/>
                        </div>
                    </IconContext.Provider>
                <Namediv>Home</Namediv>
            </Menudiv>
            
        
        </ContainerMenu>
    )
}

export default AdminUser