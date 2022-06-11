import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
//import { BiWorld } from 'react-icons/bi';

import { Container, InfoFooter, Wrapper, Redes } from "./styledInfoFooter.js";
import { LastInfoFooter } from "./styledInfoFooter.js";
import { CategoriesList } from "./styledInfoFooter.js";
import { AboutList } from "./styledInfoFooter.js";
import { ComunityList } from "./styledInfoFooter.js";
import { Li } from "./styledInfoFooter.js";
//import { tittleInfoFooter } from "./styledInfoFooter.js";

const Footer = () => {
  const categories = useSelector((state) => state.allCategories);
  const ruta = (window.location.href).substr(-5)
  return (
    <Container ruta={ruta}>
      <Wrapper>
        <InfoFooter>
          <div>
            <h4 className="tittleInfo">Categorías</h4>
            <CategoriesList>
            {
              categories && categories
              .sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
              })

              .map((category) => {
                return (
                  <Link to={`/categoria/${category._id}`} key={category._id}>
                    <Li>
                      {category.name}
                    </Li>
                  </Link>
                );
              })
            }
            </CategoriesList>
          </div>

          <div>
            <h4 className="tittleInfo">Acerca de</h4>

            <AboutList>
                <Li><a href="https://drive.google.com/file/d/1JIEUwBY85VKJSy4D0lAYeX6IJmDb6omO/view?usp=sharing" target="_blank" rel="noreferrer">Política de privacidad</a></Li>
            </AboutList>
          </div>

          <div>
            <h4 className="tittleInfo">Comunidad</h4>

            <ComunityList>
                <Li>Afiliados</Li>
                <Link to="/publicar"><Li>Publicar</Li></Link>
            </ComunityList>
          </div>
        </InfoFooter>

        <LastInfoFooter>
          <LastInfoFooter useFlex>
            <Link to="/">
              <h2 className="footerCopyright" id="footerLogo">
                Wixxer
              </h2>
            </Link>
            <p className="footerCopyright">© 2022 Wixxer, All rights reserved</p>
          </LastInfoFooter>

          <LastInfoFooter useFlex>
            <BsFacebook className="socials" />
            <BsTwitter className="socials" />
            <BsInstagram className="socials" />
            <Redes href="https://www.linkedin.com/company/wixxer" target="_blank" rel="noreferrer"><BsLinkedin className="socials"/></Redes>
            {/*<p className='socials'><BiWorld/> Español</p>*/}
          </LastInfoFooter>
        </LastInfoFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
