import styled from 'styled-components'

export const ContainerPayment = styled.div `
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;


    ${({isOpenPayment}) => isOpenPayment ? "none" : `visibility: hidden`}
`
export const BtnPayment = styled.button `
    font-size: 16px;
    padding:8px;
    background-color: ${props => props.theme.colors.primary};
    border: transparent;
    border-radius: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    &:hover{
    background-color: ${props => props.theme.colors.secondary};

    }

`

export const Payment = styled.div `
    background-color: white;
    width: 50%;
    height: 85%;
    border-radius: 25px;
    padding: 25px;


    
`
export const Divglob = styled.div `
    display: flex;
    flexDirection: row;
    margin-top:20px;
    height:90%;

`

export const Title = styled.h1 `
    margin-top: 15px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;

`

export const DivPlan = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:1px solid rgba(0, 0, 0, 0.247);
    background-color: ${props => props.theme.colors.borderColor};
    margin-left: 10px;
    margin-right: 10px;


`


export const CloseX = styled.button `
    top: 26%;
    left: 26%;
    background-color: transparent;
    font-weight: 400;
    cursor:pointer;
    width: 15%;
    margin-left: 42%;
    font-family: 'Poppins', sans-serif;
    color:  rgba(0, 0, 0, 0.596);

`
export const TitlelGlobal = styled.h1 `
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 200;
    text-align: center;

` 

export const Price = styled.h1 `
    margin-top: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    font-weight:400;
    margin-right: -10px;
    margin-top: 10px;
    
`
export const Linea = styled.div `
    width:80%;
    height:2px;
    background-color: rgba(0, 0, 0, 0.247);

`

export const Benefit = styled.p `
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgba(39, 39, 39, 0.753);
    font-family: 'Poppins', sans-serif;

`

