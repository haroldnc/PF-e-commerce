import React, { useState } from "react";
import {
  Button,
  CheckBoxContainer,
  CloseIcon,
  Container,
  Input,
  InputContainer,
  ModalBox,
  Title,
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
          </ModalBox>
        </Container>
      )}
    </>
  );
};

export default ModalSignUp;
