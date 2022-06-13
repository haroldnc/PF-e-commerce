import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../store/actions/index'
import { NavPost, BtnPublic, ContainerCards } from './MyProfilePost'

const MyProfilePost = ({id}) => {

    const dispatch = useDispatch()
    const allPost = useSelector(state => state.posts)
    console.log('posts' , allPost.Publications)

    const FilterPosts = allPost.Publications.filter(p => p.user === id)

    console.log('filtro', FilterPosts)

    useEffect(() => {
        dispatch(getPosts())
    },[])
    return (
        <div style={{width:"100%"}}>
            <NavPost>
                <BtnPublic>Publicar servicio</BtnPublic>
            </NavPost>
            <ContainerCards>
                prueba
            </ContainerCards>
        </div>
    )
}

export default MyProfilePost