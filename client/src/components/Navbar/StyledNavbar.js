import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi'

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 100;
  font-weight: 600;

  ${({ruta}) => ruta === "admin" ? `visibility: hidden` : `none`}
`;

export const Wrapper = styled.div`
  min-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){
    min-width: 100%;
    padding: 0 .5rem;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px){
    gap: 1rem;
  }
`

export const TitleContainer = styled.div`
  padding-bottom: 8px;
  cursor: pointer;
`

export const LinksContainer = styled.ul`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px){
    display: none;
  }
`;

export const SignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 6rem;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 400;
  transition: .3s ease;
  color: ${props => props.theme.colors.font};

  :hover{
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const LogIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 400;
  color: white;
  transition: .3s ease;
  font-size: 12px;

  :hover{
      background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const HamburguerMenuIcon = styled(GiHamburgerMenu)`
  color: ${(props) => props.theme.colors.font};
  font-size: 2.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`
export const UserInfo = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`
export const UserRole = styled.span`
  color: #13e300;
  font-size: 14px;
`
export const Profile = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 99999px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`