import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPostByUser } from '../../../store/actions/index'
import { NavPost, BtnPublic, ContainerCards, TextTwo, Textone, ContainerNopost } from './MyProfilePost'
import CardPostMyprofile from '../CardPostMyprofile/CardPostMyprofile.jsx'

const MyProfilePost = ({id}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const allPost = useSelector(state => state.postsByUser)

    console.log('posts', allPost)
    let posts = null
    if(allPost){
        if(allPost.length !== 0){
            posts = allPost
        }
    }


    const handleClickPost = () =>{
        history.push(`/publicar`)
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