import React from "react";
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
} from "./StyledCardPublication";
import { Link } from "react-router-dom";

const CardPublication = ({ pageslice }) => {
  return (
    <>
      {pageslice &&
        pageslice.map((card) => (
          <Card key={card.id}>
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
              <Link to={`/compra/${card._id}`}>
                
                <BotonPago>Contratar</BotonPago>
              </Link>

              <Staring>COMIENZA EN</Staring>
              <Pay>US${card.price}</Pay>
            </DivPay>
          </Card>
        ))}
    </>
  );
};

export default CardPublication;
