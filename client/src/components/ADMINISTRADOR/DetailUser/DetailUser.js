import styled from "styled-components";

export const Container = styled.div `
    padding:15px;
`

export const Imagen = styled.img `
    width: 210px;
    height: 210px;
    border-radius: 105px;
    margin-top: 15px;
`

export const Name = styled.h1  `
    font-size: 25px;
`

export const BtnBaja = styled.button `
    color: red;
    font-size: 16px;
    background-color: transparent;
    cursor:pointer;
    font-family: 'Poppins', sans-serif;
    border: 1px solid red;
    padding: 5px;
    border-radius: 10px;
    width: 40%;
    margin-left:30%;
    margin-top:10px;

    &:hover{
        background-color: red;
        color:white;
    }
`

export const DivName = styled.div `
    margin-top: 10px;
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

export const EmailPhone = styled.h1 `
    font-size: 16px;
    color: rgba(0, 0, 0, 0.596);
    width: 85%;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    margin-left: 15px;
    cursor: pointer;
`

export const NameN = styled.h1 `
    margin-top: 70px;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.596);
    margin-left: 15px;
    text-align: left;
    font-family: 'Poppins', sans-serif;

`

export const Linea = styled.div `
    margin-top: 20px;
    width: 95%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.247);
`

export const Plan = styled.h1 `
    font-size: 15px;
    color: rgba(0, 0, 0, 0.596);
    margin-left: 10px;
    text-align: left;
    font-family: 'Poppins', sans-serif; 
`

export const PostsC = styled.p `
    margin-top: 5px;
    font-size: 14px;
    margin-left: 15px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color:rgba(0, 0, 0, 0.247);
`