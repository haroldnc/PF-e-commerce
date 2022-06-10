import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MyProfileWorker from '../../components/MYPROFILE/MyProfileWorker/MyProfileWorker.jsx'

import { ContainerProfile } from './Profile'
import ModalPayment from '../../components/ModalPayment/ModalPayment.jsx'
import { getUserById } from '../../store/actions/index'

const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [ isOpenPayment, setIsOpenPayment ] = useState(false)
    const profile = useSelector(state => state.userDetail)



    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let pair =[]
    for (let i=0 ; i < vars.length ; i++) {
        pair.push(vars[i].split("=")) 
     }


    const toggleModalPayment = () => {
        setIsOpenPayment(!isOpenPayment)
    }

    useEffect(() => {
        dispatch(getUserById(id))
    }, [])

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



    return (
        <>
        {   
            Object.entries(profile).length !== 0 ?
            <ContainerProfile>
                <MyProfileWorker 
                        profile={profile} 
                        toggleModalPayment={toggleModalPayment}
                    />
                <ModalPayment 
                    isOpenPayment={isOpenPayment}
                    toggleModalPayment={toggleModalPayment}
                    profile={profile.user.uid}
                />
            </ContainerProfile> :
        <h2>Cargando...</h2>
        }
        </>
    )
}

export default Profile