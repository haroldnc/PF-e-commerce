import styled from "styled-components";
import { Link } from "react-router-dom";


export const Parent = styled.div`
    margin-top: 50px;
    padding: 50px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 0px;
`

export const DetailContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;

`

export const BuyContainer = styled.div`
    grid-area: 1/ 2 / 2 / 3;
`

export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 70px;
`

export const PostPicture = styled.img`
    width: 100%;
    height: 50%;
`

export const UserInfo = styled.div`
    margin: 15px 0 15px 0;
`

export const DescriptionContainer = styled.div`
    margin: 15px 0;
    width: 70%;
    text-align: left;
    line-height: 2em;
`


export const ContactButton = styled.button`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.primary};
  font-weight: 600;
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.font};
  cursor: pointer
`

export const HireButton = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  color: white;
  transition: 0.3s ease;
  cursor: pointer;
`

export const SubTitle = styled.h2`
    font-size: 1.3rem;
    margin: 0 0 25px 0;
` 

export const SubTitle2 = styled.h2`
    font-size: 1.3rem;
    margin: 25px 0 ;
` 
export const ProfileLink = styled(Link)`
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
`