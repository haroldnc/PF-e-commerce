import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPostByUser, deletPost } from '../../../store/actions/index'
import { NavPost, BtnPublic, ContainerCards, TextTwo, Textone, ContainerNopost } from './MyProfilePost'
import CardPostMyprofile from '../CardPostMyprofile/CardPostMyprofile.jsx'
import Swal from 'sweetalert2'

const MyProfilePost = ({id}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const allPost = useSelector(state => state.postsByUser)

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
            // window.location.href = window.location.href
            console.log('eliminado', id )
            }
        })
    }

    useEffect(() => {
        dispatch(getPostByUser(id))
    },[])

    
    
    return (
        <div style={{width:"100%"}}>
            <NavPost>
                <BtnPublic onClick={handleClickPost}>Publicar servicio</BtnPublic>
            </NavPost>
            {
                posts ?
                <ContainerCards>
                {
                   allPost.map( (p, index) => (
                    <div key={index}>
                       <CardPostMyprofile
                        title={p.title}
                        img={p.img}
                        description={p.description}
                        price={p.price}
                        handleDelete={handleDelete}
                        idPist={p._id}
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