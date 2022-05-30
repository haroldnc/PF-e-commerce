import React from "react";
import {
  Button,
  ButtonAlt,
  CheckBoxContainer,
  CloseIcon,
  Container,
  DivisionContainer,
  Error,
  GoogleIcon,
  Input,
  InputContainer,
  Line,
  ModalBox,
  Title,
} from "./StyledModalLogIn";
import { Formik, Field, ErrorMessage } from "formik";

const ModalLogIn = ({ isOpenModalLogIn, toggleModalLogIn }) => {
  return (
    <>
      {isOpenModalLogIn && (
        <Container>
          <Formik
            initialValues={{
              email: "",
              password: "",
              checked: false,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if(!values.password) {
                errors.password = "Password is required";
              }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(values.password)){
                errors.password = "Minimo 8 carateres, maximo 15, al menos una letra mayuscula, al menos una letra minuscula, al menos 1 digito, al menos un caracter especial";
              }

              return errors;
            }}
            onSubmit={(values, {resetForm, setSubmitting}) => {
              resetForm();
              setSubmitting(false)
            }}
          >
            {(props, isSubmitting) => (
              <ModalBox>
                <Title>Log In</Title>
                <InputContainer>
                  <Input placeholder="Email" name="email" type="email" />
                </InputContainer>
                <ErrorMessage name="email">
                  {(msg) => <Error><p>{msg}</p></Error>}
                </ErrorMessage>
                <InputContainer>
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </InputContainer>
                <ErrorMessage name="password">
                  {msg => <Error><p>{msg}</p></Error>}
                </ErrorMessage>
                <CheckBoxContainer>
                  <Field type="checkbox" name="checked" />
                  Remember me
                </CheckBoxContainer>
                <Button disabled={isSubmitting}>Log In</Button>
                <DivisionContainer>
                  <Line />
                  Or
                  <Line />
                </DivisionContainer>
                <ButtonAlt>
                  <GoogleIcon />
                  Continue with Google
                </ButtonAlt>
                <CloseIcon onClick={toggleModalLogIn} />
              </ModalBox>
            )}
          </Formik>
        </Container>
      )}
    </>
  );
};

export default ModalLogIn;
