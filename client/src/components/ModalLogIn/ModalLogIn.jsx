import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../store/actions/userActions";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { getAllUsersAllPAginate } from "../../store/actions";

const ModalLogIn = ({ isOpenModalLogIn, toggleModalLogIn }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsersPaginate);

  const handleResetPage = () => {
    setTimeout(() => {
      history.go(0);
    }, 1000);
  };

  useEffect(() => {
    dispatch(getAllUsersAllPAginate());
  }, [dispatch]);

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
  // const logout = (response) => {
  //   gapi.auth2.getAuthInstance().signOut();
  //   console.log(response);
  //   console.log("logout");
  // };

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
              } else if(allUsers.users && allUsers.users.map((u) => u.email).includes(values.email) === false){
                errors.email = "Email no existe, por favor ingrese un mail correcto"
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
              // handleResetPage();
              // // Swal.fire({
              // //   position: 'center',
              // //   icon: 'success',
              // //   title: 'Inicio de sesión exitoso!',
              // //   showConfirmButton: false,
              // //   timer: 1500
              // // })
              // toggleModalLogIn();
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
                <GoogleLogin
                  clientId="599255604366-6eb57uhcee9ss6dc2h10ceiis7tqhd3k.apps.googleusercontent.com"
                  onSuccess={handleGoogleLogin}
                  onFailure={handleGoogleLogin}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <ButtonAlt
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <GoogleIcon />
                      Continuar con Google
                    </ButtonAlt>
                  )}
                />
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
