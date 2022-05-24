import React from 'react';
import { Link } from "react-router-dom";

import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h5>Categorías</h5>

                <ul>
                    <li>Artes gráficas y diseño</li>
                    <li>Marketing digital</li>
                    <li>Redacción y traducción</li>
                    <li>Video y animación</li>
                    <li>Música y audio</li>
                    <li>Programación y tecnología</li>
                    <li>Datos</li>
                    <li>Negocios</li>
                    <li>Estilo de vida</li>
                    <li>Mapa del sitio</li>
                </ul>
            </div>

            <div>
                <h5>Acerca de</h5>

                <li>Política de privacidad</li>
                <li>Términos de Servicio</li>
            </div>

            <div>
                <h5>Comunidad</h5>

                <li>Conviértete en vendedor</li>
                <li>Afiliados</li>
            </div>
        </div>

        <div>
            <div>
                <h1>Projecto X</h1>
                <p>@Todos los derechos reservados</p>
            </div>

            <div>
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>
                <BsLinkedin/>
                <p><BiWorld/> Español</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;