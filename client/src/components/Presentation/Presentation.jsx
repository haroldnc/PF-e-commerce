import React from 'react';
import { PresentationSection } from "./styledPresentation";
import { PresentationParagraphTittle } from "./styledPresentation";
import { PresentationParagraph } from "./styledPresentation";
import { PresentationImage } from "./styledPresentation";
import { PresentationText } from "./styledPresentation";

import { BiCheckCircle } from 'react-icons/bi';

import presentationImage from "../assets/images/presentationImage.jpg"

const Presentation = () => {
  return (
    <section>
        <PresentationSection>
            <PresentationText>
                <h1>Todo un mundo de talentos freelance a tu alcance</h1>

                <PresentationParagraph>
                    <PresentationParagraphTittle>
                        <BiCheckCircle className='check'/>
                        <h3>Lo mejor para cada presupuesto</h3>
                    </PresentationParagraphTittle>
                    <p>Encuentra servicios de calidad en cada nivel de precio. No hay tarifas por hora, solo precios en base a proyectos.</p>
                </PresentationParagraph>

                <PresentationParagraph>
                    <PresentationParagraphTittle>
                        <BiCheckCircle className='check'/>
                        <h3>Trabajo de calidad realizado con rapidez</h3>
                    </PresentationParagraphTittle>
                    <p>Encuentra el freelancer adecuado para que comience a trabajar en tu proyecto en cuestión de minutos.</p>
                </PresentationParagraph>

                <PresentationParagraph>
                    <PresentationParagraphTittle>
                        <BiCheckCircle className='check'/>
                        <h3>Todos los pagos están protegidos</h3>
                    </PresentationParagraphTittle>
                    <p>Siempre sabrás por adelantado lo que pagarás Tu pago se liberará una vez que apruebes el trabajo.</p>
                </PresentationParagraph>

                <PresentationParagraph>
                    <PresentationParagraphTittle>
                        <BiCheckCircle className='check'/>
                        <h3>Soporte las 24 horas, todos los días</h3>
                    </PresentationParagraphTittle>
                    <p>¿Tienes alguna pregunta? Nuestro equipo de soporte está disponible todo el día en cualquier momento y lugar.</p>
                </PresentationParagraph>
            </PresentationText>

            <div>
                <PresentationImage src={presentationImage} alt="PresentationImage"/>
            </div>
        </PresentationSection>
    </section>
  );
};

export default Presentation;