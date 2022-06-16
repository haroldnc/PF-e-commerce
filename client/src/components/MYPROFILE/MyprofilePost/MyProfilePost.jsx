import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPostByUser, deletPost, changeStatusPosts } from '../../../store/actions/index'
import { NavPost, BtnPublic, ContainerCards, TextTwo, Textone, ContainerNopost } from './MyProfilePost'
import CardPostMyprofile from '../CardPostMyprofile/CardPostMyprofile.jsx'
import Swal from 'sweetalert2'

const MyProfilePost = ({id, allPost, profile}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [ PostAll , setPostAll ] = useState("")
    const [ cambio , setCambio ] = useState( false )
    // const [ PostActivos , setPostActivos ] = useState(allPost && allPost.filter( p => p.active === true).length)

    let posts = null
    if(allPost){
        if(allPost.length !== 0){
            posts = allPost
        }
    }


    const handleClickPost = () =>{
        history.push(`/publicar`)
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu publicación se eliminará de manera permanente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Publicación eliminada correctamente!',
                'Ningun usuario podrá contratarte por esta publicación',
                'success'
                )
                const response = dispatch(deletPost(id))
                if(cambio){
                    setPostAll(PostAll.filter(e => e._id !== id))
                }else{
                    setPostAll(allPost.filter(e => e._id !== id))
                    setCambio(true)
                }
            }
        })
    }

    // console.log('plan', profile.dataWorker.subscription_type.name)
    // console.log('post',PostActivos)

    const handleActivate = (body, id) => {
        dispatch(changeStatusPosts(body,id))
    }

    return (
        <div style={{width:"100%"}}>
            <NavPost>
                <BtnPublic onClick={handleClickPost}>Publicar servicio</BtnPublic>
            </NavPost>
            {
                posts ?
                <ContainerCards>
                {
                cambio ? PostAll.map( (p, index) => (
                    <div key={index}>
                       <CardPostMyprofile
                        title={p.title}
                        img={p.img}
                        description={p.description}
                        price={p.price}
                        handleDelete={handleDelete}
                        idPist={p._id}
                        service={p.service.name}
                        active={p.active}
                        handleActivate={handleActivate}
                        suscribe={profile.dataWorker.subscription_type.name}
                        posts={allPost}
                       /> 
                    </div>
                   )) :
                   allPost.map( (p, index) => (
                    <div key={index}>
                       <CardPostMyprofile
                        title={p.title}
                        img={p.img}
                        description={p.description}
                        price={p.price}
                        handleDelete={handleDelete}
                        idPist={p._id}
                        service={p.service.name}
                        active={p.active}
                        handleActivate={handleActivate}
                        suscribe={profile.dataWorker.subscription_type.name}
                        posts={allPost}
                        // rating={p.score}
                       /> 
                    </div>
                   )) 
                   
                }
                </ContainerCards> :
                <ContainerNopost>
                        <Textone>Actualmente no tienes servicios activos</Textone>
                        <TextTwo>Ofrece tu primer servicio</TextTwo>
                </ContainerNopost>
            }
           
        </div>
    )
}

export default MyProfilePost