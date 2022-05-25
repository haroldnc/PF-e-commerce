import React from "react";
import { LogosGlobal, LogoCard, Logo, NameCard, Name} from './StyledLogosHome'

import Data from '../assets/LogosHome/Data.JPG'
import DiseñoGrafico from '../assets/LogosHome/Diseño.JPG'
import EstiloDeVida from '../assets/LogosHome/Estilo.JPG'
import MarketingDigital from '../assets/LogosHome/Marketing.JPG'
import MusicaAudio from '../assets/LogosHome/Musica.JPG'
import Negocios from '../assets/LogosHome/Negocios.JPG'
import Programacion from '../assets/LogosHome/Programacion.JPG'
import Traduccion from '../assets/LogosHome/Traduccion.JPG'
import Video from '../assets/LogosHome/Video o animacion.JPG'




const LogosHome = () => {

    
    const marketplace = [
        {name:"Diseñadores Graficos",
         logo: DiseñoGrafico
        },{
            name: "Marketing Digital",
            logo: MarketingDigital
        },{
            name: "Escritura y Traducción",
            logo: Traduccion
        },{
            name: "Video y Animación",
            logo: Video
        },{
            name: "Musica y Audio",
            logo: MusicaAudio
        },{
            name: "Programación y Tecnologia",
            logo: Programacion
        },{
            name: "Negocios",
            logo: Negocios
        },{
            name: "Estilo de vida",
            logo: EstiloDeVida
        },{
            name: "Data",
            logo: Data
        }
    ]

    return(
        <>
        <Name>Explora el mercado</Name>
        <LogosGlobal className="divTotal">
            
            {marketplace && marketplace.map( logo => (
                <LogoCard className="divLogo" key={logo.name}>
                    <Logo className="logo" src={logo.logo}/>
                    <NameCard className="name">{logo.name}</NameCard>
                </LogoCard>
            ))}
        </LogosGlobal>  
        </>
        
    )
}

export default LogosHome;