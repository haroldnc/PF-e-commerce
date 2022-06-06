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

  const ruta = (window.location.href).substr(-5)
  return (
    <Container ruta={ruta}>
      <Wrapper>
        <InfoFooter>
          <div>
            <h4 className="tittleInfo">Categorías</h4>
            <CategoriesList>
                <Li>Artes gráficas y diseño</Li>
                <Li>Marketing digital</Li>
                <Li>Redacción y traducción</Li>
                <Li>Video y animación</Li>
                <Li>Música y audio</Li>
                <Li>Programación y tecnología</Li>
                <Li>Datos</Li>
                <Li>Negocios</Li>
                <Li>Estilo de vida</Li>
            </CategoriesList>
          </div>

          <div>
            <h4 className="tittleInfo">Acerca de</h4>

            <AboutList>
                <Li>Política de privacidad</Li>
                <Li>Términos de Servicio</Li>
            </AboutList>
          </div>

          <div>
            <h4 className="tittleInfo">Comunidad</h4>

            <ComunityList>
                <Li>Conviértete en vendedor</Li>
                <Li>Afiliados</Li>
                <Link to="/publicar"><Li>Publicar</Li></Link>
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
