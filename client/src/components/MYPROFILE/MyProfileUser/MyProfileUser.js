import styled from 'styled-components'


export const Container = styled.div`
    width: 80%;
    margin-left:10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageProfile = styled.img `
    margin-left: 80px;
    margin-top:  30px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const ContainerUser = styled.div `
    margin-top: 20px;
    width: 90%;
    border: solid 2px #f1f1f1f1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.225);
`

export const ContainerContratos = styled.div `
    margin-top: 50px;
    width: 90%;
    border: solid 2px #f1f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.225);
`

export const Name = styled.h1 `
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif; 
    font-size: 35px;
    font-weight: 500;   
`

export const Correo = styled.h3 `
    font-family: 'Poppins', sans-serif; 
    color: rgba(0, 0, 0, 0.596);
    margin-bottom: 10px;
    margin-left: 15px;

`

export const ProfilInfo = styled. div `
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
    padding: 15px,
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