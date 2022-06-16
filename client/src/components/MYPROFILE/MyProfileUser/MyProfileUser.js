import styled from 'styled-components'


export const Container = styled.div`
    width: 80%;
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 95%;
        margin:0 5px;
    }

    
`

export const ImageProfile = styled.img `
    margin-left: 80px;
    margin-top:  30px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const ContainerUser = styled.div `
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.colors.font};

    @media(max-width: 768px){
        width: 100%;
    }
`

export const ContainerContratos = styled.div `
    margin-top: 50px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    color: red;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};

    @media (max-width: 768px){
        width: 100%;
    }
`

export const Name = styled.h1 `
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif; 
    font-size: 35px;
    font-weight: 500;   
    color: ${props => props.theme.colors.font};
`

export const Correo = styled.h3 `
    font-family: 'Poppins', sans-serif; 
    color: rgba(0, 0, 0, 0.596);
    margin-bottom: 10px;
    margin-left: 15px;
    color: ${props => props.theme.colors.font};

    
    @media  (min-width: 768px) {
        font-size: 6px;
    }

`

export const ProfilInfo = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:80%;
    margin-top:35px;
    padding-left:35px;
    padding-bottom:35px;
    
`

export const Fileselect = styled.div `
    position: relative;
    display: inline-block;
    margin-top: 10px;
    margin-left:90px;
    width: 80px;  
    height: 25px; 
    cursor: pointer;

    &::before{
        
        background-color: ${props => props.theme.colors.primary};
        color: white;
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        content: 'Subir foto'; 
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: pointer;
    }

    input[type="file"] {
        opacity: 0;
        width: 150px;
        height: 32px;
        display: inline-block;
    }
`

export const DivButtons = styled.div `
    display:flex;
    flex-direction:row;
    margin-top:15px;
    
    ${({showBtn}) => showBtn ? "none" : `visibility: hidden` }

`
export const BtnPerfil = styled.h1 `
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    font-size:10px;
    font-weight: 400;
    font-family: 'roboto', sans-serif;
    background-color: transparent;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 15px;

    &:hover{
    color: white;
    background-color: ${props => props.theme.colors.primary};

    }

`

export const BtnPrefilCancel = styled.h1 `
    color: red;
    border: 1px solid red;
    font-size:10px;
    font-weight: 400;
    font-family: 'roboto', sans-serif;
    background-color: transparent;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
    color: white;
    background-color: red;

    }

`

export const DivImage = styled.div `
    width: 300px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 15px;
`

export const Title = styled.h1 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
`

export const Txtone = styled.h2 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;

`

export const TxtWixx = styled.h2 `
    color: ${props => props.theme.colors.primary};
    text-align: center;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:5px;
    font-size: 20px;
`

export const NavBar = styled.div `
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`
export const BtnPublic = styled.button `
    margin-right: 10px;
    font-size:16px;
    padding:8px;
    color: white;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
    background-color: ${props => props.theme.colors.secondary};
        
    }
`

export const NavHiring = styled.div `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 768px){
        width: 90%;
    }
`

export const NavUsuario = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 80px;
    width:270px;
    @media(max-width: 768px){
        width: 0;
        margin-left: 0;
    }
`

export const NavPublicacion = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 100px;
    width:270px;
    @media(max-width: 768px){
        width: 0;
        margin-left: 0;
    }
`

export const NavMonto = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 100px;
    width:270px;
    @media(max-width: 768px){
        width: 0;
        margin-left: 0;
    }
`

export const NavTitle = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
    width:270px;

    @media(max-width: 768px){
        width: 0;
        margin-left: 0;
    }
`

export const ContainerCards = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`