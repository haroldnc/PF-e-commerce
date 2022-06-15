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

<<<<<<< HEAD
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
=======
const Card = ({ title, img, description, price, service, id, userPost,userInfo, profile_img, firstName, lastName, rating }) => {

  const fullName = userPost.firstName + " " + userPost.lastName //el nombre del usuario que hizo el post

>>>>>>> 838c228121a898e3de3e10211b678edf6fa0b935

  const removeFavorite = (idPublication) => {
    dispatch(removeFromWishlist(idPublication))
  }
  
  // <HeartOutline onClick={() => handleIcon(userId, id)}/>
  return (
    <Container>
<<<<<<< HEAD
=======
      { id?
        <Link to={`/posts/detail/${id}`}>
        <Image img={img} />
        </Link>
        :
        <Image img={img} />

      }
            <Profile>
              <ImgProfile src={userPost.image} />
              <NameProfile>{fullName}</NameProfile>
            </Profile>
      <Title>{title}</Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
>>>>>>> 838c228121a898e3de3e10211b678edf6fa0b935
      
    </Container>
  );
};

export default Card;
