import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { PutInfoWorker, getWorkerDetail } from '../../../store/actions/index'

import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineEmail } from 'react-icons/md'
import { GiSmartphone } from 'react-icons/gi'
import { keyframes } from "styled-components";


const MyProfileWorker = ({profile, username, toggleModalPayment}) => {

    const dispatch = useDispatch()
    const [ image , setImage ] = useState("")
    const [ Formularios, setFormularios ] = useState({
        title: false,
        aboutMe: false,
        languages: false,
        skills: false,
        certificacion: false,
        experiencia: false,
        linkedin: false,
        web: false
    })
    const [ Changes , setChanges ] = useState({
        title: "",
        aboutMe: "",
        languages: "",
        skills: "",
        linkedin: "",
        web: "",
        image:""
    })

    const [ infoWorker , setInfoWorker ] = useState({
        title: profile.title,
        aboutMe: profile.aboutMe,
        languages: profile.languages,
        skills: profile.skills,
        linkedin: profile.linkedin,
        web: profile.web,
        image: profile.userId.image
    })

    const toggleForms = (dato) => {
        setFormularios({
            ...Formularios,
            [dato] : !Formularios[dato]
        })
    }

    const RedirectLink = (url) => {
        window.open(url)
    }

    const handleClickPayment = () => {
        toggleModalPayment()   
    }

    const handleChange = (e) => {
        setChanges({
            ...Changes,
            [e.target.name]: e.target.value
        })
    }

   const hamdlePut = (e, key) => {
       e.preventDefault()
       dispatch(PutInfoWorker({ [key] : Changes[key] } , profile._id ))
       dispatch(getWorkerDetail(profile._id))
       setInfoWorker({...infoWorker , [key] : Changes[key] })
       setFormularios({ ...Formularios , [key] : !Formularios[key] })
        setChanges({...Changes,[key] : ""})
   }

   const handlePutImage = (e, key) => {
        e.preventDefault()
        dispatch(PutInfoWorker({ [key] : Changes[key] } , profile._id ))
        dispatch(getWorkerDetail(profile._id))
        setInfoWorker({...infoWorker , [key] : Changes[key] })
        setFormularios({ ...Formularios , [key] : !Formularios[key] })
        setChanges({...Changes,[key] : ""})
   }

   const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PGimages");
    // setLoading(true);
  
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dk69jry82/image/upload",
      {
        method: "POST",
        body: data
      }
    );
  
    const file = await res.json();
    setImage(file.secure_url);
    // console.log(file.secure_url);
    // setInput({
    //   ...input,
    //   img: file.secure_url
    // })
    // setLoading(false);
  }


    return(
        <ContainerWorker>
            <ContainerIzq>
                <ImageContainer>
                    <ImageProfile src={infoWorker.image} alt="img"/>
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
                                <BtnPay onClick={() => handleClickPayment()}>PAGAR SUSCRIPCIÓN </BtnPay>
                            </div>

                        }
                    <br/>
                </ImageContainer>
                <InfoContainer>
                    <br/>
                    <Row>
                        <Titulos>Titulo</Titulos>
                        <BtnForms onClick={() => toggleForms("title")}>Editar Titulo</BtnForms>
                    </Row>
                    <InfoProfile>{profile.title.length === 0 ? "Agrega tu titulo ..." : infoWorker.title}</InfoProfile>
                    {
                        Formularios.title ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="¿Cuentas con algun titulo?"
                                        value={Changes.title}
                                        name="title"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("title")}>Cancelar</BtnCancel>
                                        <BtnAccept onClick={(e) => hamdlePut(e, "title")}>Actualizar</BtnAccept>
                                    </div>
                                </form>
                            </FormsDiv>
                        : null
                    }
                    <Linea></Linea>
                    <br/>
                    <Row>
                        <Titulos>Descripcón</Titulos>
                        <BtnForms onClick={() => toggleForms("aboutMe")}>Editar Descripcón</BtnForms>
                    </Row>
                    <InfoProfile>{profile.aboutMe.length === 0 ? "Agregar descripción ..." : infoWorker.aboutMe}</InfoProfile>
                    { Formularios.aboutMe ?
                    <FormsDiv>
                        <form>
                            <textarea 
                                type="text"
                                value={Changes.aboutMe}
                                name="aboutMe"
                                onChange={(e) => handleChange(e)}
                                placeholder="Cuéntanos un poco mas de ti."
                            />
                            <div style={{display: "flex" , justifyContent:"center"}}>
                                <BtnCancel onClick={() => toggleForms("aboutMe")}>Cancelar</BtnCancel>
                                <BtnAccept onClick={(e) => hamdlePut(e,"aboutMe")}>Actualizar</BtnAccept>
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
                                {profile.languages.map( (l, index )=> (
                                    <MapRow key={index}>
                                        <InfoProf>{l.idioma}</InfoProf>
                                        <Level>-   {l.level}</Level>
                                    </MapRow>
                                ))}
                            </DivResult>
                        }
                        {
                        Formularios.languages ?
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
                                {profile.skills.map( (s, index) => (
                                    <MapRow key={index}>
                                        <InfoProf>{s.idioma}</InfoProf>
                                        <Level>-   {s.level}</Level>
                                    </MapRow>
                                ))}
                            </DivResult>
                        }
                         {
                        Formularios.skills ?
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
                    {/* <br/>
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
                    <Linea></Linea> */}
                    <br/>
                    <Row>
                        <Titulos>Linkedin</Titulos>
                        <BtnForms onClick={() => toggleForms("linkedin")}>Agregar Link</BtnForms>
                    </Row>
                    {
                        infoWorker.linkedin.length === 0 ?
                    <InfoProfile>Agrega Linkedin ...</InfoProfile>
                    :
                    <BtnLink onClick={() => RedirectLink(infoWorker.linkedin)}>{infoWorker.linkedin}</BtnLink>
                    }
                    {
                        Formularios.linkedin ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega Linkedin ..."
                                        value={Changes.linkedin}
                                        name="linkedin"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("linkedin")}>Cancelar</BtnCancel>
                                        <BtnAccept onClick={(e) => hamdlePut(e,"linkedin")}>Actualizar</BtnAccept>
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
                        infoWorker.web.length === 0 ?
                    <InfoProfile>Agrega pagina web ...</InfoProfile>
                    :
                    <BtnLink onClick={() => RedirectLink(infoWorker.web)}>{infoWorker.web}</BtnLink>
                    }
                    {
                        Formularios.web ?
                            <FormsDiv>
                                <form>
                                    <input 
                                        placeholder="Agrega pagina Web ..."
                                        value={Changes.web}
                                        name="web"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <div style={{display: "flex" , justifyContent:"center"}}>
                                        <BtnCancel onClick={() => toggleForms("web")}>Cancelar</BtnCancel>
                                        <BtnAccept onClick={(e) => hamdlePut(e,"web")}>Actualizar</BtnAccept>
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