import styled from 'styled-components'

export const ContainerHiring = styled.div `
    width: 100%;
    height: 70px;
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
export const UserName = styled.h1 `
    font-size: 17px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
`

export const ProfilePicture = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 25px
`

export const Correo = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    width: 220px;
    margin-left: 20px;
    text-align: center;
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.primary}
    }


`
export const Phone = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    width:150px;
    margin-left: 20px;
    text-align: center;



`

export const Monto = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    width:120px;
    text-align: center;
`