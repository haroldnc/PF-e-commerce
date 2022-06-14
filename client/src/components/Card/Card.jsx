import React from "react";
import { BotonPago, Container, Description, DivPay, DivRating, Image, PriceContainer, Rating, Staring, Pay, Title, Profile, ImgProfile, NameProfile, DescriptionContainer } from "./StyledCard";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({ title, img, description, price, service, id, userPost,userInfo, profile_img, firstName, lastName, rating }) => {

  const fullName = userPost.firstName + " " + userPost.lastName //el nombre del usuario que hizo el post


  return (
    <Container>
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
      
      <DivRating>
        <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
          <div>
            <IoIosStar />
          </div>
        </IconContext.Provider>

        <Rating>{rating}</Rating>
        
      </DivRating>
      <DivPay>
          {userInfo && userInfo.confirm_email === true ? (
            <Link to={`/compra/${id}`}>
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
            <Pay>US${price}</Pay>
          </PriceContainer>
        </DivPay>
    </Container>
  );
};

export default Card;
