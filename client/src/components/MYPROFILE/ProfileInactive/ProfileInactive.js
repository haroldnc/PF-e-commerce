import styled from "styled-components";

export const ContainerInactive = styled.div `
    margin: 25px;
`

export const Title = styled.h1 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-top: 15px;
`

export const Txtone = styled.h2 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    font-size: 20px;
`

export const TxtTwo = styled.p `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    font-size: 16px;
`

export const ActivaPlan = styled.p `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    font-size: 16px;

`

export const  BtnAcive = styled.button `
    text-align : center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.596);
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.596);
    padding: 5px;
    border-radius: 10px;
    width: 20%;
    margin-left:40%;
    margin-top: 30px;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border: 1px solid  ${props => props.theme.colors.primary};
    }
`