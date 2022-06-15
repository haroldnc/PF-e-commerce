import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PutInfoUser, getHiringsByUser } from '../../../store/actions/index'
import CardHiringWorker from '../CardHiringWorker/CardHiringWorker.jsx'

import { Container,
        ContainerUser,
        ImageProfile,
        Name,
        Correo,
        ProfilInfo,
        Fileselect,
        DivButtons, 
        BtnPerfil,DivImage, 
        BtnPrefilCancel, 
        ContainerContratos,
        Title,
        Txtone,
        TxtWixx,
        NavBar,
        BtnPublic,
        NavHiring,
        NavUsuario,
        NavPublicacion,
        NavMonto,
        NavTitle,
        ContainerCards
    } from './MyProfileUser'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons/lib"
import { CgProfile } from 'react-icons/cg'


const MyProfileUser = ({profile}) => {
    console.log('user', profile)

    const dispatch = useDispatch()
    const [ image , setImage ] = useState(profile.user.image)
    const [ showBtn , setShowBtn ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const [panelHiring, setPanelHiring ] = useState("activas")
    const AllHiring = useSelector(state => state.hiringsByUser)
    console.log('hirings',AllHiring )

    useEffect(() => {
        dispatch(getHiringsByUser(profile.user.uid))
    },[])

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
    dispatch(PutInfoUser({ image : image },profile.user.uid ))
    setShowBtn(!showBtn)
  }

  const handleNoChange = () => {
    setImage(profile.user.image)
    setShowBtn(!showBtn)
  }

    let Abiertas = Object.entries(AllHiring).length !== 0 ? AllHiring.hirings.filter( h => h.status === false) : []
    console.log('abiertas',Abiertas)
    let Cerradas = Object.entries(AllHiring).length !== 0 ? AllHiring.hirings.filter( h => h.status === true) : []

    return (
        <Container>
            <ContainerUser>
                <DivImage >
                <ImageProfile src={loading ? "https://c.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif" : image} alt="img" />
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
                </DivImage>
                <ProfilInfo>
                <Name>{`${profile.user.firstName} ${profile.user.lastName}`}</Name>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
                        <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <CgProfile/>
                            </div>
                        </IconContext.Provider>
                        <Correo>{profile.user.username}</Correo>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
                    <IconContext.Provider value={{size:"20px", color: "rgba(0, 0, 0, 0.596)"}}>
                            <div>
                                <AiOutlineMail/>
                            </div>
                        </IconContext.Provider>
                        <Correo>{profile.user.email}</Correo>
                    </div>
                </ProfilInfo>
                
            </ContainerUser>

            <ContainerContratos>
            <NavBar>
                <BtnPublic onClick={() => setPanelHiring("activas")}>Activas</BtnPublic>
                <BtnPublic onClick={() => setPanelHiring("historial")}>Historial </BtnPublic>
            </NavBar>
            <NavHiring>
               <NavUsuario>WORKER</NavUsuario>
               <NavPublicacion>PUBLICACIÓN</NavPublicacion>
               <NavMonto>MONTO</NavMonto>
               <NavTitle>ESTADO</NavTitle>
            </NavHiring>

        {
                panelHiring === "activas" ?
                <ContainerCards>
                    {
                        Abiertas.length > 0 ? Abiertas.map( h => (
                            <CardHiringWorker
                            user={h.idWorker}
                            post={h.idPublication}
                            open="Abierta"
                            key={h._id}
                            id={h.idPublication._id}
                            />
                        )):
                        <div style={{width:"100%"}}>
                            <Title>Actualmente no tienes servicios Activos</Title>
                        </div>
                    }
                    
                </ContainerCards>
             : 
                <ContainerCards>
                    {
                        Cerradas.length > 0 ? Cerradas.map( h => (
                            <CardHiringWorker
                            user={h.idUser}
                            post={h.idPublication}
                            open= "Cerrada"
                            key={h._id}
                            id={h.idPublication._id}
                            />
                        )):
                        <div style={{width:"100%", marginBottom:"25px"}}>
                            <Title>Actualmente no tienes servicios en tu historial</Title>
                        </div>

                    }
                </ContainerCards>
            }
            </ContainerContratos>
        </Container>
    )
}

export default MyProfileUser