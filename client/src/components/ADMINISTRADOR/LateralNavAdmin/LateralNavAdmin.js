import styled from 'styled-components'

export const ContainerLateralNav = styled.div `
    background-color: ${(props) => props.theme.colors.primary};
    width: 60px;
    height: 700px;
    
`

export const LateralDiv = styled.div `
top: 0;
position: fixed;
z-index: 100;
   
`

export const Icons = styled.div `
    margin-top: 100px;
`

export const IconMenu = styled.div `
    width: 100%;
    height: 60px;
    padding:20px;
    cursor: pointer;
    

    ${({lateral}) => lateral === "Menu" ? `
    background-color: #00a896;
    ` :`none`}
`

export const IconBuilder = styled.div `
    width: 100%;
    height: 60px;
    padding:20px;
    cursor: pointer;
    

    ${({lateral}) => lateral === "Builder" ? `
    background-color: #00a896;
    ` :`none`}
`
export const IconData = styled.div `
    width: 100%;
    height: 60px;
    padding:20px;
    cursor: pointer;
    

    ${({lateral}) => lateral === "Data" ? `
    background-color: #00a896;
    ` :`none`}
`

export const Icon = styled.div `
    width: 100%;
    height: 60px;
    padding:20px;
    cursor: pointer;

    ${({lateral}) => lateral === "Admin" ? `
    background-color: #00a896;
    ` :`none`}
`


