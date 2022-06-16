import styled from "styled-components";

export const ContainerPub = styled.div `
    width: 98%;
    height: 83%;
    background-color:white;
    margin: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.151);


`
export const NavRegistrados = styled.div `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const User = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 400px;
    width:100px;


`

export const Corr = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    width: 220px;
    text-align: center;


`

export const Tel = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    text-align: center;
    width:150px;

`

export const Role = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-right: 50px;
    width:150px;
    text-align: center;
`

export const NavBar = styled.div `
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    margin-right: 30px;
`

export const BtnPublic = styled.button `
    margin-right: 25px;
    font-size:16px;
    padding:5px;
    color: white;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    cursor: pointer;

    &:hover{
    background-color: ${props => props.theme.colors.secondary};
        
    }
`

export const ContainerCards = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`