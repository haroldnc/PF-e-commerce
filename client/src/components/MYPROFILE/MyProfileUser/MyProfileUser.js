import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageProfile = styled.img `
    position:  absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    top: 20%;
`

export const ContainerUser = styled.div `
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
    margin-top: 55px;
    font-family: 'Poppins', sans-serif; 
    font-size: 35px;
    font-weight: 500;   
`

export const Correo = styled.h3 `
    font-family: 'Poppins', sans-serif; 
    color: rgba(0, 0, 0, 0.596);

`

export const ProfilInfo = styled. div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:60%;
    margin-top:35px;
`