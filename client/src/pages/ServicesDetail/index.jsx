import React, {useEffect} from "react";
import { Parent, DetailContainer, BuyContainer, ProfileImg, PostPicture, UserInfo, DescriptionContainer, ContactButton, HireButton, SubTitle, SubTitle2, ProfileLink } from "./styled_Services_Detail";
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getUserById, getAllPosts, getWorkers } from "../../store/actions";
import PostDetailCard from "../../components/PostDetailCard";




export default function ServicesDetail(){
    

    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch()
    const post = useSelector((state)=>state.post)
    const user = useSelector((state)=>state.userDetail)
    const workers = useSelector((state)=>state.workers)
    var arrayOfPosts = []
    arrayOfPosts = useSelector((state)=>state.allPost)
    var userPost = []
    // var author
    // console.log(user)
    // console.log(post)
    
    // console.log(workers)
    // console.log(user.username)
    // console.log(post.title)
        if(arrayOfPosts.length ){
            userPost= arrayOfPosts.filter(p=>p.user==="6292a98a9eea6ea8eb75c1d2")

        }
    //    console.log(userPost)

    const filteredWorker = workers.filter(w=>w.userId.uid === "6292a98a9eea6ea8eb75c1d2")
    // console.log(filteredWorker)
    //  console.log(filteredWorker[0]._id)
    // console.log(post.user)

    

    

    
    //useEffect(()=>{
        dispatch(getPostById(id))
    
        dispatch(getUserById("6292a98a9eea6ea8eb75c1d2"))


        
        dispatch(getAllPosts())
        dispatch(getWorkers())
    //}, [dispatch, id])

    


    return(
        <>
        { post.title && post.user && user.username?

            <Parent>
            <DetailContainer>
                <h2>{post.title}</h2>
                <UserInfo>
                    <Link to={`/worker/${filteredWorker[0]._id}`}>
                    <ProfileImg src={user.image} />
                    </Link>
                    <span>Publicado por: </span>
                    <ProfileLink to={`/home`}>
                    <span>{user.username}</span>
                    </ProfileLink>
                </UserInfo>
                <PostPicture src={post.img} alt="designer presentation" />
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