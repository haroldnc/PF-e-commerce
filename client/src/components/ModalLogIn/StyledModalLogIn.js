import styled from "styled-components";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Form, Field } from "formik";
import GoogleLogin from "react-google-login";

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

export const FormContainer = styled(Form)`
  background: ${(props) => props.theme.colors.backgroundColorAlt};
  padding: 10px;
  min-height: 32rem;
  min-width: 20rem;
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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// export const Input = styled(Field)`
//   background-color: transparent;
//   height: 70%;
//   width: 90%;
//   margin-left: 10px;
// `;

export const CheckBoxContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-size: 12px;

  input {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 80%;
  height: 2.3rem;
  border-radius: 5px;
  margin: 2rem 0 1rem 0;
  color: white;
  cursor: pointer;
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
  color: white;
  padding: 0 30px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const GoogleIcon = styled(AiFillGoogleCircle)`
  font-size: 1.4rem;
`;
export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
`;
export const SignUpLink = styled.a`
  margin-top: 4rem;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
`;

export const Error = styled.div`
  width: 240px;
  color: red;
  font-size: 12px;
  margin-bottom: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 3px;
`;

export const Input = styled(Field)`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  height: 2rem;
  background-color: ${(props) => props.theme.colors.inputColor};
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.font};
  width: 100%;
`;
