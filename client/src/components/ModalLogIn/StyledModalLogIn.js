import styled from "styled-components";
import { AiFillGoogleCircle } from "react-icons/ai";
import {FaTimes} from "react-icons/fa";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 10px;
  height: 32rem;
  width: 20rem;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Title = styled.h2`
  margin-top: 2rem;
`;
export const InputContainer = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 80%;
  height: 2.3rem;
  border-radius: 5px;
  margin: 1rem 0;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background-color: transparent;
  height: 70%;
  width: 90%;
  margin-left: 10px;
`;

export const CheckBoxContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: 12px;

    input{
        cursor: pointer;
    }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 80%;
  height: 2.3rem;
  border-radius: 5px;
  margin: 2rem 0 1rem 0;
  color: ${(props) => props.theme.colors.backgroundColor};
  cursor: pointer
`;
export const DivisionContainer = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 12px;
`;

export const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.font};
`;

export const ButtonAlt = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 80%;
  height: 2.3rem;
  border-radius: 5px;
  margin: 1rem 0 2rem 0;
  color: ${(props) => props.theme.colors.backgroundColor};
  padding: 0 30px;
  cursor: pointer;

  display: flex;
  align-items:center;
  gap: 0.8rem
`;

export const GoogleIcon = styled(AiFillGoogleCircle)`
    font-size: 1.4rem;
`
export const CloseIcon = styled(FaTimes)`
    position:absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
`
export const SignUpLink = styled.a`
    margin-top: 4rem;
    font-size: 0.8rem;
    cursor: pointer;
    text-decoration: underline;
`
