import styled from 'styled-components'

export const ContainerAdmin = styled.div `
    display: flex;
    flex-direction: row;
`

export const Screen = styled.div `
    background-color: ${props => props.theme.colors.backgroundColor};
    width: 100%;
    height: 100%;
    margin-left: 60px;
    
    ${({lateral}) => lateral.show ? `
    margin-left:0px
    `:`none`}
`