import React, { useState, useEffect, useId } from "react";
import {
  BotonPago,
  Container,
  Description,
  DescriptionContainer,
  DivPay,
  DivRating,
  Grid,
  HeartContainer,
  HeartFill,
  Image,
  Pay,
  PriceContainer,
  Rating,
  Staring,
  Title,
} from "./StyledFavourites";
import { useDispatch } from "react-redux";
import {
  removeFromWishlist,
} from "../../store/actions";
import { Link, useParams } from "react-router-dom";
import { Zoom } from "swiper";
import { Card } from "../../components/CardPublication/StyledCardPublication";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import axios from "axios";

const Favourites = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userFav, setUserFavs] = useState([]);
  console.log("jasd", userFav);

  useEffect(() => {

    axios.get(`http://wixer-server.herokuapp.com/favorites/${id}`).then((res) => {setUserFavs(res.data.favorites)});


  }, [id]);
  const handleDelete = (id) => {
    setUserFavs(userFav?.filter((u) => u._id !== id));
    dispatch(removeFromWishlist(id));
  };

  return (
    <Container>
      <Grid>
        {userFav?.map((u, index) => (
          <Card key={index}>
            <HeartContainer>
              <HeartFill onClick={(e) => handleDelete(u._id)} />
            </HeartContainer>
            <Image img={u.idPublication.img} />
            <Title>{u.idPublication.title}</Title>
            <DescriptionContainer>
              <Description>{u.idPublication.description}</Description>
            </DescriptionContainer>

            <DivRating>
              <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
                <div>
                  <IoIosStar />
                </div>
              </IconContext.Provider>

              <Rating>{u.idPublication.score[0]}</Rating>
            </DivRating>
            <DivPay>
              <Link to={`/compra/${u.idPublication}`}>
                <BotonPago>Contratar</BotonPago>
              </Link>

              <PriceContainer>
                <Staring>COMIENZA EN</Staring>
                <Pay>US$ {u.idPublication.price}</Pay>
              </PriceContainer>
            </DivPay>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Favourites;
