import React, {useEffect} from "react";
import { Parent, DetailContainer, BuyContainer, ProfileImg, PostPicture, UserInfo, DescriptionContainer, ContactButton, HireButton, SubTitle, SubTitle2, ProfileLink } from "./styled_Services_Detail";
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getUserById, getAllPosts, getWorkers } from "../../store/actions";
import PostDetailCard from "../../components/PostDetailCard";




export default function ServicesDetail(){
    
    const dispatch = useDispatch()
    const post = useSelector((state)=>state.post)
    const user = useSelector((state)=>state.userDetail)
    const workers = useSelector((state)=>state.workers)
    const arrayOfPosts = useSelector((state)=>state.allPost)
    
    const userPost= arrayOfPosts.filter(p=>p.user==="62950e52471fa510d2a2f906")
//    console.log(userPost)

    const filteredWorker = workers.filter(w=>w.userId.uid === user.uid)
    console.log(filteredWorker)


    useEffect(()=>{
        dispatch(getPostById("629a87433f8d0083d6ec08e4"))
        dispatch(getUserById("62950e52471fa510d2a2f906"))
        dispatch(getAllPosts())
        dispatch(getWorkers())
    }, [dispatch])

    return(
        <>
        { post.title?

            <Parent>
            <DetailContainer>
                <h2>{post.title}</h2>
                <UserInfo>
                    <Link to={`/worker/${filteredWorker[0]._id}`}>
                    <ProfileImg src={user.image} />
                    </Link>
                    <span>Publicado por: </span>
                    <ProfileLink to={`/worker/${filteredWorker[0]._id}`}>
                    <span>{user.username}</span>
                    </ProfileLink>
                </UserInfo>
                <PostPicture src="https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png" alt="designer presentation" />
                <DescriptionContainer>
                    <h3>Acerca de mi trabajo</h3>
                    <p>
                    ¡Hola! <br />
                    {`¿Te gustaría trabajar conmigo? Conoce un poco mas de mi trabajo y hazme una pregunta
                    recuerda que soy tu mejor opción en ${post.title} ${post.description}`}.
                    </p>
                </DescriptionContainer>
            </DetailContainer>
            <BuyContainer>
                
                    <SubTitle>{`¿Te interesa trabajar con ${user.username}?`}</SubTitle>
                    <ContactButton>Hazle una pregunta</ContactButton><br />
                    <HireButton>{`Contratar a ${user.username}`}</HireButton>
                    <SubTitle2>{`Otros anuncios de ${user.username} `}</SubTitle2>

                    {userPost.length?
                    userPost.map(p=>(
                        <PostDetailCard key={p.id} title={p.title} img={p.img} id={p.id} /> 
                    ))
                    
                    :
                    <h4>...cargando</h4>
                    }
                

            </BuyContainer>
        </Parent>
        :
        <h1>...cargando</h1>
    }
        </>
    )
}