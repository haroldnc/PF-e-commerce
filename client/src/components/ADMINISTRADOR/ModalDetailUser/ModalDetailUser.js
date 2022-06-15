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

    ${({isOpenDetailUser}) => isOpenDetailUser ? "none" : `visibility: hidden`}

   
`

export const DivGlob = styled.div `
    background-color: white;
    width: 50%;
    height: 85%;
    border-radius: 25px;
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