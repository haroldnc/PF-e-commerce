import React, { useEffect } from "react";
import DetailUser from '../DetailUser/DetailUser.jsx'
import DetailWorker  from '../DetailWorker/DetailWorker.jsx'

import { ContainerModal, DivGlob, BtnAtras } from './ModalDetailUser'

const ModalDetailUser = ({isOpenDetailUser, toggleModalDetailUser, UserDetail, PostById, HiringByUser, HiringByWorker}) => {


    // console.log('userdetail',UserDetail)
    let showUser = null
    if(Object.entries(UserDetail).length === 0){
        showUser = null
    }else{
        if(UserDetail.user.user_role.name === "user"){
            showUser = <DetailUser 
                            UserDetail={UserDetail} 
                            HiringByUser={HiringByUser} 
                            toggleModalDetailUser={toggleModalDetailUser}
                        />
        }else{
            showUser = <DetailWorker  
                            UserDetail={UserDetail} 
                            PostById={PostById} 
                            HiringByWorker={HiringByWorker}
                            toggleModalDetailUser={toggleModalDetailUser}
                        />
        }
    }

    

   
    return(
        <ContainerModal isOpenDetailUser={isOpenDetailUser}>
            <DivGlob>
                    {showUser}
                <BtnAtras onClick={() => toggleModalDetailUser(null) }>Cerrar</BtnAtras>
            </DivGlob>
        </ContainerModal>
    )
}

export default ModalDetailUser