import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  CardPublicAdmin  from '../CardPublicAdmin/CardPublicAdmin.jsx'
import { changeStatusPosts } from '../../../store/actions/index'
import Swal from 'sweetalert2'

import { ContainerPub,
            NavRegistrados, 
            User,
            Corr,
            Tel,
            Role,
            NavBar,
            BtnPublic,
            ContainerCards
        } from './PublicacionesAdmin'

const PublicacionesAdmin = ({Allpublic}) => {

    console.log('public',Allpublic )

    const dispatch = useDispatch()

    const [ panelPublic, setPanelPublic ] = useState("activas")
    const [ Activa, setActiva ]  = useState(Allpublic.filter( h => h.active === true))
    const [Inactiva, setInactiva ] = useState( Allpublic.filter( h => h.active === false))

    // const p = {
    //         "_id": "62a520fb35fc0fd8e1dfca9a",
    //         "title": "ing ind",
    //         "description": "hol hola hola",
    //         "price": 4,
    //         "user": {
    //                 "firstName": "Karlo",
    //                 "lastName": "Max",
    //                 "uid": "62a5698e35fc0fd8e1dfe598"
    //         },
    //         "service": "6292b2149773bdccbc01e754",
    //         "score": [
    //         4
    //         ],
    //         "img": "https://res.cloudinary.com/dk69jry82/image/upload/v1654988278/PGimages/vmzxdsgh9lmnbhfvagu4.png",
    //         "active": false
    //         }

    const handleChange = (id, active) => {
        if(active){
            Swal.fire({
                title: 'Estas seguro?',
                text: "La publicación se desactivará",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Desactivar!'
              }).then((result) => {
                if (result.isConfirmed){
                  Swal.fire(
                    'Publicación desactivada correctamente!',
                    '',
                    'success'
                  )
                  let post = Activa.filter( a => a._id === id)
                  setInactiva([post[0],...Inactiva])
                  setActiva(Activa.filter( a => a._id !== id))
                  dispatch(changeStatusPosts({active: false},id))
                }
            })
        }else{
            Swal.fire({
                title: 'Estas seguro?',
                text: "La publicación se activará",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Activar!'
              }).then((result) => {
                if (result.isConfirmed){
                  Swal.fire(
                    'Publicación activada correctamente!',
                    '',
                    'success'
                  )
                  let post = Inactiva.filter( a => a._id === id)
                  setActiva([post[0],...Activa])
                  setInactiva(Inactiva.filter( a => a._id !== id))
                  dispatch(changeStatusPosts({active: true},id))
                }
            })

        }

    }


    return (
        <ContainerPub>
            <NavBar>
                <BtnPublic onClick={() => setPanelPublic("activas")}>Activas</BtnPublic>
                <BtnPublic onClick={() => setPanelPublic("inactivas")}>Inactivas</BtnPublic>
            </NavBar>
            <NavRegistrados>
                <User>WORKER</User>
                <Corr>TITULO</Corr>
                <Tel>COSTO</Tel>
                <Role>ESTADO</Role>
            </NavRegistrados>
            {
                panelPublic === "activas" ?

                Activa && Activa.map( p => (
                    <ContainerCards>
                        <CardPublicAdmin
                        image={p.img}
                        title={p.title}
                        price={p.price}
                        worker={`${p.user.firstName} ${p.user.lastName}`}
                        active={p.active}
                        id={p._id}
                        handleChange={handleChange}
                        />
                    </ContainerCards>
                ))
                :
                Inactiva && Inactiva.map( p => (
                    <ContainerCards>
                        <CardPublicAdmin
                            image={p.img}
                            title={p.title}
                            price={p.price}
                            worker={`${p.user.firstName} ${p.user.lastName}`}
                            active={p.active}
                            id={p._id}
                            handleChange={handleChange}
                        />
                    </ContainerCards>
                ))
            }
        </ContainerPub>
    )
}

export default PublicacionesAdmin