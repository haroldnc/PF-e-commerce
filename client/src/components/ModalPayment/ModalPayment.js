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
    height: 50%;
    border-radius: 25px;
    padding: 25px;

    
`
export const Divglob = styled.div `
    display: flex;
    flexDirection: row;
    height: 100%;
    background-color: ${props => props.theme.colors.borderColor};
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.247);

`

export const DivPlan = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left:1px solid rgba(0, 0, 0, 0.247);

`

export const CloseX = styled.button `
    position: absolute;
    top: 26%;
    left: 26%;
    background-color: transparent;
    font-weight: 400;
    cursor:pointer;
`


