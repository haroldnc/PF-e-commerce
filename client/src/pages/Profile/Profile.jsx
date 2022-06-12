import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



import MyProfileWorker from '../../components/MYPROFILE/MyProfileWorker/MyProfileWorker.jsx'

import { ContainerProfile } from './Profile'
import ModalPayment from '../../components/ModalPayment/ModalPayment.jsx'
import { getUserById, getWorkerDetail } from '../../store/actions/index'
import MyProfileUser from '../../components/MYPROFILE/MyProfileUser/MyProfileUser.jsx'
import ModalCancelPayment from '../../components/ModalCancelPayment/ModalCancelPayment.jsx'
import TypeCancel from '../../components/ModalCancelPayment/TypeCancel/TypeCancel.jsx'


const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [ isOpenPayment, setIsOpenPayment ] = useState(false)
    const [ isOpenPaymentCancel, setIsOpenPaymentCancel] = useState(false)
    const [ isOpenType , setIsOpenType ] = useState(false)

    const profile = useSelector(state => state.userDetail)

    


    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let pair =[]
    for (let i=0 ; i < vars.length ; i++) {
        pair.push(vars[i].split("=")) 
     }


    const toggleModalType = () => {
        setIsOpenType(!isOpenType)
    }

    const toggleModalPayment = () => {
        setIsOpenPayment(!isOpenPayment)
    }

    const toggleModalPaymentCancel = () => {
        setIsOpenPaymentCancel(!isOpenPaymentCancel)
    }

    useEffect(() => {
        dispatch(getWorkerDetail(id))
        dispatch(getUserById(id))
    }, [dispatch, id])

    const profileHARD= {
        "ok": true,
        "user": {
            "username": "mateoworker",
            "firstName": "Mateo",
            "lastName": "Monsalve",
            "email": "mateoworkerprueba@gmail.com",
            "image": "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            "user_role": {
            "_id": "628ef02007fe8bf42fb6a5f8",
            "name": "worker"
            },
            "punctuation": 0,
            "confirm_email": false,
            "uid": "62a29a4bfb1c43631f420700"
        },
        "dataWorker": {
            "_id": "62a29a4bfb1c43631f420701",
            "title": "Desarrollador Full Stack",
            "aboutMe": "Soy desarrollador Full Stack ...",
            "textInfo": "",
            "skills": [],
            "pricePerHour": 0,
            "p_image": "https://media.istockphoto.com/photos/programmer-controlling-the-statistics-of-the-site-picture-id1139938843?k=20&m=1139938843&s=612x612&w=0&h=nJSMJEvTGin4vsBZpTAmpFgE_-y5J-mPTzRAZ03lCjk=",
            "dni": "103546884",
            "phone": "3333333333",
            "web": "https://www.linkedin.com/in/mateo-monsalve-medina-153407137/",
            "linkedin": "https://www.linkedin.com/in/mateo-monsalve-medina-153407137/",
            "score": 0,
            "subscribed": true,
            "userId": "62a29a4bfb1c43631f420700",
            "languages": [],
            "workExperience": [],
            "certifications": [],
            "__v": 0
        }
    }

    const profileUserHARD = {
        "ok": true,
        "user": {
        "username": "elfran",
        "firstName": "elfran",
        "lastName": "elfran",
        "email": "elfran@gmail.com",
        "image": "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
        "user_role": {
        "_id": "628eefd607fe8bf42fb6a5f5",
        "name": "user"
        },
        "punctuation": 0,
        "confirm_email": false,
        "uid": "629f8b395fd85e3406d03058"
        }
        }


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
                    toggleModalType={toggleModalType}
                />
                <TypeCancel 
                    isOpenType={isOpenType}
                    toggleModalType={toggleModalType}
                    profile={profile.user.uid}
                />
            </ContainerProfile> :
        <h2>Cargando...</h2>
        }
        </>
    )
}

export default Profile