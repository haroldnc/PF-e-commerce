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
    width:190px;
`


export const ProfilePicture = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 25px
`

export const Worker = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: white;
    width:70px;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    
    ${({role}) => role === "worker" ? `background-color: #05668d;`: `background-color: #00a896`}
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
    width: 220px;
    text-align: center;

`

export const Phone = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    width:150px;

`

export const Icon = styled.div `
    cursor: pointer;
    margin-right: 40px
`