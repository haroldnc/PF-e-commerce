import styled from 'styled-components'

export const NavPost = styled.div `
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
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    cursor: pointer;

    &:hover{
    background-color: ${props => props.theme.colors.secondary};
        
    }
`

export const ContainerCards = styled.div `
    width: 100%;
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(3, 1fr);
`
export const ContainerNopost = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    width:100%;
    height:100%
`

export const Textone = styled.h1 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-top: 15px;
`

export const TextTwo = styled.h3 `
    color: rgba(0, 0, 0, 0.596);
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    margin-bottom:30px;
    font-size: 20px;
`