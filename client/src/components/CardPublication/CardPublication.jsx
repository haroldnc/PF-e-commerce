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

  console.log("poronga", pageslice);

  useEffect(() => {
    dispatch(getWishlistById(userInfo.uid));
  }, [dispatch, userInfo.uid]);

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
          <HeartContainer>
            <HeartFill onClick={() => handleAddFavorite(userInfo.uid, card._id)} />
            {/* {fav ?  <HeartFill /> : <HeartOutline />} */}
            
          </HeartContainer>
            {/* <HeartContainer onClick={() => handleIcon(userInfo.uid, card._id)}> */}
            {/* <HeartFill  /> */}

            <Image src={card.img} />
            <Profile>
              <ImgProfile src={card.imgProfile} />
              <NameProfile>Michael</NameProfile>
            </Profile>
            <Description>{card.description || title}</Description>
            <DivRating>
              <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
                <div>
                  <IoIosStar />
                </div>
              </IconContext.Provider>

              <Rating>{card.score}</Rating>
            </DivRating>
            <DivPay>
              {userInfo && userInfo.confirm_email === true ? (
                <Link to={`/compra/${card._id}`}>
                  <BotonPago>Contratar</BotonPago>
                </Link>
              ) : (
                <BotonPago
                  onClick={() => alert("Debes registrarte o iniciar secion")}
                >
                  Contratar
                </BotonPago>
              )}
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
