import styled from "styled-components";

export const ContainerCancel = styled.div `
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


    ${({isOpenPaymentCancel}) => isOpenPaymentCancel ? "none" : `visibility: hidden`}

`

export const DivGlob = styled.div `
    background-color: white;
    width: 50%;
    height: 50%;
    border-radius: 25px;
    padding: 25px;
`

export const Title = styled.h1 `
    text-align: center;
    margin-top: 35px;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;

`

export const Text = styled.p `
    margin: 45px 10px 10px 10px;
    padding-left:25px;
    padding-right:25px;
    color: rgba(39, 39, 39, 0.753);
    font-family: 'Poppins', sans-serif;
    text-align: center;
`

export const BtnCancel = styled.button `
    font-size:16px;
    padding: 8px;
    border: 1px solid red;
    color: red;
    border-radius: 10px;
    background-color: transparent;
    cursor:pointer;
    width: 20%;
    margin-right:15px;
    transition: .3s ease;



    &:hover{
        background-color: red;
        color: white;
    }
`

export const BtnNoCancel = styled.button `
    font-size:16px;
    padding: 8px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: white;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary};;
    cursor:pointer;
    width: 40%;
    margin-left:15px;
    transition: .3s ease;


    &:hover{
        background-color: ${props => props.theme.colors.secondary};;
        color: white;
}
`

export const BtnDiv = styled.div `
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`