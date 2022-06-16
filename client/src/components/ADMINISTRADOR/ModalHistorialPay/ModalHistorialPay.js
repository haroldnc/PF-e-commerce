import styled from "styled-components";

export const ContainerModal = styled.div `
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;

    ${({isOpenHistory}) => isOpenHistory ? "none" : `visibility: hidden`}

   
`

export const DivGlob = styled.div `
    background-color: white;
    width: 50%;
    height: 85%;
    border-radius: 10px;
    padding: 25px;
`

export const BtnAtras = styled.button `
    color: ${props => props.theme.colors.primary};
    font-size: 13px;
    background-color: transparent;
    cursor:pointer;
    font-family: 'Poppins', sans-serif;
    width: 20%;
    margin-left:40%;
    margin-top: -5px;

    &:hover{
        color: ${props => props.theme.colors.secondary};
    }
`

export const NavRegistrados = styled.div `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
`

export const NavTitle = styled.h3 `
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    width:270px;
`

export const Title = styled.h3 `
font-size: 22px;
color: rgba(0, 0, 0, 0.596);
margin-left: 15px;
text-align: center;
font-family: 'Poppins', sans-serif;
`

export const Subtitle = styled.h2 `
    margin-top: 20px; 
    font-size: 18px;
    color: rgba(0, 0, 0, 0.596);
    text-align: left;
    font-family: 'Poppins', sans-serif;
`

export const Historial = styled.h1 `
    margin-top: 20px; 
    font-size: 18px;
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-family: 'Poppins', sans-serif;
`