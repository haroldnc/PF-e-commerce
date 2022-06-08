import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../store/actions/userActions";
import { CloseIcon, Container } from "../ModalLogIn/StyledModalLogIn";
import { Button, ButtonsContainer, SignOutContainer } from "./StyledModalSignOut";
import { useHistory } from "react-router-dom";

const ModalSignOut = ({ isOpenModalSignOut, toggleModalSignOut }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSignOut = () => {
        dispatch(signout())
        history.go(0);
    }
  return (
    <>
      {isOpenModalSignOut && (
        <Container>
          <SignOutContainer>
            <h2>Cerrar sesión</h2>
            <span>¿Está seguro de que desea cerrar la sesión?</span>
            <ButtonsContainer>
                <Button onClick={handleSignOut}>Si</Button>
            <Button onClick={toggleModalSignOut}>No</Button>
            </ButtonsContainer>
            
            <CloseIcon onClick={toggleModalSignOut} />
          </SignOutContainer>
        </Container>
      )}
    </>
  );
};

export default ModalSignOut;
