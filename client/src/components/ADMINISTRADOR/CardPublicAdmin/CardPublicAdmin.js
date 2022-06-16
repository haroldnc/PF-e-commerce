import styled from "styled-components";

export const ContainerCard = styled.div `
    width: 100%;
    height: 150px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

export const CardImag = styled.img `
    height: 100%;
    width: 190px;
    
`

export const Title = styled.h1 `
    font-size: 19px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
    width: 23%;
    text-align: center;
`

export const Name = styled.h1 `
    font-size: 19px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
    width: 20%;
    text-align: center;
`

export const Price = styled.h1 `
    font-size: 19px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.356);
    margin-left: 20px;
    width: 15%;
    text-align: center;
`

export const Active = styled.h1 `
    font-size: 13px;
    font-weight: 700;
    color: white;
    margin-left: 20px;
    margin-right: 50px;
    padding:8px;
    border-radius: 10px;
    cursor: pointer;

    ${({active}) => active ? `
    background-color: rgb(94, 255, 0);
    `:
    `background-color: rgba(129, 129, 129, 0.548);`}

    &:hover{
    padding:9px;
    font-size: 14px;
    }
`

