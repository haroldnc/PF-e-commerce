import styled from 'styled-components'

export const Container = styled.div `
    margin-top: 7rem;
    
`

export const Services = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(4, 1fr);
    padding: 25px;
    padding-left: 50px;
    width: 1340px;
    margin-top: 15px
`

export const Name = styled.h1 `
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    position: absolute;
    color: white;
`

export const Banner = styled.img `
    width: 1250px;
    height: 250px;
    border-radius: 25px;
    position: relative;
`

export const ContainerBanner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`