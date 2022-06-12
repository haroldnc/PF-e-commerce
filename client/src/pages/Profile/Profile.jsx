import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



import MyProfileWorker from '../../components/MYPROFILE/MyProfileWorker/MyProfileWorker.jsx'

import { ContainerProfile } from './Profile'
import ModalPayment from '../../components/ModalPayment/ModalPayment.jsx'
import { getWorkerDetail } from '../../store/actions/index'

const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [ isOpenPayment, setIsOpenPayment ] = useState(false)
    const profile = useSelector(state => state.workerDetail)


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
        dispatch(getWorkerDetail(id))
    }, [dispatch, id])

    const profileHARD= {
        "languages":[{"idioma":"Ingles", "level": "Medio"}, {"idioma":"Ingles", "level": "Medio"}],
        "skills":[],
        "_id":"62927183a8415ffb1bf2a4c1",
        "title":"Full Stack Developer",
        "aboutMe":"Soy un joven estusiasta y autodidacta, con ganas de superarse...",
        "textInfo":"Mi información....",
        "pricePerHour":10,
        "p_image":"https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png",
        "web": "",
        "subscribed": false,
        "linkedin": "https://www.linkedin.com/in/mateo-monsalve-medina-153407137/",
        "phone":"051934972209",
        "userId": {
           "punctuation":0,
           "firstName":"Harold",
           "lastName":"Navarro",
           "email":"harold.mth95@gmail.com",
           "image":"https://i.pinimg.com/564x/84/aa/0d/84aa0dadd6cbd869bf40397a1a59e4cb.jpg",
           "dni":"71706175",
           
           "user_role":"628ef02007fe8bf42fb6a5f8",
           "uid":"62926fb4a8415ffb1bf2a4bc"
        },
        "workExperience":[],
        "certifications":[]
     }

    const username = pair[0][1]

    console.log(profile)

    return (
        <>
        {   
            Object.entries(profile).length !== 0 ?
            <ContainerProfile>
            <MyProfileWorker 
                    profile={profile} 
                    username={username}
                    toggleModalPayment={toggleModalPayment}
                />
            <ModalPayment 
                 isOpenPayment={isOpenPayment}
                 toggleModalPayment={toggleModalPayment}
                 profile={profile.userId.uid}
            />
        </ContainerProfile> :
        <h2>Cargando...</h2>
        }
        </>
    )
}

export default Profile