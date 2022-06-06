import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardParent = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 5px 0 20px;
    align-items: flex-end;
    border: 2px black solid;
    text-align: center;
    padding: 25px;
    
`

export const CardImg = styled.img`
    width: 100%;
    height: 80%;
`

export const CardTitle = styled.h4`
    width: 100%;
    font-size: 1rem;
    align-self: center;

`

export const CardLink = styled(Link)`
    color: black;
    width: 100%;
    font-size: 1rem;
    align-self: center;
    padding: 5px;

    &:visited{
        color: black;
    }

    &:hover{
        text-decoration: underline;
    }

`
