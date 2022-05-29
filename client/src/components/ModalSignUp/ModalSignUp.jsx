import React from "react";
import {
  Button,
  ButtonAlt,
  CloseIcon,
  Container,
  DivisionContainer,
  ModalBox,
  Title,
  GoogleIcon,
  Line,
} from "../ModalLogIn/StyledModalLogIn";
import { Formik, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  InputsContainer,
  Input,
  SubmitContainer,
  CheckBoxContainer,
  Error,
} from "./StyledModalSignUp";
import { InputContainer, Label } from "../SignUp/StyledSignUp";
import { useDispatch } from "react-redux";
import { postUser } from "../../store/actions";

const ModalSignUp = ({ isOpenModalSignUp, toggleModalSignUp }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isOpenModalSignUp && (
        <Container>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              password: "",
              dni: "",
              phone: "",
              // web: "",
              user_role: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.username) {
                errors.username = "username is required";
              } else if (!/^[a-z]{3,}$/i.test(values.username)) {
                errors.username = "username accept minimun 3 letters";
              }

              if (!values.firstName) {
                errors.firstName = "firstName is required";
              } else if (!/^[a-záéíóúñ\s]{3,}$/i.test(values.firstName)) {
                errors.firstName =
                  "firstName only accept letters and minimun 3 letters";
              }

              if (!values.lastName) {
                errors.lastName = "lastName is required";
              } else if (!/^[a-záéíóúñ\s]{3,}$/i.test(values.lastName)) {
                errors.lastName =
                  "lastName only accept letters and minimun 3 letters";
              }

              if (!values.email) {
                errors.email = "email is required";
              } else if (
                !/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(
                  values.email
                )
              ) {
                errors.email = "email is not valid";
              }

              if (!values.password) {
                errors.password = "password is required";
              } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  "Min 8 carateres, max 15, al menos una letra mayuscula al menos 1 digito, un caracter especial";
              }
              if (!values.dni) {
                errors.dni = "dni is required";
              }
              if (!values.phone) {
                errors.phone = "Phone is required";
              } else if (
                !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i.test(
                  values.phone
                )
              ) {
                errors.phone = "Invalid phone number, 10 numeros only";
              }
              // if (
              //   !/^(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i.test(
              //     values.web
              //   )
              // ) {
              //   errors.web = "web needs to be an url string";
              // }

              if (!values.user_role) {
                errors.user_role = "Es obligatorio elegir un tipo de usuario";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                dispatch(postUser(values));
                setSubmitting(false);
              }, 400);
            }}
          >
            {isSubmitting => (
              <FormContainer>
                <CloseIcon onClick={toggleModalSignUp} />
                <h2>Create new account</h2>
                <InputsContainer>
                  <div>
                    <InputContainer>
                      <Label>Username</Label>
                      <Input name="username" type="text" />
                      <ErrorMessage name="username" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                      <Label>Name</Label>
                      <Input name="firstName" type="text" />
                      <ErrorMessage name="firstName" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                      <Label>Last Name</Label>
                      <Input name="lastName" type="text" />
                      <ErrorMessage name="lastName" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                      <Label>DNI</Label>
                      <Input name="dni" type="text" />
                      <ErrorMessage name="dni" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                  </div>
                  <div>
                    <InputContainer>
                      <Label>Email</Label>
                      <Input name="email" type="email" />
                      <ErrorMessage name="email" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                      <Label>Password</Label>
                      <Input name="password" type="password" />
                      <ErrorMessage name="password" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                      <Label>Phone</Label>
                      <Input name="phone" />
                      <ErrorMessage name="phone" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>

                    <InputContainer>
                      <Label>Rol de usuario</Label>
                      <Field
                        component="select"
                        name="user_role"
                        className="field-select"
                      >
                        <option>Elige tu rol</option>
                        <option value="user">User</option>
                        <option value="worker">Worker</option>
                      </Field>
                      <ErrorMessage name="user_role" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer>

                  </div>
                  <div>
                    
                    {/* <InputContainer>
                      <Label>Web</Label>
                      <Input name="web" type="text" />
                      <ErrorMessage name="web" component="div">
                        {(msg) => <Error>{msg}</Error>}
                      </ErrorMessage>
                    </InputContainer> */}
                    
                  </div>
                </InputsContainer>
                <SubmitContainer>
                  <CheckBoxContainer>
                    {/* <Field type="checkbox" />I agree with terms and conditions */}
                  </CheckBoxContainer>
                  <Button type="submit">
                    Create New Account
                  </Button>
                  <DivisionContainer>
                    <Line />
                    Or
                    <Line />
                  </DivisionContainer>
                  <ButtonAlt disabled={true}>
                    <GoogleIcon />
                    Create with Google
                  </ButtonAlt>
                </SubmitContainer>
              </FormContainer>
            )}

            {/* <ModalBox>
              <Title>Create New Account</Title>
              <InputContainer>
                <Input placeholder="Name" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Email" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Password" />
              </InputContainer>
              <CloseIcon onClick={toggleModalSignUp} />
              <CheckBoxContainer>
                <input type="checkbox" />I agree with Terms & Conditions
              </CheckBoxContainer>
              <Button>Create New Account</Button>
              <Field component="select">
                <option value="">1</option>
                <option value="">2</option>
              </Field>
              <DivisionContainer>
                <Line />
                Or
                <Line />
              </DivisionContainer>
              <ButtonAlt>
                <GoogleIcon />
                Create with Google
              </ButtonAlt>
            </ModalBox> */}
          </Formik>
        </Container>
      )}
    </>
  );
};

export default ModalSignUp;
