import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../store/actions";
import {
  Button,
  ConfirMessageContainer,
  Container,
  Title,
  Text,
} from "./StyledConfirm";

const Confirm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);

  useEffect(() => {
      dispatch(getUserById(id));
  });

  return (
    <>
      
        <Container>
          {user && (
          <ConfirMessageContainer>
            <Title>Confirmar Email</Title>
            <Text>
              Hola {user.firstName}, ya casi estás lista para empezar a disfrutar de wixxer.
              <br /> simplemente haga clic en el botón azul grande a
              continuación
              <br /> para verificar su dirección de correo electrónico.
            </Text>
            <div>
              <Link to="/iniciar-sesion">
                <Button>Confirmar</Button>
              </Link>
            </div>
          </ConfirMessageContainer>
          )}
        </Container>
      
    </>
  );
};

export default Confirm;
