import React, { useState } from "react";
import {
  Button,
  ButtonAlt,
  CheckBoxContainer,
  CloseIcon,
  Container,
  DivisionContainer,
  Input,
  InputContainer,
  ModalBox,
  Title,
  GoogleIcon,
  Line
} from "../ModalLogIn/StyledModalLogIn";
import { SignInLink } from "./StyledModalSignUp";

const ModalSignUp = ({ isOpenModalSignUp, toggleModalSignUp }) => {
  return (
    <>
      {isOpenModalSignUp && (
        <Container>
          <ModalBox>
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
            <DivisionContainer>
              <Line />
              Or
              <Line />
            </DivisionContainer>
            <ButtonAlt>
              <GoogleIcon />
              Continue with Google
            </ButtonAlt>
          </ModalBox>
        </Container>
      )}
    </>
  );
};

export default ModalSignUp;
