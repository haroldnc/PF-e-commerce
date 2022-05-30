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
    

    
    

  

    


    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <ImgArrow src={LeftArrow} alt="prevArrow" {...props} />
      );
      
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <ImgArrow src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,   
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />
       }

    //    const workerProfiles = profiles.map(p=>p)

    useEffect(()=>{
        dispatch(getWorkers())
    },[dispatch])

    return(
        <>
        {profiles.length?

            <WorkerDiv>
            <TitleCarousel>Nuestros mejores talentos</TitleCarousel>
            <Slider {...settings}>
                {
                    profiles.map(p=>
                        <Card
                        key={p._id}
                        name ={`${p.userId.firstName} ${p.userId.lastName}`}
                        image = {p.userId.image}
                        title = {p.title}
                        portfolioImage = {p.p_image}
                        id = {p._id}           
                        />
                        )
                }

            </Slider>
        </WorkerDiv>
        :
        <h1>...cargando</h1>
                    }
        </>

    )
}