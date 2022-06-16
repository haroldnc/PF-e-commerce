import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardParent = styled.div`
    display: flex;
    flex-direction: column;
    width: 22rem;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    border-color: rgba(0, 0, 0, 0.09);
   `

export const CardImg = styled.div`
    background: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 13rem;
`

export const CardTitle = styled.h4`
    width: 100%;
    font-size: 1rem;
    padding-left: 10px;
    color: ${props => props.theme.colors.font};
`
export const TitleContainer = styled.div`
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const CardLink = styled(Link)`
    color: black;
    width: 100%;
    font-size: 1rem;
    align-self: center;

    &:visited{
        color: ${props => props.theme.colors.secondary};
    }

   

`
