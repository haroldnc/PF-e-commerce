import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 500;
  background-color: ${(props) => props.theme.colors.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(Form)`
      background: ${(props) => props.theme.colors.backgroundColorAlt};
  padding: 10px;
  min-height: 20rem;
  min-width: 20rem;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
`

export const Title = styled.h2`
  margin-top: 2rem;
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

export const Error = styled.div`
  width: 240px;
  color: red;
  font-size: 12px;
  margin-bottom: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;