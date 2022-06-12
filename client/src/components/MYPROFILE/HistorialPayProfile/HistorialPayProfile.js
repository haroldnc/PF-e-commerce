import styled from 'styled-components'

export const NavRegistrados = styled.div `
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
    margin-left: 50px;
    margin-left: 40px;
    width:270px;
`

export const CancelDiv = styled.div `
    width: 100%;
    height: 25px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    margin-right: 30px;
    margin-bottom: 10px;
`

export const CancelBtn = styled.button `
    margin-top: 10px;
    margin-right: 25px;
    background-color: transparent;
    font-size: 12px;
    padding:5px;
    border: 1px solid rgba(0, 0, 0, 0.356);
    color: rgba(0, 0, 0, 0.356);
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.356);
        color: white;
        border: transparent;

    }
`

export const Text = styled.p `
    font-size: 13px;
    margin-right: 15px;
    padding-top: 5px;
    color: rgba(0, 0, 0, 0.356);
`