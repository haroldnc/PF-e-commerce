import React, { useState } from "react";
import { ContainerWorker,
         ContainerIzq, 
         ContainerDer,
         ImageContainer, 
         InfoContainer,
         ImageProfile, 
         Username, 
         VistaPrevia, 
         Linea, 
         Name, 
         DivName,
         DivOther,
         EmailPhone,
         Row,
         Titulos,
         BtnForms,
         InfoProfile,
         InfoProf,
         Level,
         DivResult,
         Div,
         MapRow,
         BtnLink,
         Subscribe,
         Unsuscribe,
         BtnPay,
         InfoContainerDer,
         FormsDiv,
         BtnAccept,
         BtnCancel
         } from './MyProfileWorker'

import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineEmail } from 'react-icons/md'
import { GiSmartphone } from 'react-icons/gi'


const MyProfileWorker = ({profile, username}) => {

    const [ Formularios, setFormularios ] = useState({
        titulo: false,
        descripcion: false,
        idiomas: false,
        habilidades: false,
        certificacion: false,
        experiencia: false,
        linkedin: false,
        web: false
    })

    const toggleForms = (dato) => {
        setFormularios({
            ...Formularios,
            [dato] : !Formularios[dato]
        })
        console.log(Formularios)
    }

    const RedirectLink = (url) => {
        window.location.href = url
    }


    return(
        <ContainerWorker>
            <ContainerIzq>
                <ImageContainer>
                    <ImageProfile src={profile.userId.image} alt="img"/>
                    <Username>{username}</Username>
                    <VistaPrevia>Vista previa del perfil de Wixxer</VistaPrevia>
                    <Linea></Linea>
                    <DivName>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <CgProfile/>
                            </div>
                        </IconContext.Provider>
                        <Name>{profile.userId.firstName}  {profile.userId.lastName}</Name>
                    </DivName>
                    <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <MdOutlineEmail/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{profile.userId.email}</EmailPhone>
                    </DivOther>
                    <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <GiSmartphone/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{profile.phone}</EmailPhone>
                    </DivOther>
                        {
                            profile.subscribed ? 
                                <Div>
                                    <Subscribe>Activo</Subscribe>
                                </Div>
                                :
                            <div style={{width: "100%"}}>
                                <Div>
                                    <Unsuscribe>Inactivo</Unsuscribe>
                                </Div>
                                <BtnPay>PAGAR SUSCRIPCIÓN </BtnPay>
                            </div>

                        }
                    <br/>
                </ImageContainer>
                <InfoContainer>
                    <br/>
                    <Row>
                        <Titulos>Titulo</Titulos>
                        <BtnForms onClick={() => toggleForms("titulo")}>Editar Titulo</BtnForms>
                    </Row>
                    <InfoProfile>{profile.title.length === 0 ? "Agrega tu titulo ..." : profile.title}</InfoProfile>
                    {
                        Formularios.titulo ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="¿Cuentas con algun titulo?"
                                        // value={estado.description}
                                        // name="description"
                                        // onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("titulo")}>Cancelar</BtnCancel>
                                        <BtnAccept>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Descripcón</Titulos>
                        <BtnForms onClick={() => toggleForms("descripcion")}>Editar Descripcón</BtnForms>
                    </Row>
                    <InfoProfile>{profile.aboutMe.length === 0 ? "Agregar descripción ..." : profile.aboutMe}</InfoProfile>
                    { Formularios.descripcion ?
                    <FormsDiv>
                        <form>
                            <textarea 
                                type="text"
                                // value={estado.description}
                                // name="description"
                                // onChange={(e) => handleChange(e)}
                                placeholder="Cuéntanos un poco mas de ti."
                            />
                            <div style={{display: "flex" , justifyContent:"center"}}>
                                <BtnCancel onClick={() => toggleForms("descripcion")}>Cancelar</BtnCancel>
                                <BtnAccept>Actualizar</BtnAccept>
                            </div>
                        </form>
                    </FormsDiv> :
                    null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Idiomas</Titulos>
                        <BtnForms onClick={() => toggleForms("idiomas")}>Agregar nuevo</BtnForms>
                    </Row>
                        {
                        profile.languages.length === 0 ?<InfoProfile>Agrega tus idiomas ...</InfoProfile>: 
                            <DivResult>
                                {profile.languages.map( l => (
                                    <MapRow>
                                        <InfoProf>{l.idioma}</InfoProf>
                                        <Level>-   {l.level}</Level>
                                    </MapRow>
                                ))}
                            </DivResult>
                        }
                        {
                        Formularios.idiomas ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega un idioma..."
                                        // value={estado.description}
                                        // name="description"
                                        // onChange={(e) => handleChange(e)}
                                    />
                                    <select>
                                        <option value="" >Nivel de idioma</option>
                                        <option value="Basico" >Basico</option>
                                        <option value="Conversacional" >Conversacional</option>
                                        <option value="Fluido" >Fluido</option>
                                        <option value="Nativo/ Bilingue" >Nativo/ Bilingue</option>
                                    </select>
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("idiomas")}>Cancelar</BtnCancel>
                                        <BtnAccept>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Habilidades</Titulos>
                        <BtnForms onClick={() => toggleForms("habilidades")}>Agregar nuevo</BtnForms>
                    </Row>
                    {
                        profile.skills.length === 0 ?<InfoProfile>Agrega tus habilidades ...</InfoProfile>: 
                            <DivResult>
                                {profile.skills.map( s => (
                                    <MapRow>
                                        <InfoProf>{s.idioma}</InfoProf>
                                        <Level>-   {s.level}</Level>
                                    </MapRow>
                                ))}
                            </DivResult>
                        }
                         {
                        Formularios.habilidades ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega una habilidad..."
                                        // value={estado.description}
                                        // name="description"
                                        // onChange={(e) => handleChange(e)}
                                    />
                                    <select>
                                        <option value="" >Nivel de experiencia</option>
                                        <option value="Principiante" >Principiante</option>
                                        <option value="Intermedio" >Intermedio</option>
                                        <option value="Avanzado" >Avanzado</option>
                                    </select>
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("habilidades")}>Cancelar</BtnCancel>
                                        <BtnAccept>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Certificacón</Titulos>
                        <BtnForms onClick={() => toggleForms("certificacion")}>Agregar nuevo</BtnForms>
                    </Row>
                    <InfoProfile>{profile.aboutMe}</InfoProfile>
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Experiencia</Titulos>
                        <BtnForms onClick={() => toggleForms("experiencia")}>Agregar nuevo</BtnForms>
                    </Row>
                    <InfoProfile>{profile.aboutMe}</InfoProfile>
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Linkedin</Titulos>
                        <BtnForms onClick={() => toggleForms("linkedin")}>Agregar Link</BtnForms>
                    </Row>
                    {
                        profile.linkedin.length === 0 ?
                    <InfoProfile>Agrega Linkedin ...</InfoProfile>
                    :
                    <BtnLink onClick={() => RedirectLink(profile.linkedin)}>{profile.linkedin}</BtnLink>
                    }
                    {
                        Formularios.linkedin ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega Linkedin ..."
                                        // value={estado.description}
                                        // name="description"
                                        // onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("linkedin")}>Cancelar</BtnCancel>
                                        <BtnAccept>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Pagina Web</Titulos>
                        <BtnForms onClick={() => toggleForms("web")}>Agregar Link</BtnForms>
                    </Row>
                    {
                        profile.web.length === 0 ?
                    <InfoProfile>Agrega pagina web ...</InfoProfile>
                    :
                    <BtnLink onClick={() => RedirectLink(profile.web)}>{profile.web}</BtnLink>
                    }
                    {
                        Formularios.web ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega pagina Web ..."
                                        // value={estado.description}
                                        // name="description"
                                        // onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("web")}>Cancelar</BtnCancel>
                                        <BtnAccept>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <br/>
                    <br/>

                </InfoContainer>
            </ContainerIzq>
            <ContainerDer>
                <InfoContainerDer>
                    prueba
                </InfoContainerDer>
            </ContainerDer>
        </ContainerWorker>
    )
}

export default MyProfileWorker