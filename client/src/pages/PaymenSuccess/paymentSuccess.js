import styled from 'styled-components'

export const ContainerSuccess = styled.div `
    margin-top: 6rem;


`

export const Congrats = styled.h1 `
    margin-top: 80px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 40px;
    color:#13e300;

`

export  const TextPrimary = styled.h3 `
    text-align: center;
    margin-top: 40px;
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;

`

export const Text = styled.p `
    text-align: center;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.247);
    font-size: 18px;

`

export const BtnProfile = styled.button `
    color: white;
    background-color: ${props => props.theme.colors.secondary};
    font-size: 18px;
    padding: 8px;
    width: 250px;
    margin: 20px;
    border-radius: 10px;
    cursor:pointer;

    &:hover{
    background-color: ${props => props.theme.colors.primary};
        
    }
`

export const BtnPublish = styled.button `
    color: rgba(0, 0, 0, 0.247);
    border: 1px solid rgba(0, 0, 0, 0.247);
    background-color: white;
    font-size: 18px;
    padding: 8px;
    width: 250px;
    margin: 20px;
    border-radius: 10px;
    cursor:pointer;


    &:hover{
        background-color: rgba(0, 0, 0, 0.247);
        color: white;
            
    }

`