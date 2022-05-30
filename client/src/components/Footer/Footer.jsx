import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../../store/actions/index";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
//import { BiWorld } from 'react-icons/bi';

import { Container, InfoFooter, Wrapper } from "./styledInfoFooter.js";
import { LastInfoFooter } from "./styledInfoFooter.js";
import { CategoriesList } from "./styledInfoFooter.js";
import { AboutList } from "./styledInfoFooter.js";
import { ComunityList } from "./styledInfoFooter.js";
import { Li } from "./styledInfoFooter.js";
//import { tittleInfoFooter } from "./styledInfoFooter.js";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InfoFooter>
          <div>
            <h4 className="tittleInfo">Categorías</h4>
            <CategoriesList>
              <Link to="/categoria/62927771a8415ffb1bf2a4c3">
                <Li>Artes gráficas y diseño</Li>
              </Link>
              <Link to="/categoria/629277aaa8415ffb1bf2a4c4">
                <Li>Marketing digital</Li>
              </Link>
              <Link to="/categoria/629277c0a8415ffb1bf2a4c5">
                <Li>Redacción y traducción</Li>
              </Link>
              <Link to="/categoria/629277d9a8415ffb1bf2a4c6">
                <Li>Video y animación</Li>
              </Link>
              <Link to="/categoria/629277eda8415ffb1bf2a4c7">
                <Li>Música y audio</Li>
              </Link>
              <Link to="/categoria/629277ffa8415ffb1bf2a4c8">
                <Li>Programación y tecnología</Li>
              </Link>
              <Link to="/categoria/62927811a8415ffb1bf2a4c9">
                <Li>Datos</Li>
              </Link>
              <Link to="/categoria/62927820a8415ffb1bf2a4ca">
                <Li>Negocios</Li>
              </Link>
              <Link to="/categoria/62927830a8415ffb1bf2a4cb">
                <Li>Estilo de vida</Li>
              </Link>
            </CategoriesList>
          </div>

          <div>
            <h4 className="tittleInfo">Acerca de</h4>

            <AboutList>
              <Link to="/categorias">
                <Li>Política de privacidad</Li>
              </Link>
              <Link to="/categorias">
                <Li>Términos de Servicio</Li>
              </Link>
            </AboutList>
          </div>

          <div>
            <h4 className="tittleInfo">Comunidad</h4>

            <ComunityList>
              <Link to="/categorias">
                <Li>Conviértete en vendedor</Li>
              </Link>
              <Link to="/categorias">
                <Li>Afiliados</Li>
              </Link>
            </ComunityList>
          </div>
        </InfoFooter>

        <LastInfoFooter>
          <LastInfoFooter useFlex>
            <Link to="/">
              <h2 className="footerCopyright" id="footerLogo">
                Wixer
              </h2>
            </Link>
            <p className="footerCopyright">© 2022 Wixer, All rights reserved</p>
          </LastInfoFooter>

          <LastInfoFooter useFlex>
            <BsFacebook className="socials" />
            <BsTwitter className="socials" />
            <BsInstagram className="socials" />
            <BsLinkedin className="socials" />
            {/*<p className='socials'><BiWorld/> Español</p>*/}
          </LastInfoFooter>
        </LastInfoFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
