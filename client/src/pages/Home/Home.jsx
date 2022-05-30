import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, getAllUsers,getWorkers } from "../../store/actions/index";

import Carousel from '../../components/Carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Presentation from '../../components/Presentation/Presentation'
import Testimonials from '../../components/Testimonials/Testimonials'
import LogosHome from '../../components/LogosHome/LogosHome'
import WorkersCarousel from '../../components/workersCarousel/index'
import { Container, Wrapper } from "./StyledHome";

const Home = () => {
  const allCategories = useSelector((state) => state.allCategories);
  const profiles = useSelector((state)=>state.workers)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllUsers());
    dispatch(getWorkers())
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Hero />
        <Carousel allCategories={allCategories}/>
        <Presentation />
        <LogosHome allCategories={allCategories} />
        <WorkersCarousel profiles={profiles} />
        <Testimonials />
      </Wrapper>
    </Container>
  );
};

export default Home;
