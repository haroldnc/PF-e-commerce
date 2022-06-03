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
  FormContainer,
  Title,
  Label,
  InfoContainer,
} from "./StyledModalLogIn";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/userActions";


const ModalLogIn = ({ isOpenModalLogIn, toggleModalLogIn }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isOpenModalLogIn && (
        <Container>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email es requerido";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email no es valido";
              }
              if (!values.password) {
                errors.password = "Contraseña es requerida";
              } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  "Minimo 8 carateres, maximo 15, al menos una letra mayuscula, al menos una letra minuscula, al menos 1 digito, al menos un caracter especial";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              resetForm();
              setSubmitting(false);
              dispatch(signin(values))
            }}
          >
            {(props, isSubmitting) => (
              <FormContainer>
                <Title>Ingresa</Title>
                <InfoContainer>
                  <InputContainer>
                    <Label>Email</Label>
                    <Input name="email" type="email" />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <Error>
                          <p>{msg}</p>
                        </Error>
                      )}
                    </ErrorMessage>
                  </InputContainer>
                  <InputContainer>
                    <Label>Password</Label>
                    <Input name="password" type="password" />
                    <ErrorMessage name="password">
                      {(msg) => (
                        <Error>
                          <p>{msg}</p>
                        </Error>
                      )}
                    </ErrorMessage>
                  </InputContainer>
                </InfoContainer>
                {/* <CheckBoxContainer>
                  <Field type="checkbox" name="checked" />
                  Recordar cuenta
                </CheckBoxContainer> */}
                <Button disabled={isSubmitting} type="submit">Iniciar Sesión</Button>
                {/* <InputContainer>
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
                  Recordar cuenta
                </CheckBoxContainer>
                <Button disabled={isSubmitting}>Iniciar Sesión</Button> */}

                <DivisionContainer>
                  <Line />
                  Or
                  <Line />
                </DivisionContainer>
                <ButtonAlt>
                  <GoogleIcon />
                  Continuar con Google
                </ButtonAlt>
                <CloseIcon onClick={toggleModalLogIn} />
              </FormContainer>
            )}
          </Formik>
        </Container>
      )}
    </>
  );
};

export default ModalLogIn;
