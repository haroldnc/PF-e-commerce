import React from "react";
import {
  LogosGlobal,
  LogoCard,
  Logo,
  NameCard,
  Name,
  Container,
} from "./StyledLogosHome";
import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
import { GiCoffeeCup } from "react-icons/gi"; //Estilo de vida
import { RiComputerLine } from "react-icons/ri"; // Marketing Digital
import {
  MdOndemandVideo,
  MdOutlineLibraryMusic,
  MdDeveloperMode,
} from "react-icons/md"; // Video y Animacion, musica y audio, desarrollo
import { GiBookmarklet, GiShakingHands } from "react-icons/gi"; // traduccion, negocios
import { BsClipboardData, BsPencilSquare } from "react-icons/bs"; // Data , diseño grafico


const LogosHome = ({ allCategories }) => {
  const history = useHistory();
  const allLogos = [
    <BsPencilSquare size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <RiComputerLine size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <GiBookmarklet size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <MdOndemandVideo size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <MdOutlineLibraryMusic size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <MdDeveloperMode size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <BsClipboardData size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <GiShakingHands size={32} style={{ color: "rgb(138, 135, 135)" }} />,
    <GiCoffeeCup size={32} style={{ color: "rgb(138, 135, 135)" }} />,
  ];

  const handlerClick = (id) => {
    history.push(`/categoria/${id}`);
  };

  return (
    <>
      <Name>Explora el mercado</Name>
        <div>
            
        </div>
      <LogosGlobal className="divTotal">
        {allCategories &&
          allCategories.map((logo, index) => (
            <LogoCard key={index} onClick={() => handlerClick(logo._id)}>
              {allLogos[index]}
              <NameCard>{logo.name}</NameCard>
            </LogoCard>
          ))}
      </LogosGlobal>
    </>
  );
};

export default LogosHome;
