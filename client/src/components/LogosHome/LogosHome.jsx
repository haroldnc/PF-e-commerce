import React from "react";
import { LogosGlobal, LogoCard, Logo, NameCard, Name} from './StyledLogosHome'
import { useHistory } from "react-router-dom";

import {IconContext} from 'react-icons'
import { GiCoffeeCup } from 'react-icons/gi' //Estilo de vida
import { RiComputerLine } from 'react-icons/ri' // Marketing Digital
import { MdOndemandVideo, MdOutlineLibraryMusic, MdDeveloperMode } from 'react-icons/md' // Video y Animacion, musica y audio, desarrollo
import { GiBookmarklet, GiShakingHands } from 'react-icons/gi' // traduccion, negocios
import { BsClipboardData, BsPencilSquare } from 'react-icons/bs' // Data , diseño grafico



// import Data from '../assets/LogosHome/Data.JPG'
// import DiseñoGrafico from '../assets/LogosHome/Diseño.JPG'
// import EstiloDeVida from '../assets/LogosHome/Estilo.JPG'
// import MarketingDigital from '../assets/LogosHome/Marketing.JPG'
// import MusicaAudio from '../assets/LogosHome/Musica.JPG'
// import Negocios from '../assets/LogosHome/Negocios.JPG'
// import Programacion from '../assets/LogosHome/Programacion.JPG'
// import Traduccion from '../assets/LogosHome/Traduccion.JPG'
// import Video from '../assets/LogosHome/Video o animacion.JPG'


const LogosHome = ({allCategories}) => {

    const history = useHistory()
    const allLogos =[
    <BsPencilSquare size={32} style={{color: 'rgb(138, 135, 135)'}} />, 
    <RiComputerLine size={32} style={{color: 'rgb(138, 135, 135)'}} />, 
    <GiBookmarklet size={32} style={{color: 'rgb(138, 135, 135)'}} />,
    <MdOndemandVideo size={32} style={{color: 'rgb(138, 135, 135)'}} />,
    <MdOutlineLibraryMusic size={32} style={{color: 'rgb(138, 135, 135)'}} />,
    <MdDeveloperMode size={32} style={{color: 'rgb(138, 135, 135)'}} />, 
    <BsClipboardData size={32} style={{color: 'rgb(138, 135, 135)'}} /> ,
    <GiShakingHands size={32} style={{color: 'rgb(138, 135, 135)'}} />,
    <GiCoffeeCup size={32} style={{color: 'rgb(138, 135, 135)'}} />
    ]

    const handlerClick = (id) => {
        history.push(`/categoria/${id}`)
    }
    
    return(
        <>
        <Name>Explora el mercado</Name>
        <LogosGlobal className="divTotal">
            
            {allCategories && allCategories.map( (logo, index) => (
                <LogoCard key={index} onClick={() =>handlerClick(logo._id) }>
                    {allLogos[index]}
                    <NameCard >{logo.name}</NameCard>
                </LogoCard>
            ))}
        </LogosGlobal>  
        </>
        
    )
}

export default LogosHome;