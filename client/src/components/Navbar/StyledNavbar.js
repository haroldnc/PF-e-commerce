import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi'

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 100;
  background-color: white;
  font-weight: 600;
  box-shadow: ${({isScrolled}) => (isScrolled ? '0 10px 20px 0 rgba(0,0,0,.07)' : 'none')}
`;

export const Wrapper = styled.div`
  min-width: 1150px;
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
  width: 4rem;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
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
  width: 4rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: .3s ease;

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
