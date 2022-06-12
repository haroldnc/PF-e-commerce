import styled from 'styled-components'

export const ContainerType = styled.div `

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


${({isOpenType}) => isOpenType ? "none" : `visibility: hidden`}

`

export const DivGlobal = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 30%;
    height: 30%;
    border-radius: 25px;
    padding: 25px;
`

export const Name = styled.h1 `
    font-size: 18px;
    text-align: center;
    font-family: 'Poppins', sans-serif;

`

export const BtnCancel = styled.button `
    font-size: 14px;
    background-color: red;
    color: white;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
    border: 1px solid red;
    transition: .3s ease;



    &:hover{
        background-color: white;
        color: red;
    }

`

export const BtnNoCancel = styled.div `
    font-size: 14px;
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.primary};
    transition: .3s ease;
    margin-top: 10px;



    &:hover{
        background-color: ${props => props.theme.colors.secondary};
        color: white;
    }
`