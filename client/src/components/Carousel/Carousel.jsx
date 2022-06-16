import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LeftArrow from '../assets/images/arrowL.png'
import RightArrow from '../assets/images/arrowR.png'
import { Link } from 'react-router-dom'

import {CarouselDiv, TitleCarousel, CardCarousel, Image, NameCard, ArrowImage, Linked} from './StyledCarousel'




const Carousel = ({allCategories}) => {

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <ArrowImage src={LeftArrow} alt="prevArrow" {...props} />
      );
      
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <ArrowImage src={RightArrow} alt="nextArrow" {...props} />
    );

    const imgservicios =[
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
        "data:image/jpeg;base64,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",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
    ]

   const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,   
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />
   }

    return(
        <CarouselDiv>
            <TitleCarousel>Servicios populares</TitleCarousel>
            <Slider {...settings}>
            { allCategories && allCategories.map((card,index) => (
                
                    <CardCarousel key={index}>
                        <Link style={{textDecoration: "none"}} to={`/servicios/${card.services[0]._id}`}>
                            <Image src={imgservicios[index]} alt="img"/>
                            <NameCard>{card.services[0].name}</NameCard>
                        </Link>
                    </CardCarousel>
                
            ))}
            </Slider>
        </CarouselDiv>  
    )
}

export default Carousel;