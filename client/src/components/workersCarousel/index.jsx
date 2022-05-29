import React, { useEffect } from "react";
import Card from "../workersCard/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LeftArrow from '../assets/images/arrowL.png'
import RightArrow from '../assets/images/arrowR.png'
import { Container, ImgArrow, StyledPicture, TitleCarousel, WorkerDiv } from "./workerCardsStyled";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import {getWorkers} from "../../store/actions"



export default function WorkersCarousel(){

    const profiles = useSelector((state)=>state.workers)
    const dispatch = useDispatch()
    console.log(profiles)

    
    

  

    


    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <ImgArrow src={LeftArrow} alt="prevArrow" {...props} />
      );
      
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <ImgArrow src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,   
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />
       }

    //    const workerProfiles = profiles.map(p=>p)

    useEffect(()=>{
        dispatch(getWorkers())
    },[])

    return(
        <WorkerDiv>
            <TitleCarousel>Our Best Talents</TitleCarousel>
            <Slider {...settings}>
                {/* {workerProfiles && workerProfiles.map(p=>(
                    <Container key={p.id}>
                        <StyledPicture src={p.portfolio_pic}/>
                    </Container>
                ))} */}
                {profiles.length?
                profiles.map(p=>
                     <Card
                     key={p._id}
                     name ={`${p.userId.firstName} ${p.userId.lastName}`}
                     image = {p.userId.image}
                     title = {p.title}
                    
         
                     />
                    )
                    :
                    <h3>Cargando</h3>
                }

            </Slider>
        </WorkerDiv>

    )
}