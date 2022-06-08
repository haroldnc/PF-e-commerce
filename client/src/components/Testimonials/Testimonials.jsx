import React from 'react';
import Slider from "react-slick";

import img1 from "../assets/images/billGates.jpg";
import img2 from "../assets/images/elonMusk.jpg";
import img3 from "../assets/images/jeffBezos.jpg";
import img4 from "../assets/images/marcosGalperin.jpg";
import img5 from "../assets/images/markZuckerberg.jpg";
import img6 from "../assets/images/pierpaoloBarbieri.jpg";

import { TestimonialSection } from "./styledTestimonials";
import { TestimonialCard } from "./styledTestimonials";
import { TestimonialImage } from "./styledTestimonials";
import { TestimonialLogoImage } from "./styledTestimonials";
import { TestimonialText } from "./styledTestimonials";
import { TestimonialName } from "./styledTestimonials";
import { ArrowImage } from "./styledTestimonials";

import LeftArrow from '../assets/images/arrowL.png'
import RightArrow from '../assets/images/arrowR.png'

const Testimonials = () => {
    const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <ArrowImage src={RightArrow} {...props} />
      );
      
    const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <ArrowImage src={LeftArrow} {...props} />
    );

    const testimonials = [
        {
            name: "Elon Musk",
            logo: "https://comextic.com/web/wp-content/uploads/2018/07/Tesla-Motors-logo.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img2
        },
        {
            name: "Bill Gates",
            logo: "https://logodownload.org/wp-content/uploads/2014/04/microsoft-logo-3.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img1
        },
        {
            name: "Jeff Bezos",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img3
        },
        {
            name: "Mark Zuckerberg",
            logo: "https://logodownload.org/wp-content/uploads/2021/10/meta-logo.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img5
        },
        {
            name: "Marcos Galperin",
            logo: "https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img4
        },
        {
            name: "Pierpaolo Barbieri",
            logo: "https://findoctor.com.ar/wp-content/uploads/2019/09/uala-logo.png",
            text: "\"Es muy emocionante que Wixer tenga freelancers de todo el mundo. Amplía la reserva de talentos. Una de las mejores cosas de Wixer es que mientras dormimos, alguien está trabajando.\"",
            image: img6
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,   
        nextArrow: <ArrowRight style={{ padding: "30px" }}/>,
        prevArrow: <ArrowLeft/>,
    };

    return (
        <TestimonialSection>
            <h1 className='tittleTestimonial'>Testimonios</h1>
            <Slider {...settings}>
                {
                    testimonials && testimonials.map(card => (
                        <div key={card.name}>
                            <TestimonialCard>
                                <TestimonialImage src={card.image} alt={card.name}/>
                                <TestimonialText>
                                    <TestimonialName>
                                        <h3>{card.name}</h3>
                                        <TestimonialLogoImage src={card.logo} alt={card.logo}/>
                                    </TestimonialName>
                                    <p>{card.text}</p>
                                </TestimonialText>
                            </TestimonialCard>
                        </div>
                    ))
                }
            </Slider>
        </TestimonialSection>
    );
};

export default Testimonials;