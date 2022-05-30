import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {getWorkerDetail} from "../../store/actions"
import { Container, DescriptionArea, Div1, Div2, Div3, HireButton, Price, ProfilePic } from "./StyledWorkerProfile";


export default function WorkerProfile (){

    const {id} = useParams()
    const dispatch = useDispatch()
    const worker = useSelector((state)=>state.workerDetail)

    useEffect(()=>{
        dispatch(getWorkerDetail(id))
    }, [dispatch, id])

    // console.log(worker)


    return(
        <>{
            worker.aboutMe ?
            <Container>
            <Div1>
                <ProfilePic src={worker.userId.image} alt="" />
                <Price>{`$${worker.pricePerHour}/hora`}</Price>
            </Div1>
            <Div2>
                <h3>{`${worker.userId.firstName}`}</h3>
                <h4>{worker.title}</h4>
                <DescriptionArea>{worker.aboutMe}</DescriptionArea>
            </Div2>
            <Div3>
                <HireButton>{`Contrata a ${worker.userId.firstName}`}</HireButton>
                <DescriptionArea>{`Registrate y contrata a ${worker.userId.firstName} ${worker.userId.lastName} para llevar a cabo tu proyecto.`}</DescriptionArea>
            </Div3>
        </Container>
        :
        <h1>Cargando...</h1>
        }
        </>
    )
}