import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardParent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    margin: 10px;
    // margin: 5px 0 20px;
    align-items: flex-end;
    // border: 2px black solid;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
    background: url("https://m.media-amazon.com/images/I/61+EgLc0XNL._AC_SY450_.jpg")
    
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
