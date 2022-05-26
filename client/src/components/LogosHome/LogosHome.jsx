import React from "react";
import { LogosGlobal, LogoCard, Logo, NameCard, Name} from './StyledLogosHome'
import { Link } from 'react-router-dom'

import Data from '../assets/LogosHome/Data.JPG'
import DiseñoGrafico from '../assets/LogosHome/Diseño.JPG'
import EstiloDeVida from '../assets/LogosHome/Estilo.JPG'
import MarketingDigital from '../assets/LogosHome/Marketing.JPG'
import MusicaAudio from '../assets/LogosHome/Musica.JPG'
import Negocios from '../assets/LogosHome/Negocios.JPG'
import Programacion from '../assets/LogosHome/Programacion.JPG'
import Traduccion from '../assets/LogosHome/Traduccion.JPG'
import Video from '../assets/LogosHome/Video o animacion.JPG'




const LogosHome = ({allCategories}) => {

    
    const marketplace = [
        {name:"Diseñadores Graficos",
         logo: DiseñoGrafico,
         id: 1
        },{
            name: "Marketing Digital",
            logo: MarketingDigital,
            id: 2
        },{
            name: "Escritura y Traducción",
            logo: Traduccion,
            id: 3
        },{
            name: "Video y Animación",
            logo: Video,
            id: 4
        },{
            name: "Musica y Audio",
            logo: MusicaAudio,
            id: 5
        },{
            name: "Programación y Tecnologia",
            logo: Programacion,
            id: 6
        },{
            name: "Negocios",
            logo: Negocios,
            id: 7
        },{
            name: "Estilo de vida",
            logo: EstiloDeVida,
            id: 8
        },{
            name: "Data",
            logo: Data,
            id: 9
        }
    ]

    return(
        <>
        <Name>Explora el mercado</Name>
        <LogosGlobal className="divTotal">
            
            {marketplace && marketplace.map( logo => (
                <Link to={`/category/${logo.id}`}>
                    <LogoCard className="divLogo" key={logo.name}>
                        <Logo className="logo" src={logo.logo}/>
                        <NameCard className="name">{logo.name}</NameCard>
                    </LogoCard>
                </Link>
            ))}
        </LogosGlobal>  
        </>
        
    )
}

export default LogosHome;