import styled from 'styled-components'

export const ContainerCardAdminR = styled.div `
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const DivProfile = styled.div `
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
`


export const ProfilePicture = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 25px
`

export const Worker = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    
    background-color: ${ ((props) => props.theme.colors.secondary)};
    padding: 5px;
 
`

export const UserName = styled.h1 `
    font-size: 17px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
`

export const Correo = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    margin-right: 10px;
    

`

export const Icon = styled.div `
    cursor: pointer;
    margin-right: 40px
`