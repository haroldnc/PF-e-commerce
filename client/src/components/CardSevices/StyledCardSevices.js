import styled from 'styled-components'

export const Card = styled.div `
    width: 280px;
    height: 250px;
    margin: 15px;
    margin-bottom: 30px;
    cursor: pointer;

    @media(max-width: 680px){
        width: 235px;
        height: 240px;
    }
`

export const Imagen = styled.img `
    width: 100%;
    height: 85%;
    border-radius: 10px;

    &:hover{
        filter: brightness(110%); 
        transition-property: all;
        transition-duration: 250ms;
    }
`

export const Name = styled.h1 `
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    margin-left: 5px;
    margin-top: 10px

`