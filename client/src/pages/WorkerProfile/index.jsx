import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts, getWorkerDetail, getCommentsByWorkerId } from "../../store/actions";
import {
  Container,
  DescriptionArea,
  Div1,
  Div2,
  Div3,
  HireButton,
  PostsTitle,
  Price,
  ProfileCardsContainer,
  ProfilePic,
  SubTitle,
  Containerr,
  Wrapper,
  Grid,
  CommentContainer,
} from "./StyledWorkerProfile";
import ProfilePostDetailCard from "../../components/InWorkerProfileCards";
import CardComments from "../../components/CardComments";

export default function WorkerProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const worker = useSelector((state) => state.workerDetail);
  const arrayOfPost = useSelector((state) => state.allPost);
  const comments = useSelector((state)=>state.comments);
  // console.log(arrayOfPost)
  var userPost = [];

  function getUserPosts(wrkr, postArr) {
    if (wrkr._id && postArr.length) {
      userPost = postArr.filter((p) => p.user.uid === wrkr.userId.uid);
      console.log(userPost);
      return userPost;
    } else {
      return userPost;
    }
  }
    
    useEffect(()=>{
        dispatch(getWorkerDetail(id))
        dispatch(getAllPosts())
        dispatch(getCommentsByWorkerId(id))
    }, [dispatch, id])
    
    getUserPosts(worker, arrayOfPost)
    // console.log(getUserPosts(worker, arrayOfPost))
    //console.log(worker)
    // console.log(arrayOfPost)
    // const userPost= arrayOfPost.filter(p=>p.user===worker.userId.uid)
    const filteredComments =  comments.filter(c=>c.some(Object))
    const objectsFromComments = filteredComments.map(o=>o[0])

  return (
    <Containerr>
        <Wrapper>
           {worker.userId !== null ? (
        <div>
          <Container>
            <Div1>
              {worker.userId ? (
                <ProfilePic src={worker.userId.image} alt="" />
              ) : (
                <Price> Este usuario no ha agregado una imagen</Price>
              )}
              {worker.pricePerHour ? (
                <Price>{`${worker.pricePerHour}/hora`}</Price>
              ) : (
                <Price>n/a</Price>
              )}
            </Div1>
            <Div2>
              {worker.userId ? (
                <SubTitle>{`${worker.userId.firstName}`}  {worker.userId.lastName}</SubTitle>
              ) : (
                <SubTitle>????</SubTitle>
              )}
              {worker.title ? (
                <h4>{worker.title}</h4>
              ) : (
                <h4>?????????????en construcci??n</h4>
              )}
              {worker.aboutMe ? (
                <DescriptionArea>{worker.aboutMe}</DescriptionArea>
              ) : (
                <DescriptionArea>
                  Ups... aun no tenemos mucha informaci??n de este usuario
                </DescriptionArea>
              )}
            </Div2>
            {/* <Div3>
                {worker.userId?
                    <HireButton>{`Contacta a ${worker.userId.firstName}`}</HireButton>
                :
                    <HireButton>Contacta a este profesional</HireButton>
                }
                {worker.userId?
                <DescriptionArea>{`Hazle algunas preguntas a ${worker.userId.firstName} ${worker.userId.lastName} para llevar a cabo tu proyecto. No te olvides de mirar lo que otros clientes dicen acerca de ${worker.userId.firstName}`}.</DescriptionArea>
                :
                <DescriptionArea>Hazle algunas preguntas a este profesional antes de llevar a cabo tu proyecto. No te olvides de mirar lo que otros clientes dicen acerca de este usuario.</DescriptionArea>
                }
            </Div3> */}
        </Container>
            <PostsTitle>Publicaciones que ha hecho este usuario:</PostsTitle>
        <ProfileCardsContainer>
             <Grid>
                {userPost.length ? (
              userPost.map((p) => (
                    <ProfilePostDetailCard
                  key={p._id}
                  title={p.title}
                  img={p.img}
                  id={p._id}
                />
                
              ))
            ) : (
              <h4>...cargando datos</h4>
            )}
            </Grid>
          </ProfileCardsContainer>
          <CommentContainer>
            <h3>Comentarios</h3>
          {objectsFromComments.length && objectsFromComments.map((c,index)=>(
                    <CardComments 
                    key={index}
                    id = {c._id}
                    title={c.title}
                    message={c.message}
                    user={c.user}
                    />
                ))


                }
          </CommentContainer>
          
        </div>
      ) : (
        <h1>
          Los datos se est??n cargando o este usuario no tiene datos v??lidos,
          espere.
        </h1>
      )} 
        </Wrapper>
      
    </Containerr>
  );
} 