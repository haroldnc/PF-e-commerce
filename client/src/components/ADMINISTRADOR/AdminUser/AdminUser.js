import styled from 'styled-components'

export const ContainerMenu = styled.div `
    width: 300px;
    background-color: ${props => props.theme.colors.backgroundColorAlt};;
    border: 1px solid rgba(0, 0, 0, 0.123);
    margin-left:60px;

`

export const NameMenu = styled.h1 `
    font-size: 20px;
    font-weight: 200;
    padding-top: 15px;
    padding-left: 20px
`

export const DivName = styled.div `
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.123);

`

export const Menudiv = styled.div `
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.041);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.048);
    }
`

export const Namediv = styled.h1 `
    font-size: 15px;
    margin-left: 10px;
    font-weight: 200;
`

export const BtnLogout = styled.button `
    background-color: rgba(0, 0, 0, 0.315);
    color: white;
    font-size: 16px;
    padding:5px;
    border-radius: 10px;
    margin-left: 70px;
    margin-top: 400px;
    cursor:pointer;

    :hover{
    background-color: red;

    }
    
`