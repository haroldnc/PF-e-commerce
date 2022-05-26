import React from "react";
import Card from "../workersCard/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LeftArrow from '../assets/images/arrowL.png'
import RightArrow from '../assets/images/arrowR.png'
import { Container, ImgArrow, StyledPicture, TitleCarousel, WorkerDiv } from "./workerCardsStyled";

export default function WorkersCarousel({profiles}){

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

    return(
        <WorkerDiv>
            <TitleCarousel>Our Best Talents</TitleCarousel>
            <Slider {...settings}>
                {/* {workerProfiles && workerProfiles.map(p=>(
                    <Container key={p.id}>
                        <StyledPicture src={p.portfolio_pic}/>
                    </Container>
                ))} */}
                {profiles.map(p=>
                     <Card
                     key={p.id}
                     name ={`${p.name} ${p.lastName}`}
                     profile_photo = {p.profile_photo}
                     profession = {p.profession}
                     services = {p.services}
                     porfolio_pic= {p.portfolio_pic}
         
                     />
                    )}

            </Slider>
        </WorkerDiv>

    )
}