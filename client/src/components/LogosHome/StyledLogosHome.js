import styled from "styled-components";
 
export const LogosGlobal = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(5, 1fr);
    padding-left: 70px;
`
export const LogoCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    
    border-radius: 100px;
    cursor: pointer;

    &:hover{
        width: 165px;
    }
`

export const Logo = styled.img `
    width: 30%;
    margin-top: 10px;
    margin-bottom: -10px;
`
export const NameCard = styled.h1 `
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
`

export const Name = styled.h1 `
font-size: 25px;
font-family: 'Poppins', sans-serif;
font-weight: 700;
margin-left: 50px;

`
