import styled from 'styled-components'

export const ContainerNavAdmin = styled.div `
   
    display: felx;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};;
    width: 100%;
    height: 60px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.425);

    
`

export const NameDiv = styled.div `
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.596);
    font-size: 12px;
`

export const LeftDiv = styled.div `
    margin-right: 20px;
`