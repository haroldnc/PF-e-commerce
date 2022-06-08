import React from 'react'
import MyProfileWorker from '../../components/MYPROFILE/MyProfileWorker/MyProfileWorker.jsx'

import { ContainerProfile } from './Profile'

const Profile = () => {


    const profile= {
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

     const username = "fran"

    return (
        <ContainerProfile>
            <MyProfileWorker profile={profile} username={username}/>
        </ContainerProfile>
    )
}

export default Profile