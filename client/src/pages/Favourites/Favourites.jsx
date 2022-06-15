import React, { useEffect } from "react";
import { Container, Grid } from "./StyledFavourites";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getAllUsers,
  getAllUsersAllPAginate,
  getPosts,
  getWishlistById,
} from "../../store/actions";
import { useParams } from "react-router-dom";
import CardPublication from "../../components/CardPublication/CardPublication";
import Card from "../../components/Card/Card";

const Favourites = ({ userInfo }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userFavs = useSelector((state) => state.userWishlist);
  const allPosts = useSelector((state) => state.posts.Publications);
  const allUsers = useSelector(
    (state) => state.allUsersPaginate && state.allUsersPaginate.users
  );
  console.log(allUsers);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getWishlistById(id));
    dispatch(getAllUsersAllPAginate());
  }, [dispatch, id]);

  // const marcha = userFavs.favorites.map((id) => {return {id: id.idPublication}})
  // console.log('moño',marcha)

  const postsFilter =
    allPosts &&
    allPosts.filter((item1) =>
      userFavs.favorites.some((item2) => item2.idPublication === item1.id)
    );
  console.log(postsFilter);

   const allData =
    postsFilter &&
    postsFilter.map((p) => ({
      ...p,
      ...allUsers.find((u) => u.uid === p.user),
    }));

  return (
    <Container>
      <Grid>
        {allData &&
          allData.map((post) => (
            <div>
              <Card
                title={post.title}
                firstName={post.firstName}
                lastName={post.lastName}
                profile_img={post.image}
                img={post.img}
                description={post.description}
                price={post.price}
                service={post.service}
                id={post.id}
                userInfo={userInfo}
                rating={post.punctuation}
              />
            </div>
          ))}
      </Grid>
    </Container>
  );
};

export default Favourites;
