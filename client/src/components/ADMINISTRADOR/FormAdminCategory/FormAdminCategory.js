import styled from 'styled-components'

export const NameC = styled.h1 `
    padding: 10px;
    margin-left: 10px;
    font-size: 23px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`

export const ContainerFormCategory = styled.div `
    width: 98%;
    height: 100%;
    background-color:${props => props.theme.colors.backgroundColorAlt};
    margin: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.151);
`

export const FormCategory = styled.div `
    margin: 30px;
    display:flex;
    flex-direction: column;
    padding-bottom: 25px;
`
export const DivInput = styled.div `
    display: flex;
    flex-direction: column;
`

export const Btn = styled.button `
    margin-top: 10px;
    cursor:pointer;
    background-color: ${((props) => props.theme.colors.secondary)};
    padding: 5px;
    width: 120px;
    border-radius: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
`

export const LabelC = styled.label `
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.493)
`

export const InputC = styled.input `
    border: 1px solid white;
    border-radius: 10px;
    width: 400px;
    height: 35px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.37);
    padding-left: 10px

    
`

export const SelectC = styled.select `
    border: 1px solid white;
    border-radius: 10px;
    width: 400px;
    height: 35px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.37);
`

export const SpanC = styled.h4 `
    margin-top: 25px;
    margin-left: 20px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

`