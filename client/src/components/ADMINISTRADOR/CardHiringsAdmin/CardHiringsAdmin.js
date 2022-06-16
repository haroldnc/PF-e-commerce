import styled from 'styled-components'

export const ContainerHiring = styled.div `
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
    margin-left: 20px;
    width: 20%;
    text-align: center;
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
    text-align: center;
    cursor: pointer;
    width: 20%;
    text-align: center;

    &:hover{
        color: ${props => props.theme.colors.primary}
    }


`
export const Phone = styled.h1 `
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.356);
    width:150px;
    text-align: center;
    width: 10%;
    text-align: center;



`

export const Monto = styled.h1 `
font-size: 13px;
font-weight: 700;
color: white;
margin-left: 20px;
margin-right: 50px;
padding:8px;
border-radius: 10px;
cursor: pointer;

${({status}) => !status ? `
background-color: rgb(94, 255, 0);
`:
`background-color: rgba(129, 129, 129, 0.548);`}

&:hover{
padding:9px;
font-size: 14px;
}
`