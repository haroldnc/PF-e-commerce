import React, {useEffect} from "react";
import { Parent, DetailContainer, BuyContainer, ProfileImg, PostPicture, UserInfo, DescriptionContainer, ContactButton, HireButton, SubTitle, SubTitle2, ProfileLink } from "./styled_Services_Detail";
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getUserById, getAllPosts, getWorkers, getAllUsers, clearServiceDetail, getHiringsByUserId } from "../../store/actions";
import PostDetailCard from "../../components/PostDetailCard";




export default function ServicesDetail(){
    
    const userLog = useSelector((state) => state.userSignIn);


    // console.log(postId)

    const {userInfo} = userLog
    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch()
    var post = useSelector((state)=>state.post)
    var user = useSelector((state)=>state.userDetail.user)
    // console.log(user)
    const workers = useSelector((state)=>state.workers)
    var arrayOfPosts = []
    arrayOfPosts = useSelector((state)=>state.allPost)
    var userPost = []
    const hiringsByUser = useSelector((state)=>state.userHirings)
    // var author
    // console.log(user)
    // console.log(post)
    
    // console.log(workers)
    // console.log(user.username)
    // console.log(post.title)
        if(arrayOfPosts.length ){
            userPost= arrayOfPosts.filter(p=>p.user.uid===post.user)

        }
    //    console.log(userPost)

    const filteredWorker = workers.filter(w=>w.userId.uid === post.user)

    // const user = users.filter(u=>u.uid === post.user)
    // console.log(filteredWorker)
    //  console.log(filteredWorker[0]._id)
    console.log(post.user)

   
    const filteredHirings = hiringsByUser.filter(h=>h.idPublication._id === id)
    let comentario = filteredHirings.map(h=>h.idPublication._id===post._id ? true :false)
    comentario = comentario.includes(true)

    const HandleClick = ()=>{
        alert("Ya has contratado este servicio con anterioridad intenta con otra publicación o probablemente aun no has iniciado sesión.")
    }
    
    
     useEffect(()=>{      
            
        dispatch(getPostById(id))
        if(post.user) dispatch(getUserById(post.user))
        dispatch(getAllPosts())
        dispatch(getWorkers())
        if(userInfo){
            dispatch(getHiringsByUserId(userInfo.uid))

        }else{
            return
        }

     


        // return ()=>{
        //     dispatch(clearServiceDetail())
        // }
        
       
        


        
    },[dispatch, id, post.user])
    
    console.log("post",post)
const comentar = (
    <Link to={`/comentar/${post._id}`}>
        <HireButton>Comentar</HireButton>
    </Link>
)
    


    return(
        <>
        { post.title && post.user && user?

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
                    <Link to={`/comentarios/${id}`}>
                    <ContactButton>Hazle una pregunta</ContactButton><br />
                    </Link>
                    { filteredHirings.length < 1 && userLog && userInfo?
                        <Link to={`/contratar/post/${id}`}>
                            <HireButton>{`Contratar a ${user.username}`}</HireButton>
                         </Link>
                        :
                        <HireButton onClick={HandleClick}>{`Contratar a ${user.username}`}</HireButton>

                    }
                    <br />
                    {
                        comentario
                        ? comentar
                        :<></>
                    }

                    <SubTitle2>{`Otros anuncios de ${user.username} `}</SubTitle2>

                    {userPost.length?
                    userPost.map(p=>(
                        <PostDetailCard key={p._id} title={p.title} img={p.img} id={p._id} /> 
                    ))
                    
                    :
                    <h4>...cargando</h4>
                    }
                

            </BuyContainer>
        </Parent>
        :
        <Parent>
            <h1>...cargando</h1>

        </Parent>
    }
        </>
    )
}