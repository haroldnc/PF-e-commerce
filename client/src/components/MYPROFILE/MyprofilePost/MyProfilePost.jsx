import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPosts } from '../../../store/actions/index'
import { NavPost, BtnPublic, ContainerCards } from './MyProfilePost'
import CardPostMyprofile from '../CardPostMyprofile/CardPostMyprofile.jsx'

const MyProfilePost = ({id}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const allPost = useSelector(state => state.posts)
    console.log('posts' , allPost)

    const FilterPosts = allPost.length !== 0 ? allPost.Publications.filter(p => p.user.uid === id) : []

    console.log('filtro', FilterPosts)

    const handleClickPost = () =>{
        history.push(`/publicar`)
    }

    useEffect(() => {
        dispatch(getPosts())
    },[])

    
    return (
        <div style={{width:"100%"}}>
            <NavPost>
                <BtnPublic onClick={handleClickPost}>Publicar servicio</BtnPublic>
            </NavPost>
            {
                FilterPosts.length > 0 ?
                <ContainerCards>
                {
                   FilterPosts.map( (p, index) => (
                    <div key={index}>
                       <CardPostMyprofile
                        title={p.title}
                        img={p.img}
                        description={p.description}
                        price={p.price}
                       /> 
                    </div>
                   )) 
                }
                </ContainerCards> :
                <ContainerCards>
                <h1>Actualmente no tienes servicios activos</h1>
                <h3>Ofrece tu primer servicio</h3>
                </ContainerCards>
            }
           
        </div>
    )
}

export default MyProfilePost