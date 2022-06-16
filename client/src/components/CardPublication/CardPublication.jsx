import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosStar } from "react-icons/io";

import { IconContext } from "react-icons";

import {
  Card,
  Image,
  Profile,
  ImgProfile,
  NameProfile,
  Description,
  DivRating,
  Rating,
  DivPay,
  Staring,
  Pay,
  BotonPago,
  PriceContainer,
  HeartContainer,
  HeartOutline,
  HeartFill,
} from "./StyledCardPublication";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  addToWishlist2,
  getWishlist,
  getWishlistById,
  removeFromWishlist,
} from "../../store/actions";
import CardP from "../Card/Card";

const CardPublication = ({ pageslice, userInfo, title, img }) => {
  const dispatch = useDispatch();
  const [isFaved, setIsFaved] = useState(false);
  const userWishlist = useSelector(state => state.userWishlist?.favorites);

  // console.log("poronga", userInfo);

  useEffect(() => {
    dispatch(getWishlistById(userInfo?.uid));
  }, [dispatch, userInfo?.uid]);

  // const icon = isClicked ? <HeartFill /> : <HeartOutline />

  const handleAddFavorite = (idUser, idPublication) => {
       dispatch(addToWishlist(idUser, idPublication));
  };

  const fav = () => {
    setIsFaved(!isFaved);
  }


  return (
    <>
      {pageslice &&
        pageslice.map((card, index) => (
          <Card key={index}> 
          <HeartContainer onClick={() => fav()}>
            <HeartFill onClick={() => handleAddFavorite(userInfo?.uid, card._id)} />
            {/* {fav ?  <HeartFill /> : <HeartOutline />} */}
            
          </HeartContainer>
            {/* <HeartContainer onClick={() => handleIcon(userInfo.uid, card._id)}> */}
            {/* <HeartFill  /> */}

            <Image src={card.img} />
            <Profile>
              <ImgProfile src={card.user.image} />
              <NameProfile>{card.user.firstName}</NameProfile>
            </Profile>
            <Description>{card.description || title}</Description>
            <DivRating>
              <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
                <div>
                  <IoIosStar />
                </div>
              </IconContext.Provider>

              <Rating>{card.score[0]}</Rating>
            </DivRating>
            <DivPay>
                <Link to={`/posts/detail/${card._id}`}>
                  <BotonPago>Ver detalle</BotonPago>
                </Link>            
              <PriceContainer>
                <Staring>COMIENZA EN</Staring>
                <Pay>US${card.price}</Pay>
              </PriceContainer>
            </DivPay>
          </Card>
        ))}
    </>
  );
};

export default CardPublication;
