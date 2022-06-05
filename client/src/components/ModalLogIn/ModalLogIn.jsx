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
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const ModalLogIn = ({ isOpenModalLogIn, toggleModalLogIn }) => {
  const dispatch = useDispatch();
  const clientGoogle =
    "796413127660-tgktohi6gqfm0n183g1kqp6lqehl6ncq.apps.googleusercontent.com";

  const handleGoogleLogin = async (googleData) => {
    try {
      const dataGoogle = await axios.post(
        `https://wixer-server.herokuapp.com/user`,
        {
          tokenId: googleData.tokenId,
          givenName: googleData.profileObj.givenName,
          familyName: googleData.profileObj.familyName,
        }
      );
      const finallyGoogle = await dataGoogle.data;
      localStorage.setItem("token", JSON.stringify(finallyGoogle.token));
      // navigate("/home");
    } catch (error) {
      console.log(error);
      alert("error no se pudo ingresar", error);
    }
  };
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
              dispatch(signin(values));
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
                <Button disabled={isSubmitting} type="submit">
                  Iniciar Sesión
                </Button>
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
                <GoogleLogin
                  clientId={clientGoogle}
                  onSuccess={handleGoogleLogin}
                  onFailure={handleGoogleLogin}
                  render={(renderProps) => (
                    <ButtonAlt
                      // disabled={true}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <GoogleIcon />
                      Crear con Google
                    </ButtonAlt>
                    // <button
                    //   onClick={renderProps.onClick}
                    //   disabled={renderProps.disabled}
                    // >
                    //   {/* <FcGoogle
                    //     style={{
                    //       width: "33px",
                    //       height: "33px",
                    //       marginTop: "6px",
                    //     }}
                    //   /> */}
                    // </button>
                  )}
                />
                {/* <ButtonAlt>
                  <GoogleIcon />
                  Continuar con Google
                </ButtonAlt> */}
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
