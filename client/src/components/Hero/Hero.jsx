import React, { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import {
  Container,
  Image,
  Left,
  LeftWrapper,
  Right,
  Title,
  Wrapper,
} from "./StyledHero";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const data = [
  {
    name: "Angelica Visciani",
    image:
      "https://assets.soyhenry.com/henry-landing/assets/microlandings/SoftwareIntro.jpg",
    profesion: "Cloud Developer",
    nacionalidad: "Argentina",
  },
  {
    name: "Carlos Gutierrez",
    image:
      "https://media.istockphoto.com/photos/successful-man-picture-id637911792?k=20&m=637911792&s=612x612&w=0&h=iAXHcLAXlH40B4glXjwC18_4uIKiU28KqWuNwEXn_nc=",
    profesion: "Cloud Developer",
    nacionalidad: "Colombia",
  },
  {
    name: "Miguel Sánchez",
    image:
      "https://johnwheatonattorney.com/wp-content/uploads/2015/01/Male-Engineer.jpg",
    profesion: "Arquitecto",
    nacionalidad: "Peru",
  },
];

const images = [
  "https://assets.soyhenry.com/henry-landing/assets/microlandings/SoftwareIntro.jpg",
  "https://media.istockphoto.com/photos/successful-man-picture-id637911792?k=20&m=637911792&s=612x612&w=0&h=iAXHcLAXlH40B4glXjwC18_4uIKiU28KqWuNwEXn_nc=",
  "https://johnwheatonattorney.com/wp-content/uploads/2015/01/Male-Engineer.jpg",
];

const names = [
  'Angelica Visciani','Carlos Gutierrez','Miguel Sánchez'
]

const countrys = ['Argentina','Colombia','Peru']

const Hero = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue(prev => (
        prev === images.length - 1 ? 0 : prev + 1
      ));
    }, 4500);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>
            Bienvenido a <span>Wixxer</span>
            <br />
            donde puedes conectar <br /> con el trabajo que necesitas
          </Title>
          <Searchbar />
        </Left>
        <Right>
          <Image img={images[0]}/>
          {/* <Image img={images[value]} />
          <span>{names[value]}</span> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
