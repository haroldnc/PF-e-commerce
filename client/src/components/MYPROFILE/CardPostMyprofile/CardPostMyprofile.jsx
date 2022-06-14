import React from "react";
import { BotonPago, Container, Description, DivPay, DivRating, Image, PriceContainer, Rating, Staring, Pay, Title, Profile, ImgProfile, NameProfile, DescriptionContainer } from "./CardPostMyprofile";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const CardPostMyprofile = ({ title, img, description, price,idPist, rating, handleDelete }) => {


  return (
    <Container>
      <Image img={img} />
            {/* <Profile>
              <ImgProfile src={profile_img} />
              <NameProfile>{fullName}</NameProfile>
            </Profile> */}
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
      <BotonPago onClick={() => handleDelete(idPist)}>Eliminar</BotonPago>

          {/* {userInfo && userInfo.confirm_email === true ? (
            <Link to={`/compra/${id}`}>
            </Link>
          ) : (
            <BotonPago
              onClick={() => alert("Debes registrarte o iniciar secion")}
            >
              Contratar
            </BotonPago>
          )} */}
          <PriceContainer>
            <Staring>COMIENZA EN</Staring>
            <Pay>US${price}</Pay>
          </PriceContainer>
        </DivPay>
    </Container>
  );
};

export default CardPostMyprofile;