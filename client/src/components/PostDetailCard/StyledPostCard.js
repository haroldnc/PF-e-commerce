import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardParent = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 5px 0 20px;
    align-items: flex-end;
    text-align: center;
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    box-shadow: ${props => props.theme.boxShadow};

    @media (max-width: 768px){
        width: 90%;
    }
    
`

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    /* height: 45%; */
`

export const ImageContainer = styled.img`
     width: 100%;
    height: 50%;
`

export const CardTitle = styled.h4`
    width: 100%;
    font-size: 1rem;
    align-self: center;

`

export const CardLink = styled(Link)`
    color: ${props => props.theme.colors.font};
    width: 100%;
    font-size: 1rem;
    align-self: center;
    padding: 5px;
    transition: .3s ease;
    margin: 5px;


    &:visited{
        color: black;
    }

    &:hover{
        color: ${(props) => props.theme.colors.secondary}
    }

`

