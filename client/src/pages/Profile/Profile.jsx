import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



import MyProfileWorker from '../../components/MYPROFILE/MyProfileWorker/MyProfileWorker.jsx'

import { ContainerProfile,Validate } from './Profile'
import ModalPayment from '../../components/ModalPayment/ModalPayment.jsx'
import { getUserById,clearProfile } from '../../store/actions/index'
import MyProfileUser from '../../components/MYPROFILE/MyProfileUser/MyProfileUser.jsx'
import ModalCancelPayment from '../../components/ModalCancelPayment/ModalCancelPayment.jsx'
// import TypeCancel from '../../components/ModalCancelPayment/TypeCancel/TypeCancel.jsx'


const Validation = (userInfo, id) => {
    if(!userInfo) return false;
    if(userInfo.user_role === "628ef02d07fe8bf42fb6a5fa" ) return true;
    if(userInfo.user_role.name && userInfo.user_role.name === "admin") return true;
    if(userInfo.uid === id) return true;
    return false;
}


const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [ isOpenPayment, setIsOpenPayment ] = useState(false)
    const [ isOpenPaymentCancel, setIsOpenPaymentCancel] = useState(false)

    const profile = useSelector(state => state.userDetail)
    console.log(profile)


    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let pair =[]
    for (let i=0 ; i < vars.length ; i++) {
        pair.push(vars[i].split("=")) 
    }

    const toggleModalPayment = () => {
        setIsOpenPayment(!isOpenPayment)
    }

    const toggleModalPaymentCancel = () => {
        setIsOpenPaymentCancel(!isOpenPaymentCancel)
    }

    useEffect(() => {
        dispatch(clearProfile())
        dispatch(getUserById(id))
    }, [])

    let TypeProfile = null
    if( Object.entries(profile).length !== 0 ){
        if(profile.user.user_role.name === "worker"){
            TypeProfile = <MyProfileWorker 
                                profile={profile} 
                                toggleModalPayment={toggleModalPayment}
                                toggleModalPaymentCancel={toggleModalPaymentCancel}
                            />
        }else{
            TypeProfile = <MyProfileUser profile={profile} toggleModalPayment={toggleModalPayment} />
        }
    }

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const validate = Validation(userInfo,id)

    if(!validate){
        return(
            <Validate>
                <h1>si quieres ver tu perfil primero debes inciar sesion</h1>
            </Validate>
        )
    }
    
    return (
        <>
        {   
            Object.entries(profile).length !== 0 ?
            <ContainerProfile>
                {TypeProfile}
                <ModalPayment 
                    isOpenPayment={isOpenPayment}
                    toggleModalPayment={toggleModalPayment}
                    profile={profile.user.uid}
                />
                <ModalCancelPayment 
                    isOpenPaymentCancel={isOpenPaymentCancel}
                    toggleModalPaymentCancel={toggleModalPaymentCancel}
                    profile={profile.user.uid}
                    // toggleModalType={toggleModalType}
                />
                {/* <TypeCancel 
                    isOpenType={isOpenType}
                    toggleModalType={toggleModalType}
                    profile={profile.user.uid}
                /> */}
            </ContainerProfile> :
        <h2>Cargando...</h2>
        }
        </>
    )
}

export default Profile