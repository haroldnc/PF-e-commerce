import styled from 'styled-components'

export const CarouselDiv = styled.div `
    margin: 50px;
    padding-bottom: 50px;   
`

export const TitleCarousel = styled.h2 `
    margin-bottom: 30px;
    margin-left: 25px
`
export const CardCarousel = styled.h1 `
    position: relative;
`

export const Image = styled.img `
    border-radius: 5px;
    cursor: pointer;
    width: 210px;
    height: 300px;
    padding-left: 20px;

    &:hover{
        filter: brightness(120%); 
    }
`

export const NameCard = styled.h3 `
    position: absolute;
    font-size: 20px;
    top: 10px;
    left: 30px;
    color: white
`