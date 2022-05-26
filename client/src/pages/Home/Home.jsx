import React, { useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../store/actions/index'

import Carousel from '../../components/Carousel/Carousel'
import Hero from '../../components/Hero/Hero'
import Presentation from '../../components/Presentation/Presentation'
import Testimonials from '../../components/Testimonials/Testimonials'
import LogosHome from '../../components/LogosHome/LogosHome'

const Home = () => {

  const allCategories = useSelector(state => state.allCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  return (
    <>
      <Hero />
      <Carousel />
      <Presentation />
      <LogosHome allCategories={allCategories} />
      <Testimonials/>
    </>
  )
}

export default Home