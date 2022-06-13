import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
         BtnCancel,
         Cancelar,
         Historial,
         CambioPlan,
         Premium,
         TextPremium,
         Fileselect,
         BtnPerfil,
         BtnPrefilCancel,
         DivButtons
         } from './MyProfileWorker'

import { PutInfoWorker, getWorkerDetail, PutInfoUser } from '../../../store/actions/index'
import HistorialPayProfile from "../HistorialPayProfile/HistorialPayProfile.jsx";
import ProfileInactive from '../ProfileInactive/ProfileInactive.jsx'
import MyProfilePost from '../MyprofilePost/MyProfilePost.jsx'

import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineEmail, MdStarPurple500 } from 'react-icons/md'
import { GiSmartphone } from 'react-icons/gi'
import { keyframes } from "styled-components";


const MyProfileWorker = ({profile, toggleModalPayment, toggleModalPaymentCancel}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [ image , setImage ] = useState(profile.user.image)
    const [ showBtn , setShowBtn ] = useState(false)
    const [ panel , setPanel ] = useState("post")
    const [ loading, setLoading ] = useState(false)
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
        title: profile.dataWorker.title,
        aboutMe: profile.dataWorker.aboutMe,
        languages: profile.dataWorker.languages,
        skills: profile.dataWorker.skills,
        linkedin: profile.dataWorker.linkedin,
        web: profile.dataWorker.web,
        image: profile.user.image
    })
    const toggleForms = (dato) => {
        setFormularios({
            ...Formularios,
            [dato] : !Formularios[dato]
        })
    }

    let showPanel = null
    if(profile.dataWorker.subscribed){
        if(panel === "historial"){
            showPanel = <HistorialPayProfile id={profile.user.uid} toggleModalPaymentCancel={toggleModalPaymentCancel}/>
        }else if(panel === "post"){
            showPanel = <MyProfilePost id={profile.user.uid}/>
        }
    }else{
        showPanel = <ProfileInactive toggleModalPayment={toggleModalPayment}/>
    }
    
    const handleClickVista = () => {
        history.push(`/worker/${profile.dataWorker._id}`)
    }

    const RedirectLink = (url) => {
        window.open(url)
    }

    const HistorialClick = () => {
        setPanel("historial")
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
       dispatch(PutInfoWorker({ [key] : Changes[key] } , profile.dataWorker._id ))
       dispatch(getWorkerDetail(profile.dataWorker._id))
       setInfoWorker({...infoWorker , [key] : Changes[key] })
       setFormularios({ ...Formularios , [key] : !Formularios[key] })
        setChanges({...Changes,[key] : ""})
   }

   

   const upLoadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "PGimages");
        setLoading(true)
        const res = await fetch(
        "https://api.cloudinary.com/v1_1/dk69jry82/image/upload",
        {
            method: "POST",
            body: data
        }
        );
        const file = await res.json();
        setImage(file.secure_url);
        setShowBtn(!showBtn)
        setLoading(false);
  }

  const handleChangeImage = () => {
    dispatch(PutInfoUser({ image : image }))
    setShowBtn(!showBtn)
  }

  const handleNoChange = () => {
    setImage(profile.user.image)
    setShowBtn(!showBtn)
  }


    let PremiumStar = null
    if(profile.dataWorker.subscription_type === "62a642184cf2ae63ab17dffe" && profile.dataWorker.subscribed){
        PremiumStar = 
            <Premium>
            <TextPremium>Premium</TextPremium>
            <IconContext.Provider value={{size:"20px", color: "rgb(179, 156, 31)"}}>
                    <div>
                        <MdStarPurple500/>
                    </div>
                </IconContext.Provider>
            </Premium>
    }

    return(
        <ContainerWorker>
            <ContainerIzq>
            <ImageContainer>
                    {PremiumStar}
                    <ImageProfile src={loading ? "https://c.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif" : image} alt="img"/>
                    <Username>{profile.user.username}</Username>
                    <Fileselect>
                        <input
                            name="img"
                            type="file"
                            onChange={upLoadImage}
                        />
                    </Fileselect>
                    <DivButtons showBtn={showBtn}>
                        <BtnPerfil onClick={handleChangeImage}>Establecer como foto de perfil</BtnPerfil>
                        <BtnPrefilCancel onClick={handleNoChange}>Cancelar</BtnPrefilCancel>
                    </DivButtons>
                    <VistaPrevia onClick={handleClickVista}>Vista previa del perfil de Wixxer</VistaPrevia>
                    <Linea></Linea>
                    <DivName>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <CgProfile/>
                            </div>
                        </IconContext.Provider>
                        <Name>{profile.user.firstName}  {profile.user.lastName}</Name>
                    </DivName>
                    <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <MdOutlineEmail/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{profile.user.email}</EmailPhone>
                    </DivOther>
                    <DivOther>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <GiSmartphone/>
                            </div>
                        </IconContext.Provider>
                        <EmailPhone>{profile.dataWorker.phone}</EmailPhone>
                    </DivOther>
                        {
                            profile.dataWorker.subscribed ? 
                            <div style={{width: "100%"}}>
                                <Div>
                                    <Subscribe>Activo</Subscribe>
                                </Div>
                                <CambioPlan>Cambiar de plan</CambioPlan>
                                <Historial onClick={HistorialClick}>Historial de pago</Historial>
                            </div>
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
                    <InfoProfile>{infoWorker.title.length === 0 ? "Agrega tu titulo ..." : infoWorker.title}</InfoProfile>
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
                    <InfoProfile>{infoWorker.aboutMe.length === 0 ? "Agregar descripción ..." : infoWorker.aboutMe}</InfoProfile>
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
                        infoWorker.languages.length === 0 ?<InfoProfile>Agrega tus idiomas ...</InfoProfile>: 
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
                        infoWorker.skills.length === 0 ?<InfoProfile>Agrega tus habilidades ...</InfoProfile>: 
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
                    {showPanel}
                </InfoContainerDer>
            </ContainerDer>
        </ContainerWorker>
    )
}

export default MyProfileWorker