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
        if(wrkr.aboutMe !== undefined && postArr.length){
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
            worker._id?
            <div>

            <Container>
            <Div1>
                <ProfilePic src={worker.userId.image} alt="" />
                {worker.pricePerHour?
                    <Price>{`${worker.pricePerHour}/hora`}</Price>
                    :
                    <Price>n/a</Price>
                }
            </Div1>
            <Div2>
                {worker.userId.firstName?
                    <SubTitle>{`${worker.userId.firstName}`}</SubTitle>

                :
                    <SubTitle>🤖</SubTitle>
                }
                {worker.title?
                    <h4>{worker.title}</h4>
                :
                    <h4>👷‍♂️en construcción</h4>

                }
                {worker.aboutMe?
                    <DescriptionArea>{worker.aboutMe}</DescriptionArea>
                    :
                    <DescriptionArea>Ups... aun no tenemos mucha información de este usuario</DescriptionArea>

                }
            </Div2>
            <Div3>
                {worker.userId.firstName?
                    <HireButton>{`Contacta a ${worker.userId.firstName}`}</HireButton>
                :
                    <HireButton>Contacta a este profesional</HireButton>

                }

                {worker.userId.firstName && worker.userId.lastName?
                <DescriptionArea>{`Hazle algunas preguntas a ${worker.userId.firstName} ${worker.userId.lastName} para llevar a cabo tu proyecto. No te olvides de mirar lo que otros clientes dicen acerca de ${worker.userId.firstName}`}.</DescriptionArea>
                :
                <DescriptionArea>Hazle algunas preguntas a este profesional antes de llevar a cabo tu proyecto. No te olvides de mirar lo que otros clientes dicen acerca de este usuario.</DescriptionArea>
                }
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