import React, { useEffect } from "react";
import DetailUser from '../DetailUser/DetailUser.jsx'
import DetailWorker  from '../DetailWorker/DetailWorker.jsx'

import { ContainerModal, DivGlob } from './ModalDetailUser'

const ModalDetailUser = ({isOpenDetailUser, toggleModalDetailUser, UserDetail, PostById}) => {


    // console.log('userdetail',UserDetail)
    let showUser = null
    if(Object.entries(UserDetail).length === 0){
        showUser = null
    }else{
        if(UserDetail.user.user_role.name === "user"){
            showUser = <DetailUser UserDetail={UserDetail}/>
        }else{
            showUser = <DetailWorker  UserDetail={UserDetail} PostById={PostById}/>
        }
    }

    

   
    return(
        <ContainerModal isOpenDetailUser={isOpenDetailUser}>
            <DivGlob>
                    {showUser}
                <button onClick={() => toggleModalDetailUser(null) }>Cerrar</button>
            </DivGlob>
        </ContainerModal>
    )
}

export default ModalDetailUser