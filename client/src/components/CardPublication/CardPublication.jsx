import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
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
  HeartFill
} from "./StyledCardPublication";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../store/actions";

const CardPublication = ({ pageslice, userInfo }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [isClicked, setIsClicked] = useState(false);
  console.log("wishlist", wishlist);

  

  const icon = isClicked ? <HeartFill /> : <HeartOutline />

  const handleIcon = (service) => {
    setIsClicked(!isClicked);
    dispatch(addToWishlist(service));
  }

  return (
    <>
      {pageslice &&
        pageslice.map((card) => (
          <Card key={card.id}>
            <HeartContainer onClick={() => handleIcon(card)}>
             {icon}
            </HeartContainer>
            <Image src={card.img} />
            <Profile>
              <ImgProfile src={card.imgProfile} />
              <NameProfile>{card.nameProfile}</NameProfile>
            </Profile>
            <Description>{card.description}</Description>
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
