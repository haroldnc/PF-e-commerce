import React from "react";
import {
  Button,
  ButtonAlt,
  CheckBoxContainer,
  CloseIcon,
  Container,
  DivisionContainer,
  GoogleIcon,
  Input,
  InputContainer,
  Line,
  ModalBox,
  SignUpLink,
  Title,
} from "./StyledModalLogIn";

const ModalLogIn = ({ isOpenModalLogIn, toggleModalLogIn}) => {
  return (
    <>
      {isOpenModalLogIn && (
        <Container>
          <ModalBox>
            <Title>Log In</Title>
            <InputContainer>
              <Input placeholder="Username or email" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Password" />
            </InputContainer>
            <CheckBoxContainer>
              <input type="checkbox" />
              Remember me
            </CheckBoxContainer>
            <Button>Log In</Button>
            <DivisionContainer>
              <Line />
              Or
              <Line />
            </DivisionContainer>
            <ButtonAlt>
              <GoogleIcon />
              Continue with Google
            </ButtonAlt>
            <CloseIcon onClick={toggleModalLogIn}/>
          </ModalBox>
        </Container>
      )}
    </>
  );
};

export default ModalLogIn;
