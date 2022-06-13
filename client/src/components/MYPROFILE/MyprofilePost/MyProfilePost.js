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