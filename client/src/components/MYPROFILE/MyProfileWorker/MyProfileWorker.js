import styled from 'styled-components'

export const ContainerWorker = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }

`

export const ContainerIzq = styled.div `
    display: flex;
    justify-content: center;
    width: 35%;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 98%;
    }

`   

export const ContainerDer = styled.div `
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 98%;
        margin-bottom: 1rem;
    }
`

export const ImageContainer = styled.div `
    width: 80%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const InfoContainer = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};
    margin-top: 25px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const InfoContainerDer = styled.div `
    width: 90%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ImageProfile = styled.img `
    margin-top: 50px;
    width: 150px;
    height: 150px;
    border-radius: 100px;

`

export const Username = styled.h1 `
    margin-top: 10px;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.font};

`

export const VistaPrevia = styled.button `
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    padding: 7px;
    width: 80%;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    border: 1px solid  rgba(0, 0, 0, 0.247);
    color:rgba(0, 0, 0, 0.247);
    font-family: 'Poppins', sans-serif;
    transition: .3s ease;



    :hover{
        background-color: rgba(0, 0, 0, 0.247);
        color: white;
    }

`

export const Linea = styled.div `
    margin-top: 20px;
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.247);
`

export const Name = styled.h1 `
    font-size: 20px;
    color: rgba(0, 0, 0, 0.596);
    margin-left: 15px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: ${props=> props.theme.colors.font};
`

export const EmailPhone = styled.h1 `
    font-size: 16px;
    color: rgba(0, 0, 0, 0.596);
    width: 85%;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    margin-left: 15px;
    cursor: pointer;
    color: ${props=> props.theme.colors.font};
`

export const DivName = styled.div `
    margin-top: 25px;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const DivOther = styled.div `
    width: 85%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Row = styled.div `
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Titulos = styled.h1 `
    font-size: 18px;
    font-family: 'Poppins', sans-serif;

`

export const BtnForms = styled.button `
    color: ${props => props.theme.colors.secondary};
    font-size: 12px;
    background-color: transparent;
    cursor:pointer;
    font-family: 'Poppins', sans-serif;

`

export const InfoProfile = styled.p `
    margin-top: 25px;
    color: rgba(0, 0, 0, 0.596);
    width: 85%;
    text-align: left;
    font-size:15px;
    font-family: 'Poppins', sans-serif;

`

export const InfoProf = styled.p `
    color: rgba(0, 0, 0, 0.596);
    text-align: left;
    font-size:15px;
    margin-right: 5px;
    font-family: 'Poppins', sans-serif;

`

export const Level = styled.p `
    font-size: 15px;
    color:rgba(0, 0, 0, 0.257);
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`
export const DivResult = styled.div `
    margin-top: 25px;
    width: 85%;
`
export const MapRow = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:left;
    align-items: center;
    margin-bottom: 5px;
    
`

export const BtnLink = styled.button `
    margin-top: 25px;
    text-align: left;
    width: 85%;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    cursor: pointer;
`

export const Subscribe = styled.h2 `
    background-color: rgb(94, 255, 0);
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 6px 12px 6px 12px;
    border-radius: 10px;
    text-align: right;
`

export const Div = styled.div `
    width: 90%;
    display: flex;
    justify-content:right;
    margin-top: 15px

`
export const Unsuscribe = styled.h2 `
    background-color: rgba(129, 129, 129, 0.548);
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 6px 12px 6px 12px;
    border-radius: 10px;
    text-align: right;
`

export const BtnPay = styled.button `
    background-color: ${props => props.theme.colors.primary}; 
    width: 90%;
    margin-left: 15px;
    font-size: 18px;
    padding: 10px;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    height: 3rem;
  transition: .3s ease;


    &:hover{
        background-color: ${props => props.theme.colors.secondary}; 
    }
`

export const FormsDiv = styled.div `
    margin-top: 15px;
    width: 85%;
    background-color: ${props => props.theme.colors.backgroundColorAlt}; 
    border: 1px solid rgba(0, 0, 0, 0.247);
    border-radius: 10px;
    

    textarea{
        background-color: transparent;
        width: 100%;
        height: 100px;
        border: transparent;

       
    };

    textarea:focus{
        outline:none;
    }

    input{
        width: 80%;
        margin: 10% 10% 0% 10%;
        height: 35px;
        border-radius: 5px;
        border: solid 1px rgba(0, 0, 0, 0.247);
    }

    select{
        width: 80%;
        margin: 10%;
        height: 35px;
        border-radius: 5px;
        border: solid 1px rgba(0, 0, 0, 0.247);
        color: grey;
    }

    select:focus{
        outline: none
    }

    option{
        color: grey;
    }
    
`

export const BtnCancel = styled.button `
    background-color: white;
    width: 40%;
    font-size: 16px;
    margin: 10px;
    padding: 6px;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.247);

    &:hover{
        color: ${props => props.theme.colors.secondary};
    }

`

export const BtnAccept = styled.button `
    background-color: ${props => props.theme.colors.secondary};
    width: 40%;
    font-size: 16px;
    margin: 10px;
    padding: 6px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-family: 'Poppins', sans-serif;
    
    &:hover{
    background-color: ${props => props.theme.colors.primary};
        
    }
`
export const Historial = styled.p `
    margin-top: 15px;
    text-align: right;
    margin-right:40px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    color:rgba(0, 0, 0, 0.247);

    &:hover{
    color: rgba(0, 0, 0, 0.596);
    }


`

export const PostsC = styled.p `
    margin-top: 5px;
    text-align: right;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color:rgba(0, 0, 0, 0.247);
`
export const CambioPlan = styled.p`
    margin-top: 15px;
    text-align: right;
    margin-right:40px;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    color:rgba(0, 0, 0, 0.247);

    &:hover{
    color: rgba(0, 0, 0, 0.596);
    }
`
export const Cancelar = styled.p `
    margin-top:  10px;
    text-align: right;
    margin-right:40px;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

`

export const Premium = styled.div `
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 24%;
    left: 24%;
`

export const TextPremium = styled.p `
    color: rgb(179, 156, 31);
`

export const Fileselect = styled.div `
    position: relative;
    display: inline-block;
    margin-top: 10px;
    width: 70px;  
    height: 25px; 

    &::before{
        background-color: ${props => props.theme.colors.primary};
        color: white;
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 10px;
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
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.575);
    }

    input[type="file"] {
        opacity: 0;
        width: 150px;
        height: 32px;
        display: inline-block;
    }
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
export const DivButtons = styled.div `
    display:flex;
    flex-direction:row;
    margin-top:15px;
    ${({showBtn}) => showBtn ? "none" : `visibility: hidden` }

`


