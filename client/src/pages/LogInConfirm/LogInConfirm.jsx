import React from 'react'
import ModalLogIn from '../../components/ModalLogIn/ModalLogIn'
import { Button, Container, Error, FormContainer, InfoContainer, Input, InputContainer, Label, Title } from './StyledLogInConfirm'
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/userActions";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LogInConfirm = () => {
    const history = useHistory();
  const dispatch = useDispatch();

  const handleResetPage = () => {
    setTimeout(() => {
      history.push('/');
      window.location.reload();
    }, 1000);
  };

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "599255604366-6eb57uhcee9ss6dc2h10ceiis7tqhd3k.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  // const handleGoogleLogin = (response) => {
  //   console.log(response);
  //   console.log(response.profileObj);
  // };

  const handleGoogleLogin = async (googleData) => {
    console.log(googleData);
    console.log(googleData.profileObj);
    try {
      const dataGoogle = await axios.post(
        `https://wixer-server.herokuapp.com/auth/google`,
        {
          tokenId: googleData.tokenId,
          givenName: googleData.profileObj.givenName,
          familyName: googleData.profileObj.familyName,
        }
      );
      const finallyGoogle = await dataGoogle.data;
      localStorage.setItem("userInfo", JSON.stringify(finallyGoogle.usuario));
      handleResetPage();
      //navigate("/home");
    } catch (error) {
      console.log(error.response);
      alert("error no se pudo ingresar", error);
    }
  };
  const logout = (response) => {
    gapi.auth2.getAuthInstance().signOut();
    console.log(response);
    console.log("logout");
  };

  return (
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
              handleResetPage();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio de sesión exitoso!',
                showConfirmButton: false,
                timer: 1500
              })
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


                {/* <GoogleLogin
                  clientId="599255604366-6eb57uhcee9ss6dc2h10ceiis7tqhd3k.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={handleGoogleLogin}
                  onFailure={handleGoogleLogin}
                  cookiePolicy={"single_host_origin"}
                />
                <GoogleLogout
                  clientId="599255604366-6eb57uhcee9ss6dc2h10ceiis7tqhd3k.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                /> */}
            
              </FormContainer>
            )}
          </Formik>
    </Container>
  )
}

export default LogInConfirm