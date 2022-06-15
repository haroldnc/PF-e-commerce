import React, {useState} from "react";
import {
  BotonPago,
  Container,
  Description,
  DivPay,
  DivRating,
  Image,
  PriceContainer,
  Rating,
  Staring,
  Pay,
  Title,
  Profile,
  ImgProfile,
  NameProfile,
  DescriptionContainer,
  HeartContainer,
  HeartFill,
  HeartOutline,
} from "./StyledCard";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist, addToWishlist2, removeFromWishlist } from "../../store/actions";

const Card = ({
  title,
  img,
  description,
  price,
  service,
  userId,
  userInfo,
  profile_img,
  firstName,
  lastName,
  rating,
  id,
  post,
}) => {
  const fullName = firstName + " " + lastName;
  const dispatch = useDispatch();
  const [fav, setFav] = useState(true)
  
  const [isClicked, setIsClicked] = useState(true);

  // const handleIcon = (idUser, idPublication) => {
  //   // dispatch(addToWishlist(idUser, idPublication));
  //   dispatch(addToWishlist2(idUser, idPublication));
  //   setFav(!fav)
  // };
  const handleIcon = (e) => {
    // dispatch(addToWishlist(idUser, idPublication));
    setFav(!fav)
  };

  const removeFavorite = (idPublication) => {
    dispatch(removeFromWishlist(idPublication))
  }
  
  // <HeartOutline onClick={() => handleIcon(userId, id)}/>
  return (
    <Container>
      
    </Container>
  );
};

export default Card;
