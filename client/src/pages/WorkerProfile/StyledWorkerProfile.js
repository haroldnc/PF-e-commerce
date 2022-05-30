import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 100px;
    width: 80%;
    border: solid 1px black;
    text-align: center;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border-radius: 15px;
`

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    margin: 50px;
`
export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    margin: 50px;
`
export const Div3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    margin: 50px;
`

export const ProfilePic = styled.img`
    border-radius: 90px;
    width: 70%;
    height: 70%;

`

export const Price = styled.span`
    font-weight: bold;
`

export const DescriptionArea = styled.article`
    margin-top: 5px;
    text-align:left;
`

export const HireButton = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    color: ${props => props.theme.colors.font};
    letter-spacing: 2px;
    padding: 5px;
    cursor: pointer;
`