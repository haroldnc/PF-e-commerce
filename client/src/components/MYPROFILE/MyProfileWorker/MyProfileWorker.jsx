import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ContainerWorker,
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
  DivButtons,
  PostsC,
} from "./MyProfileWorker";

import {
  PutInfoWorker,
  getWorkerDetail,
  PutInfoUser,
  getPostByUser,
  getHiringsByWorker,
} from "../../../store/actions/index";
import HistorialPayProfile from "../HistorialPayProfile/HistorialPayProfile.jsx";
import ProfileInactive from "../ProfileInactive/ProfileInactive.jsx";
import MyProfilePost from "../MyprofilePost/MyProfilePost.jsx";
import CambioaPlanStandard from "../CambioDePlan/CambioaPlanStandard/CambioaPlanStandard.jsx";
import CambioaPlanPremium from "../CambioDePlan/CambioaPlanPremium/CambioaPlanPremium.jsx";
import MyProfileHiring from "../MyProfileHiring/MyProfileHiring.jsx";

import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail, MdStarPurple500, MdPostAdd } from "react-icons/md";
import { GiSmartphone, GiShakingHands } from "react-icons/gi";
import { keyframes } from "styled-components";

const MyProfileWorker = ({
  profile,
  toggleModalPayment,
  toggleModalPaymentCancel,
}) => {
  useEffect(() => {
    dispatch(getPostByUser(profile.user.uid));
    dispatch(getHiringsByWorker(profile.user.uid));
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.postsByUser);
  const allHirings = useSelector((state) => state.hiringsByWorker);
  const [image, setImage] = useState(profile.user.image);
  const [showBtn, setShowBtn] = useState(false);
  const [panel, setPanel] = useState("post");
  const [loading, setLoading] = useState(false);
  const [isOpenChangeStandard, setIsOpenChangeStandard] = useState(false);
  const [isOpenChangePremium, setIsOpenChangePremium] = useState(false);
  const [ levelLanguahe, setLevelLenguaje ] = useState("")
  const [Formularios, setFormularios] = useState({
    title: false,
    aboutMe: false,
    languages: false,
    skills: false,
    certificacion: false,
    experiencia: false,
    linkedin: false,
    web: false,
    phone: false,
  });
  const [Changes, setChanges] = useState({
    title: "",
    aboutMe: "",
    languages: "",
    skills: "",
    linkedin: "",
    web: "",
    image: "",
    phone: "",
  });
  const [infoWorker, setInfoWorker] = useState({
    title: profile.dataWorker.title,
    aboutMe: profile.dataWorker.aboutMe,
    languages: profile.dataWorker.languages,
    skills: profile.dataWorker.skills,
    linkedin: profile.dataWorker.linkedin,
    web: profile.dataWorker.web,
    image: profile.user.image,
    phone: profile.dataWorker.phone,
  });
  const toggleForms = (dato) => {
    setFormularios({
      ...Formularios,
      [dato]: !Formularios[dato],
    });
  };

  const toggleIsOpenChangeStandard = () => {
    setIsOpenChangeStandard(!isOpenChangeStandard);
  };

  const toggleIsOpenChangePremium = () => {
    setIsOpenChangePremium(!isOpenChangePremium);
  };

  const handleCambioPlan = () => {
    if (profile.dataWorker.subscription_type.name === "Premium") {
      toggleIsOpenChangeStandard();
    } else {
      toggleIsOpenChangePremium();
    }
  };

  let showPanel = null;
  if (profile.dataWorker.subscribed) {
    if (panel === "historial") {
      showPanel = (
        <HistorialPayProfile
          id={profile.user.uid}
          toggleModalPaymentCancel={toggleModalPaymentCancel}
        />
      );
    } else if (panel === "post") {
      showPanel = (
        <MyProfilePost
          allPost={allPost ? allPost : null}
          id={profile.user.uid}
          profile={profile}
        />
      );
    } else if (panel === "hiring") {
      showPanel = (
        <MyProfileHiring id={profile.user.uid} allHirings={allHirings} />
      );
    }
  } else {
    showPanel = <ProfileInactive toggleModalPayment={toggleModalPayment} />;
  }

  const handleClickVista = () => {
    history.push(`/worker/${profile.dataWorker._id}`);
  };

  const RedirectLink = (url) => {
    window.open(url);
  };

  const panelClick = (panel) => {
    setPanel(panel);
  };
  const handleClickPayment = () => {
    toggleModalPayment();
  };

  const handleChange = (e) => {
    setChanges({
      ...Changes,
      [e.target.name]: e.target.value,
    });
    console.log('change',Changes )
  };

  

  const handleSelectLenguaje = (e) => {
    setLevelLenguaje(e.target.value)
    console.log('selectLemguaje', levelLanguahe)
  }

  const hamdlePut = (e, key) => {
    e.preventDefault();
    dispatch(PutInfoWorker({ [key]: Changes[key] }, profile.dataWorker._id));
    dispatch(getWorkerDetail(profile.dataWorker._id));
    setInfoWorker({ ...infoWorker, [key]: Changes[key] });
    setFormularios({ ...Formularios, [key]: !Formularios[key] });
    setChanges({ ...Changes, [key]: "" });
  };

  const submitChangeLanguaje = (e) =>{
    e.preventDefault()
    setInfoWorker({
      ...infoWorker,
      languages: [... infoWorker.languages, {idioma:Changes.languages , level: levelLanguahe}]
    })
  }

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PGimages");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dk69jry82/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setShowBtn(!showBtn);
    setLoading(false);
  };

  const handleChangeImage = () => {
    dispatch(PutInfoUser({ image: image }, profile.dataWorker.userId));
    setShowBtn(!showBtn);
  };

  const handleNoChange = () => {
    setImage(profile.user.image);
    setShowBtn(!showBtn);
  };

  let PremiumStar = null;

  if (
    profile.dataWorker.subscription_type.name === "Premium" &&
    profile.dataWorker.subscribed
  ) {
    PremiumStar = (
      <Premium>
        <TextPremium>Premium</TextPremium>
        <IconContext.Provider
          value={{ size: "20px", color: "rgb(179, 156, 31)" }}
        >
          <div>
            <MdStarPurple500 />
          </div>
        </IconContext.Provider>
      </Premium>
    );
  }

  console.log('prueba perfil', profile)

  return (
    <ContainerWorker>
      <ContainerIzq>
        <ImageContainer>
          {PremiumStar}
          <ImageProfile
            src={
              loading
                ? "https://c.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif"
                : image
            }
            alt="img"
          />
          <Username>{profile.user.username}</Username>
          <Fileselect>
            <input name="img" type="file" onChange={upLoadImage} />
          </Fileselect>
          <DivButtons showBtn={showBtn}>
            <BtnPerfil onClick={handleChangeImage}>
              Establecer como foto de perfil
            </BtnPerfil>
            <BtnPrefilCancel onClick={handleNoChange}>Cancelar</BtnPrefilCancel>
          </DivButtons>
          <VistaPrevia onClick={handleClickVista}>
            Vista previa del perfil de Wixxer
          </VistaPrevia>
          <Linea></Linea>
          <DivName>
            <IconContext.Provider
              value={{ size: "20px", color: "rgba(0, 0, 0, 0.596)" }}
            >
              <div>
                <CgProfile />
              </div>
            </IconContext.Provider>
            <Name>
              {profile.user.firstName} {profile.user.lastName}
            </Name>
          </DivName>
          <DivOther>
            <IconContext.Provider
              value={{ size: "20px", color: "rgba(0, 0, 0, 0.596)" }}
            >
              <div>
                <MdOutlineEmail />
              </div>
            </IconContext.Provider>
            <EmailPhone>{profile.user.email}</EmailPhone>
          </DivOther>
          <DivOther>
            <IconContext.Provider
              value={{ size: "20px", color: "rgba(0, 0, 0, 0.596)" }}
            >
              <div>
                <GiSmartphone />
              </div>
            </IconContext.Provider>
            <EmailPhone onClick={() => toggleForms("phone")}>
              {infoWorker.phone}
            </EmailPhone>
          </DivOther>
          {Formularios.phone ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="Agrega un numero de telefono..."
                  value={Changes.phone}
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("phone")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => hamdlePut(e, "phone")}>
                    Actualizar
                  </BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <DivOther>
            <IconContext.Provider
              value={{ size: "20px", color: "rgba(0, 0, 0, 0.596)" }}
            >
              <div>
                <MdPostAdd />
              </div>
            </IconContext.Provider>
            <EmailPhone onClick={() => panelClick("post")}>
              Publicaciones
            </EmailPhone>
          </DivOther>
          <DivOther>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "35px",
              }}
            >
              <PostsC>Totales: {allPost ? allPost.length : null}</PostsC>
              <PostsC>
                Activas:{" "}
                {allPost
                  ? allPost.filter((p) => p.active === true).length
                  : null}
              </PostsC>
            </div>
          </DivOther>
          <DivOther>
            <IconContext.Provider
              value={{ size: "20px", color: "rgba(0, 0, 0, 0.596)" }}
            >
              <div>
                <GiShakingHands />
              </div>
            </IconContext.Provider>
            <EmailPhone onClick={() => panelClick("hiring")}>
              Contrataciones
            </EmailPhone>
          </DivOther>
          <DivOther>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "35px",
              }}
            >
              <PostsC>
                Totales: {allHirings ? allHirings.hirings.length : null}
              </PostsC>
              {/* <PostsC>Activas:   {allPost ? allPost.filter(p => p.active === true).length : null}</PostsC> */}
            </div>
          </DivOther>
          {profile.dataWorker.subscribed ? (
            <div style={{ width: "100%" }}>
              <Div>
                <Subscribe>Activo</Subscribe>
              </Div>
              <CambioPlan onClick={handleCambioPlan}>
                Cambiar de plan
              </CambioPlan>
              <Historial onClick={() => panelClick("historial")}>
                Historial de pago
              </Historial>
            </div>
          ) : (
            <div style={{ width: "100%" }}>
              <Div>
                <Unsuscribe>Inactivo</Unsuscribe>
              </Div>
              <BtnPay onClick={() => handleClickPayment()}>
                PAGAR SUSCRIPCI??N{" "}
              </BtnPay>
            </div>
          )}
          <br />
        </ImageContainer>
        <InfoContainer>
          <br />
          <Row>
            <Titulos>Titulo</Titulos>
            <BtnForms onClick={() => toggleForms("title")}>
              Editar Titulo
            </BtnForms>
          </Row>
          <InfoProfile>
            {infoWorker.title.length === 0
              ? "Agrega tu titulo ..."
              : infoWorker.title}
          </InfoProfile>
          {Formularios.title ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="??Cuentas con algun titulo?"
                  value={Changes.title}
                  name="title"
                  onChange={(e) => handleChange(e)}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("title")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => hamdlePut(e, "title")}>
                    Actualizar
                  </BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <Linea></Linea>
          <br />
          <Row>
            <Titulos>Descripc??n</Titulos>
            <BtnForms onClick={() => toggleForms("aboutMe")}>
              Editar Descripc??n
            </BtnForms>
          </Row>
          <InfoProfile>
            {infoWorker.aboutMe.length === 0
              ? "Agregar descripci??n ..."
              : infoWorker.aboutMe}
          </InfoProfile>
          {Formularios.aboutMe ? (
            <FormsDiv>
              <form>
                <textarea
                  type="text"
                  value={Changes.aboutMe}
                  name="aboutMe"
                  onChange={(e) => handleChange(e)}
                  placeholder="Cu??ntanos un poco mas de ti."
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("aboutMe")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => hamdlePut(e, "aboutMe")}>
                    Actualizar
                  </BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <Linea></Linea>
          {/* <br />
          <Row>
            <Titulos>Idiomas</Titulos>
            <BtnForms onClick={() => toggleForms("languages")}>
              Agregar nuevo
            </BtnForms>
          </Row>
          {infoWorker.languages.length === 0 ? (
            <InfoProfile>Agrega tus idiomas ...</InfoProfile>
          ) : (
            <DivResult>
              {infoWorker.languages.map((l, index) => (
                <MapRow key={index}>
                  <InfoProf>{l.idioma}</InfoProf>
                  <Level>- {l.level}</Level>
                </MapRow>
              ))}
            </DivResult>
          )}
          {Formularios.languages ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="Agrega un idioma..."
                  value={Changes.languages}
                  name="languages"
                  onChange={(e) => handleChange(e)}
                />
                <select onClick={(e) => handleSelectLenguaje(e)}>
                  <option value="">Nivel de idioma</option>
                  <option value="Basico">Basico</option>
                  <option value="Conversacional">Conversacional</option>
                  <option value="Fluido">Fluido</option>
                  <option value="Nativo/ Bilingue">Nativo/ Bilingue</option>
                </select>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("idiomas")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => submitChangeLanguaje(e)}>Actualizar</BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <Linea></Linea>
          <br />
          <Row>
            <Titulos>Habilidades</Titulos>
            <BtnForms onClick={() => toggleForms("habilidades")}>
              Agregar nuevo
            </BtnForms>
          </Row>
          {infoWorker.skills.length === 0 ? (
            <InfoProfile>Agrega tus habilidades ...</InfoProfile>
          ) : (
            <DivResult>
              {profile.skills.map((s, index) => (
                <MapRow key={index}>
                  <InfoProf>{s.idioma}</InfoProf>
                  <Level>- {s.level}</Level>
                </MapRow>
              ))}
            </DivResult>
          )}
          {Formularios.skills ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="Agrega una habilidad..."
                  // value={estado.description}
                  // name="description"
                  // onChange={(e) => handleChange(e)}
                />
                <select>
                  <option value="">Nivel de experiencia</option>
                  <option value="Principiante">Principiante</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("habilidades")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept>Actualizar</BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <Linea></Linea> */}
          {/* <br/>
                    <Row>
                        <Titulos>Certificac??n</Titulos>
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
          <br />
          <Row>
            <Titulos>Linkedin</Titulos>
            <BtnForms onClick={() => toggleForms("linkedin")}>
              Agregar Link
            </BtnForms>
          </Row>
          {infoWorker.linkedin.length === 0 ? (
            <InfoProfile>Agrega Linkedin ...</InfoProfile>
          ) : (
            <BtnLink onClick={() => RedirectLink(infoWorker.linkedin)}>
              {infoWorker.linkedin}
            </BtnLink>
          )}
          {Formularios.linkedin ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="Agrega Linkedin ..."
                  value={Changes.linkedin}
                  name="linkedin"
                  onChange={(e) => handleChange(e)}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("linkedin")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => hamdlePut(e, "linkedin")}>
                    Actualizar
                  </BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <Linea></Linea>
          <br />
          <Row>
            <Titulos>Pagina Web</Titulos>
            <BtnForms onClick={() => toggleForms("web")}>Agregar Link</BtnForms>
          </Row>
          {infoWorker.web.length === 0 ? (
            <InfoProfile>Agrega pagina web ...</InfoProfile>
          ) : (
            <BtnLink onClick={() => RedirectLink(infoWorker.web)}>
              {infoWorker.web}
            </BtnLink>
          )}
          {Formularios.web ? (
            <FormsDiv>
              <form>
                <input
                  placeholder="Agrega pagina Web ..."
                  value={Changes.web}
                  name="web"
                  onChange={(e) => handleChange(e)}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BtnCancel onClick={() => toggleForms("web")}>
                    Cancelar
                  </BtnCancel>
                  <BtnAccept onClick={(e) => hamdlePut(e, "web")}>
                    Actualizar
                  </BtnAccept>
                </div>
              </form>
            </FormsDiv>
          ) : null}
          <br />
          <br />
        </InfoContainer>
      </ContainerIzq>
      <ContainerDer>
        <InfoContainerDer>{showPanel}</InfoContainerDer>
      </ContainerDer>
      <CambioaPlanStandard
        profile={profile.user.uid}
        isOpenChangeStandard={isOpenChangeStandard}
        toggleIsOpenChangeStandard={toggleIsOpenChangeStandard}
      />
      <CambioaPlanPremium
        profile={profile.user.uid}
        isOpenChangePremium={isOpenChangePremium}
        toggleIsOpenChangePremium={toggleIsOpenChangePremium}
      />
    </ContainerWorker>
  );
};

export default MyProfileWorker;
