import styled from 'styled-components'

export const Container = styled.div `
    margin-top: 7rem;
    
`

export const Services = styled.div `
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(3, 1fr);
    padding: 25px;
    padding-left: 25px;
    width: 1340px;
    margin-top: 15px;

    @media(max-width:680px){
        grid-template-columns: repeat(1, 1fr);
        padding: 0;
        width: 1000px;
    }
`

export const Name = styled.h1 `
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    position: absolute;
    color: white;
    text-align: center;
`

export const Banner = styled.img `
    width: 1250px;
    height: 250px;
    border-radius: 25px;
    position: relative;

    @media (max-width: 680px){
        width: 380px;
    }
`

export const ContainerBanner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 680px){
        width: 200px;
    }
`

export const ContainerFilter = styled.div `
    width: 350px;
    margin-top: 55px;
    margin-left:50px;
    border-radius: 25px;

    @media(max-width: 680px){
        margin-left: 0px;
        margin-top: 0px;
    }
  
`

export const Div = styled.div `
    display: flex;
    flex-direction: row;
`

export const Name_filter = styled.h1 `
    font-size: 20px;
    margin:20px;
`

export const Checkbox = styled.div `
    margin-left: 20px;
    margin-bottom: 5px;
`

export const Label = styled.label `
    margin-left: 10px;
    

`