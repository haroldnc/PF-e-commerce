import styled from 'styled-components'

export const CarouselDiv = styled.div `
    padding-bottom: 50px;   
    margin-bottom: 50px
`

export const TitleCarousel = styled.h2 `
    margin-bottom: 30px;
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
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
        transition-property: all;
        transition-duration: 250ms;
    }
`

export const NameCard = styled.h3 `
    position: absolute;
    font-size: 18px;
    width: 180px;
    top: 15px;
    left: 30px;
    color: white
`

export const ArrowImage = styled.img `
    padding: 10px,
`

export const Linked = styled.link `
text-decoration: none;
`