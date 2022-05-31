import styled from 'styled-components'

export const Card = styled.div `
    width: 280px;
    margin: 15px;
    margin-bottom: 30px;
    cursor: pointer;
`

export const Imagen = styled.img `
    width: 100%;
    height: 50%;

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