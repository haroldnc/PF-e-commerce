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
  ImgProfile,
  NameProfile,
  Pay,
  PriceContainer,
  Profile,
  Rating,
  Staring,
  Title,
} from "./StyledFavourites";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getAllUsers,
  getAllUsersAllPAginate,
  getPosts,
  getWishlistById,
  removeFromWishlist,
} from "../../store/actions";
import { Link, useParams } from "react-router-dom";
import CardPublication from "../../components/CardPublication/CardPublication";
import { Zoom } from "swiper";
import { Card } from "../../components/CardPublication/StyledCardPublication";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import { GiSaberToothedCatHead } from "react-icons/gi";
import axios from "axios";

const Favourites = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userFav, setUserFavs] = useState([]);
  // const userSignIn = useSelector((state) => state.userSignIn);
  // const { userInfo } = userSignIn;

  // const userFavs = useSelector((state) => state.userWishlist?.favorites);
  console.log("jasd", userFav);

  useEffect(() => {
    // dispatch(getPosts());
    // dispatch(getWishlistById(id));
    // dispatch(getAllUsersAllPAginate());
    axios.get(`http://wixer-server.herokuapp.com/favorites/${id}`).then((res) => {setUserFavs(res.data.favorites)});


    // dispatch(getWishlistById(id));
  }, [id]);

  // const users = allUsers && allUsers.users;
  // const postsFilter = allPosts?.filter((item1) =>
  //   userFavs?.favorites?.some((item2) => item2.idPublication === item1._id)
  // );
  // console.log("jo", postsFilter);

  // const allData = postsFilter?.map((p) => ({
  //   ...p,
  //   ...users?.find((u) => u.uid === p.user),
  // }));
  // console.log("allData", allData);

  // const postsFilter = allPosts?.map((p) => ({
  //   ...p,
  //   ...userFavs?.favorites?.find((u) => u.idPublication === p._id),
  // }));
  // console.log("postsFilter", postsFilter);
  // const allData = postsFilter?.filter((item1) =>
  //   userFavs?.favorites?.some(
  //     (item2) => item2.idPublication === item1.idPublication
  //   )
  // );
  // .map((p) => ({ ...p, ...allUsers?.users?.find((u) => u.uid === p.user?.uid) }));

  // console.log("allData", allData);



  const handleDelete = (id) => {
    // dispatch(removeFromWishlist(_id));
    setUserFavs(userFav?.filter((u) => u._id !== id));
    dispatch(removeFromWishlist(id));
  };
  // console.log("handleDelete", handleDelete);

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
        {/* {allData?.length === 0 && <div>No hay favs</div>}
        {allData?.map((u, cardId) => (
          <Card key={cardId}>
            <HeartContainer>
              <HeartFill onClick={() => handleDelete(u._id)} />
            </HeartContainer>
            <Image img={u.img} />
            <Profile>
              <ImgProfile src={u.image} />
              <NameProfile>
                {u.user.firstName} {u.user.lastName}
              </NameProfile>
            </Profile>
            <Title>{u.title}</Title>
            <DescriptionContainer>
              <Description>{u.description}</Description>
            </DescriptionContainer>

            <DivRating>
              <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
                <div>
                  <IoIosStar />
                </div>
              </IconContext.Provider>

              <Rating>{u.score[0]}</Rating>
            </DivRating>
            <DivPay>
              {userInfo && userInfo.confirm_email === true ? (
                <Link to={`/compra/${u.idPublication}`}>
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
                <Pay>US$ {u.price}</Pay>
              </PriceContainer>
            </DivPay>
          </Card>
        ))} */}
        {/* {
          wishlist && wishlist.map((w) => (
        <Card >
        <HeartContainer>
        {fav ? <HeartFill onClick={() => removeFavorite(id)}/> : <HeartOutline onClick={() => handleIcon(id)}/>}
        <HeartFill />
      </HeartContainer>
      <Image img={w.img} />
      <Profile>
        <ImgProfile img={w.user.image} />
        <NameProfile>{}</NameProfile>
      </Profile>
      <Title>{}</Title>
      <DescriptionContainer>
        <Description>{}</Description>
      </DescriptionContainer>

      <DivRating>
        <IconContext.Provider value={{ color: "rgb(202, 182, 0)" }}>
          <div>
            <IoIosStar />
          </div>
        </IconContext.Provider>

        <Rating>{}</Rating>
      </DivRating>
      <DivPay>
        {userInfo && userInfo.confirm_email === true ? (
          // <Link to={`/compra/${}`}>
          //   <BotonPago>Contratar</BotonPago>
          // </Link>
          <div>

          </div>
        ) : (
          <BotonPago
            onClick={() => alert("Debes registrarte o iniciar secion")}
          >
            Contratar
          </BotonPago>
        )}
        <PriceContainer>
          <Staring>COMIENZA EN</Staring>
          <Pay>US${}</Pay>
        </PriceContainer>
      </DivPay>
            </Card >
          ))
        } */}
        {/* {allData &&
          allData.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                firstName={post.user.firstName}
                lastName={post.user.lastName}
                profile_img={post.user.image}
                img={post.img}
                description={post.description}
                price={post.price}
                service={post.service}
                id={post.id}
                userId={userInfo.uid}
                idPublication={userFavs.idPublication}
                rating={post.punctuation}
                allData={allData}
                post={post}
              />
          ))} */}
      </Grid>
    </Container>
  );
};

export default Favourites;
