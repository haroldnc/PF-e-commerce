import styled from "styled-components";
import { Form, Field } from "formik";

export const SignInLink = styled.a`
    margin-top: 6rem;
    font-size: 0.8rem;
    cursor: pointer;
    text-decoration: underline;
`
export const FormContainer = styled(Form)`
    background-color: ${props => props.theme.colors.backgroundColorAlt};
    border-radius: 5px;
    min-height: 80%;
    min-width: 35%;
    padding: 10px;
    display: flex;
    align-items:center;
    flex-direction: column;
    position: relative;
`
export const InputsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`
export const Input = styled(Field)`
    padding:10px;
    border-radius: 5px;
    border: 1px solid #f1f1f1f1;
    height: 2rem;
    width: 13rem;
    background-color: ${props => props.theme.colors.backgroundColor};
    margin-bottom: 5px;
    color: ${props => props.theme.colors.font};
`
export const SubmitContainer = styled.div`
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 13px;
`
export const Error = styled.div`
    max-width: 13rem;
    color: red;
    font-size: 13px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column
`
export const Label = styled.label`
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
`