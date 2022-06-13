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
import { addToWishlist, getWishlist } from "../../store/actions";
import CardP from "../Card/Card";

const CardPublication = ({ pageslice, userInfo, title, img }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);
  

  // const icon = isClicked ? <HeartFill /> : <HeartOutline />

  const handleIcon = (idUser, idPublication) => {
    dispatch(addToWishlist(idUser, idPublication));
  };
  // console.log(pageslice)

  return (
    <>
      {pageslice &&
        pageslice.map((card) => (
          <CardP
          key={card.id}
            title={card.title}
            img={card.img}
            price={card.price}
            service={card.service}
            id={card.id}
            description={card.description}
            rating={card.rating}
            userPost={card.user}
            userInfo
          />
          // <Card key={card.id}>
          //   <HeartContainer onClick={() => handleIcon(userInfo.uid, card._id)}>
          //     <HeartFill />
          //   </HeartContainer>
          //   <Image src={card.img} />
          //   <Profile>
          //     <ImgProfile src={card.imgProfile} />
          //     <NameProfile>Michael</NameProfile>
          //   </Profile>
          //   <Description>{card.description || title}</Description>
          //   <DivRating>
          //     <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
          //       <div>
          //         <IoIosStar />
          //       </div>
          //     </IconContext.Provider>

          //     <Rating>{card.score}</Rating>
          //   </DivRating>
          //   <DivPay>
          //     {userInfo && userInfo.confirm_email === true ? (
          //       <Link to={`/compra/${card._id}`}>
          //         <BotonPago>Contratar</BotonPago>
          //       </Link>
          //     ) : (
          //       <BotonPago
          //         onClick={() => alert("Debes registrarte o iniciar secion")}
          //       >
          //         Contratar
          //       </BotonPago>
          //     )}
          //     <PriceContainer>
          //       <Staring>COMIENZA EN</Staring>
          //       <Pay>US${card.price}</Pay>
          //     </PriceContainer>
          //   </DivPay>
          // </Card>
        ))}
    </>
  );
};

export default CardPublication;
