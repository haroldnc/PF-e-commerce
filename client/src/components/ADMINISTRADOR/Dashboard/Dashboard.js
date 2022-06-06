import styled from 'styled-components'

export const ContainerDashboard = styled.div `
    display:flex;
    flex-direction: row;
    width:100%;
    height: 450px;
`

export const Number = styled.div `
    text-align: center;
    font-size: 60px;
    margin-bottom: 15px;
    font-weight: 200;
`

export const Name = styled.div `
text-align: center;
font-size: 16px;
font-family: 'Poppins', sans-serif;
color: rgba(0, 0, 0, 0.596);

`

export const Usuarios = styled.div `

`

export const CardsDatos = styled.div `
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    width: 95%;
    margin: 15px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.425);

`

export const Tabla = styled.div `
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    width: 50%;
    margin: 15px;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.425);

`
export const Datos = styled.div `
    width: 50%;
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
`

export const ImgProv = styled.img `
    margin-top:10px;
    margin-left:10px;
    width: 90%;
    height: 90%
`