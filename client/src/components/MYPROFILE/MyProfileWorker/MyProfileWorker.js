import styled from 'styled-components'

export const ContainerWorker = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;

`

export const ContainerIzq = styled.div `
    display: flex;
    justify-content: center;
    width: 35%;
    flex-direction: column;
    align-items: center;

`   

export const ContainerDer = styled.div `
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageContainer = styled.div `
    width: 80%;
    border: solid 2px #f1f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.225);
`

export const InfoContainer = styled.div `
    width: 80%;
    border: solid 2px #f1f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.225);
    margin-top: 25px;
`

export const InfoContainerDer = styled.div `
    width: 90%;
    border: solid 2px #f1f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.225);
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

`

export const EmailPhone = styled.h1 `
    font-size: 16px;
    color: rgba(0, 0, 0, 0.596);
    width: 85%;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    margin-left: 15px;
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
    background-color: white;
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
    margin-left:15px;
    font-size: 18px;
    padding: 10px;
    margin-top: 15px;
    border-radius: 15px;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.secondary}; 
    }
`

export const FormsDiv = styled.div `
    margin-top: 15px;
    width: 85%;
    background-color: ${props => props.theme.colors.borderColor}; 
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