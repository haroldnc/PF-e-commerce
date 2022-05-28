import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.aside`
  position: fixed;
  z-index: 150;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: white;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.font};
`;
export const NavLinks = styled.ul`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
export const SignIn = styled.button`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.primary};
  font-weight: 600;
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.font};
`;

export const LogIn = styled.button`
  font-size: 1.8rem;
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
`;
