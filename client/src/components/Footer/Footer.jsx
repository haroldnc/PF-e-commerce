import React from 'react';
//import { Link } from "react-router-dom";

import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

import { InfoFooter } from "./styledInfoFooter.js";
import { LastInfoFooter } from "./styledInfoFooter.js";
import { CategoriesList } from "./styledInfoFooter.js";
import { AboutList } from "./styledInfoFooter.js";
import { ComunityList } from "./styledInfoFooter.js";
import { Li } from "./styledInfoFooter.js";
//import { tittleInfoFooter } from "./styledInfoFooter.js";

const Footer = () => {
  return (
    <footer>
        <InfoFooter>
            <div>
                <h4 className='tittleInfo'>Categorías</h4>

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
                    <Li>Mapa del sitio</Li>
                </CategoriesList>
            </div>

            <div>
                <h4 className='tittleInfo'>Acerca de</h4>

                <AboutList>
                    <Li>Política de privacidad</Li>
                    <Li>Términos de Servicio</Li>
                </AboutList>
            </div>

            <div>
                <h4 className='tittleInfo'>Comunidad</h4>

                <ComunityList>
                    <Li>Conviértete en vendedor</Li>
                    <Li>Afiliados</Li>
                </ComunityList>
            </div>
        </InfoFooter>

        <LastInfoFooter>
            <LastInfoFooter useFlex>
                <h2 className='footerCopyright' id='footerLogo'>Proyecto X</h2>
                <p className='footerCopyright'>© 2022 Proyecto X, All rights reserved</p>
            </LastInfoFooter>

            <LastInfoFooter useFlex>
                <BsFacebook className='socials'/>
                <BsTwitter className='socials'/>
                <BsInstagram className='socials'/>
                <BsLinkedin className='socials'/>
                <p className='socials'><BiWorld/> Español</p>
            </LastInfoFooter>
        </LastInfoFooter>
    </footer>
  );
};

export default Footer;