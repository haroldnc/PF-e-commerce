import React, { useEffect } from "react";
import Card from "../workersCard/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/images/arrowL.png";
import RightArrow from "../assets/images/arrowR.png";
import {
  Container,
  ImgArrow,
  StyledPicture,
  TitleCarousel,
  WorkerDiv,
} from "./workerCardsStyled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function WorkersCarousel({ profiles }) {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
  };

  const availableProfiles = profiles.filter(
    (person) => person.subscription_type.name === "Premium"
  );

  return (
    <WorkerDiv>
      <TitleCarousel>Nuestros mejores talentos</TitleCarousel>
      <Splide
        options={{
          arrows: true,
          pagination: false,
          perPage: 3,
          gap: "-2px",
          breakpoints: {
            1200: { perPage: 2, gap: "2rem"},
            640: { perPage: 1, gap: "2rem" },
          },
        }}
      >
        {availableProfiles.length ? (
          availableProfiles.map((p, index) => (
            <SplideSlide key={index}>
              <Card
                key={index}
                name={`${p.userId.firstName} ${p.userId.lastName}`}
                image={p.userId.image}
                title={p.title}
                portfolioImage={p.p_image}
                id={p._id}
              />
            </SplideSlide>
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </Splide>
    </WorkerDiv>
  );
}
