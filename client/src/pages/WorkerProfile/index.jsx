import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {getAllPosts, getWorkerDetail} from "../../store/actions"
import { Container, DescriptionArea, Div1, Div2, Div3, HireButton, PostsTitle, Price, ProfileCardsContainer, ProfilePic, SubTitle } from "./StyledWorkerProfile";
import ProfilePostDetailCard from "../../components/InWorkerProfileCards";

export default function WorkerProfile (){

    const {id} = useParams()
    const dispatch = useDispatch()
    const worker = useSelector((state)=>state.workerDetail)
    const arrayOfPost = useSelector((state)=>state.allPost)
    var userPost = []


    function getUserPosts(wrkr, postArr){
        if(wrkr.aboutMe !== undefined){
            userPost = postArr.filter(p=>p.user===wrkr.userId.uid)
            console.log(userPost)
            return userPost
        }
        else{
            return userPost
        }
    }
    
    useEffect(()=>{
        dispatch(getWorkerDetail(id))
        dispatch(getAllPosts())
    }, [dispatch, id])
    
    getUserPosts(worker, arrayOfPost)
    // console.log(worker)
    // console.log(arrayOfPost)
    // const userPost= arrayOfPost.filter(p=>p.user===worker.userId.uid)


    return(
        <>{
            worker.aboutMe && arrayOfPost.length?
            <div>

            <Container>
            <Div1>
                <ProfilePic src={worker.userId.image} alt="" />
                <Price>{`$${worker.pricePerHour}/hora`}</Price>
            </Div1>
            <Div2>
                <SubTitle>{`${worker.userId.firstName}`}</SubTitle>
                <h4>{worker.title}</h4>
                <DescriptionArea>{worker.aboutMe}</DescriptionArea>
            </Div2>
            <Div3>
                <HireButton>{`Contacta a ${worker.userId.firstName}`}</HireButton>
                <DescriptionArea>{`Hazle algunas preguntas a ${worker.userId.firstName} ${worker.userId.lastName} para llevar a cabo tu proyecto. No te olvides de mirar lo que otros clientes dicen acerca de ${worker.userId.firstName}`}.</DescriptionArea>
            </Div3>
        </Container>
            <PostsTitle>Publicaciones que ha hecho este usuario:</PostsTitle>
        <ProfileCardsContainer>
            
            {
                userPost.length?
                userPost.map(p=>(
                    <ProfilePostDetailCard key={p.id} title={p.title} img={p.img} id={p.id} />
                ))
                :
                <h4>...cargando datos</h4>
            }
        </ProfileCardsContainer>
            </div>
        :
        <h1>Cargando...</h1>
        }
        </>
    )
}