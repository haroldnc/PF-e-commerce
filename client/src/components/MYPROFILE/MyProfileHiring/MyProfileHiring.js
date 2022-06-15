import styled from 'styled-components'

export const NavBar = styled.div `
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
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    cursor: pointer;

    &:hover{
    background-color: ${props => props.theme.colors.secondary};
        
    }
`

export const ContainerCards = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const NavHiring = styled.div `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
`
export const NavTitle = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
    width:270px;
`

export const NavUsuario = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 80px;
    width:270px;
`

export const NavPublicacion = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 100px;
    width:270px;
`

export const NavMonto = styled.h3 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 100px;
    width:270px;
`

export const NoData = styled.h1`
    font-size: 25px;
    margin-top:20px;
    margin-bottom: 20px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    width:270px;
    width:100%;
    text-align: center;
`