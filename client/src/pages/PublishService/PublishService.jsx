import React from 'react';
import PublishForm from '../../components/PublishForm/PublishForm';
import { useSelector } from 'react-redux';
import {ValidateRoute} from "./Validateroute"

const PublishService = () => {

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;


  if(!userInfo || userInfo.user_role.name === "user" ){
      return(
        <ValidateRoute>
          <h2>lo siento, no puedes crear publicaciones!</h2>
          <p>Solo puedes publicar si eres un worker suscrito a nuestra version premium</p>
        </ValidateRoute>
      )
  }
  return (
    <div>
      <PublishForm/>
    </div>
  );
};

export default PublishService;