import styled from 'styled-components'

export const ContainerREgistrados = styled.div `
    width: 98%;
    height: 83%;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    margin: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.425);

`

export const NavRegistrados = styled.div `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const User = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 50px;
    margin-left: 40px;
    width:170px;


`

export const Corr = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    width: 220px;
    text-align: center;


`

export const Tel = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    text-align: center;
    width:150px;

`

export const Role = styled.h1 `
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-right: 200px;
    width:70px;
    text-align: center;
`

