import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { PutInfoUser } from '../../../store/actions/index'

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
        TxtWixx
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
                <Title>Actualmente no tienes servicios contratados</Title>
                <div style={{display:"flex", flexDirection:"row"}}>
                <Txtone>Encuentra lo que necesitas en </Txtone>
                <TxtWixx> Wixxer</TxtWixx>
                </div>
            </ContainerContratos>
        </Container>
    )
}

export default MyProfileUser