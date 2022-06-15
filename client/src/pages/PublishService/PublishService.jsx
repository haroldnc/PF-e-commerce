import React from 'react';
import PublishForm from '../../components/PublishForm/PublishForm';
import { useDispatch, useSelector } from 'react-redux';
import {ValidateRoute} from "./Validateroute"
import { useEffect } from 'react';
import {getPostByUser,getWorkers} from "../../store/actions/index"


const Validation = (workers,allPost,userInfo) => {

  if(!userInfo) return false;
  if(userInfo.user_role && userInfo.user_role === "628eefd607fe8bf42fb6a5f5") return false;
  if(userInfo.user_role.name && userInfo.user_role.name === "user") return false;
  if(userInfo.user_role && userInfo.user_role === "628ef02d07fe8bf42fb6a5fa") return true;
  if(userInfo.user_role.name && userInfo.user_role.name === "admin") return true;

  let worker =  workers.find(e => e.userId.uid === userInfo.uid)
  console.log(worker)
  if(worker.subscribed === false) return false;
  if(worker.subscription_type.name === "Premium") return true;
  if(worker.subscription_type.name === "Standard" && allPost.length < 3) return true;
  return false

}

const PublishService = () => {

  const dispatch = useDispatch()


  const userSignIn = useSelector((state) => state.userSignIn);
  const {workers} = useSelector((state) => state)
  const allPost = useSelector(state => state.postsByUser)

  const { userInfo } = userSignIn;

  useEffect(() => {
    if(userInfo && !allPost) dispatch(getPostByUser(userInfo.uid))
    if(workers.length === 0)dispatch(getWorkers());
  },[])

  const validate = allPost && workers.length >0 && Validation(workers,allPost,userInfo)
  
  if(validate){
    return (
      <div>
        <PublishForm/>
      </div>
    );
  }else{
    return(
      <ValidateRoute>
        <h1>Lo siento!</h1>
        <h4>Para poder hacer una publicacion debes cumplir con lo siguiente:</h4>
        <p>- Debes estar registrado como worker y debes iniciar sesion</p>
        <p>- Debes tener un a suscripcion ya sea standar o premium</p>
        <p>- Si es standar no puedes hacer mas de 3 publiciones, y si eres premium puedes publicar ilimitadamente</p>
      </ValidateRoute>
    )
  }
};

export default PublishService;