import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Presentation from '../../components/Presentation/Presentation'
import Testimonials from '../../components/Testimonials/Testimonials'
import LogosHome from '../../components/LogosHome/LogosHome'

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Presentation />
      <LogosHome/>
      <Testimonials/>
    </>
  )
}

export default Home